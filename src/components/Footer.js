import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Moja aktywność literacka</p>
        <p className="footer-subscription-text">⇓</p>
        <div className="input-areas">
          {/* <form>
            <input
              type="email"
              name="email"
              placeholder="Napisz"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subskrybuj</Button>
          </form> */}
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Dorobek</h2>
            <div className="cont">
              <Link
                to="//www.taniaksiazka.pl/autor/monika-knapczyk"
                target="_blank"
                rel="noopener noreferrer"
              >
                taniaksiazka.pl
              </Link>
              <Link
                to="//lubimyczytac.pl/autor/59899/monika-knapczyk"
                target="_blank"
                rel="noopener noreferrer"
              >
                lubimyczytac.pl
              </Link>
              <Link
                to="//merlin.pl/a/monika-knapczyk"
                target="_blank"
                rel="noopener noreferrer"
              >
                merlin.pl
              </Link>
              <Link
                to="//www.oliwolumin.pl/corka-slonca-zderzenie-swiatow-tom-1-monika-knapczyk-prezentacja-ksiazki"
                target="_blank"
                rel="noopener noreferrer"
              >
                oliwolumin.pl
              </Link>
              <Link
                to="//ebookpoint.pl/ksiazki/corka-slonca-zderzenie-swiatow-monika-knapczyk,s_00cm.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                ebookpoint.pl
              </Link>
              <Link
                to="//ksiegarnia.pwn.pl/Swiatlem-malowane,68831258,p.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                ksiegarnia.pwn.pl
              </Link>
              <Link
                to="//pzwl.pl/Vaira,91768132,p.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                pzwl.pl
              </Link>
              <Link
                to="//www.e-bookowo.pl/fantasy-i-science-fiction/vaira.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.e-bookowo.pl
              </Link>
              <Link
                to="//www.legimi.pl/ebook-vaira-monika-knapczyk,b344658.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                legimi.pl
              </Link>
              <Link
                to="//upolujebooka.pl/oferta,110791,zderzenie_swiatow.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                upolujebooka.pl
              </Link>
              <Link
                to="//woblink.com/ebook/wieza-zapomnienia-monika-knapczyk-143699u"
                target="_blank"
              >
                woblink.com
              </Link>
              <Link
                to="//strefabooki.blogspot.com/2019/12/corka-sonca-zderzenie-swiatow-monika.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                strefabooki.blogspot.com
              </Link>
            </div>
          </div>

          <div class="footer-link-items">
            <h2>Kontakt</h2>
            <Link to="" target="_blank" aria-label="poczta">
              {
                <a href="mailto:moje.inspiracje.2017@gmail.com">
                  moje.inspiracje.2017@gmail.com
                </a>
              }
            </Link>
            <Link to="" target="_blank" aria-label="telefon">
              {<a href="tel:+48693057981">693 057 981</a>}
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Filmy</h2>
            <Link
              to="//www.youtube.com/watch?v=6eZnSqOxAo0"
              target="_blank"
              rel="noopener noreferrer"
            >
              O mojej twórczości
            </Link>
            <Link
              to="//www.youtube.com/watch?v=EGseD2tLmqs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wieczór autorski
            </Link>
            <Link
              to="//www.youtube.com/watch?v=pk-1HxuLfWM"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Biało"
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Social&nbsp;Media</h2>
            <Link
              to="//pl.linkedin.com/in/monika-knapczyk-418439152"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </Link>
            <Link
              to="//www.facebook.com/monika.knapczyk.758"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="navbar-logo">
              MK
              {/* <img src="images/pen.svg" alt="" /> */}
              <i class="fas fa-feather"></i>
            </Link>
          </div>
          <small class="website-rights">{new Date().getFullYear()}.</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="//www.facebook.com/monika.knapczyk.758"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            {/* <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link> */}
            {/* <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link> */}
            {/* <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link> */}
            <Link
              class="social-icon-link linkedin"
              to="//pl.linkedin.com/in/monika-knapczyk-418439152"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
