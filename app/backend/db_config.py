import os
import mysql.connector
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Debugging: Print database connection values
print("DB_HOST:", os.getenv("DB_HOST"))
print("DB_USER:", os.getenv("DB_USER"))
print("DB_NAME:", os.getenv("DB_NAME"))

# Connect to MySQL
try:
    db = mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASS"),
        database=os.getenv("DB_NAME")
    )
    cursor = db.cursor()
    print("✅ Connected to MySQL Successfully!")
except mysql.connector.Error as err:
    print(f"❌ MySQL Connection Error: {err}")
