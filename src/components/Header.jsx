import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderStyle,
  ProfileImage, Text, HeaderDiv, ScoreText, Timer } from './styles/HeaderStyle';

class Header extends Component {
  render() {
    const { hasTimer } = this.props;
    const { userName, userIcon, userScore } = this.props;
    return (
      <>
        <HeaderStyle>
          <HeaderDiv>
            <ProfileImage
              data-testid="header-profile-picture"
              src={ userIcon }
              alt="user-icon"
            />
            <Text data-testid="header-player-name">{ userName }</Text>
          </HeaderDiv>
          <HeaderDiv>
            <ScoreText data-testid="header-score">{ userScore }</ScoreText>
            <Text>Pontos</Text>
          </HeaderDiv>
        </HeaderStyle>
        { hasTimer ? <Timer /> : ''}
      </>
    );
  }
}

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  userIcon: PropTypes.string.isRequired,
  userScore: PropTypes.number.isRequired,
  hasTimer: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  userName: state.user.name,
  userIcon: state.user.userIcon,
  userScore: state.user.score,
});

export default connect(mapStateToProps)(Header);
