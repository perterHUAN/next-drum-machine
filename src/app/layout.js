import React from "react";

import Header from "../components/Header";

import "./styles.css";
import Wrapper from "../components/Wrapper";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
        <footer>
          <img src="/ie-badge.gif" width={100} />
          <span>Thanks for visiting!</span>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
