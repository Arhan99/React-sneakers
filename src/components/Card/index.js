import { useState } from "react";
import styles from "./Card.module.scss";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavourite,
  onPlus,
  favourited = false,
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favourited);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(prevIsAdded => !prevIsAdded);
  };

  const onClickFavourite = () => {
    onFavourite({ id, title, imageUrl, price });
    setIsFavourite(prevIsFavourite => !prevIsFavourite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img
          src={isFavourite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Unliked"
          onClick={onClickFavourite}
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-cheked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
