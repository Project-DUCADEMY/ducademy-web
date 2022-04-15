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
      <M.InfoTitle>정보 수정</M.InfoTitle>
      <M.Hr />
      <M.InfoEditContainer>
        <M.Photo>사진</M.Photo>

        <M.PhotoChangeButtonContainer>
          <M.Img src="default.jpeg"></M.Img>
          <M.PhotoChangeButtonContainer>
            {/* <M.Label htmlFor="file">사진 변경</M.Label>
            <M.InputFile type="file" id="image" accept="img/*" onChange={onLoadFile} id="file" /> */}

            {/* <form encType="multipart/form-data">
              <label htmlFor="file">이미지 업로드</label>
              <input type="file" id="file" accept="image/jpg, image/jpeg, image/png" />
            </form> */}

            {/* <h1>이미지 미리보기</h1> */}
            <table>
              <tbody>
                <tr>
                  <th>이미지</th>
                  <td>
                    <div>
                      {fileImage && (
                        <img
                          alt="sample"
                          src={fileImage}
                          style={{
                            width: "100px",
                            height: "85%",
                            objectFit: "cover",
                            marginTop: "10px",
                            borderRadius: "40%",
                          }}
                        />
                      )}
                      <div
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          name="imgUpload"
                          type="file"
                          accept="image/*"
                          onChange={saveFileImage}
                        />

                        <button
                          style={{
                            backgroundColor: "gray",
                            color: "white",
                            width: "55px",
                            height: "40px",
                            cursor: "pointer",
                          }}
                          onClick={() => deleteFileImage()}
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </M.PhotoChangeButtonContainer>
        </M.PhotoChangeButtonContainer>
      </M.InfoEditContainer>
    </div>
  );
};

export default ModeifyInformation;
