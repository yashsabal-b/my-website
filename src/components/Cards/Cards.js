import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import one from "../../images/fast.svg";
import two from "../../images/response.svg";
import three from "../../images/service.svg";
import four from "../../images/anime.svg";

function Cards() {
  return (
    <div className='cards' id='services'>
      <h1>Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={one}
              text='The First Priority is to Make Websites as Fast and Smooth as Possible.'
            />
            <CardItem
              src={two}
              text='I will Make Totally Responsive Websites Which Work On all Platforms.'
            />
            <CardItem
              src={three}
              text='I will Provide you with Fast and Greate Service and Will Provide the Entire Source Code.'
            />
            <CardItem
              src={four}
              text='Last but Not the Least, I put Life in Websites With Lots of Animations.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
