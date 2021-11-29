import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import QuestionsList from '../components/QuestionsList';

class Game extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <main>
        <Header />
        <h1>Game</h1>
        <QuestionsList history={ history } />
      </main>
    );
  }
}

Game.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Game;
