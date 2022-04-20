import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import axios from "axios";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

import * as R from "./Register.style";

// const Main = styled.div`
//   width: 950px;
//   background-color: grey;
//   height: 700px;
//   display: flex;
//   flex-direction: column;
//   align-content: center;
//   align-items: center;
//   justify-content: space-evenly;
// `;
// const TextEditorWrapper = styled.div`
//   border: 2px solid gray;
//   padding: 2px;
//   width: 900px;
//   height: 600px;
//   background-color: white;
// `;
// const InputTheme = styled.input`
//   outline: none;
//   border: 0;
//   box-shadow: 0 0 0 2px #c4c4c4;
//   height: 25px;
//   font-size: 14px;
// `;
// const TitleInput = styled(InputTheme)`
//   width: 580px;
// `;
// const CategoryInput = styled(InputTheme)`
//   width: 280px;
// `;
// const InputContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 900px;
// `;
// const IntroduceContent = styled.div`
//   position: relative;
//   border: 0.0625rem solid #d7e2eb;
//   border-radius: 0.75rem;
//   overflow: hidden;
//   padding: 1.5rem;
//   width: 50%;
//   margin: 0 auto;
//   margin-bottom: 4rem;
// `;
const uploadImg = (file) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: {
        link: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpZTvydV.png",
      },
    });
  });
};

//{"data": {"link": "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpZTvydV.png"}})
const ResisterProblem = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );
  return (
    <P.Main>
      <P.InputContainer>
        <P.TitleInput
          placeholder={"제목을 입력하세요"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <P.CategoryInput placeholder={"분류"} />
      </P.InputContainer>
      <P.TextEditorWrapper>
        <Editor
          placeholder={"내용을 입력하세요"}
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: uploadImg,
              alt: { present: true, mandatory: false },
            },
          }}
        />
      </P.TextEditorWrapper>
      <P.InputContainer>
        <P.CategoryInput />
        <P.CategoryInput />
        <P.CategoryInput />
      </P.InputContainer>
      <P.IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml }} />
    </P.Main>
  );
};

export default ResisterProblem;
