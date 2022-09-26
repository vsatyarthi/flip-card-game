import {ICardData} from "./types/types";

export const FlipCard = ({id, front, back}: ICardData) => {
    return <div className="flip-card">
        <div className="content">
            <div className="front">
                <img src="https://www.fillmurray.com/150/150"/>
            </div>
            <div className="back">
                <strong>BILL MURRAY</strong>
            </div>
        </div>
    </div>;
}