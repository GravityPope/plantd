import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./Planter.scss";
import addIcon from "../../assets/images/add-square-svgrepo-com.svg";
import deleteIcon from "../../assets/images/trash-bin-minimalistic-svgrepo-com.svg";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

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
    setShowDeleteModal,
    showDeleteModal,
    handlePlanterDelete
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
    zIndex: isDragging ? "100" : "auto",
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <>
      <DeleteModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        handleDelete={handlePlanterDelete}
        id={id}
      />
      <div className="planter" ref={setNodeRef} style={style} {...attributes}>
        {children}

        <div className="planter__wrapper">
          <img className="planter__add" src={deleteIcon} onClick={()=>{setShowDeleteModal(true)}} />

          <div className="planter__name-wrapper" {...listeners}>
            <h3 className="planter__name">{name}</h3>
          </div>
          <img className="planter__add" src={addIcon} onClick={onAddItem} />
        </div>
      </div>
    </>
  );
}
