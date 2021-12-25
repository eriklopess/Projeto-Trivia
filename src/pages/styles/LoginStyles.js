import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #272727;
`;

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 50%;
  background-color: #202020;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const FormElements = styled.form`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 150px;
`;

export const Titulo = styled.h1`
  font-size: x-large;
  color: white;
`;

export const SettingsButton = styled.button`
    background-color: transparent;
    border: 0;
    align-self: flex-start;
`;

export const SettingsImg = styled.img`
    width: 30px;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 70%;
    height: 40px;
    padding: 5px;
    font-size: small;
    border: 2px solid #094d05;
    margin: 10px 0;
    background: #434343;
    border-radius: 3px;
    color: white;
    outline: 0;

    &:focus {
    border: 2px solid green;
    }
`;

export const PlayButton = styled.button`
    width: 60%;
    height: 50px;
    background: #343434;
    border: 1px solid grey;
    border-radius: 3px;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

export const FormElementsContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 90%;
    height: 100%;
`;
