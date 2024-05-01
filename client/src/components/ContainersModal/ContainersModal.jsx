import { SortableContext } from "@dnd-kit/sortable";
import React from "react";
import Drop from "../Drop/Drop";

export default function ContainerssModal(props){
    const {showModal, setShowModal, containersList, onAddContainer} =props;

    if(!showModal) return;

    return (
        <div>
            modal
        <SortableContext items={containersList.map((i) => i.id)}>
          {containersList.map((item) => (
            <div className={item.title} >
            <button onClick={()=>{
                onAddContainer(`container-${crypto.randomUUID()}`, item.title)
                }}>Add </button>
            <Drop key={item.id} id={item.id} title={item.title} onAddItem={()=> {return}} />
            </div>
          ))}
        </SortableContext>
        </div>



    )


};