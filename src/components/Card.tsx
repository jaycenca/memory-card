interface CardData {
    id: number;
    name: string;
    image: string;
}

interface Scores {
    score: number;
    bestScore: number;
    setScore: (value: number) => void;
    setBestScore: (value: number) => void;
}

interface CardProps {
    card: CardData;
    scores: Scores;
    shuffleCards: () => void;
    tempArray: CardData[];
    setTempArray: (value: CardData[]) => void;
}

export default function Card({ card, scores, shuffleCards, tempArray, setTempArray}: CardProps) {
    function handleClick() {
        shuffleCards();

        if (tempArray.includes(card)) {
            scores.setScore(0);
            setTempArray([]);
        } else {
            const newCurrentScore = scores.score + 1;
            scores.setScore(newCurrentScore);
            
            setTempArray([...tempArray, card]);

            if (newCurrentScore > scores.bestScore) {
            scores.setBestScore(newCurrentScore);
            }
        }
    }
    return (
        <img
            src={card.image}
            alt={card.name}
            className="card"
            onClick={handleClick}
        />
    )
}

