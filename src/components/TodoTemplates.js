
import React from 'react';
import { MdWbIncandescent } from "react-icons/md";



const TodoTemplates = ({ children }) => {    //
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.checked
            ? localStorage.setItem('dark', true)
            : localStorage.setItem('dark', false);
    };

    // document.documentElement.setAttribute("data-theme", "light");
    return (



        <body>
            <main className="main">
                <header className="navbar">
                    <i className="fa-solid fa-house"></i>
                    <p className="navbar-title">Todo List 다크모드 테스트</p>

                    <input type="checkbox" className="nightnone" onChange={onChange} id="night" />
                    <label className="night" for='night' ><MdWbIncandescent /></label>


                </header>
                <section className="list">
                    {children}
                </section>

            </main>
        </body>
    );
};

export default TodoTemplates;