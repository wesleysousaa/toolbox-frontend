import React, { useState, useEffect } from 'react'
import styles from "../../Pages/Home/Home.module.css";

import LightModal from "lighter-components/material/LightModal";
import LightButton from "lighter-components/material/LightButton";
import LightTextfiled from "lighter-components/material/LightTextfield";

import ContainerBox from '../../Components/Container/ContainerBox';

import useContextEntities from '../../Hooks/useContextEntities';
import useData from '../../Hooks/useData';

const Box = () => {

  const { box, setBox } = useContextEntities();
  const [isNew, setIsNew] = useState(false);
  const { persistBox, removeBox, putBox, getBoxes } = useData();
  const [boxes, setBoxes] = useState([]);
  const [openModalBox, setOpenModalBox] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setBoxes(await getBoxes());
    }
    fetchData();
  }, [openModalBox])

  function restartValues() {
    setBox({ nome: "", ferramentas: [], id: -1 });
    setIsNew(false);
  }

  function closeModal() {
    setOpenModalBox(false);
    restartValues()
  }

  async function newBox(e) {
    e.preventDefault();
    await persistBox({ nome: box.nome })
    closeModal()
  }

  async function rmiBox(e) {
    e.preventDefault();
    await removeBox(box.id);
    closeModal()
  }

  async function updateBox(e) {
    e.preventDefault();
    await putBox({ nome: box.nome, ferramentas: box.ferramentas }, box.id);
    closeModal()
  }

  function openModalNewEntity(type) {
    setOpenModalBox(true);
    setIsNew(true);
  }

  return (
    <div className={styles.main}>
      <LightButton label="Nova Caixa" color="lightgreen" onClick={() => openModalNewEntity("box")} />
      <LightModal open={openModalBox} onClose={closeModal} style={{ display: "flex", alignItems: "center" }}>
        <form>
          <h2>{!isNew ? "Editar Caixa" : "Nova Caixa"}</h2>
          <LightTextfiled label="Nome" value={box.nome} onChange={(e) => setBox({ nome: e.target.value, ferramentas: box.ferramentas, id: box.id })} />
          {isNew ? (
            <LightButton label="Voltar" color="lightred" onClick={closeModal} />
          ) : (
            <LightButton label="Apagar" color="lightred" onClick={(e) => rmiBox(e)} />
          )}
          <LightButton label="Salvar" color="lightgreen" onClick={(e) => !isNew ? updateBox(e) : newBox(e)} />
        </form>
      </LightModal>
      <ContainerBox name="Caixas" data={boxes} onClick={() => setOpenModalBox(true)} />
    </div>
  )
}

export default Box