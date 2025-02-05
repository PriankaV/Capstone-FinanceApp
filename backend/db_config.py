import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root", 
    password="Password9",  # Replace with your MySQL password
    database="wisefin_db"
)

cursor = db.cursor()
