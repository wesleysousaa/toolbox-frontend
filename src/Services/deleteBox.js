import {options} from './headerOptions';
const deleteBox = async (id) => {
  const response = await fetch(`http://localhost:8080/api/caixa/${id}`, {
    method: "DELETE",
    headers: options
  });
  
  return response;
};

export default deleteBox;