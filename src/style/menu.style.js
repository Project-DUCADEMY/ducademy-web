import styled, { css } from "styled-components";

export const NewQMenus = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  > div {
    display: flex;
    width: 50%
  }
`;

export const NewQMenuSorted = styled.div`
  height: 50px;
  min-width: 80px;
  max-width: 130px;
  width: 25%;
  ${'' /* width: 130px; */}
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
  option{
    :hover{
      background:solid #3fe2a6;
    }
  }
`

