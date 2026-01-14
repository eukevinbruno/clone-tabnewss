import database from "/infra/database.js";

const status = async (request, response) => {
  const result = await database.query("Select 2 + 2 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "valor" }); //.send("sem charset né");
};
export default status;
