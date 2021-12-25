import styled from 'styled-components';

export const QuestionCategory = styled.h2`
    font-size: 25px;
    margin: 20px 0;
`;

export const QuestionTitle = styled.h1`
    font-size: 30px;
`;

export const QuestionTime = styled.h3`
    font-size: 20px;
`;

export const AnswerButton = styled.button`
    width: 150px;
    height: 40px;
    padding: 5px;
    margin: 20px;
    background: #202020;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    border: 3px solid grey;
    color: white;
    flex-basis: 35%;
    cursor: pointer;
`;

export const NextQuestion = styled.button`
    width: 250px;
    height: 40px;
    border: 3px solid grey;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: white;
    padding: 5px;
    background: #202020;
    cursor: pointer;
`;

export const QuestionContainer = styled.section`
    width: 80%;
    height: 70vh;
    margin: auto;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const AnswersContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
