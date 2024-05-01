import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
  DragStartEvent,
  DragMoveEvent,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import Drag from "../../components/Drag/Drag";
import Drop from "../../components/Drop/Drop";
import { useState } from "react";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import React from "react";

// type DNDType = {
//   id: UniqueIdentifier;
//   title: string;
//   items: {
//     id: UniqueIdentifier;
//     title: string;
//   }[];
// };

export default function TestPage() {
  const [containers, setContainers] = useState([
    {
      id: `container-${crypto.randomUUID()}`,
      title: 'Container 1',
      items: [
        {
          id: `item-${crypto.randomUUID()}`,
          title: 'Item 1'
        },
        {
          id: `item-${crypto.randomUUID()}`,
          title: 'Item 2'
        }
      ]
    },
    {
      id: `container-${crypto.randomUUID()}`,
      title: 'Container 2',
      items: [
        {
          id: `item-${crypto.randomUUID()}`,
          title: 'Item 3'
        },
        {
          id: `item-${crypto.randomUUID()}`,
          title: 'Item 4'
        }
      ]
    },
    {
      id: `container-${crypto.randomUUID()}`,
      title: 'Container 3',
      items: []
    }

  ]);
  const [activeId, setActiveId] = useState(null);
  const [currentContainerId, setCurrentContainerId] = useState();
  const [containerName, setContainerName] = useState("");
  const [itemName, setItemName] = useState("");
  const [showAddContainerModal, setShowContainerModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  // helper functions
  function findValueOfItems(id, type) {
    if (type === "container") {
      return containers.find((item) => item.id === id);
    }
    if (type === "item") {
      return containers.find((container) =>
        container.items.find((item) => item.id === id)
      );
    }
  }

  function findItemTitle (id) {
    const container = containers.find((item)=> item.id === currentContainerId);
    if(!container) return '';
    const item = container.items.find((item)=> item.id === id);
    if (!item) return '';
    return item.title;
  }

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
      active.id.toString().includes("item") &&
      over?.id.toString().includes("item") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find active container and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "item");

      // if active or over container is undefined, return
      if (!activeContainer || !overContainer) return;

      // find index of active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      // find index of active and over item
      const activeItemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );
      const overItemIndex = overContainer.items.findIndex(
        (item) => item.id === over.id
      );

      // in the same container
      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeItemIndex,
          overItemIndex
        );

        setContainers(newItems);
      } else {
        // in a different container
        let newItems = [...containers];
        const [removedItem] = newItems[activeContainerIndex].items.splice(
          activeItemIndex,
          1
        );
        newItems[overContainerIndex].items.splice(
          overItemIndex,
          0,
          removedItem
        );
        setContainers(newItems);
      }
    }

    // handle items dropped into container
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      //find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "container");

      // if active or over container is undefined, return
      if (!activeContainer || !overContainer) return;

      // find index of active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      // find the index of the active item in the active container
      const activeItemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );

      // remove the active item from the active container and add it to the over container
      let newItems = [...containers];
      const [removedItem] = newItems[activeContainerIndex].items.splice(
        activeItemIndex,
        1
      );
      newItems[overContainerIndex].items.push(removedItem);
      setContainers(newItems);
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
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === active.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === over.id
      );

      // swap active and over contianer
      let newItems = [...containers];
      newItems = arrayMove(newItems, activeContainerIndex, overContainerIndex);
      setContainers(newItems);
    }

    //handle item sorting
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("item") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      //find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "item");

      // if active or over container is undefined, return
      if (!activeContainer || !overContainer) return;

      // find index of active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      // find index of active and over item
      const activeItemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );
      const overItemIndex = overContainer.items.findIndex(
        (item) => item.id === over.id
      );

      // in the same container
      if (activeContainerIndex === overContainerIndex) {
        let newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeItemIndex,
          overItemIndex
        );

        setContainers(newItems);
      } else {
        // in a different container
        let newItems = [...containers];
        const [removedItem] = newItems[activeContainerIndex].items.splice(
          activeItemIndex,
          1
        );
        newItems[overContainerIndex].items.splice(
          overItemIndex,
          0,
          removedItem
        );
        setContainers(newItems);
      }
    }
    // handle items dropped into container
    if (
      active.id.toString().includes("item") &&
      over?.id.toString().includes("container") &&
      active &&
      over &&
      active.id !== over.id
    ) {
      //find the active and over container
      const activeContainer = findValueOfItems(active.id, "item");
      const overContainer = findValueOfItems(over.id, "container");

      // if active or over container is undefined, return
      if (!activeContainer || !overContainer) return;

      // find index of active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id
      );

      // find the index of the active item in the active container
      const activeItemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id
      );

      // remove the active item from the active container and add it to the over container
      let newItems = [...containers];
      const [removedItem] = newItems[activeContainerIndex].items.splice(
        activeItemIndex,
        1
      );
      newItems[overContainerIndex].items.push(removedItem);
      setContainers(newItems);
    }
    setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={containers.map((container) => container.id)}>
        {containers.map((container) => (
          <Drop key={container.id} title={container.title} id={container.id}>
            <SortableContext items={container.items.map((i) => i.id)}>
              <div>
                {container.items.map((item) => (
                  <Drag key={item.id} id={item.id} title={item.title} />
                ))}
              </div>
            </SortableContext>
          </Drop>
        ))}
      </SortableContext>
      {/* <DragOverlay>
        {activeId && activeId.toString().includes('item') && (
          <Drag id={activeId} title={findItemTitle(activeId)} />
        )

        }
      </DragOverlay> */}
    </DndContext>
  );
}
