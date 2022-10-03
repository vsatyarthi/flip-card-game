import { FlipCard } from "./FlipCard";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ICardData } from "./types/types";

function App() {
  const initialState: ICardData[] = [
    { id: 1, front: "1", flipped: false },
    { id: 2, front: "2", flipped: false },
    { id: 3, front: "3", flipped: false },
    { id: 4, front: "4", flipped: false },
    { id: 5, front: "5", flipped: false },
    { id: 6, front: "1", flipped: false },
    { id: 7, front: "2", flipped: false },
    { id: 8, front: "3", flipped: false },
    { id: 0, front: "4", flipped: false },
    { id: 10, front: "5", flipped: false },
  ];

  const [matchData, setMatchData]: [
    ICardData[],
    Dispatch<SetStateAction<ICardData[]>>
  ] = useState(initialState);

  // const [currentCardFront, setCurrentCardFront] = useState("");
  const [previousCardFront, setPreviousCardFront] = useState("");

  useEffect(() => {
    console.info(`Its loaded!`);
  }, []);

  const handleMatchMaking = (id: number, front: string, flipped: boolean) => {
    console.info({ id, front, previousCardFront, flipped });
    const currentCardIndex = matchData.findIndex((card) => card.id === id);
    console.info({ currentCardIndex });
    const newMatchData = [...matchData];
    newMatchData[currentCardIndex] = { id, front, flipped };
    setMatchData(newMatchData);
    if (previousCardFront === front) return console.info(`MATCHED`);
    setPreviousCardFront(front);
    return console.info(`UNMATCHED`);
  };

  return (
    <div className="App bg-emerald-600 p-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Memory Game</h1>

      <div id="stage" className="flex flex-wrap">
        {matchData.map((cardData: ICardData) => {
          return (
            <FlipCard
              key={cardData.id}
              data={cardData}
              checkIfMatched={handleMatchMaking}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
