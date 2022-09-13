import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemOnePage from "../pages/ItemOnePage";
import ItemTwoPage from "../pages/ItemTwoPage";

function PagesRouter() {
  return (
    <Routes>
      <Route path="/" element={<ItemOnePage />} />
      <Route path="/ItemTwoPage" element={<ItemTwoPage />} />
    </Routes>
  );
}

export default PagesRouter;
