import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  //cant use async await directly in useeffect, need a separate function
  useEffect(() => {
    dispatch(listProducts());
    //if localhost:5000 added here we would get a cors error so we need a proxy in package.json on fe
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
