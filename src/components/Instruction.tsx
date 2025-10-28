import '../styles/Instructions.css';

interface ScoreProps {
    scoreType: "current" | "best";
    scores: {
        score: number;
        bestScore: number;
    };
}

function Score({ scoreType, scores }: ScoreProps) {
    return (
      <>
      {scoreType === "current" ? (
        <p className="current-score-label">Current score: <span className="current-score score">{scores.score}</span></p>
      ) : (
        <p className="best-score-label">Best score: <span className="best-score score">{scores.bestScore}</span></p> 
      )}
      </>
    );
}

interface InstructionsProps {
    scores: {
        score: number;
        bestScore: number;
    };
}

export default function Instructions({scores}: InstructionsProps) {
    const instructions = "To play this Zelda-inspired memory card game, simply keep selecting unique cards for each round. If you select a card that you've chosen previously, then you start over. To win, you must keep selecting unique cards for each round until you reach a score of 12!"
    return (
        <>
            <div className="container-instructions">
                <p className="instructions">{instructions}</p>
                <div className="container-scores">
                    <Score scoreType="current" scores={scores}/>
                    <Score scoreType="best" scores={scores}/>
                </div>
            </div>
        </>
    );
}

