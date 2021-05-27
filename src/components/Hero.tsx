import React from 'react';

import StyledHero from '../styled/hero';
//ASSETS
import logo from '../assets/icons/logo.svg';
import backgroundImage from '../assets/images/hero-bg.png';
import circlePattern from '../assets/icons/circle-pattern.svg';
import arrowSwirlyLeft from '../assets/icons/arrow-swirly-left.svg';
import arrowSwirlyRight from '../assets/icons/arrow-swirly-right.svg';
import dotPattern from '../assets/icons/dot-pattern.svg';
import wavePattern from '../assets/icons/wave-pattern.svg';
import jigsaw from '../assets/icons/jigsaw.svg';
import chatBubble from '../assets/icons/chat-bubble.svg';

const Hero = () => {
  return (
    <StyledHero>
      <div className="hero__logo">
        <img src={logo} alt="app logo" />
      </div>
      <div className="hero__text">
        <p>Create beautiful landing page in few minutes</p>
        <img className="jigsaw hero__icons" src={jigsaw} alt="jigsaw icon" />
        <img className="chat-bubble hero__icons" src={chatBubble} alt="chat-bubble icon" />
      </div>
      <div className="hero__image">
        <img src={backgroundImage} alt="background" />
        <img className="circle hero__icons" src={circlePattern} alt="circle pattern" />
        <img className="arrow-swirly-left hero__icons" src={arrowSwirlyLeft} alt="arrow swirly left icon" />
        <img className="arrow-swirly-right hero__icons" src={arrowSwirlyRight} alt="arrow swirly right icon" />
        <img className="dot-pattern hero__icons" src={dotPattern} alt="dot pattern" />
        <img className="wave-pattern hero__icons" src={wavePattern} alt="wave pattern" />
      </div>
    </StyledHero>
  );
};

export default Hero;
