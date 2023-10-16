import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div class="footer_content">
        <div class="footer_contacts">
          <h1>BUYTECHX</h1>
          <p>Seguinos en nuestras redes</p>
          <div class="footer_social_media">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="footer-link"
              id="instagram"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="footer-link"
              id="facebook"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              class="footer-link"
              id="twitter"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>

        <ul class="footer-list">
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
        <ul class="footer-list">
          <li>
            <h3>Categorias</h3>
          </li>
          <li>
            <a href="#" class="footer-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" class="footer-link">
              Contacto
            </a>
          </li>
          <li>
            <a href="#" class="footer-link">
              Nosotros
            </a>
          </li>
        </ul>
        <div class="footer_subscribe">
          <h3>Suscribite</h3>

          <p>Recibí ofertas y promociones!</p>

          <div class="input_group">
            <input type="email" id="email" placeholder="Correo Electrónico" />
            <button class="input-button">
              <i class="fa-regular fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="footer_copyright">
        &copy; 2023 | Ezequiel Arocha | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
