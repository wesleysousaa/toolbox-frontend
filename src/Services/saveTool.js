import {options} from './headerOptions';
const saveTool = async (data, id) => {
  const response = await fetch(`http://localhost:8080/api/ferramenta/${id}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: options
  });
  
  return await response.json();
};

export default saveTool;