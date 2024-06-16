from flask import Blueprint, jsonify, request
from db_model import db, Material, Platform

add_blueprint = Blueprint('add', __name__)
get_blueprint = Blueprint('get', __name__)

@add_blueprint.route('/add', methods=['Post'])
def add():
    data = request.get_json()
    material_id = db.session.query(Material.id).filter(Material.name == 'platform').scalar()
    if material_id is None:
        return jsonify({"message: Material wurde nicht gefunden"})
    try: 
        new_platform = Platform(
            material_id=material_id,
            platformName=data.get('platformName'),
            platformNumber=data.get('platformNumber'),
            treeNumber=data.get('treeNumber'),
            treeDiameter=data.get('treeDiameter') or None 
        )
        db.session.add(new_platform)
        db.session.commit()
    except Exception as e:
        return jsonify({"message: Internal database error"}), 500
    return jsonify({"message": "Data received successfully"}), 200


@get_blueprint.route('/get', methods=['GET'])
def get():
    platform_data = Platform.query.all()
    print("hallo")
    result = [{'id': platform.id, 'platformName': platform.platformName, 'platformNumber': platform.platformNumber, 'treeNumber': platform.treeNumber, 'treeDiameter': platform.treeDiameter} for platform in platform_data]
    return jsonify(result)

