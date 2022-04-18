import { useState } from "react";
import styled from "styled-components";
import React, { useEffect } from "react";
import * as MI from "./ModifyInformation.style";
import * as P from "./Public.style";

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
      <P.Title>정보 수정</P.Title>
      <P.Hr />

      <P.Container>
        <P.SubName style={{ height: "120px" }}>사진</P.SubName>

        {/* 사진 박스 */}
        <div> {fileImage ? <MI.Img src={fileImage} /> : <MI.Img src="default.jpeg" />}</div>

        <MI.PhotoChangeButtonContainer>
          <MI.FileSelectContainer>
            <input
              type="file"
              id="imgUpload"
              accept="image/*"
              onChange={saveFileImage}
              style={{ display: "none" }}
            />
          </MI.FileSelectContainer>

          <MI.Label for="imgUpload">이미지 변경</MI.Label>
          <MI.DeleteButton onClick={() => deleteFileImage()}>삭제</MI.DeleteButton>
        </MI.PhotoChangeButtonContainer>
      </P.Container>
    </div>
  );
};

export default ModeifyInformation;
