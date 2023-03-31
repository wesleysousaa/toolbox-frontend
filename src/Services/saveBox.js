const saveBox = async (data) => {
  const response = await fetch(`http://localhost:8080/api/caixa`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  return await response.json();
};

export default saveBox;