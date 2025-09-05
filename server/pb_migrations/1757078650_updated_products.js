migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u3w5zwvlhpsfdzo")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u3w5zwvlhpsfdzo")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
