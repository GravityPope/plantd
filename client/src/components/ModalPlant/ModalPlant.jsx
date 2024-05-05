import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { getEmoji } from "../../utils/utils";
import "./ModalPlant.scss";
import addIcon from "../../assets/images/add-circle-svgrepo-com.svg"

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

  //TODO: add cultivar options, description modals

  return (
    <div className="plant--modal" ref={setNodeRef} style={style} {...attributes}>
      <h3 className="plant__name" {...listeners}>{`${plant_name}`}</h3>
      <p className="emoji centered">{getEmoji(plant_name)}</p>
      <img
      src={addIcon}
        className="plant__add"
        onClick={() => {
          onAddItem(thisPlant);
          setFilteredList([]);
          setIsChecked([]);
        }}
      />
      
    </div>
  );
}
