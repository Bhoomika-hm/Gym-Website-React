const Card = (props) => {
    return (
        <div className="card">
        <div className="a-box bg-card">
            <div className="a-b-text">
                <h2 className="price">{props.price}</h2>
            </div>
        <div className="a-b-text">
            <h2>{props.title}</h2>
            {
                props.desc && <p>{props.desc}</p>
            }
            {
                props.desc2 && <p>{props.desc2}</p>
            }
        </div>
    </div>

        </div>
    )
  }

  export default Card;