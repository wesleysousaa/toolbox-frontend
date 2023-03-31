const deleteBox = async (id) => {
  const response = await fetch(`http://localhost:8080/api/caixa/${id}`, {
    method: "DELETE"
  });
  
  return response;
};

export default deleteBox;