from flask import Flask, jsonify
from db_config import db, cursor
from routes.auth_routes import auth_routes

app = Flask(__name__)
app.register_blueprint(auth_routes)

@app.route('/api/users', methods=['GET'])
def get_users():
    cursor.execute("SELECT id, email FROM users")
    users = cursor.fetchall()
    return jsonify(users)

if __name__ == "__main__":
    app.run(debug=True)
