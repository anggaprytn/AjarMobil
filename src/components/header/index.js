import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaSignInAlt,
  FaUserAlt,
  FaSearch,
  FaGlobe,
} from "react-icons/fa";
import MobileMenu from "../../components/MobileMenu";

import Logo from "../../img/logo.png";
import globe from "../../img/globe.png";
import clock from "../../img/clock.png";
import "flag-icon-css/css/flag-icons.min.css";
import "./style.css";

const languages = [
  {
    code: "id",
    name: "indonesia",
    country_code: "id",
  },
  {
    code: "en",
    name: "english",
    country_code: "us",
  },
];

const Header = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  const { t } = useTranslation();

  return (
    <Fragment>
      <section className="ajarmobil-header-top-area">
        <Container>
          <Row>
            {/* <Col md={6}>
              <div className="header-top-left">
                <p>
                  {t("need_help")} <FaPhoneAlt /> {t("call")}: +321 123 45 978
                </p>
              </div>
            </Col> */}
            {/* <Col md={6}>
              <div className="header-top-right">
                <Link to="/login">
                  <FaSignInAlt />
                  {t("login")}
                </Link>
                <Link to="/register">
                  <FaUserAlt />
                  {t("register")}
                </Link>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <FaGlobe /> {t("language")}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {languages.map(({ code, name, country_code }) => (
                      <Dropdown.Item
                        eventKey={name}
                        key={country_code}
                        to="/"
                        onClick={() => i18next.changeLanguage(code)}
                      >
                        <span
                          className={`flag-icon flag-icon-Rp{country_code}`}
                        ></span>{" "}
                        {name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
      <header className="ajarmobil-main-header-area">
        <Container>
          <Row>
            <Col md={3}>
              <div className="site-logo">
                <a href="/">
                  <img src={Logo} alt="ajarmobil" />
                </a>
              </div>
            </Col>
            <Col lg={6} sm={9}>
              <div className="header-promo">
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img
                      src={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVEMjM2MkNBN0YwMTFFOUI2OTg4NDhDOTdGODQ2RkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVEMjM2MkRBN0YwMTFFOUI2OTg4NDhDOTdGODQ2RkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRUQyMzYyQUE3RjAxMUU5QjY5ODg0OEM5N0Y4NDZGRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRUQyMzYyQkE3RjAxMUU5QjY5ODg0OEM5N0Y4NDZGRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm45L+UAAAb0SURBVHjarJkJkI9l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"
                      }
                      alt="globe"
                    />
                  </div>
                  <div className="header-promo-info">
                    <h3>Jakarta, Indonesia</h3>
                    <p>Cilandak, Jakarta Selatan</p>
                  </div>
                </div>
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img
                      src={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjU5NzFGRjNBN0YwMTFFOUI4MDU4N0VDNEE5RjQwQkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjU5NzFGRjRBN0YwMTFFOUI4MDU4N0VDNEE5RjQwQkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNTk3MUZGMUE3RjAxMUU5QjgwNTg3RUM0QTlGNDBCRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNTk3MUZGMkE3RjAxMUU5QjgwNTg3RUM0QTlGNDBCRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq9RZT8AAAafSURBVHjavJgJTNZl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"
                      }
                      alt="clock"
                    />
                  </div>
                  <div className="header-promo-info">
                    <h3>Senin - Jumat</h3>
                    <p>9:00am - 6:00pm</p>
                  </div>
                </div>
              </div>
            </Col>
            <div className="col-lg-3">
              <div className="header-action">
                <Link to="/contact">
                  <FaPhoneAlt /> {t("request_call")}
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </header>
      <section className="ajarmobil-mainmenu-area">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="mainmenu">
                <nav>
                  <ul id="ajarmobil_navigation">
                    <li>
                      <Link to="/">{t("header-navigation.home")}</Link>
                    </li>

                    <li>
                      <Link to="/" onClick={onClick}>
                        {t("header-navigation.service")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/service">
                            {t("header-navigation.all_service")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/service-single">
                            {t("header-navigation.service_details")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        {t("header-navigation.cars")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/car-listing">
                            {t("header-navigation.car_listing")}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        Jadwal
                      </Link>
                      <ul>
                        <li>
                          <Link to="/schedule">Jadwal Pelatihan</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">
                        {t("header-navigation.contact")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">{t("header-navigation.about")}</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
            <Col lg={3} sm={12}>
              <div className="main-search-right">
                <MobileMenu />
                <div className="header-cart-box"></div>
                {/* <div className="search-box">
                  <form onSubmit={SubmitHandler}>
                    <input type="search" placeholder="Search" />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Header;
