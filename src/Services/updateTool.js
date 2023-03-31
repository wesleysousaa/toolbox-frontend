const updateTool = async (data, id, idTool) => {
  const response = await fetch(`http://localhost:8080/api/ferramenta/${idTool}?caixa_fk=${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  return await response.json();
};

export default updateTool;