import { useState } from "react"
import './Team.css'

export default function Team (){

    const [team, setTeam] = useState(11)

    const handlePlayer = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const handlePlayerReduse = () =>{
        
        setTeam(team -1)
    }
    return (
        <div className="team">
            <h3>Player: {team}</h3>
            <button onClick={handlePlayer}>Add</button>
            <button onClick={handlePlayerReduse}>Reduse</button>
        </div>
    )
}