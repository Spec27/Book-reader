import styled from "styled-components";

export const Container = styled.div`
  width: 330px;
  background: #fff;
  margin: 60px 4px 0 0;
  top: 0;
  right: 0;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  padding: 15px;
  position: fixed;
  z-index: 100;

  @media screen and (min-width: 280px) and ( max-width: 320px) {
    width: 88vw;
  }
`;

// export const Background = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 9;
//   display: none;
//   background: transparent;

//   background-color: rgba(0, 0, 0, 0.4);
// `;

export const ListMenu = styled.div`
  list-style: none;
  padding: 10px;
  display: flex;
  align-items: center;
  // justify-content: center;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    background: #c4c4c4;
  }
`;

export const Hr = styled.div`
  height: 1px;
  background: #212121;
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Svg = styled.svg`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: tomato;
  margin: 0 8px 0 0;
`;

export const User = styled.span`
  height: 14px;
  width: 7px;
  display: block;
  padding: 12px 15px;
  background: #f5f7fa;
  border-radius: 50%;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.214;
  color: #242a37;
`;

export const Button = styled.button`
  margin-left: 180px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  &:hover {
    background-color: tomato;
  }
`;
