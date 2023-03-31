import styles from "./Container.module.css";
import useContextEntities from "../../Hooks/useContextEntities";
import { useState } from "react";

const ContainerBox = (props) => {

  const { setBox } = useContextEntities();
  const [id, setId] = useState();

  function clickBox(d) {
    setBox(d)
    setId(d.id)
  }

  return (
    <div className={styles.container} {...props}>
      <h2>{props.name}</h2>
      <div className={styles.toolsBoxes}>
        {props.data.map((d, k) => (
          <div className={styles.toolBox} clicked={id === d.id ? "true": "false"} key={k} onClick={(e) => clickBox(d, e)}>
            <p>{d.nome.toUpperCase()}</p>
            <div className={styles.toolsInBox}>
              {d.ferramentas.map((f, k) => (
                <p key={k}>
                  {f.nome}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};


export default ContainerBox;