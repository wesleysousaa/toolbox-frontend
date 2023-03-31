const fetchBoxes = async () => {
  const response = await fetch("http://localhost:8080/api/caixa", {
    method: "GET"
  });

  return await response.json();
};

export default fetchBoxes;