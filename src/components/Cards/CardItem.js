import React from "react";
import Title from "react-vanilla-tilt";

function CardItem(props) {
  return (
    <Title
      className='card'
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: "20px 20px 50px rgba(0,0,0,0.1)",
      }}
    >
      <div className='content'>
        <div className='card-wrap'>
          <img src={props.src} className='card-img' />
        </div>
        <div className='card-info'>
          <p>{props.text}</p>
        </div>
      </div>
    </Title>
  );
}

export default CardItem;
