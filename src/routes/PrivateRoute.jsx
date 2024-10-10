import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true? <ProductDetail/> : <Navigate />
};

export default PrivateRoute;
