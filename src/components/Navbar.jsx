import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const HeaderTop = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 20px;
`;
const SearchIcon = styled.div`
  input {
    padding: 4px 6px;
    border: none;
    border-bottom: 1px solid #000;
    width: 150px;
    margin-left: 4px;
    &::placeholder {
      transition: all 0.3s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;
const Logo = styled.div`
  width: 200px;
  height: 50px;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const LoginAuthMenu = styled.div`
  cursor: pointer;
  span {
    margin-left: 10px;
  }
`;
const MenuArea = styled.div`
  ul {
    display: flex;
    gap: 20px;
  }
`;
const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "발매",
  "랭킹",
  "세일",
  "무탠 슈퍼세일",
];
const NavBar = ({ authentication, setAuthentication }) => {
  const navigate = useNavigate();
  const handleOnSearch = (e) => {
    if (e.key === "Enter") {
      console.log(e);
      navigate(`?q=${e.target.value}`);
    }
  };
  return (
    <Wrapper>
      <HeaderTop>
        <SearchIcon>
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            name=""
            id=""
            onKeyUp={handleOnSearch}
          />
        </SearchIcon>
        {authentication ? (
          <LoginAuthMenu
            onClick={() => {
              setAuthentication(false);
              navigate("/login");
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </LoginAuthMenu>
        ) : (
          <LoginAuthMenu onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuthMenu>
        )}
      </HeaderTop>
      <Logo>
        <Link to={"/"}>
          <img
            src="data:image/png;base64,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"
            alt="musinsa-logo"
          />
        </Link>
      </Logo>
      <MenuArea>
        <ul>
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#">{menu}</a>
            </li>
          ))}
        </ul>
      </MenuArea>
    </Wrapper>
  );
};
export default NavBar;