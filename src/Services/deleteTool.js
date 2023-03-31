const deleteTool = async (id) => {
  const response = await fetch(`http://localhost:8080/api/ferramenta/${id}`, {
    method: "DELETE"
  });
  return response;
};

export default deleteTool;