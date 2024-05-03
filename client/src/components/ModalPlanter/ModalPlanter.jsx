import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import './ModalPlanter.scss';

export default function ModalPlanter(props) {
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
    setFilteredList,
    setIsChecked
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
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
  };

  const thisPlanter = {
    id:`container-${crypto.randomUUID()}`,
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



  return (
    <div
      className="planter"
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <h3 className="planter__name" {...listeners}>{name}</h3>

      <button type="click"
        onClick={() => {
          onAddItem(thisPlanter);
          setFilteredList([]);
          setIsChecked([])
        }}
      >
        Add To Canvas
      </button>
    </div>
  );
}
