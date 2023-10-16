import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer_content">
        <div className="footer_contacts">
          <h1>BUYTECHX</h1>
          <p>Seguinos en nuestras redes</p>
          <div className="footer_social_media">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="footer-link"
              id="instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="footer-link"
              id="facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              className="footer-link"
              id="twitter"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>

        <ul className="footer-list">
          <li>
            <h3>Información</h3>
          </li>
          <li>
            <p>+54 11 1234-5678</p>
          </li>
          <li>
            <p>info@buytechx.com</p>
          </li>
          <li>
            <p>Buenos Aires, Argentina</p>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <h3>Categorias</h3>
          </li>
          <li>
            <a href="#" className="footer-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Contacto
            </a>
          </li>
          <li>
            <a href="#" className="footer-link">
              Nosotros
            </a>
          </li>
        </ul>
        <div className="footer_subscribe">
          <h3>Suscribite</h3>

          <p>Recibí ofertas y promociones!</p>

          <div className="input_group">
            <input type="email" id="email" placeholder="Correo Electrónico" />
            <button className="input-button">
              <i className="fa-regular fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        &copy; 2023 | Ezequiel Arocha | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
