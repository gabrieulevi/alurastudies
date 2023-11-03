import React from "react";
import Botao from "../Botao";
class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label>
                        adicione um novo estudo
                    </label>
                    <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que voce quer estudar"
                    />
                </div>
                <div>
                    <label>
                        tempo
                    </label>
                    <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                <Botao/>
            </form>
        )
    }
}

export default Formulario;