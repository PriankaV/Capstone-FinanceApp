from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from db_config import db, cursor

bcrypt = Bcrypt()
auth_routes = Blueprint("auth", __name__)

# SIGNUP ROUTE
@auth_routes.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    # Check if user already exists
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    existing_user = cursor.fetchone()
    if existing_user:
        return jsonify({"error": "User already exists"}), 400

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Insert into MySQL
    cursor.execute("INSERT INTO users (email, password_hash) VALUES (%s, %s)", (email, hashed_password))
    db.commit()

    return jsonify({"message": "User registered successfully"}), 201


#LOGIN ROUTE
@auth_routes.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    # Fetch user from DB
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()
    
    if not user or not bcrypt.check_password_hash(user['password_hash'], password):
        return jsonify({"error": "Invalid email or password"}), 401

    # Generate JWT token
    access_token = create_access_token(identity=user["id"])
    return jsonify({"message": "Login successful", "token": access_token}), 200
