migrate((db) => {
  const collection = new Collection({
    "id": "snw5zwsj61i9vm5",
    "created": "2025-09-25 07:49:25.223Z",
    "updated": "2025-09-25 07:49:25.223Z",
    "name": "timeframe",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p6wxmtzy",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("snw5zwsj61i9vm5");

  return dao.deleteCollection(collection);
})
