import { useEffect, useState } from "react";
import Card from "./Card";
import '../styles/Cards.css';
export default function Cards({scores}) {
    const [cards, setCards] = useState([]);

    const url = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures';

    const [tempArray, setTempArray] = useState([])

    function shuffleCards(array) {
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
            let filteredCards = []

            for(let i=startingIndex; i< endingIndex;i++) {
                filteredCards.push(data.data[i]);
            }
  
            filteredCards = filteredCards.map(card => {
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