import React, { useState, useEffect } from 'react'
import styles from "../../Pages/Home/Home.module.css";

import LightModal from "lighter-components/material/LightModal";
import LightButton from "lighter-components/material/LightButton";
import LightTextfiled from "lighter-components/material/LightTextfield";

import ContainerBox from '../../Components/Container/ContainerBox';
import ContainerTool from '../../Components/Container/ContainerTool';

import useContextEntities from '../../Hooks/useContextEntities';
import useData from '../../Hooks/useData';

const Tool = () => {

  const { tool, setTool, box} = useContextEntities();
  const [isNew, setIsNew] = useState(false);
  const { getTools, getBoxes, putTool, removeTool, persistTool } = useData();
  const [tools, setTools] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [openModalTool, setOpenModalTool] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setTools(await getTools());
      setBoxes(await getBoxes());
    }
    fetchData();
  }, [openModalTool])

  function closeModal() {
    setOpenModalTool(false);
    restartValues()
  }

  function restartValues() {
    setTool({ nome: "", peso: "", id: -1 });
    setIsNew(false);
  }

  async function updateTool(e) {
    e.preventDefault();
    await putTool({ nome: tool.nome, peso: tool.peso }, box.id, tool.id);
    closeModal()
  }

  async function rmiTool(e) {
    e.preventDefault();
    await removeTool(tool.id);
    closeModal()
  }


  async function newTool(e) {
    e.preventDefault();
    await persistTool({ nome: tool.nome, peso: tool.peso }, box.id)
    closeModal()
  }

  function openModalNewEntity() {
    setOpenModalTool(true);
    setIsNew(true);
  }

  return (
    <div className={styles.main}>
      <LightButton label="Nova Ferramenta" color="lightgreen" onClick={() => openModalNewEntity("tool")} />
      <LightModal open={openModalTool} onClose={closeModal} style={{ display: "flex", alignItems: "center" }}>
        <form>
          <h2>{!isNew ? "Editar Ferramenta" : "Nova Ferramenta"}</h2>
          <LightTextfiled label="Nome" value={tool.nome} onChange={(e) => setTool({ nome: e.target.value, peso: tool.peso, id: tool.id })} />
          <LightTextfiled label="Peso" value={tool.peso} onChange={(e) => setTool({ nome: tool.nome, peso: e.target.value, id: tool.id })} />
          <h3>Quer mover para outra caixa?</h3>
          <ContainerBox className={styles.boxes} data={boxes} style={{ with: "10vw" }} />
        </form>
        {isNew ? (
          <LightButton label="Voltar" color="lightred" onClick={closeModal} />
        ) : (
          <LightButton label="Apagar" color="lightred" onClick={(e) => rmiTool(e)} />
        )}

        <LightButton label="Salvar" color="lightgreen" onClick={(e) => !isNew ? updateTool(e) : newTool(e)} />
      </LightModal>
      <ContainerTool name="Ferramentas" data={tools} onClick={() => setOpenModalTool(true)} />
    </div>
  )
}

export default Tool