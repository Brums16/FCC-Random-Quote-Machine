import placeholder from "../img/200.jpeg"
import buzz from "../img/buzz.png"
import bowling from "../img/bowling.png"
import joker from "../img/joker.png"
import gollum from "../img/gollum.png"
import killbill from "../img/killbill.png"
import dory from "../img/dory.png"
import terminator from "../img/terminator.png"
import luke from "../img/luke.png"
import titanic from "../img/titanic.png"
import casablanca from "../img/casablanca.png"
import shark from "../img/shark.png"
import "../css/main.css"
import {useState} from 'react'
import filmstrip from "../img/filmstrip.png"

const quotesArray = [
    {
      quote: "May the Force be with you.",
      character: "Luke Skywalker",
      film: "Star Wars: Episode IV - A New Hope",
      release_date: "1977",
      color1: "blue",
      color2: "yellow",
      image: luke
    },
    // Add more objects here...
    {
      quote: "I'll be back.",
      character: "The Terminator",
      film: "The Terminator",
      release_date: "1984",
      color1: "black",
      color2: "red",
      image: terminator
    },
    {
        quote: "You're gonna need a bigger boat!",
        character: "Chief Brody",
        film: "Jaws",
        release_date: "1975",
        color1: "blue",
        color2: "yellow",
        image: shark
      },
    {
      quote: "Why so serious?",
      character: "The Joker",
      film: "The Dark Knight",
      release_date: "2008",
      color1: "purple",
      color2: "green",
      image: joker
    },{
        quote: "To infinity and beyond!",
        character: "Buzz Lightyear",
        film: "Toy Story",
        release_date: "1995",
        color1: "green",
        color2: "white",
        image: buzz
      },
      {
        quote: "Hasta la vista, baby.",
        character: "The Terminator",
        film: "Terminator 2: Judgment Day",
        release_date: "1991",
        color1: "black",
        color2: "red",
        image: terminator
      },
      {
        quote: "My precious.",
        character: "Gollum",
        film: "The Lord of the Rings: The Two Towers",
        release_date: "2002",
        color1: "black",
        color2: "gold",
        image: gollum
      },
      {
        quote: "Here's looking at you, kid.",
        character: "Rick Blaine",
        film: "Casablanca",
        release_date: "1942",
        color1: "white",
        color2: "black",
        image: casablanca
      },
      {
        quote: "I'm king of the world!",
        character: "Jack Dawson",
        film: "Titanic",
        release_date: "1997",
        color1: "navy",
        color2: "white",
        image: titanic
      },
      {
        quote: "Just keep swimming.",
        character: "Dory",
        film: "Finding Nemo",
        release_date: "2003",
        color1: "blue",
        color2: "yellow",
        image: dory
      },
      {
        quote: "The dude abides.",
        character: "The dude",
        film: "The Big Lebowski",
        release_date: "1998",
        color1: "navy",
        color2: "gold",
        image: bowling
      },
      {
        quote: "I am gonna kill Bill.",
        character: "The bride",
        film: "Kill Bill Volume 1",
        release_date: "2003",
        color1: "yellow",
        color2: "black",
        image: killbill
      }
    // Add more objects here...
  ];

export default function Quote() {
    const [count, setCount] = useState(0)
    
    function handleClick() {
        setCount(Math.floor(Math.random()*quotesArray.length))
    }
    
return (
<>
<body style={{
    backgroundColor: quotesArray[count].color1,
    color: quotesArray[count].color2,
    borderColor: quotesArray[count].color2,
    borderStyle: 'solid'

}}>
<div className="welcome-div">
<h1>Film Quote Generator</h1>
<img src={filmstrip} alt="FilmStrip" height={150} id="filmstrip"/>
</div>
<div className="button-div">
<button onClick={handleClick} style={{
    color: quotesArray[count].color2
}}>New Quote</button>
</div>
<div className="quote-div" >

<img src={quotesArray[count].image} height={100} />
{/* remove the first h2 later */}

<h2>"{quotesArray[count].quote}" - {quotesArray[count].character}</h2>
<h3>Film: {quotesArray[count].film}</h3>
<h4>Release Year: {quotesArray[count].release_date}</h4>



</div>
</body>
</>
);
}