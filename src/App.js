import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardData from "./CardData";

function App() {
    const dataCards = CardData();
    let cardsElement =
        dataCards.map( item =>
            <Card
                item={item}
            />
    )
    return (
        <div>
        <Navbar />
        <div className="card-container">
            {cardsElement}
        </div>
    </div>
  );
}

// id: 1,
//     image:"card-1",
//     location: "JAPAN",
//     title: "Mount Fuji",
//     subtitle: "12 Jan, 2021 - 24 Jan, 2021",
//     description:

export default App;