import "./CartScreen.css"
import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import database from './FirebaseDB';
import GameItem from "./GameItem"



const CartScreen = () => {
    const [cartGames, setCartGames] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    const fetchDataFromFirebase = async () => {
        try {
            const dbRef = ref(database, 'Games');
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                const cartGames = Object.values(data);
                setCartGames(cartGames);
                let total = 0;
                cartGames.forEach(item => {
                    total += parseFloat(item.price);
                });
                setTotalPrice(total);

                console.log(data);
                console.log("Data fetched successfully:", cartGames);
            } else {
                console.log("No data available.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }

    };
    useEffect(() => {
        fetchDataFromFirebase();

    }, []);

    return (
        <div className="cartScreen">
            <h6 className="cartHeader">Items in cart:</h6>
            <br></br> <br></br> <br></br> <br></br>
            <div className="cart-games-Scroller">
                <div className="cart-game-line">
                    {cartGames.map((item, index) => (
                        <GameItem
                            key={index}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            showAddToCart={false}
                        />
                    ))}
                </div>
            </div>

            <h6 className="totalPrice">Price: {totalPrice}$ </h6>
        </div>
    )
}

export default CartScreen;