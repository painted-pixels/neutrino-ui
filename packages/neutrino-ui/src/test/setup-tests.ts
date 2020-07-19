import { JSDOM } from "jsdom";

import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({
  adapter: new Adapter(),
});

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

(global as NodeJS.Global).window = window;
(global as NodeJS.Global).document = window.document;
(global as NodeJS.Global).navigator = {
  userAgent: "node.js",
};
