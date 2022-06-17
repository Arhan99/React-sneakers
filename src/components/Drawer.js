function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        </h2>
        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map(obj => (
                <div className="cartItem">
                  <img
                    width={70}
                    height={70}
                    src={obj.imageUrl}
                    alt="Sneakers"
                  />
                  <div className="sneakerInfo">
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b> 21 499 руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b> 1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty">
            <img
              className="cartEmptyImg"
              src="/img/empty-cart.jpg"
              alt="emptyCart"
            />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose} className="greenButton">
              <img src="img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
