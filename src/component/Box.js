import React from 'react'

const Box = (props) => {
    console.log(props);
    let result;
    if(props.title === "Computer" &&
        props.result !== "tie" &&
        props.result !== "") {
            result = props.result === "win"? "lose": "win"; //컴퓨터 결과값이 유저와 반대로 나오게
        } else {
            result = props.result;
        }
  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <img src={props.item && props.item.img} className='item-img' alt=""/>
        <h2>{result}</h2>
    </div>
  )
}

export default Box
