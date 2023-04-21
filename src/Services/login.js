import { options } from './headerOptions';

const login = async (data) => {
  const response = await fetch(`http://localhost:8080/api/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: options
  });
  
  return await response.text();
};

export default login;