import styled from "styled-components";

export const Title = styled.h2`
  /* display : block; */
`;

export const SubName = styled.div`
  width: 190px;
  height: 100px;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-top: 10px;
  border-radius: 40%;
`;

export const Hr = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
`;

export const InfoEditContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
`;
export const PhotoChangeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 100px;
`;
export const DleteButton = styled.button`
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
  margin-left: 50px;
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
  margin-left: 50px;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #3fe2a6;
    color: white;
    transition-duration: 0.5s;
  }
`;
