import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/">
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <div className="headerRight">
        <ul>
          <li onClick={props.onClickCart} className="cartIcon">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <Link to="/favourites">
              <img width={18} height={18} src="/img/heart.svg" alt="heart" />
            </Link>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
