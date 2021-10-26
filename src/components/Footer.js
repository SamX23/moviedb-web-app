import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { styled } from "@material-ui/core/styles";

export default function Footer() {
  const thisYear = new Date().getFullYear();
  const FooterContainer = styled(Box)({
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    textAlign: "center",
    padding: "5px",
    backgroundColor: "#3a6073",
    "& a": {
      color: "#f40056",
      textDecoration: "none",
    },
  });

  return (
    <FooterContainer>
      <Typography variant="body1">
        Made with{" "}
        <span role="img" aria-label="love">
          ♥️
        </span>{" "}
        by
        <Link href="https://samx23.github.io"> Sami Kalammallah</Link> ©{" "}
        {thisYear}
      </Typography>
    </FooterContainer>
  );
}
