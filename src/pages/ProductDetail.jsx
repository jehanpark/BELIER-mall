import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
const Img = styled.img`
  width: 100%;
  border-radius: 3px;
`;
const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 22px;
  padding: 10px;
`;
const ProductTitle = styled.div`
  font-weight: 600;
`;
const ProductPrice = styled.div`
  font-size: 18px;
`;
const ProductChoice = styled.div``;
const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getProductDetail = async () => {
    const url = `http://localhost:3000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, [id]);
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product?.price);
  return (
    <Container>
      <Row>
        <Col>
          <Img src={product && product?.img} alt={product && product?.id} />
        </Col>
        <Col>
          <ProductDesc>
            {product && product?.size.lenth > 0 && 
            product?.size.map((item, index)=>(
              <Dropdown.Item key={index} href="#/action-1">
                {item}
              </Dropdown.Item>
            ))}
            <ProductTitle>상품명 : {product && product?.title}</ProductTitle>
            <ProductPrice>상품가격 : {product && formattedPrice}</ProductPrice>
            <ProductChoice>
              {product && product?.choice ? "Conscious choice" : ""}
              <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </ProductChoice>
            <Button variant="dark">장바구니</Button>
            <Button variant="danger">결제</Button>
          </ProductDesc>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductDetail;
