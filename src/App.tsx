import { FlipCard } from "./FlipCard";
import { Dispatch, SetStateAction, useState } from "react";
import { ICardData } from "./types/types";

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// delay(1000).then(() => console.log("ran after 1 second1 passed"));

const initialMatchData = [
  { id: 1, front: "1", flipped: false, frozen: false },
  { id: 2, front: "2", flipped: false, frozen: false },
  { id: 3, front: "3", flipped: false, frozen: false },
  { id: 4, front: "4", flipped: false, frozen: false },
  { id: 5, front: "5", flipped: false, frozen: false },
  { id: 6, front: "1", flipped: false, frozen: false },
  { id: 7, front: "2", flipped: false, frozen: false },
  { id: 8, front: "3", flipped: false, frozen: false },
  { id: 9, front: "4", flipped: false, frozen: false },
  { id: 10, front: "5", flipped: false, frozen: false },
];

let previousCard: ICardData | null = null;

function App() {
  console.count(`Rendering component - App`); // render count for performance check, keep it minimum

  // TODO: array of card object
  // TODO: card object must have a label to match with other card object
  // TODO: on click, closed card must flip open
  // TODO: max 2 cards can be opened at a time
  // TODO: if not matched, both cards must flip back to closed state
  // TODO: save moves by having 2 flip cards attempt to match
  // TODO: matched cards will be kept open
  // TODO: matched cards must not flip back by click

  const [matchData, setMatchData]: [
    ICardData[],
    Dispatch<SetStateAction<ICardData[]>>
  ] = useState(initialMatchData);

  const handleMatchMaking = async (
    currentCardData: ICardData,
    cardIndex: number
  ) => {
    console.info({ previousCard });
    const newData = [...initialMatchData];
    if (!previousCard) {
      console.info(`if`);
      previousCard = currentCardData;
      console.info({ previousCard });
      newData[cardIndex].flipped = currentCardData.flipped;
    } else {
      console.info(`else`);
      newData[cardIndex].flipped = currentCardData.flipped;
      const matched = previousCard.front === currentCardData.front;
      setMatchData(newData);
      console.info({ matched });

      if (matched) {
        // previousCard.frozen = currentCardData.frozen = true;
      } else {
        console.info(`Not matched!`);
        await delay(1000);
        // setTimeout(() => {
        newData[cardIndex].flipped = false;
        newData[
          initialMatchData.findIndex((card) => card.id === previousCard?.id)
        ].flipped = false;
        setMatchData(newData);
        // }, 1000);
      }
      // previousCard = null;
    }
    setMatchData(newData);
  };

  return (
    <div className="App bg-emerald-600 p-4">
      <h1 className="text-3xl font-bold mb-2 text-center">Memory Game</h1>

      <div id="stage" className="flex flex-wrap">
        {matchData.map((cardData: ICardData, index) => {
          return (
            <FlipCard
              key={index}
              id={index}
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
