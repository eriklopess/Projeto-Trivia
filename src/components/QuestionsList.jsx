import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './QuestionsList.css';

let idInterval = null;
let idTimeout = null;
class QuestionsList extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      answers: [],
      timer: 30,
    };

    this.incrementIndex = this.incrementIndex.bind(this);
    this.randomButtons = this.randomButtons.bind(this);
    this.toggleColor = this.toggleColor.bind(this);
    this.timerFunction = this.timerFunction.bind(this);
  }

  componentDidMount() {
    this.timerFunction();
  }

  incrementIndex() {
    console.log(idInterval, 'idInterval');
    console.log(idTimeout, 'idTimeout');
    clearInterval(idInterval);
    clearTimeout(idTimeout);
    this.setState((prev) => ({ index: prev.index + 1, timer: 30 }),
      this.randomButtons);
    this.timerFunction();
  }

  randomButtons() {
    const { index } = this.state;
    const { results } = this.props;
    const correctAnswer = results[index].correct_answer;
    const incorrectAnswers = results[index].incorrect_answers;

    const randomIndex = Math.floor(Math.random() * incorrectAnswers.length);
    const answers = incorrectAnswers.map((answer, i) => {
      if (i === randomIndex) {
        return ({
          datatestid: 'correct-answer',
          value: correctAnswer,
          isDisabled: false,
        });
      }
      return ({
        datatestid: `wrong-answer-${i}`,
        value: answer,
        isDisabled: false,
      });
    }).concat({
      datatestid: `wrong-answer-${randomIndex}`,
      value: incorrectAnswers[randomIndex],
      isDisabled: false,
    });
    const ONE = -1;
    answers.sort((a, b) => {
      if (a.value < b.value) {
        return ONE;
      }
      if (b.value < a.value) {
        return 1;
      }
      return 0;
    });
    this.setState({ answers });
  }

  toggleColor() {
    clearInterval(idInterval);
    clearTimeout(idTimeout);
    const { answers } = this.state;
    const answersWithColors = answers.map((answer) => {
      if (answer.datatestid === 'correct-answer') {
        return { ...answer, className: 'correct', isDisabled: true };
      }
      return { ...answer, className: 'wrong', isDisabled: true };
    });
    this.setState({ answers: answersWithColors });
  }

  timerFunction() {
    const ONE_SECOND = 1000;
    const THINTY_SECOND = 30000;
    idInterval = setInterval(() => {
      this.setState((prev) => ({
        timer: prev.timer - 1,
      }));
    }, ONE_SECOND);
    idTimeout = setTimeout(() => {
      clearInterval(idInterval);
      this.toggleColor();
    }, THINTY_SECOND);
  }

  render() {
    const { answers, index, timer } = this.state;
    const { results } = this.props;
    if (results.length !== 0 && answers.length === 0) this.randomButtons();
    return (
      <div>
        { results.length > 0 && (
          <section>
            <h3 data-testid="question-category">{ results[index].category }</h3>
            <h4 data-testid="question-text">{ results[index].question }</h4>
            <h5>{ timer <= 0 ? '0' : timer }</h5>
            {
              answers.map((answer, i) => (
                <button
                  type="button"
                  key={ i }
                  className={ answer.className ? answer.className : 'answer' }
                  data-testid={ answer.datatestid }
                  onClick={ this.toggleColor }
                  disabled={ answer.isDisabled }
                >
                  {answer.value}
                </button>
              ))
            }
            <button type="button" onClick={ this.incrementIndex }>Proxima Questão</button>
          </section>
        ) }

      </div>
    );
  }
}

QuestionsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  results: state.trivia.results,
  isLoading: state.trivia.isLoading,
});

export default connect(mapStateToProps)(QuestionsList);
