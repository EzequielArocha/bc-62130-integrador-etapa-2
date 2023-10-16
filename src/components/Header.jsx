import "./Header.scss";

const Header = () => {
  return (
    <header class="main-header">
      <input type="checkbox" id="menu" />

      <div class="search-bar">
        {/* <!-- search-bar -->*/}
        <div class="search-bar__logo-container">
          <img src="img/logo.png" alt="BuyTechX" />
        </div>
        <form action="" class="search-bar__form-container">
          <label for="busqueda" class="search-bar__form-label"></label>
          <input
            type="search"
            class="search-bar__form-search"
            id="busqueda"
            placeholder="  ¿Qué estas Buscando?"
          />
          <input type="submit" value="BUSCAR" class="search-bar__form-submit" />
        </form>
        <div class="search-bar__carrito-container">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div class="menu-toggle">
          <label for="menu" class="menu-toggle__label">
            <span class="menu-toggle__top-bread"></span>
            <span class="menu-toggle__meat"></span>
            <span class="menu-toggle__bottom-bread"></span>
          </label>
        </div>
      </div>
      {/* <!-- search-bar -->*/}
    </header>
  );
};

export default Header;
