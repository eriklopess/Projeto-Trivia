import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import QuestionsList from '../components/QuestionsList';
import MainContainer from './styles/GameStyles';

class Game extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <MainContainer>
        <Header hasTimer />
        <QuestionsList history={ history } />
      </MainContainer>
    );
  }
}

Game.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Game;
