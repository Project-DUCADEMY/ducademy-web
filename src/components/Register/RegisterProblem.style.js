import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: calc(1150px - 52px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: 52px;
`;

export const Main = styled.div`
  width: 800px;
  height: 1050px;
  background-color: #fbfbfb;
  border: 1px solid #dcdcdc;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  box-shadow: 4px 4px 15px 0px #0000001a;
  border: none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

export const Wrapper = styled.div`
  width: 700px;
  height: 600px;
  overflow-y: scroll;
  background-color: white;
  &::-webkit-scrollbar {
    display: none;
  }
  > div {
    border-radius: 15px;
    border: none;
    outline:none;
    text-decoration:none;
  }
`;

export const InputTheme = styled.input`
  box-sizing: border-box;
  padding: 12px 10px;
  height: 35px;
  font-size: 14px;
  background-color: #ffffff;
  border: 1px solid #ccc;
  outline: none;
  transition: box-shadow ease-in-out 0.15s, border-color ease-in-out 0.15s;
  &:focus {
    box-shadow: 0 0 2px #c9c9c9;
    border-color: #bbb;
  }
`;
export const Inputs = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 20px;
  padding: 24px 20px;
  background-color: #eff1ee;
  border: 0px;
  outline: none;
`;
export const TitleInput = styled(InputTheme)`
  width: 100%;
  box-shadow: 4px 4px 15px 0px #0000001a;
  border-radius: 15px;
  border: none;
`;
export const CategoryInput = styled(InputTheme)`
  width: 180px;
`;
export const TopInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
`;
export const BottomInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  height: 120px;
  flex-direction: column;
  align-items: flex-start;
`;
export const BottomInput = styled(InputTheme)`
  width: 300px;
  box-shadow: 4px 4px 15px 0px #0000001a;
  border-radius: 15px;
  border: none;
`;
export const CommentInput = styled.textarea`
  resize: none;
  width: 350px;
  padding: 12px 10px;
  outline: none;
  border: 1px solid #ccc;
  font-size: 14px;
  transition: box-shadow ease-in-out 0.15s, border-color ease-in-out 0.15s;
  box-shadow: 4px 4px 15px 0px #0000001a;
  border-radius: 15px;
  border: none;
  &:focus {
    box-shadow: 0 0 2px #c9c9c9;
    border-color: #bbb;
  }
`;
export const ConfirmButton = styled.button`
  width: 230px;
  height: 65px;
  border-radius: 30px;
  border: none;
  background-color: #3fe2a6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: opacity ease-in-out 0.1s;
  color: white;
  margin: 10px auto;
  &:hover {
    opacity: 0.7;
  }
`;
