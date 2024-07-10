from flask import Flask, jsonify, request
from flask_cors import CORS 
from db_model import db, Material, Platform
from routes import add_blueprint, get_blueprint, item_blueprint


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///material.db'
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


db.init_app(app)

with app.app_context():
    db.create_all()

app.register_blueprint(add_blueprint)
app.register_blueprint(get_blueprint)
app.register_blueprint(item_blueprint)


@app.route('/')
def hello_world():
    return "hello, world"



if __name__ == '__main__':
    app.run(debug=True)
