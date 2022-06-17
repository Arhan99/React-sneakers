import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://62a88ab6ec36bf40bda8526e.mockapi.io/items")
      .then(res => setItems(res.data));
    axios
      .get("https://62a88ab6ec36bf40bda8526e.mockapi.io/cart")
      .then(res => setCartItems(res.data));
    axios
      .get("https://62a88ab6ec36bf40bda8526e.mockapi.io/favourites")
      .then(res => setFavourites(res.data));
  }, []);

  const onAddToCart = obj => {
    axios.post("https://62a88ab6ec36bf40bda8526e.mockapi.io/cart", obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = id => {
    axios.delete(`https://62a88ab6ec36bf40bda8526e.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onAddToFavourite = async obj => {
    try {
      if (favourites.find(favObj => favObj.id === obj.id)) {
        axios.delete(
          `https://62a88ab6ec36bf40bda8526e.mockapi.io/favourites/${obj.id}`,
          obj
        );
      } else {
        const { data } = await axios.post(
          "https://62a88ab6ec36bf40bda8526e.mockapi.io/favourites",
          obj
        );
        setFavourites(prev => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалость добавить в фавориты");
    }
  };

  const onChangeSearchInput = event => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavourite={onAddToFavourite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          exact
          path="/favourites"
          element={
            <Favourites
              items={favourites}
              onAddToFavourite={onAddToFavourite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
