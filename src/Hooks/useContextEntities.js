import { useContext } from "react";
import { BoxContext } from "../Contexts/boxContext";
import { ToolContext } from "../Contexts/toolContext";

const useContextEntities = () => {

  const { box, setBox } = useContext(BoxContext);
  const { tool, setTool } = useContext(ToolContext);

  return {
    box,
    setBox,
    tool,
    setTool
  }

};

export default useContextEntities;