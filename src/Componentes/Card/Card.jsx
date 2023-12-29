import "./Card.css"
import Button from "../../Componentes/Button/Button"

export default function Card(props) {
    return (
        <div>
            <div className="container">
                <img src={props.posterImg} alt={props.title} className="img" />
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.texto}</p>
                    <Button />
                </div>
            </div>

        </div>
    )
}