import styled from "styled-components";

//정보 수정
export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-top: 10px;
  border-radius: 40%;
`;

export const PhotoChangeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 100px;
`;

export const DeleteButton = styled.button`
  display: flex;
  font-size: 15px;
  background-color: white;
  color: black;
  width: 55px;
  height: 40px;
  cursor: pointer;
  box-shadow: 4px 4px 15px 0px #0000001a;
  border-radius: 10px;
  border: none;
  border-color: gray;
  margin-left: 30%;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: red;
    color: white;
    transition-duration: 0.5s;
  }
`;

export const FileSelectContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 15px;
  display: flex;
  background-color: white;
  color: black;
  width: 100px;
  height: 40px;
  cursor: pointer;
  box-shadow: 4px 4px 15px 0px #0000001a;
  border-radius: 10px;
  border: none;
  border-color: gray;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #3fe2a6;
    color: white;
    transition-duration: 0.5s;
  }
`;
