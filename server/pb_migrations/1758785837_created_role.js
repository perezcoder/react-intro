migrate((db) => {
  const collection = new Collection({
    "id": "974e81bkf5qaoe0",
    "created": "2025-09-25 07:37:17.431Z",
    "updated": "2025-09-25 07:37:17.431Z",
    "name": "role",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uglr1x4n",
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
  const collection = dao.findCollectionByNameOrId("974e81bkf5qaoe0");

  return dao.deleteCollection(collection);
})
