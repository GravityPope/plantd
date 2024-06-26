import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./Planter.scss";
import addIcon from "../../assets/images/add-square-svgrepo-com.svg";
import deleteIcon from "../../assets/images/trash-bin-minimalistic-svgrepo-com.svg";

export default function Planter(props) {
  const {
    id,
    planter_id,
    name,
    type,
    height,
    width,
    length,
    radius,
    round,
    children,
    onAddItem,
    onDeletePlanter
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
      type: "container",
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // TODO: control planter size/shape with API
    // width: { length },
    // height: { width },
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <>
     
      <div className="planter" ref={setNodeRef} style={style} {...attributes}>
        {children}

        <div className="planter__wrapper">
          <img className="planter__add" src={deleteIcon} onClick={onDeletePlanter} />
         

          <div className="planter__name-wrapper" {...listeners}>
            <h3 className="planter__name">{name}</h3>
          </div>
          <img className="planter__add" src={addIcon} onClick={onAddItem} />
        </div>
      </div>
    </>
  );
}
