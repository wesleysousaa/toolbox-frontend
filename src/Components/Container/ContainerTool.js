import styles from "./Container.module.css";
import useContextEntities from "../../Hooks/useContextEntities";

const ContainerTool = (props) => {

  const { setTool } = useContextEntities();

  return (
    <div className={styles.container} {...props}>
      <h2>{props.name}</h2>
      <div className={styles.toolsBoxes}>
        {props.data.map((d, k) => (
          <div className={styles.tool} key={k} onClick={() => setTool(d)}>
            <p>{d.nome} - {d.peso}</p>
            <span>{d.caixa_fk}</span>
          </div>
        ))}
      </div>
    </div>
  )
}


export default ContainerTool;