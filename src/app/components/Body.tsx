import Card from "./Card.tsx";
import data from "../data.js"
import "./Body.css"

function Body() {
    const players = data.map((player) => 
        <Card 
            key={player?.id}    
            player={player}
            
        />
    );

    return (
        <>
            <main>
                <h3 className="subtitle">Let's go tally the votes...</h3>
                <div className="players-grid">
                    {players}
                </div>

            </main>
        </>
    )
}

export default Body