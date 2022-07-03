import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* <img src="./img/logo192.png" alt="ロゴ" /> */}
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