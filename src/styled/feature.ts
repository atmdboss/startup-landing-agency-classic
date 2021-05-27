import styled from 'styled-components';

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

export const StyledFeatureGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-start: 2.5rem;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-block-start: 5rem;
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
