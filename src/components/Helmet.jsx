import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import React from "react";

const Head = ({ title, desc, children }) => (
  <>
    <Helmet
      title={title}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: `description`,
          content: desc,
        },
      ]}
    />
    {children}
  </>
);

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  children: React.Component,
};
