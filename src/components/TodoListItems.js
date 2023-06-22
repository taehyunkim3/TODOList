
import cn from 'classnames';
import { MdDeleteOutline } from "react-icons/md";



const TodoListItems = ({ todo, onRemove, onToggle }) => {

    const { id, text, checked, added } = todo;

    return (


        <div className="content">
            <input className="c" type="checkbox" id={'check' + todo.id} />
            <label htmlFor={'check' + todo.id} onClick={() => { onToggle(id) }}></label>
            <div className="content-main">
                <p className={cn('checkbox', { checked })}>{text}</p>
                <p className="contentDesc">{added}</p>
                <hr className="underline" />
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdDeleteOutline></MdDeleteOutline></div>

        </div >


    )
}
export default TodoListItems