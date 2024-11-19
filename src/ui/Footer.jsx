export const Footer = () => {
  return (
    <div className="footer">
      <div className="comprando">
        <p className="title-footer">Comprando</p>
        <ul className="footer-list">
          <li>
            <a href="#">Cómo son las formas de pago?</a>
          </li>
          <li>
            <a href="#">Cómo son los medios de envío?</a>
          </li>
          <li>
            <a href="#">Cómo funcionan los cambios?</a>
          </li>
        </ul>
      </div>
      <div className="contact-us">
        <p className="title-footer">Tenes alguna pregunta?</p>
        <button id="btn-contact">Contactanos!</button>
      </div>
      <div className="social-media">
        <p className="title-footer">Seguinos!</p>
      </div>
    </div>
  );
};
