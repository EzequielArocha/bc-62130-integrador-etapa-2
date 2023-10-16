import "./Header.scss";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <Navbar />
      <div className="search-bar">
        {/* <!-- search-bar -->*/}
        <div className="search-bar__logo-container">
          <img src="img/logo.png" alt="BuyTechX" />
        </div>
        <form action="" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label"></label>
          <input
            type="search"
            className="search-bar__form-search"
            id="busqueda"
            placeholder="  ¿Qué estas Buscando?"
          />
          <input
            type="submit"
            value="BUSCAR"
            className="search-bar__form-submit"
          />
        </form>
        <div className="search-bar__carrito-container">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="menu-toggle">
          <label htmlFor="menu" className="menu-toggle__label">
            <span className="menu-toggle__top-bread"></span>
            <span className="menu-toggle__meat"></span>
            <span className="menu-toggle__bottom-bread"></span>
          </label>
        </div>
      </div>
      {/* <!-- search-bar -->*/}
    </header>
  );
};

export default Header;
