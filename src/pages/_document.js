"use client";
import { Html, Head, Main, NextScript } from "next/document";
import { useContext } from "react";
import { ThemeContext } from "../../components/contextApi/ThemeContext";
export default function Document() {
  // const { theme } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
