import React from 'react';
import Header from '../components/Header';
import QuestionsList from '../components/QuestionsList';

class Game extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <h1>Game</h1>
        <QuestionsList />
      </main>
    );
  }
}

export default Game;
