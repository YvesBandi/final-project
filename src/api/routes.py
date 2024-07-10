from db_handler import DbHandler
from flask import Blueprint, jsonify, request
from db_model import db, Material, Platform

add_blueprint = Blueprint('add', __name__)
get_blueprint = Blueprint('get', __name__)
item_blueprint = Blueprint('item', __name__)

@add_blueprint.route('/add', methods=['POST'])
def add():
    data = request.get_json()
    if db.session.query(Material).filter(Material.id == data["material_id"]).first() is None:
        return jsonify({"message": "Material wurde nicht gefunden"}), 404  # Correct message format and response code    try: 
    try:
        db_handler = DbHandler()
        db_handler.add_item(data)
    except Exception as e:
        return jsonify({"message: Internal database error"}), 500
    return jsonify({"message": "Data received successfully"}), 200


@get_blueprint.route('/get', methods=['GET'])
def get():
    platform_data = Platform.query.all()
    result = [{'id': platform.id, 'platformName': platform.platformName, 'platformNumber': platform.platformNumber, 'treeNumber': platform.treeNumber, 'treeDiameter': platform.treeDiameter} for platform in platform_data]
    return jsonify(result)

@item_blueprint.route('/item', methods=['GET'])
def item():
    print("got into item function")
    id = request.args.get('id')
    if not id:
        return jsonify({"error": "No ID provided"}), 400
    
    platform = Platform.query.get(id)
    if not platform:
        return jsonify({"error": f"No Platform with id {id} found"}), 404 
    
    result = {'id': platform.id, 'platformName': platform.platformName, 'platformNumber': platform.platformNumber, 'treeNumber': platform.treeNumber, 'treeDiameter': platform.treeDiameter}
    return jsonify(result)
    

