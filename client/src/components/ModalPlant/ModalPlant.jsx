import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

export default function ModalPlant(props) {
  const {id, type_id, plant_id, type, plant_name, plant_description, onAddItem } = props;

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


    const thisPlant = {
        // might need to assign a new id here for multiple of same plant
        id,
        type_id,
        plant_id,
        type,
        plant_name,
        plant_description

    }

    return (
      <div
        className="plant"
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        <h3 className="plant__name">{`${plant_name}`}</h3>
        <button onClick={()=>{
          console.log('modalPlant onclick', thisPlant)
            onAddItem(thisPlant)
        }}>Add Plant</button>
      </div>
    );

  
}
