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
    onDeletePlanter,
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

  // 5.5 rem = 12 inches

  function inchesToRem(inches) {
    let feet = inches / 12;
    let rem = feet * 5.5;
    console.log(rem);
    return rem;
  }

  function radiusToRem(radius){
    let diameter = radius * 2;
    let feet = diameter / 12;
    let rem = feet * 5.5;
    console.log(rem);
    return rem;
  }

  const containerStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
  };

  const bedStyle = {
    width: length ? `${inchesToRem(length)}rem` : `${radiusToRem(radius)}rem`,
    height: width ? `${inchesToRem(width)}rem` : `${radiusToRem(radius)}rem`,
    "border-radius": round ? "50%" : "",

  }

  return (
    <>
      <div className="planter" ref={setNodeRef} style={containerStyle} {...attributes}>
      <div className="planter__sort" style={bedStyle}>
        {children}
        </div>

        <div className="planter__wrapper">
          <img
            className="planter__add"
            src={deleteIcon}
            onClick={onDeletePlanter}
          />

          <div className="planter__name-wrapper" {...listeners}>
            <h3 className="planter__name">{name}</h3>
          </div>
          <img className="planter__add" src={addIcon} onClick={onAddItem} />
        </div>
      </div>
    </>
  );
}
