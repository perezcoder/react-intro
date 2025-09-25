migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("snw5zwsj61i9vm5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u63wjfj6",
    "name": "order",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("snw5zwsj61i9vm5")

  // remove
  collection.schema.removeField("u63wjfj6")

  return dao.saveCollection(collection)
})
