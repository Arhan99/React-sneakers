import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavourite,
  onAddToCart,
}) {
  return (
    <div className="content">
      <div className="contentHeader">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}{" "}
        </h1>
        <div className="searchBlock">
          <img src="/img/search.svg" alt="Search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="searchRemove"
              src="/img/btn-remove.svg"
              alt="remove"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="cards">
        {items
          .filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => (
            <Card
              key={index}
              onFavourite={obj => onAddToFavourite(obj)}
              onPlus={obj => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
