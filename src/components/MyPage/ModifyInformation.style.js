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
  background-color: white;
  color: black;
  width: 55px;
  height: 40px;
  cursor: pointer;
  box-shadow: 4px 4px 15px 0px #0000001a;
  border-radius: 10px;
  border: none;
  border-color: gray;
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

// export const Label = styled.label`
//   display: flex;
//   padding: 10px 10px;
//   color: black;
//   background-color: white;
//   height: 20px;
//   border-color: black;
//   border: 1.5px solid lightgray;
//   font-size: 18px;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   :hover {
//     border-color: black;
//   }
// `;
