import React from 'react'
import styles from './Auth.module.css';
import LightTextfield from 'lighter-components/material/LightTextfield';
import LightButton from 'lighter-components/material/LightButton';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';

const Register = () => {

  const { Register } = useAuth()
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  async function handleRegister(e) {
    e.preventDefault()

    if (name.trim().length === 0) {
      enqueueSnackbar('Todos os campos são obrigatórios!', {variant: "error"})
    }
    if (pass.trim().length === 0) {
      enqueueSnackbar('Todos os campos são obrigatórios!', {variant: "error"})
    }

    const response = await Register({name, pass})
    
    if(response){
      enqueueSnackbar('Bem Vindo!', {variant: "success"})
    }
  }

  return (
    <div className={styles.container}>
      <form>
        <h1>Cadastrar-se</h1>
        <LightTextfield label="Nome" value={name} onChange={(e) => setName(e.target.value)}></LightTextfield>
        <LightTextfield label="Senha" value={pass} onChange={(e) => setPass(e.target.value)}></LightTextfield>
        <LightButton label="Cadastrar" onClick={(e) => handleRegister(e)}></LightButton>
        <p><Link to={'/login'}>Não possui conta?</Link></p>
      </form>
    </div>
  )
}

export default Register