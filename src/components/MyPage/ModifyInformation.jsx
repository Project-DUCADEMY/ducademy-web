import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import React, { useEffect, FileInput } from "react";
import * as M from "./ModifyInformation.style";

const ModeifyInformation = () => {
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");

  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (
    <div>
      <M.Title>정보 수정</M.Title>
      <M.Hr />

      <M.InfoEditContainer>
        <M.SubName>사진</M.SubName>

        {/* 사진 박스 */}
        <div> {fileImage ? <M.Img src={fileImage} /> : <M.Img src="default.jpeg" />}</div>

        <M.PhotoChangeButtonContainer>
          <M.FileSelectContainer>
            <input
              type="file"
              id="imgUpload"
              accept="image/*"
              onChange={saveFileImage}
              style={{ display: "none" }}
            />
          </M.FileSelectContainer>

          <M.Label for="imgUpload">이미지 변경</M.Label>
          <M.DeleteButton onClick={() => deleteFileImage()}>삭제</M.DeleteButton>
        </M.PhotoChangeButtonContainer>
      </M.InfoEditContainer>

      <M.Title>내가 만든 문제</M.Title>
      <M.Hr />

      {/* <M.Title>나의 그룹</M.Title>
      <M.Hr /> */}
    </div>
  );
};

export default ModeifyInformation;
