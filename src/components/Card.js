function Card() {
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/heart_unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>Цена:</span>
          <b>12990 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
