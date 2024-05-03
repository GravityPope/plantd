import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { getEmoji } from "../../utils/utils";

export default function ModalPlant(props) {
  const {
    id,
    type_id,
    plant_id,
    type,
    plant_name,
    plant_description,
    onAddItem,
    setFilteredList,
    setIsChecked,
  } = props;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    data: {
      type: "plant",
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: "2px solid red",
    backgroundColor: "#cccccc",
    margin: "10px",
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
  };

  const thisPlant = {

    id: `plant-${crypto.randomUUID()}`,
    type_id,
    plant_id,
    type,
    plant_name,
    plant_description,
  };

  return (
    <div className="plant" ref={setNodeRef} style={style} {...attributes}>
      <h3 className="plant__name" {...listeners}>{`${plant_name}`}</h3>
      <p className="emoji">{getEmoji(plant_name)}</p>
      <button
        type="click"
        onClick={() => {
          onAddItem(thisPlant);
          setFilteredList([]);
          setIsChecked([])
        }}
      >
        Add Plant
      </button>
    </div>
  );
}
