import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionsList extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      answers: [],
    };

    this.incrementIndex = this.incrementIndex.bind(this);
    this.randomButtons = this.randomButtons.bind(this);
  }

  incrementIndex() {
    this.setState((prev) => ({ index: prev.index + 1 }));
  }

  randomButtons() {
    const { index } = this.state; // pega o index do state,
    const { results } = this.props; // pega o results por props,
    const correctAnswer = results[index].correct_answer; // pega o index da resposta correta
    const incorrectAnswers = results[index].incorrect_answers; // pega o index de resposta incorreta

    const randomIndex = Math.floor(Math.random() * incorrectAnswers.length); // pega um numero aleatorio baseado no length da resposta incorreta
    const answers = incorrectAnswers.map((answer, i) => { // faz o map e compara o index com numero random gerado
      if (i === randomIndex) {
        return ({
          datatestid: 'correct-answer',
          value: correctAnswer,
        });
      }
      return ({
        datatestid: `wrong-answer-${i}`,
        value: answer,
      });
    }).concat({ // concatena todas as respostas
      datatestid: `wrong-answer-${randomIndex}`,
      value: incorrectAnswers[randomIndex],
    });
    this.setState({ answers }); // manda para o state do component;
  }

  render() {
    const { answers, index } = this.state;
    const { results } = this.props;
    if (results.length !== 0 && answers.length === 0) this.randomButtons();
    return (
      <div>
        { results.length > 0 && (
          <section>
            <h3 data-testid="question-category">{ results[index].category }</h3>
            <h4 data-testid="question-text">{ results[index].question }</h4>
            {answers.map((answer, i) => (
              <button
                type="button"
                key={ i }
                data-testid={ answer.datatestid }
                onClick={ this.incrementIndex }
              >
                {answer.value}
              </button>
            ))}
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
