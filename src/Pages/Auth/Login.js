import React from 'react'
import styles from './Auth.module.css';
import LightTextfield from 'lighter-components/material/LightTextfield';
import LightButton from 'lighter-components/material/LightButton';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';

const Login = () => {

  const { Login } = useAuth()
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  async function handleLogin(e) {
    e.preventDefault()

    if (name.trim().length === 0) {
      enqueueSnackbar('Todos os campos são obrigatórios!', { variant: "error" })
      return
    }
    if (pass.trim().length === 0) {
      enqueueSnackbar('Todos os campos são obrigatórios!', { variant: "error" })
      return
    }

    const response = await Login({ name, pass })

    if (response) {
      enqueueSnackbar('Bem Vindo!', { variant: "success" })
    }else{
      enqueueSnackbar('Credenciais Inválidas', { variant: "error" })
    }
  }

  return (
    <div className={styles.container}>
      <form>
        <h1>Entrar</h1>
        <LightTextfield label="Nome" value={name} onChange={(e) => setName(e.target.value)}></LightTextfield>
        <LightTextfield label="Senha" value={pass} onChange={(e) => setPass(e.target.value)}></LightTextfield>
        <LightButton label="Entrar" onClick={(e) => handleLogin(e)}></LightButton>
        <p><Link to={'/register'}>Não possui conta?</Link></p>
      </form>
    </div>
  )
}

export default Login