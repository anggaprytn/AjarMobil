import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

import img1 from "../../img/about-page.jpg";
import img2 from "../../img/cars.png";

import "./style.css";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-page-area section_70">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="about-page-left">
                <h4>{t("about_page.subtitle")}</h4>
                <h3>{t("about_page.title")}</h3>
                <p>
                  AjarMobil adalah sebuah startup yang berfokus pada
                  pembelajaran mengemudi dengan tujuan menciptakan masa depan
                  berkendara yang lebih aman dan efisien. Kami menawarkan kursus
                  stir mobil yang komprehensif dan berkualitas tinggi dengan
                  pendekatan belajar yang interaktif dan efektif. Setiap kursus
                  kami dirancang dan diajarkan oleh instruktur ahli dengan
                  pengalaman bertahun-tahun di bidangnya. Kami berkomitmen untuk
                  menyediakan pengalaman belajar yang menyenangkan, mudah
                  diikuti, dan berorientasi pada hasil untuk meningkatkan
                  keterampilan dan kepercayaan diri Anda dalam mengemudi.
                </p>
                <p>
                  Kursus stir mobil kami dilengkapi dengan simulasi dan latihan
                  di lapangan untuk memastikan bahwa Anda siap menghadapi
                  berbagai situasi di jalan. Kami menyediakan lingkungan belajar
                  yang aman dan nyaman, dengan mobil-mobil yang dilengkapi
                  dengan teknologi terbaru dan berkualitas tinggi. Selain itu,
                  kami juga menyediakan materi pelajaran yang terus diperbarui
                  untuk mencakup peraturan lalu lintas terbaru dan teknologi
                  pengemudi yang sedang berkembang. Bergabunglah dengan
                  AjarMobil sekarang dan jadilah pengemudi yang handal, aman,
                  dan percaya diri di jalan raya.
                </p>
                <div className="about-page-call">
                  <div className="page-call-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="call-info">
                    <p>{t("need_any_help")}</p>
                    <h4>
                      <a href="tel:12435424">(021) 234 5678</a>
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-page-right">
                <img src={img1} alt="about page" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="ajarmobil-about-promo section_70">
        <Container>
          <Row>
            <Col md={12}>
              <div className="about-promo-text">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: t("about_page.proud_title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                ></h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="about-promo-image">
                <img src={img2} alt="about promo" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
