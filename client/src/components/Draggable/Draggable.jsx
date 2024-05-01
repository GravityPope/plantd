import "./Draggable.scss";
import { useSortable } from "@dnd-kit/sortable";

export default function Draggable(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, data: {
    type: "plant",
  } });
  // Plant component
  if (!props.dndPlantList) {
    const { type_id, plant_id, type, plant_name, plant_description } = props;

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      width: "100px",
      height: "100px",
      border: "2px solid red",
      backgroundColor: "#cccccc",
      margin: "10px",
      zIndex: isDragging ? "100" : "auto",
      opacity: isDragging ? 0.3 : 1,
    };

    return (
      <div
        className="plant"
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        <h3 className="plant__name">{`${plant_name}`}</h3>
      </div>
    );
  }
  // Planter component
  else {
    const {
      dndPlantList,
      setDndPlantList,
      planter_id,
      name,
      type,
      height,
      width,
      length,
      radius,
      round,
    } = props;

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        width: {length},
        height: {width},
        border: "2px solid red",
        backgroundColor: "#cccccc",
        margin: "10px",
        zIndex: isDragging ? "100" : "auto",
        opacity: isDragging ? 0.3 : 1,
      };
  
      return (
        <div
          className="planter"
          ref={setNodeRef}
          style={style}
          {...listeners}
          {...attributes}
        >
          <h3 className="planter__name">{`${name}`}</h3>
        </div>
      );
  }
}
