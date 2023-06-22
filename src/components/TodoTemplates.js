
import React, { useState, useEffect } from 'react';
import { MdWbIncandescent } from "react-icons/md";



const TodoTemplates = ({ children }) => {
    // 체크박스의 초기 상태를 localStorage에서 가져옴
    const [isChecked, setIsChecked] = useState(
        localStorage.getItem('dark') === 'true' ? true : false
    );

    useEffect(() => {
        // localStorage의 값이 변경될 때마다 체크박스의 상태를 업데이트
        localStorage.getItem('dark') === 'true'
            ? setIsChecked(true)
            : setIsChecked(false);
    }, []);


    const onChange = (e) => {
        e.target.checked
            ? localStorage.setItem('dark', 'true')
            : localStorage.setItem('dark', 'false');
        setIsChecked(e.target.checked);
    };

    useEffect(() => {
        // localStorage의 'dark' 값이 변경될 때마다 웹사이트의 테마를 변경
        document.documentElement.setAttribute("data-theme", isChecked ? "dark" : "light");
    }, [isChecked]);


    // document.documentElement.setAttribute("data-theme", "light");
    return (



        <div>
            <main className="main">
                <header className="navbar">
                    <i className="fa-solid fa-house"></i>
                    <p className="navbar-title">Todo List 다크모드 테스트</p>

                    <input type="checkbox" className="nightnone" onChange={onChange} id="night" checked={isChecked} />
                    <label className="night" htmlFor='night' ><MdWbIncandescent /></label>


                </header>
                <section className="list">
                    {children}
                </section>

            </main>
        </div>
    );
};

export default TodoTemplates;