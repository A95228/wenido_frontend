import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "./style.css";

import store from "./redux/store";
import App from "./App";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ'
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
