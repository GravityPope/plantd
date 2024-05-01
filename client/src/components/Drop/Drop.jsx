import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { pointerWithin } from "@dnd-kit/core";

export default function Drop(props) {
  const { id, children, title, onAddItem } = props;

  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "container",
    },
  });
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
        cursor: "pointer",
        backgroundColor: "grey",
      }}
    >
      <div className="flex items-center justify-between" {...listeners}>
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 text-xl">{title}</h1>
        </div>
      </div>

      {children}
      <button onClick={onAddItem}>Add Item</button>
    </div>
  );
}
