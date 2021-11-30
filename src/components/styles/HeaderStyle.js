import styled, { keyframes } from 'styled-components';

const timerAnimation = keyframes`
  0% {background: green;}
  50% {background: red;}
  100% {background: green;}`;

export const HeaderStyle = styled.header`
  display: flex;
  background: #202020;
  text-align: center;
  padding: 10px;
  width: 100%;
  height: 120px;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const Timer = styled.div`
  width: 100%;
  height: 3px;
  background-color: green;
  animation: ${timerAnimation} 5s linear infinite;
  box-shadow: 0px 7px 13px 2px rgba(0,0,0,0.52);
`;

export const ProfileImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin: 0;
`;

export const ScoreText = styled.span`
  font-size: 45px;
  flex-basis: 100%;
  color: white;
`;

export const HeaderDiv = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: space-evenly;
align-items: center;
`;
