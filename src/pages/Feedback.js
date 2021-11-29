import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
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
      </>);
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.user.assertions,
  score: state.user.score,
});

export default connect(mapStateToProps, null)(Feedback);
