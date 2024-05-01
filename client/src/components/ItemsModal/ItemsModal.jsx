import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import Drag from "../Drag/Drag";
import React from "react";

export default function ItemsModal(props){
    const {showModal, itemsList, onAddItem} =props;

    if(!showModal) return;

    return (
        <div>
            modal
        <SortableContext items={itemsList.map((i) => i.id)}>
          {itemsList.map((item) => (
            <div className={item.title} >
            <button onClick={()=>{
                onAddItem(`item-${crypto.randomUUID()}`, item.title)
                }}>Add </button>
            <Drag key={item.id} id={item.id} title={item.title} />
            </div>
          ))}
        </SortableContext>
        </div>



    )


};