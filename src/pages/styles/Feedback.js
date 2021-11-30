import styled from 'styled-components';

export const FeedbackMessage = styled.p`
    color: white;
    font-weight: bold;
    font-size: 30px;
`;

export const FeedbackText = styled.p`
    color: white;
    font-weight: bold;
    font-size: 25px;
`;

export const FeedbackContainer = styled.main`
    background: #202020;
    height: calc(100vh - 120px);
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const PlayAgain = styled.button`
    width: 250px;
    height: 40px;
    border: 3px solid grey;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: white;
    padding: 5px;
    background: #202020;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
        transform: scale(1.2);
        border: 2px solid green;
    }
`;
