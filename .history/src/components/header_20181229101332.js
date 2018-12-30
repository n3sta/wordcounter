import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(3,27,78,.1);
  background-color: $white;
  z-index: 100;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
    height: 65px;
  }
  &__logo {
    color: $blue300;
    font-size: 24px;
    font-weight: 500;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <div class="header__inner">
        <Link to="https://elanista.pl" class="header__logo">
            <h1>eLanista.pl</h1>
        </Link>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <Link to="about.php" class="nav__link">Szukaj trenerów</Link>
                </li>
                <li class="nav__item">
                    <Link to="https://app.elanista.pl/login" class="nav__link">Zaloguj się</Link>
                </li>
            </ul>
        </nav>
    </div>
</HeaderWrapper>
)

export default Header
