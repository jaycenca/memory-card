import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/Cards.css';

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

interface CardsProps {
    scores: Scores;
}

export default function Cards({scores}: CardsProps) {
    const [cards, setCards] = useState<CardData[]>([]);

    const url = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures';

    const [tempArray, setTempArray] = useState<CardData[]>([])

    function shuffleCards(array: CardData[]) {
        let arr = array.slice()

        let currentIndex = arr.length;

        while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }

        setCards(arr)
    }

    const cardItems = cards.map(card => {
        return (
          <Card
            key={card.id} 
            card={card}
            shuffleCards={() => shuffleCards(cards)}
            tempArray={tempArray}
            setTempArray={setTempArray}
            scores={scores}
          />
        ) 
      })

    useEffect(() => {
        const getCards = async () => {
          try {
            const response = await fetch(url); 
            const data = await response.json();
            console.log(data);

            let startingIndex = 0;
            let endingIndex = 10;
            let filteredCards: CardData[] = []

            for(let i=startingIndex; i< endingIndex;i++) {
                filteredCards.push(data.data[i]);
            }
  
            filteredCards = filteredCards.map((card: {id: number; name: string; image: string}) => {
                return {
                    id: card.id,
                    name: card.name,
                    image: card.image
                }
            })
    
            shuffleCards(filteredCards)
          } catch (err) {
            console.log(err)
          }
        }
        getCards()
      }, [])
    
    return (
        <>
            <section className="container-cards"> 
                {cardItems}
            </section>
        </>
    );
}

