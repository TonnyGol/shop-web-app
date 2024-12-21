import "./GameItem.css"
import database from './FirebaseDB';
import { ref, set } from 'firebase/database';

const GameItem = (props) => {


    const addToCart = (event) => {
        event.preventDefault();

        const gameToAdd = {
            name: props.name,
            image: props.image,
            price: props.price,
            realesDate: props.realesDate,
        }

        const uniqueKey = props.name;
        set(ref(database, 'objects/' + uniqueKey), gameToAdd)
            .then(() => {
                console.log("Data sent successfully!");
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });
    }

    return (
        <div className='game-item'>
            <img src={props.image} alt={props.name} />
            <div className='game-item__name'> {props.name}</div>
            <span className="game-item__price">
                {props.price}
                <button className="add-to-cart" onClick={addToCart}>Add to cart</button>
            </span>
            <div className='game-item__releaseDate'> {props.realesDate} </div>
            <br></br>
        </div>
    )
}

export default GameItem