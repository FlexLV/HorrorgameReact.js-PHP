import React from 'react';
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
      <div className='cards'>
        <h1>Check our news!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/horror-movie-concept-free-photo.jpg'
                text='No game unlucky guys'
                label='New'
                path='/services'
              />
              <CardItem
                src='images/manipulation-witch-zombie-cemetary.jpg'
                text='Test our new feature'
                label='Popular'
                path='/news5'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/images.jpeg'
                text='Play our game modes and leave review'
                label='Mystery'
                path='/news3'
              />
              <CardItem
                src='images/istockphoto-1334434982-612x612.jpg'
                text='Experience Football on Top of the Himilayan Mountains'
                label='New'
                path='/news2'
              />
              <CardItem
                src='images/istockphoto-1334434982-612x612.jpg'
                text='Get our game beta test free'
                label='New'
                path='/news1'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Cards;