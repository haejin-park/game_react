import {useState} from "react";
import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "Scissors", 
    img: "https://imageengine.victorinox.com/mediahub/31970/1280Wx1120H/CUT_8_0904_10__S1.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  let [userSelect, setUserSelect] = useState(null);
  let [computerSelect, setComputerSelect] = useState(null);
  let [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],  computerChoice));
  }
  const judgement = (user, computer) => {
    if(user.name === computer.name) 
      return "tie"
    else if(user.name === "Rock") 
      return computer.name === "Scissors"? "win": "lose" 
    else if(user.name === "Scissors") 
      return computer.name === "Paper"? "win": "lose"
    else if(user.name === "Paper") 
      return computer.name === "Rock"? "win": "lose"
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()* itemArray.length);    
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>   
      <div className="main">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>

    </div>
  );
}

export default App;
