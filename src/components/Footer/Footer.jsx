import React, { Component } from "react";
import Benefits from "./Benefits";
import MainFooter from "./MainFooter";
import FooterBottom from "./FooterBottom";

export default class Footer extends Component {
  render() {
    return (
      // p-105px is a custom class
      <footer className="container mx-auto pt-105px pb-10 px-4 lg:px-0">
        <Benefits />
        <hr />
        <MainFooter />
        <hr />
        <FooterBottom />
      </footer>
    );
  }
}
