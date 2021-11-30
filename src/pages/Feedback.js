import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { resetGame } from '../redux/actions';
import {
  FeedbackMessage,
  FeedbackContainer,
  FeedbackText,
  PlayAgain,
} from './styles/Feedback';

class Feedback extends Component {
  constructor() {
    super();

    this.resetDefaultGame = this.resetDefaultGame.bind(this);
  }

  resetDefaultGame() {
    const { history, reset } = this.props;
    reset({ ...this.state });
    localStorage.clear();
    history.push('/');
  }

  render() {
    const setNumber = 3;
    const { assertions } = this.props;

    const feedbackMessage = (assertions < setNumber
      ? 'Podia ser melhor...' : 'Mandou bem! ');
    return (
      <>
        <Header hasTimer={ false } />
        <FeedbackContainer>
          <FeedbackMessage data-testid="feedback-text">{feedbackMessage}</FeedbackMessage>
          <diV>
            <FeedbackText>Acertos</FeedbackText>
            <FeedbackText
              data-testid="feedback-total-question"
            >
              {`${assertions}/5`}
            </FeedbackText>
          </diV>
          <PlayAgain
            type="button"
            data-testid="btn-play-again"
            onClick={ this.resetDefaultGame }
          >
            Jogar novamente
          </PlayAgain>
        </FeedbackContainer>
      </>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.user.assertions,
  score: state.user.score,
});

const mapDispatchToProps = (dispatch) => ({
  reset: (payload) => dispatch(resetGame(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
