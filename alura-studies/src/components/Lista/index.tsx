import style from "./lista.module.scss"
import Item from "./item"
import { useState } from "react"
function Lista(){
    let [tarefas, setTarefas] = useState([
        {
        tarefa: "React",
        tempo: "02:00:00"
    },
        {
        tarefa: "JavaScript",
        tempo: "01:00:00"
    },
        {
        tarefa: "JavaScript",
        tempo: "01:00:00"
    },
])
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() =>  {
                setTarefas([...tarefas, {tarefa : "Estudar estado", tempo : "5H"}])
            }}>
                Estdos do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                    key={index}
                    {...item} 
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista