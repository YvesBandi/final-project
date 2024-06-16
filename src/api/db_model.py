from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Material(db.Model):
    __tablename__ = 'material'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(256), nullable=False)
    platforms = db.relationship('Platform', back_populates='material')

class Platform(db.Model):
    __tablename__ = 'platforms'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    material_id = db.Column(db.Integer, db.ForeignKey('material.id'))
    platformName = db.Column(db.String(256), nullable=False)
    platformNumber = db.Column(db.Integer, nullable=False)
    treeNumber = db.Column(db.Integer, nullable=False)
    treeDiameter = db.Column(db.Float)
    material = db.relationship('Material', back_populates='platforms')
