const status = (request, response) => {
  response.status(200).json({ chave: "valor" }); //.send("sem charset né");
};
export default status;
