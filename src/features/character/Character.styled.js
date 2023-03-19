// =============================================================== //
// ========= Below written code is for Button Pagination ========= //
// =============================================================== //

import styled, {keyframes} from "styled-components";

const slideFromRight = keyframes`
  0% { transform: translateX(100%)}
  50% { transform: translateX(-10%)}
  70% { transform: translateX(10%)}
  100% { transform: translateX(0%)}
`

const slideFromLeft = keyframes`
  0% { transform: translateX(-100%)}
  50% { transform: translateX(10%)}
  70% { transform: translateX(-10%)}
  100% { transform: translateX(0%)}
`

const StyledSection = styled.section`
  padding: 10px;

  .character-wrapper { overflow: hidden; }
  
  .section-title {
    width: fit-content;
    padding: 5px 15px;
    margin: 0 auto;
    position: relative;
    color: ${props => props.theme.midGray};
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
    text-transform: capitalize;
  }

  .character-cards-all {
    padding: 10px;
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .character-card {
    padding: 10px;
    border-radius: ${props => props.theme.defaultRadius};
    display: flex;
    overflow: hidden;
    background: linear-gradient(45deg, rgba(0,0,0,.1) 50%, rgba(0,0,0,.15) 50%);
    color: ${props => props.theme.dark};
    flex-direction: column;

    &.slide-left { animation: ${slideFromLeft} .6s ease-in forwards; }
    &.slide-right { animation: ${slideFromRight} .6s ease-in forwards; }

    > * {
      padding: 10px 0;
      display: grid;
      grid-template-columns: minmax(140px, .5fr) 1fr;
      border-bottom: 2px solid ${props => props.theme.dark};

      &:last-child { border-bottom: none; }

      > span:first-child {
        font-weight: 600;
        text-transform: capitalize;
      }
    }
 }

  .loading-text,
  .error-text {
    margin: 20px 0;
    color: ${props => props.theme.midGray};
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
  }

  .pagination-controls {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
    justify-content: center;
    gap: 20px;

    .control {
      padding: 7px 15px;
      border-radius: ${props => props.theme.defaultRadius};
      background-color: ${props => props.theme.midGray};
      color: ${props => props.theme.dark};
      cursor: pointer;
      transition: all .3s;

      &.disabled {
        background-color: ${props => props.theme.lightGray};
        pointer-events: none;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .pagination-controls .control:hover {
      background-color: ${props => props.theme.dark};
      color: ${props => props.theme.lightGray};
    }
  }

  @media only screen and (max-width: 1024px) {
    .character-cards-all { grid-template-columns: repeat(2, 1fr); }
  }

  @media only screen and (max-width: 768px) {
    .character-cards-all { grid-template-columns: 1fr; }
  }
`

export default StyledSection;






























// // =============================================================== //
// // ===== Below written code is for Infinite Scroll Pagination ==== //
// // =============================================================== //

/*
import styled, {keyframes} from "styled-components";

const cardSlide = keyframes`
  0% { transform: translateX(100%)}
  50% { transform: translateX(-10%)}
  70% { transform: translateX(10%)}
  100% { transform: translateX(0%)}
`;

const StyledSection = styled.section`
  padding: 10px;

  .character-wrapper { overflow: hidden; }
  
  .section-title {
    width: fit-content;
    padding: 5px 15px;
    margin: 0 auto;
    position: relative;
    color: ${props => props.theme.midGray};
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 2px;
    text-align: center;
    text-transform: capitalize;
  }

  .character-cards-all {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .character-card {
    padding: 10px;
    border-radius: ${props => props.theme.defaultRadius};
    display: flex;
    overflow: hidden;
    animation: ${cardSlide} .6s ease-in forwards;
    background: linear-gradient(45deg, rgba(0,0,0,.1) 50%, rgba(0,0,0,.15) 50%);
    color: ${props => props.theme.dark};
    flex-direction: column;

    > * {
      padding: 10px 0;
      display: grid;
      grid-template-columns: minmax(140px, .5fr) 1fr;
      border-bottom: 2px solid ${props => props.theme.dark};

      &:last-child { border-bottom: none; }

      > span:first-child {
        font-weight: 600;
        text-transform: capitalize;
      }
    }
  }

  .loading-text,
  .error-text {
    margin: 15px 0;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
  }

  .loading-text { color: ${props => props.theme.midGray}; }

  .error-text { color: red; }

  @media only screen and (max-width: 1024px) {
    .character-cards-all { grid-template-columns: repeat(2, 1fr); }
  }

  @media only screen and (max-width: 768px) {
    .character-cards-all { grid-template-columns: 1fr; }
  }
`

export default StyledSection;
*/