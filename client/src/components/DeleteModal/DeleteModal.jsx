import "./DeleteModal.scss";
import confirmIcon from "../../assets/images/check-square-svgrepo-com.svg";
import cancelIcon from "../../assets/images/close-square-svgrepo-com.svg";

export default function DeleteModal(props) {
  const { showModal, setShowModal, handleDelete, setCurrentPlanterId } =
    props;

  if (!showModal) {
    return;
  } else {
    return (
      <div className="overlay">
        <div className="delete">
          <div className="delete__copy-wrapper">
            <h1 className="delete__heading">Really delete everything in Planter?</h1>
            <p className="delete__copy">
              Deleting a Planter
              cannot be undone.
            </p>
          </div>
          <img className="delete__confirm" src={confirmIcon} onClick={handleDelete} />
          <img className="delete__cancel" src={cancelIcon} onClick={()=>{ setCurrentPlanterId(); setShowModal(false)}} />
        </div>
      </div>
    );
  }
}
