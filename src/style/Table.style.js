import styled, { css } from "styled-components";

export const Container = styled.div`
  /* width:100vw; */

  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  /* height:3000px; */
  /* overflow-y:hidden; */
`;
export const temp = styled.div`
  width: 100%;
  height: 120px;
  background-color: white;
`;
export const Wrapper = styled.div`
  width: 85vw;
  /* height:100%; */
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items:center;
`;

export const MyQContainer = styled.div`
  width: 100%;

  height: 310px;
  overflow-x: scroll;
  /* margin-top:100px; */

  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-thumb {
    height: 17%;
    background: #c4c4c4;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-track {
    background: #f4f4f4;
    border-radius: 15px;
  }
`;
export const MyQWrapper = styled.div`
  margin: auto;
  background-color: white;
  width: fit-content;
  display: flex;
  align-items: center;
`;

export const tempMyQ = styled.div`
  height: 250px;
  width: 20px;
`;

export const MyQ = styled.article`
  width: 350px;
  height: 250px;
  cursor: pointer;
  ${(props) =>
    props.isNew
      ? css`
          box-shadow: 4px 4px 10px 0px #3fe2a6;
        `
      : css`
          box-shadow: 4px 4px 15px 0px #0000001a;
        `}
  margin-top: 7px;
  margin-right: 40px;
  border-radius: 20px;
  padding:5px 30px 10px 30px;
  box-sizing: border-box;
  position: relative;
  font-size: 15px;
  section {
    text-overflow: ellipsis;
    overflow: hidden;
    height: 180px;
    p {
      color: darkgray;
      line-height: 24px;
    }
  }
`;

export const PlusCard = styled.div`
  width: 350px;
  height: 250px;
  background-color: #3fe2a6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  box-shadow: 4px 4px 15px 0px #0000001a;

  > p {
    width: 170px;
    word-break: keep-all;
    line-height: 28px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  > img {
    width: 140px;
  }
`;

export const MyQFoot = styled.div`
  position: absolute;
  bottom: 2px;
  left: 0px;
  border-radius: 0px 0px 20px 20px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 30px;
  > div {
    box-shadow: 4px 4px 15px 0px #0000001a;
    border-radius: 20px;
    padding: 6px 20px 6px 20px;
    font-size: 13px;
    min-width: 26px;
    cursor: pointer;
    :hover {
      color: white;
      background-color: #3fe2a6;
    }
  }
`;

export const MyQFootMenu = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

// -----------------------------------

export const BridgeQ = styled.div`
  margin-top: 110px;
  width:100%;
  /* height:500px;  */
  border-radius:15px;
  box-sizing:border-box;
  box-shadow: 4px -4px 15px 0px #0000001a;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color: #3fe2a6;
  color:white;
  padding:20px 0px 20px 0px;
  > *{
    margin:10px 0px 20px 0px;
  }
  /* h1{
    margin-top:80px;
  }
  h2{
    margin-top:80px;
  } */
`

export const SearchContainer = styled.div`
  /* min-width:500px; */
  /* width:auto; */
  background-color:white;
  border-radius:15px;
  display:flex;
  align-items:center;
  input{
    height: 50px;
    width:400px;
    /* width:max-content; */
    font-size:17px;
    border-radius:15px;
    padding-left:30px;
    outline:none;
    border:none;
  }
  img{
    cursor:pointer;
    padding-right:10px;
  }
`

// -----------------------------------

export const NewQContainer = styled.div`
  width: 85vw;
  margin-top: 100px;
`;

export const NewQMenus = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
  }
`;

export const NewQMenuSorted = styled.div`
  height: 50px;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px 15px 0px 0px;

  ${(props) =>
    props.sortedBy
      ? css`
          box-shadow: 4px -4px 15px 0px #0000001a;
        `
      : css`
          :hover {
            background: #f4f4f4;
          }
        `}
  cursor:pointer;
  font-weight: bold;
  user-select: none;
`

export const NewQMenuSubject = styled.select`
  min-width:200px;
  height:40px;
  border-radius:10px;
  border:none;
  box-shadow: 4px 4px 15px 0px #0000001a;
  padding-left:15px;
  font-size:15px;
  position: relative;
  bottom:12px;
  outline:none;
  :hover{
    background-color: #f4f4f4;
  }
  :focus{
    border:solid #3fe2a6;
  }
`

export const NewQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0px 15px 15px 15px;
  box-shadow: 4px 4px 15px 0px #0000001a;
  > div {
    padding:5px 30px 5px 20px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  > div:hover {
    background: #f4f4f4;
  }
`;

export const NewQListMenu = styled.div`
  display: flex;
  align-items: center;
  width:55%;
`;
export const NewQListInfo = styled(NewQListMenu)`
  min-width: 240px;
  display:flex;
  justify-content:flex-end;
`;
export const NewQTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink:4;
`;

export const NewQInfoDate = styled.div`
  font-size: 15px;
  min-width: 99.1px;
`;
export const NewQInfoWriter = styled(NewQInfoDate)`
  margin-right: 40px;
`;
