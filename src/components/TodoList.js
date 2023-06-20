
import TodoListItems from "./TodoListItems";

function TodoList({ todos, onRemove, onToggle }) {


    return (

        < section className="list" >
            {todos.map(todo => (<TodoListItems todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}></TodoListItems>))}
        </section>

    )
}
export default TodoList