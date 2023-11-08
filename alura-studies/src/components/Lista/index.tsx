import style from "./lista.module.scss"
import Item from "./item"
function Lista(){
    const tarefas = [
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
]
    return (
        <aside className={style.listaTarefas}>
            <h2>
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