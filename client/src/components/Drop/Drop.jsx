import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { pointerWithin } from "@dnd-kit/core";

export default function Drop(props) {
  const { id, children, title } = props;

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
        cursor: 'pointer',
        backgroundColor: 'grey',
      }}
      // className={clsx(
      //   'w-full h-full p-4 bg-gray-50 rounded-xl flex flex-col gap-y-4',
      //   isDragging && 'opacity-50',
      // )}
    >
      <div className="flex items-center justify-between" {...listeners}>
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 text-xl">{title}</h1>
        </div>
        {/* <button
          className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
          {...listeners}
        >
          Drag Handle
        </button> */}
      </div>

      {children}
      {/* <Button variant="ghost" onClick={onAddItem}>
        Add Item
      </Button> */}
    </div>
  );
}
