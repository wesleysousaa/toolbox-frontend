import {options} from './headerOptions';

const register = async (data) => {
  const response = await fetch(`http://localhost:8080/api/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: options
  });
  
  return await response.text();
};

export default register;