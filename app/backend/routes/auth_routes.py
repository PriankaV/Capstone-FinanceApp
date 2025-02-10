from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from db_config import db, cursor

bcrypt = Bcrypt()
auth_routes = Blueprint("auth", __name__)

@auth_routes.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    print("Received Signup Request:", data)

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Missing email or password"}), 400

    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    existing_user = cursor.fetchone()
    if existing_user:
        return jsonify({"error": "User already exists"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    cursor.execute("INSERT INTO users (email, password_hash) VALUES (%s, %s)", (email, hashed_password))
    db.commit()

    return jsonify({"message": "User registered successfully"}), 201
