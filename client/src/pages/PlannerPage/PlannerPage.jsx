import "./PlannerPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/utils";
import Drawer from "../../components/Drawer/Drawer";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import Planter from "../../components/Planter/Planter";
import Plant from "../../components/Plant/Plant";

export default function PlannerPage() {
  // States
  // From API
  const [plantList, setPlantList] = useState([]);
  const [planterList, setPlanterList] = useState([]);

  // Filters for modals
  const [plantFilteredList, setPlantFilteredList] = useState([]);
  const [planterFilteredList, setPlanterFilteredList] = useState([]);

  // Drag and Drop
  const [canvasPlanterList, setCanvasPlanterList] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [currentPlanterId, setCurrentPlanterId] = useState();
  const [showAddPlanterModal, setShowAddPlanterModal] = useState(false);
  const [showAddPlantModal, setShowAddPlantModal] = useState(false);

  //GET and SET plant and planter lists on mount
  useEffect(() => {
    const fetchPlantList = async () => {
      try {
        const plantResponse = await axios.get(`${BASE_URL}/api/plants`);
        setPlantList(plantResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchPlanterList = async () => {
      try {
        const planterResponse = await axios.get(`${BASE_URL}/api/planters`);
        setPlanterList(planterResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPlantList();
    fetchPlanterList();
  }, []);

  // Helper Functions
  function findValueOfItems(id, type) {
    if (type === "container") {
      return canvasPlanterList.find((container) => container.id === id);
    }
    if (type === "plant") {
      return canvasPlanterList.find((container) =>
        container.plants.find((plant) => plant.id === id)
      );
    }
  }

  //   function findItemTitle(id) {
  //     const container = containers.find((item) => item.id === currentContainerId);
  //     if (!container) return "";
  //     const item = container.items.find((item) => item.id === id);
  //     if (!item) return "";
  //     return item.title;
  //   }

  //Adding Plants to Planters
  function onAddPlant(newPlant) {
    const container = canvasPlanterList.find(
      (container) => container.id === currentPlanterId
    );
    container.plants.push(newPlant);

    setCanvasPlanterList([...canvasPlanterList]);
    setShowAddPlantModal(false);
  }

  //Adding Planters to Canvas
  function onAddPlanter(newPlanter) {
    canvasPlanterList.push(newPlanter)
    setCanvasPlanterList(canvasPlanterList);
    setShowAddPlanterModal(false);
  }

  // Dnd Context
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    const { active } = event;
    const { id } = active;
    setActiveId(id);
  };

  const handleDragMove = (event) => {
    const { active, over } = event;
    

    //Handle sorting of items
    if (
      active.id.toString().includes("plant") &&
      over?.id.toString().includes("plant") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find active container and over container
      const activeContainer = findValueOfItems(active.id, "plant");
      const overContainer = findValueOfItems(over.id, "plant");

      // if active or over container is undefined, return
      if (!activeContainer || !overContainer) return;

      // find index of active and over container
      const activeContainerIndex = canvasPlanterList.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = canvasPlanterList.findIndex(
        (container) => container.id === overContainer.id
      );

      // find index of active and over item
      const activeItemIndex = activeContainer.plants.findIndex(
        (item) => item.id === active.id
      );
      const overItemIndex = overContainer.plants.findIndex(
        (item) => item.id === over.id
      );

      // in the same container
      if (activeContainerIndex === overContainerIndex) {
        let newPlants = [...canvasPlanterList];
        newPlants[activeContainerIndex].plants = arrayMove(
          newPlants[activeContainerIndex].plants,
          activeItemIndex,
          overItemIndex
        );

        setCanvasPlanterList(newPlants);
      } else {
        // in a different container
        let newPlants = [...canvasPlanterList];
        const [removedPlant] = newPlants[activeContainerIndex].plants.splice(
          activeItemIndex,
          1
        );
        newPlants[overContainerIndex].plants.splice(
          overItemIndex,
          0,
          removedPlant
        );
        setCanvasPlanterList(newPlants);
      }
    }

    // handle items dropped into container
    if (
      active.id.toString().includes("plant") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      //find the active and over container
      const activeContainer = findValueOfItems(active.id, "plant");
      const overContainer = findValueOfItems(over.id, "container");

      // if active or over container is undefined, return
      if (!activeContainer || !overContainer) return;

      // find index of active and over container
      const activeContainerIndex = canvasPlanterList.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = canvasPlanterList.findIndex(
        (container) => container.id === overContainer.id
      );

      // find the index of the active item in the active container
      const activeItemIndex = activeContainer.plants.findIndex(
        (item) => item.id === active.id
      );

      // remove the active item from the active container and add it to the over container
      let newPlants = [...canvasPlanterList];
      const [removedPlant] = newPlants[activeContainerIndex].plants.splice(
        activeItemIndex,
        1
      );
      newPlants[overContainerIndex].plants.push(removedPlant);
      setCanvasPlanterList(newPlants);
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    // handle container sorting
    if (
      active.id.toString().includes("container") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // find index of active and over container
      const activeContainerIndex = canvasPlanterList.findIndex(
        (container) => container.id === active.id
      );
      const overContainerIndex = canvasPlanterList.findIndex(
        (container) => container.id === over.id
      );

      // swap active and over contianer
      let newPlants = [...canvasPlanterList];
      newPlants = arrayMove(
        newPlants,
        activeContainerIndex,
        overContainerIndex
      );
      setCanvasPlanterList(newPlants);
    }

    //handle item sorting
    if (
      active.id.toString().includes("plant") &&
      over?.id.toString().includes("plant") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      //find the active and over container
      const activeContainer = findValueOfItems(active.id, "plant");
      const overContainer = findValueOfItems(over.id, "plant");

      // if active or over container is undefined, return
      if (!activeContainer || !overContainer) return;

      // find index of active and over container
      const activeContainerIndex = canvasPlanterList.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = canvasPlanterList.findIndex(
        (container) => container.id === overContainer.id
      );

      // find index of active and over item
      const activeItemIndex = activeContainer.plants.findIndex(
        (item) => item.id === active.id
      );
      const overItemIndex = overContainer.plants.findIndex(
        (item) => item.id === over.id
      );

      // in the same container
      if (activeContainerIndex === overContainerIndex) {
        let newPlants = [...canvasPlanterList];
        newPlants[activeContainerIndex].plants = arrayMove(
          newPlants[activeContainerIndex].plants,
          activeItemIndex,
          overItemIndex
        );

        setCanvasPlanterList(newPlants);
      } else {
        // in a different container
        let newPlants = [...canvasPlanterList];
        const [removedPlant] = newPlants[activeContainerIndex].plants.splice(
          activeItemIndex,
          1
        );
        newPlants[overContainerIndex].plants.splice(
          overItemIndex,
          0,
          removedPlant
        );
        setCanvasPlanterList(newPlants);
      }
    }
    // handle items dropped into container
    if (
      active.id.toString().includes("plant") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      //find the active and over container
      const activeContainer = findValueOfItems(active.id, "plant");
      const overContainer = findValueOfItems(over.id, "container");

      // if active or over container is undefined, return
      if (!activeContainer || !overContainer) return;

      // find index of active and over container
      const activeContainerIndex = canvasPlanterList.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = canvasPlanterList.findIndex(
        (container) => container.id === overContainer.id
      );

      // find the index of the active item in the active container
      const activeItemIndex = activeContainer.plants.findIndex(
        (item) => item.id === active.id
      );

      // remove the active item from the active container and add it to the over container
      let newPlants = [...canvasPlanterList];
      const [removedPlant] = newPlants[activeContainerIndex].plants.splice(
        activeItemIndex,
        1
      );
      newPlants[overContainerIndex].plants.push(removedPlant);
      setCanvasPlanterList(newPlants);
    }
    setActiveId(null);
  };

  // Loading Handler
  if (!plantList || !planterList) {
    return (
      <>
        <h3>Loading....</h3>
      </>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      <Drawer
        id="plants"
        key="plants"
        list={plantList}
        filteredList={plantFilteredList}
        setFilteredList={setPlantFilteredList}
        showModal={showAddPlantModal}
        onAddItem={onAddPlant}
      />
      <Drawer
        id="planters"
        key="planters"
        list={planterList}
        filteredList={planterFilteredList}
        setFilteredList={setPlanterFilteredList}
        showModal={showAddPlanterModal}
        onAddItem={onAddPlanter}
      />
      <button
        onClick={() => {
          setShowAddPlanterModal(true);
        }}
      >
        Add Planter
      </button>
      {/* <button onClick={() => {
          setShowAddPlantModal(true);
        }}
      >
        Add Plant
      </button> */}

      <SortableContext
        items={canvasPlanterList.map((planter) => planter.id)}
      >
        {canvasPlanterList.map((planter) => (
          <Planter
            key={planter.id}
            id={planter.id}
            planter_id={planter.planter_id}
            name={planter.name}
            type={planter.type}
            height={planter.height}
            width={planter.width}
            length={planter.length}
            radius={planter.radius}
            round={planter.round}
            onAddItem={() => {
              setShowAddPlantModal(true);
              setCurrentPlanterId(planter.id);
            }}
          >
            <SortableContext items={planter.plants.map((i) => i.id)}>
                <div>
              {planter.plants.map((plant) => (
                <Plant
                  key={plant.id}
                  id={plant.id}
                  type_id={plant.type_id}
                  plant_id={plant.plant_id}
                  type={plant.type}
                  plant_name={plant.plant_name}
                  plant_description={plant.plant_description}
                />
              ))}
              </div>
            </SortableContext>
          </Planter>
        ))}
      </SortableContext>
    </DndContext>
  );
}
