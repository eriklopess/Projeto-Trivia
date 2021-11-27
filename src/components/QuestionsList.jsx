import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveScore } from '../redux/actions';
import './QuestionsList.css';

let idInterval = null;
let idTimeout = null;
let score = 0;

class QuestionsList extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      answers: [],
      timer: 30,
      userAction: true,
      rightAnswer: false,
    };

    this.incrementIndex = this.incrementIndex.bind(this);
    this.randomButtons = this.randomButtons.bind(this);
    this.toggleColor = this.toggleColor.bind(this);
    this.timerFunction = this.timerFunction.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getScore = this.getScore.bind(this);
  }

  componentDidMount() {
    const { player } = this.props;
    localStorage.setItem('state', JSON.stringify({
      player,
    }));
    this.timerFunction();
  }

  getScore() {
    const { index, userAction, timer, rightAnswer } = this.state;
    const { savePlayerScore, player } = this.props;
    const { results } = this.props;
    const { difficulty } = results[index];
    const ten = 10;
    let difficultyLevel = '';

    switch (difficulty) {
    case 'hard':
      difficultyLevel = '3';
      break;
    case 'medium':
      difficultyLevel = '2';
      break;
    case 'easy':
      difficultyLevel = '1';
      break;
    default:
      return '';
    }
    if (userAction && rightAnswer) {
      score += ten + (timer * difficultyLevel);
      savePlayerScore(score);
      localStorage.setItem('state', JSON.stringify({
        player: { ...player, score },
      }));
    }
  }

  handleClick({ target }) {
    const answer = target.getAttribute('data-testid');
    const correctAnswer = answer.includes('correct');

    if (correctAnswer) {
      this.setState({ userAction: true, rightAnswer: true }, this.toggleColor);
    } else {
      this.setState({ userAction: true, rightAnswer: false }, this.toggleColor);
    }
  }

  incrementIndex() {
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
        this.getScore();
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
      this.setState({ userAction: false });
      this.toggleColor();
      clearInterval(idInterval);
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
                  onClick={ (event) => this.handleClick(event) }
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
  savePlayerScore: PropTypes.func.isRequired,
  player: PropTypes.objectOf().isRequired,
};

const mapStateToProps = (state) => ({
  results: state.trivia.results,
  isLoading: state.trivia.isLoading,
  player: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  savePlayerScore: (payload) => dispatch(saveScore(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList);
