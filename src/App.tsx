import {FlipCard} from "./FlipCard";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {ICardData} from "./types/types";

function App() {

    const initialState: ICardData[] = [
        {id: 1, front: '1', back: '?'},
        {id: 2, front: '2', back: '?'},
        {id: 3, front: '3', back: '?'},
        {id: 4, front: '4', back: '?'},
        {id: 5, front: '5', back: '?'},
        {id: 6, front: '6', back: '?'},
        {id: 7, front: '7', back: '?'},
        {id: 8, front: '8', back: '?'},
        {id: 0, front: '0', back: '?'},
        {id: 10, front: '10', back: '?'},
    ];
    const [matchData, setMatchData]: [ICardData[], Dispatch<SetStateAction<ICardData[]>>] = useState(initialState)

    useEffect(() => {
        console.info(`Its loaded!`)
    }, [])

    return (
        <div className="App bg-emerald-600 p-4">
            <h1 className="text-3xl font-bold mb-2 text-center">Memory Game</h1>

            <div id="stage" className="flex flex-wrap">
                {matchData.map(({id, front, back}: ICardData) => {
                    return <FlipCard key={id} id={id} front={front} back={back}/>
                })
                }
            </div>

        </div>
    )
}

export default App
