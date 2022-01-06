function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-20">Корзина</h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url("/images/2.jpg")` }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>129 $</b>
              </div>
              <img
                className="removeBtn"
                src="/images/remove.svg"
                alt="remove"
              />
            </div>
          </div>
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>85$</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>12$ </b>
            </li>
          </ul>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img
            className="mr-10"
            width={40}
            height={40}
            src="/images/logo.png"
            alt=""
          />
          <div className="">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Magazine of the best boots</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30 ">
            <img src="/images/cart.svg" alt="" />

            <span>124 $</span>
          </li>
          <li>
            <img src="/images/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/images/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/images/unlike.svg" alt="unlike" />
            </div>
            <img width={133} height={112} src="/images/1.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>70 $</b>
              </div>
              <button className="button">
                <img src="/images/Vector.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
