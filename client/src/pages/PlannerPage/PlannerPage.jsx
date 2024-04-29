import "./PlannerPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/utils";
import Drawer from "../../components/Drawer/Drawer";
import Canvas from "../../components/Canvas/Canvas";
import { DndContext } from "@dnd-kit/core";

export default function PlannerPage() {
  // States
  const [plantList, setPlantList] = useState([]);
  const [planterList, setPlanterList] = useState([]);
  const [plantFilteredList, setPlantFilteredList] = useState([]);
  const [planterFilteredList, setPlanterFilteredList] = useState([]);
  const [dndPlantList, setDndPlantList] = useState([]);
  const [dndPlanterList, setDndPlanterList] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
  ]);

  //GET and SET plant and planter lists on mount
  useEffect(() => {
    const fetchPlantList = async () => {
      try {
        const plantResponse = await axios.get(`${BASE_URL}/plants`);
        setPlantList(plantResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPlanterList = async () => {
      try {
        const planterResponse = await axios.get(`${BASE_URL}/planters`);
        setPlanterList(planterResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlantList();
    fetchPlanterList();
  }, []);

  // Loading Handler
  if (!plantList || !planterList) {
    return (
      <>
        <h3>Loading....</h3>
      </>
    );
  }

  return (
    <DndContext>
      <Drawer
        id={1}
        list={plantList}
        filteredList={plantFilteredList}
        setFilteredList={setPlantFilteredList}
      />
      <Drawer
        id={2}
        list={planterList}
        dndPlantList={dndPlantList}
        setDndPlantList={setDndPlantList}
        filteredList={planterFilteredList}
        setFilteredList={setPlanterFilteredList}
      />
      <Canvas
        dndPlanterList={dndPlanterList}
        setDndPlanterList={setDndPlanterList}
      />
    </DndContext>
  );
}
