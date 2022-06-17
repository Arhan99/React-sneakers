import Card from "../components/Card";

function Favourites({ items, onAddToFavourite }) {
  return (
    <div className="content">
      <div className="contentHeader">
        <h1>Мои закладки</h1>
      </div>
      <div className="cards">
        {items.map((item, index) => (
          <Card
            key={index}
            favourited={true}
            onFavourite={onAddToFavourite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
