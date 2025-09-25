migrate((db) => {
  const collection = new Collection({
    "id": "vh5bvadtlb3jpt4",
    "created": "2025-09-25 07:48:12.706Z",
    "updated": "2025-09-25 07:48:12.706Z",
    "name": "asset",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rgmvuynj",
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
  const collection = dao.findCollectionByNameOrId("vh5bvadtlb3jpt4");

  return dao.deleteCollection(collection);
})
