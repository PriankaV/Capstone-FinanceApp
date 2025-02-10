from flask import Flask
from flask_cors import CORS  # ✅ Import CORS
from routes.auth_routes import auth_routes  # ✅ Import your signup routes

app = Flask(__name__)
CORS(app)  # ✅ Enable CORS so React Native can access Flask

app.register_blueprint(auth_routes)  # ✅ Register the authentication routes

if __name__ == "__main__":
    app.run(debug=True)
