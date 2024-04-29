import './Canvas.scss'
import {useDroppable} from '@dnd-kit/core';


export default function Canvas(props){

    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
      });
      const style = {
        color: isOver ? 'green' : undefined,
      };

    return (
        <section ref={setNodeRef} style={style} className='canvas'>
            {props.children}
        </section>
    )
}