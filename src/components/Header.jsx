import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { userName, userIcon, userScore } = this.props;

    return (
      <header>
        <img
          data-testid="header-profile-picture"
          src={ userIcon }
          alt="user-icon"
        />
        <p data-testid="header-player-name">{ userName }</p>
        <p data-testid="header-score">{ userScore }</p>
      </header>
    );
  }
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  userIcon: PropTypes.string.isRequired,
  userScore: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  userName: state.user.name,
  userIcon: state.user.userIcon,
  userScore: state.user.score,
});

export default connect(mapStateToProps)(Header);
