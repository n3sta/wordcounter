import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <header class="header">
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
</header>
)

export default Header
