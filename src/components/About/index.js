import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import signature from "../../img/signature.png";
import Img1 from "../../img/about.png";
import "./style.css";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="ajarmobil-about-area section_70">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about-left">
              <h4>{t("about_us_title")}</h4>
              <h2>{t("welcome_title")}</h2>
              <p>{t("about_text")}</p>
              <div className="about-list">
                <ul>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    {t("trusted_name")}
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    {t("deal_brands")}
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    {t("larger_stocks")}
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    {t("worldwide_location")}
                  </li>
                </ul>
              </div>
              <div className="about-signature">
                <div className="signature-left">
                  <img
                    src={
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAB4CAYAAADMtn8nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTVGNUQ1MDdEN0IzMTFFODk3MDREMzdERTQ2Mzg2M0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTVGNUQ1MDhEN0IzMTFFODk3MDREMzdERTQ2Mzg2M0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNUY1RDUwNUQ3QjMxMUU4OTcwNEQzN0RFNDYzODYzRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNUY1RDUwNkQ3QjMxMUU4OTcwNEQzN0RFNDYzODYzRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrUcChQAABmGSURBVHja7F0L2JVT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"
                    }
                    alt="signature"
                  />
                </div>
                <div className="signature-right">
                  <h3>Angga Priyatna</h3>
                  <p>{t("president")}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-right">
              <img src={Img1} alt="car" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
