import styled, { css } from 'styled-components';

import { FeatureGridProps } from '../types';
import { show } from './keyframes';

export const StyledFeatureTitle = styled.p`
  font-size: ${(props) => props.theme.fonts.md};
  font-weight: 500;
  flex-basis: 100%;

  @media screen and (min-width: 1280px) {
    font-size: ${(props) => props.theme.fonts.lg};
  }
`;

export const StyledFeatureSubtitle = styled.span`
  font-size: ${(props) => props.theme.fonts.sm};
  color: ${(props) => props.theme.colors.lightGrey};
  font-weight: 300;
  flex-basis: 100%;

  @media screen and (min-width: 1280px) {
    font-size: ${(props) => props.theme.fonts.md};
  }
`;

export const StyledFeatureGrid = styled.div<FeatureGridProps>`
  display: flex;
  flex-direction: column;
  margin-block-start: 2.5rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-block-start: 5rem;

    ${(props) =>
      props.noRow &&
      css`
        flex-direction: column;
        flex-wrap: nowrap;
      `}
  }
`;

export const StyledFeature = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-block-end: 3rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    text-align: left;
    flex-basis: 50%;
  }
  @media screen and (min-width: 1280px) {
    flex-basis: 33.33%;
  }

  .text {
    &__title {
      display: block;
      color: ${(props) => props.theme.colors.darkBlue};
      font-size: ${(props) => props.theme.fonts.md};
      font-weight: 500;

      @media screen and (min-width: 600px) {
        width: 80%;
        margin: 0 auto;
      }
    }

    &__description {
      color: ${(props) => props.theme.colors.darkBlue};
      font-size: ${(props) => props.theme.fonts.sm};
      font-weight: 300;
      margin-block-start: 1.2rem;
      margin-block-end: 1.2rem;

      @media screen and (min-width: 600px) {
        width: 80%;
        margin-block-start: 0.5rem;
        margin-block-end: 0.5rem;
        margin-inline-start: auto;
        margin-inline-end: auto;
      }
    }

    &__more {
      text-decoration: none;
      color: ${(props) => props.theme.colors.linkBlue};
      font-size: ${(props) => props.theme.fonts.sm};
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: center;

      @media screen and (min-width: 600px) {
        width: 80%;
        margin: 0 auto;
        justify-content: flex-start;
      }

      span {
        margin-inline-end: 0.5rem;
      }
    }
  }
`;

export const StyledCoreFeatureSection = styled.div`
  .image {
    img {
      width: 100%;
    }
  }

  .text {
    text-align: center;
    @media screen and (min-width: 600px) {
      text-align: left;
    }

    div:last-of-type {
      margin-block-start: 2rem;
    }
    .content {
      margin-block-start: 2rem;
      margin-block-end: 2rem;
    }
  }

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

export const StyledFeatureTabs = styled.div`
  .tab-panes {
    min-width: 0;
    overflow-y: hidden;
    overflow-x: auto;

    & > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-block-start: 1rem;
      margin-block-end: 1rem;
      margin-inline-start: auto;
      margin-inline-end: auto;
      width: 700px;

      & > div {
        display: flex;
        align-items: center;
        position: relative;

        &.active,
        &:hover {
          &:before {
            width: 90%;
          }

          & span {
            &.icon {
              svg {
                path {
                  fill: ${(props) => props.theme.colors.darkBlue};
                }
              }
            }
            &.label {
              color: ${(props) => props.theme.colors.darkBlue};
            }
          }
        }

        &:before {
          content: '';
          position: absolute;
          width: 0px;
          bottom: -1rem;
          height: 1px;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: ${(props) => props.theme.colors.darkBlue};
          transition: width 0.3s ease-in-out;
        }

        span {
          display: inline-block;
          margin-inline-end: 0.5rem;

          &.icon {
            svg {
              path {
                fill: ${(props) => props.theme.colors.lightGrey};
              }
            }
          }

          &.label {
            width: max-content;
            margin-inline-end: 1.5rem;
            color: ${(props) => props.theme.colors.lightGrey};
          }

          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  .tab-content {
    img {
      animation: ${show} 0.2s linear;
      width: 100%;
    }
  }
`;
