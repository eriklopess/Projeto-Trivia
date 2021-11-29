import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    const setNumber = 3;
    const { assertions } = this.props;
    const feedbackMessage = (assertions < setNumber
      ? 'Podia ser melhor...' : 'Mandou bem! ');
    return (
      <>
        <Header />
        <h1 data-testid="feedback-text">{feedbackMessage}</h1>
      </>);
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.user.assertions,
});

export default connect(mapStateToProps, null)(Feedback);
