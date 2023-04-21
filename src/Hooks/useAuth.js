import { useContext } from "react";
import login from "../Services/login";
import register from "../Services/register";
import { UserContext } from '../Contexts/userContext';

import { useState } from "react";

const useData = () => {

  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const Login = async (data) => {
    setLoading(true)
    const response = await login(data);
    setLoading(false)
    if(response !== "Bad credentials") localStorage.setItem("TOKEN", response)
    else return false
    setUser(response)
    return true
  }

  const Register = async (data) => {
    setLoading(true)
    const response = await register(data);
    setLoading(false)
    if(response !== "Bad credentials") localStorage.setItem("TOKEN", response)
    else return false
    setUser(response)
    return true
  }

  const getUser = () => {
    return user;
  }

  const singout = () => {
    localStorage.removeItem("TOKEN")
    setUser(undefined)
  }

  return {
    Register,
    Login,
    getUser,
    singout,
    loading
  }

};

export default useData;