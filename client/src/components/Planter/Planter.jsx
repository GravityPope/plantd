import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
    // width: { length },
    // height: { width },
    border: "2px solid red",
    backgroundColor: "#cccccc",
    margin: "10px",
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <div className="planter" ref={setNodeRef} style={style} {...attributes}>

      <div className="planter__name-wrapper" {...listeners}>
        <h3 className="planter__name">{name}</h3>
      </div>
     {children}

      <button onClick={onAddItem}>Add Plants</button>
    </div>
  );
}
