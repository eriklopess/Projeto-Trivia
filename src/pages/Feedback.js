import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { resetGame } from '../redux/actions';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      assertions: 0,
      score: 0,
      userIcon: '',
    };

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
    const { assertions, score } = this.props;

    const feedbackMessage = (assertions < setNumber
      ? 'Podia ser melhor...' : 'Mandou bem! ');
    return (
      <>
        <Header />
        <p data-testid="feedback-text">{feedbackMessage}</p>
        <p
          data-testid="feedback-total-score"
        >
          {score}
        </p>
        <p data-testid="feedback-total-question">{assertions}</p>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.resetDefaultGame }
        >
          Jogar novamente
        </button>
      </>);
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
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
