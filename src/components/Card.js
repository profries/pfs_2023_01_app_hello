import './Card.css';

export default function Card(props) {
    const disparaAlerta = () => {
        alert(`Card: ${props.titulo}`)    
    }

    return (
        <div className="card" onClick={disparaAlerta}>
            <div className="card-titulo">
                <h1>{props.titulo}</h1>
            </div>
            <div className="card-conteudo">
                {props.children}
            </div>
        </div>
    )
}