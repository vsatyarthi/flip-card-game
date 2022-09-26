import {ICardData} from "./types/types";

export const FlipCard = ({id, front, back}: ICardData) => {
    return <div className="flip-card w-44 h-52 text-center m-10 group">
        <div className="content transition-transform duration-500">
            <div className="front">
                <img src="https://www.fillmurray.com/150/150"/>
            </div>
            <div className="back">
                <strong>BILL MURRAY</strong>
            </div>
        </div>
    </div>;
}