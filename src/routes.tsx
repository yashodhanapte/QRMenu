import React from "react";
// import QRMenu from "./components/QRMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const QRMenu = React.lazy(() => import("./components/QRMenu"));

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QRMenu />} />
      </Routes>
    </BrowserRouter>
  );
}
