import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { getEmoji } from "../../utils/utils";
import './Plant.scss';

export default function Plant(props) {

    const {id, type_id, plant_id, type, plant_name, plant_description } = props;
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
      zIndex: isDragging ? "100" : "auto",
      opacity: isDragging ? 0.3 : 1,
    };


    //TODO: add delete/edit options for plants
    return (
      <div
        className="plant"
        ref={setNodeRef}
        style={style}
        {...listeners}
        {...attributes}
      >
        <p className="emoji">{getEmoji(plant_name)}</p>
      </div>
    );
}