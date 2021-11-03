import React, {useState} from 'react';
import './Boxes.css'

const boxarr = {
    numBoxes: 16,
    allColors: [
      "Aqua",
      "Black",
      "BlanchedAlmond",
      "Blue",
      "Chocolate",
      "DodgerBlue",
      "Lavender",
      "LawnGreen",
      "Peru",
      "Plum",
      "SpringGreen",
      "SteelBlue",
      "Tan",
      "Teal",
      "Thistle",
      "Tomato",
      "Turquoise",
      "Violet",
      "Yellow",
      "YellowGreen"
    ]
  };

  function randomColor (){
    let idx = Math.floor(Math.random()*boxarr.allColors.length);
    return boxarr.allColors[idx]
  };

  const Boxes = () => {
      const [boxes, setBoxes] = useState(Array.from({length: boxarr.numBoxes}, () => randomColor()));

      const handleClick = () =>{
        let idx = Math.floor(Math.random()*boxarr.allColors.length);
        setBoxes(boxes => {
            let boxCopy = [...boxes];
            boxCopy[idx] = randomColor();
            return boxCopy;
          });
      }

      return (
          <section className="boxes">
              {boxes.map((color,idx) => <div className="box" key={idx} style={{backgroundColor:color}}> 
              </div>)}
              <button onClick={handleClick}>Change color</button>
          </section>
      )

  };

  export default Boxes

