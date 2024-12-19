import GameItem from "./GameItem"
import "./Games.css"
function Games(props) {

    return (
        <div className="free-game-grid">

            {props.items.map((item, index) => (
                <GameItem
                    key={index}
                    name={item.name}
                    image={item.img}
                    realesDate={item.realesDate}
                    price={item.price}
                />
            ))}


        </div>

    )
}

export default Games