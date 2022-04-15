import { useState } from 'react';
import styled from 'styled-components'
import * as M from "./ModifyInformation.style";

const ModeifyInformation = () => {
    const [files,setfiles] = useState('');

    const onLoadFile = (e) =>{
        const file = e.target.files;
        console.log(file);
        setfiles(file);
    }

    return(
        <div>
            <M.InfoTitle>정보 수정</M.InfoTitle>
            <M.Hr/>       
            <M.InfoEditContainer>
                {/* <M.Photo>사진</M.Photo>
                
                <M.Img src="default.jpeg"></M.Img>
                <M.PhotoChangeButtonContainer>
                    <M.Label htmlFor="file">사진 변경</M.Label> 
                    <M.InputFile type="file" onClick={(e) => console.log(e.target)} id="file"/>
                </M.PhotoChangeButtonContainer> */}

                <div className="upload_wrap">
                    <div className="custom_img">
                        <strong>업로드된 이미지</strong>
                        <div className="img_wrap">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <form className="upload_input">
                        <input type="file" id="image" accept="img/*" onChange={onLoadFile}/>
                        <label htmlFor="imgae">파일 선택하기</label>
                    </form>
                </div>
            </M.InfoEditContainer>
            
        </div>
    )
}

export default ModeifyInformation;