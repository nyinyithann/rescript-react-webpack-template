// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as StyleModuleStyl from "./style.module.styl";
import RescriptBrandmarkSvg from "../../assets/brand/rescript-brandmark.svg";

var styles = StyleModuleStyl;

function string(prim) {
  return prim;
}

var make = RescriptBrandmarkSvg;

var ReLogo = {
  make: make
};

function App(Props) {
  return React.createElement("div", {
              className: styles.container
            }, React.createElement("div", undefined, React.createElement(make, {}), React.createElement("h1", undefined, "Hello, World!")));
}

var make$1 = App;

export {
  styles ,
  string ,
  ReLogo ,
  make$1 as make,
  
}
/* styles Not a pure module */
