import './DeleteModal.scss';
import confirmIcon from '../../assets/images/check-square-svgrepo-com.svg'
import cancelIcon from '../../assets/images/close-square-svgrepo-com.svg'



export default function DeleteModal(props){
    const {showDeleteModal, setShowDeleteModal, handlePlanterDelete,id} =props;


    if(!showDeleteModal) return;

    else{
        return(
            <div className="overlay">
                <h1 className="delete__heading">Really Delete Planter?</h1>
                <img src={cancelIcon}/>

                <img src={confirmIcon}/>

            </div>
        )
    }


}