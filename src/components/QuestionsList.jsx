import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionsList extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };

    this.incrementIndex = this.incrementIndex.bind(this);
  }

  incrementIndex() {
    const { index } = this.state;
    const { results } = this.props;
    this.setState((prev) => ({
      index: prev.index + 1,
    }), () => {
      if (index > results.length) {
        this.setState({ index: 0 });
      }
    });
  }

  render() {
    const { index } = this.state;
    const { results, isLoading } = this.props;
    console.log(results);
    return (
      <div>
        { isLoading && 'loading' }
        { results.length > 0 && (
          <section>
            <h3 data-testid="question-category">{ results[index].category }</h3>
            <h4 data-testid="question-text">{ results[index].question }</h4>
            <button
              type="button"
              datatestid="correct-answer"
              onClick={ this.incrementIndex }
            >
              { results[index].correct_answer }
            </button>
            {results[index].incorrect_answers.map((questions, i) => (
              <button
                type="button"
                key={ i }
                datatestid={ `wrong-answer-${i}` }
                value={ questions }
                onClick={ this.incrementIndex }
              >
                { questions }
              </button>
            ))}
          </section>
        )}
      </div>
    );
  }
}

QuestionsList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  results: state.trivia.results,
  isLoading: state.trivia.isLoading,
});

export default connect(mapStateToProps)(QuestionsList);
