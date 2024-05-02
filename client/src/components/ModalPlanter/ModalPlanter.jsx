import { useSortable } from "@dnd-kit/sortable";

export default function ModalPlanter(props) {
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
    onAddItem,
  } = props;

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

  const thisPlanter = {
    id,
    planter_id,
    name,
    type,
    height,
    width,
    length,
    radius,
    round,
    plants: [],
  };

  console.log(`ModalPlanter component: ${name}`)

  return (
    <div
      className="planter"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <h3 className="planter__name">{name}</h3>

      <button
        onClick={() => {
          onAddItem(thisPlanter);
        }}
      >
        Add To Canvas
      </button>
    </div>
  );
}
