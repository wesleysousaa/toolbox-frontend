import {optionsWithToken} from './headerOptions';
const saveTool = async (data, id) => {
  const response = await fetch(`http://localhost:8080/api/ferramenta/${id}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: optionsWithToken
  });
  
  return await response.json();
};

export default saveTool;