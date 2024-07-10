from db_model import db, Material, Platform


class DbHandler:
        def __init__(self):
            self.session = db.session

        def __del__(self):
            try:
                self.session.commit()
            except Exception as e:
                self.session.rollback()
                print(f"Exception occurred: {e}")
            finally:
                self.session.close()
        
        def add_item (self, data):
              material_class = self.get_item_db_object(data["material_id"])
              new_item = material_class(**data)
              self.session.add(new_item)
              self.session.commit()

        def get_item_db_object(self, id):
            result = self.session.query(Material).filter(Material.id == id).first()
            material_name = result.name.capitalize()
            return globals().get(material_name)

     