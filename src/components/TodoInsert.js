import { useCallback, useState } from "react";
import { MdCreate } from "react-icons/md";



const TodoInsert = ({ onInsert }) => {

    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        }, [onInsert, value]
    )

    return (


        <form className="footer" onSubmit={onSubmit}>

            <input type="text" placeholder="할일을 여기에 입력하세요" value={value} onChange={onChange} />
            <div>

                <button className="add" type="submit"><MdCreate /></button>


            </div>
        </form>


    )
}
export default TodoInsert