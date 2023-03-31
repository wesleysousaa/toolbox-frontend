import fetchTools from "../Services/fetchTools";
import fetchBoxes from "../Services/fetchBoxes";
import updateBox from "../Services/updateBox";
import updateTool from "../Services/updateTool";
import deleteBox from "../Services/deleteBox";
import deleteTool from "../Services/deleteTool";
import saveTool from "../Services/saveTool";
import saveBox from "../Services/saveBox";

import { useState } from "react";

const useData = () => {

  const [loading, setLoading] = useState(false);

  const getTools = async () => {
    setLoading(true);
    const data = await fetchTools();
    setLoading(false);
    return data;
  }
  const getBoxes = async () => {
    setLoading(true);
    const data = await fetchBoxes();
    setLoading(false);
    return data;
  }

  const putTool = async (data, id, idTool) => {
    setLoading(true)
    await updateTool(data, id, idTool);
    setLoading(false)
  }

  const putBox = async (data, id) => {
    setLoading(true)
    await updateBox(data, id);
    setLoading(false)
  }

  const removeBox = async (id) => {
    setLoading(true)
    await deleteBox(id);
    setLoading(false)
  }

  const removeTool = async (id) => {
    setLoading(true)
    await deleteTool(id);
    setLoading(false)
  }

  const persistTool = async (data, id) => {
    setLoading(true)
    await saveTool(data, id);
    setLoading(false)
  }

  const persistBox = async (data) => {
    setLoading(true)
    await saveBox(data);
    setLoading(false)
  }

  return {
    getTools,
    getBoxes,
    putTool,
    putBox,
    removeTool,
    removeBox,
    persistTool,
    persistBox,
    loading
  }

};

export default useData;