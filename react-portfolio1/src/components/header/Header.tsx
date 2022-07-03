import React from 'react'
import './Header.css';
import Icon from "../../images/reactIcon.png"

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Icon} alt="ロゴ" />
        <h3>React ポートフォリオ</h3>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">ホーム</a>
          </li>
          <li>
            <a href="#">ログアウト</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header