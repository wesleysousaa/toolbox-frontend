const updateBox = async (data, id) => {
  const response = await fetch(`http://localhost:8080/api/caixa/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  return await response.json();
};

export default updateBox;