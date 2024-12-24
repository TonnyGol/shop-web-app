import './MainScreen.css';
import Cart from './Cart';
import SearchBar from './SearchBar';
import Games from './Games';
import { useEffect, useState } from 'react';
import { ref, get } from "firebase/database";
import database from './FirebaseDB';

function MainScreen() {

    const [games, setGames] = useState([]);
    const [gameAdded, setGameAdded] = useState(false)
    const [cartCount, setCartCount] = useState(0)
    const [searchBar, setSearchBar] = useState('');

    useEffect(() => {
        const fetchObjectsNum = async () => {
            const dbRef = ref(database, 'Games');
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                const data = snapshot.val();
                const cartGames = Object.values(data);
                const totalObjects = cartGames.length;
                console.log(totalObjects)
                setCartCount(totalObjects)
            } else {
                console.log("No data available.");
            }
        }
        fetchObjectsNum()
    }, [gameAdded])

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch("https://corsproxy.io/https://www.freetogame.com/api/games")
                const data = await response.json()

                const formatGames = data.map(game => {
                    const min = 5;
                    const max = 60;
                    const priceNum = String(Math.floor(Math.random() * (max - min + 1)) + min)
                    return {
                        name: game.title,
                        img: game.thumbnail,
                        releaseDate: game.release_date,
                        price: priceNum + "$",
                    };
                })

                setGames(formatGames)
            } catch (error) {
                console.log(error)
            }
        }
        fetchGames()

    }, []);

    const filteredGames = searchBar ? games.filter(game =>
        game.price.toLowerCase().includes(searchBar.toLowerCase())
    ) : games;

    return (
        <div className="App">
            <br></br>
            <h1 className="h1">Shop for The hottest games on the market !</h1>
            <br></br>
            <SearchBar setSearchBar={setSearchBar} searchBar={searchBar} />
            <Cart cartCount={cartCount} />
            <br></br><br></br>
            <Games items={filteredGames} setGameAdded={setGameAdded} />

        </div>
    );
}

export default MainScreen;
