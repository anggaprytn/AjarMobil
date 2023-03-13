import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />
      <PageTitle pageTitle={"Jadwal Pelatihan"} pagesub={"Jadwal Pelatihan"} />

      <Footer />
    </Fragment>
  );
};
export default ContactPage;
