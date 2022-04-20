import styled, { css } from "styled-components";

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



export const NewQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0px 15px 15px 15px;
  box-shadow: 4px 4px 15px 0px #0000001a;
  > div {
    padding:5px 30px 5px 20px;
    height: 60px;
    min-height: 60px;
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
