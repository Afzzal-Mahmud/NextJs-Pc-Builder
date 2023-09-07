const { default: config } = require("@/config");
const { MongoClient, ServerApiVersion } = require("mongodb");
const url = config.database_url;

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function pcbuilder(req, res) {
  try {
    await client.connect();
    const componentsCollections = client
      .db("nextjspc")
      .collection("pc_components");

    if (req.method === "GET") {
      if (req.query.category) {
        /* finding componentsType based on query such as Monitor,Ram,Motherboard and other type */
        const query_ProductType = req.query.category;
        const cursor = await componentsCollections.find({
          ProductType: query_ProductType,
        });

        const selectedComponents = await cursor.toArray();
        res.send({
          componentType: query_ProductType,
          statusCode: 200,
          data: selectedComponents,
        });
      }
      /* geting all pc components */
      const cursor = await componentsCollections.find({});
      const allComponents = await cursor.toArray();
      res.send({ message: "success", statusCode: 200, data: allComponents });
    }
  } finally {
    // await client.close();
  }
}
export default pcbuilder;
