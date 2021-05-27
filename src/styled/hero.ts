import styled from 'styled-components';

import { rotate, shake, moveL, moveR } from './keyframes';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vw;
  margin: auto;

  .hero {
    &__logo {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;

      img {
        flex-basis: 50%;
      }
    }

    &__text {
      font-weight: bold;
      font-size: ${(props) => props.theme.fonts.md};
      max-width: 80vw;
      text-align: center;
      color: ${(props) => props.theme.colors.darkBlue};
      margin-block-start: 1.5rem;
      margin-block-end: 2rem;
      position: relative;

      @media screen and (min-width: 600px) {
        font-size: ${(props) => props.theme.fonts.lg};
        max-width: 50vw;
      }
      @media screen and (min-width: 960px) {
        margin-block-end: 5rem;
        font-size: ${(props) => props.theme.fonts.xl};
      }
    }

    &__image {
      position: relative;
      z-index: 1;

      img {
        width: 100%;
      }
    }

    /* ************************ ICONS ************************ */
    &__icons {
      position: absolute;
      z-index: -1;
      display: none;

      @media screen and (min-width: 960px) {
        display: block;
      }

      &.circle {
        width: 8rem;
        left: -69px;
        bottom: 10px;
        animation: ${rotate} 10s linear infinite;
      }

      &.arrow-swirly-left {
        width: 12rem;
        left: -130px;
        bottom: 150px;
        animation: ${shake} 3s linear infinite alternate;
      }

      &.arrow-swirly-right {
        width: 12rem;
        right: -130px;
        bottom: 150px;
        animation: ${shake} 3s linear infinite alternate;
      }

      &.dot-pattern {
        width: 15rem;
        right: -130px;
        top: -40px;
      }

      &.wave-pattern {
        width: 8rem;
        top: -22px;
        left: 150px;
      }

      &.jigsaw {
        width: 3rem;
        left: -200px;
        z-index: 1;
        top: 0;
        animation: ${moveL} 3s linear infinite alternate;
      }

      &.chat-bubble {
        width: 3rem;
        right: -200px;
        z-index: 1;
        top: 0;
        animation: ${moveR} 3s linear infinite alternate;
      }
    }
  }
`;
