import styles from "./App.module.css";
import React, { useState, useEffect } from "react";

// Components
import ContainerTool from "./Components/Container/ContainerTool";
import ContainerBox from "./Components/Container/ContainerBox";

// Lighter-Components
import LightModal from "lighter-components/material/LightModal";
import LightTextfiled from "lighter-components/material/LightTextfield";
import LightButton from "lighter-components/material/LightButton";

// Hooks
import useData from "./Hooks/useData";
import useContextEntities from "./Hooks/useContextEntities";

function App() {

  const { getTools, getBoxes, putBox, putTool, removeBox, removeTool, persistBox, persistTool } = useData();
  const { box, tool, setBox, setTool } = useContextEntities();

  const [isNew, setIsNew] = useState(false);
  const [tools, setTools] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [openModalTool, setOpenModalTool] = useState(false);
  const [openModalBox, setOpenModalBox] = useState(false);


  useEffect(() => {
    async function fetchData() {
      setTools(await getTools());
      setBoxes(await getBoxes());
    }
    fetchData();
  }, [openModalBox, openModalTool])

  function restartValues() {
    setBox({nome: "", ferramentas: [], id: -1});
    setTool({ nome: "", peso: "", id: -1 });
    setIsNew(false);
  }

  function closeModal() {
    setOpenModalTool(false);
    setOpenModalBox(false);
    restartValues()
  }

  async function updateTool(e) {
    e.preventDefault();
    await putTool({ nome: tool.nome, peso: tool.peso }, box.id, tool.id);
    closeModal()
  }

  async function updateBox(e) {
    e.preventDefault();
    await putBox({ nome: box.nome, ferramentas: box.ferramentas }, box.id);
    closeModal()
  }

  async function rmiTool(e) {
    e.preventDefault();
    await removeTool(tool.id);
    closeModal()
  }

  async function rmiBox(e) {
    e.preventDefault();
    await removeBox(box.id);
    closeModal()
  }

  async function newTool(e) {
    e.preventDefault();
    await persistTool({ nome: tool.nome, peso: tool.peso }, box.id)
    closeModal()
  }

  async function newBox(e) {
    e.preventDefault();
    await persistBox({ nome: box.nome })
    closeModal()
  }

  function openModalNewEntity(type) {
    if (type === "tool") {
      setOpenModalTool(true);
    } else {
      setOpenModalBox(true);
    }
    setIsNew(true);
  }


  return (
    <div className={styles.main}>

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

      <LightModal open={openModalBox} onClose={closeModal} style={{ height: "30%" }}>
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

      <h1>Tool <span>Box</span></h1>
      <div className={styles.buttons}>
        <LightButton label="Nova Ferramenta" color="lightgreen" onClick={() => openModalNewEntity("tool")} />
        <LightButton label="Nova Caixa" color="lightgreen" onClick={() => openModalNewEntity("box")} />
      </div>
      <div className={styles.App}>
        <ContainerTool name="Ferramentas" data={tools} onClick={() => setOpenModalTool(true)} />
        <ContainerBox name="Caixas" data={boxes} onClick={() => setOpenModalBox(true)} />
      </div>
    </div>
  );
}

export default App;
