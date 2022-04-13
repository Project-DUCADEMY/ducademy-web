import styled from 'styled-components'
import * as M from "./ModifyInformation.style";

const ModeifyInformation = () => {
    return(
        <div>
            <M.InfoTitle>정보 수정</M.InfoTitle>
            <M.Hr/>       
            <M.InfoEditContainer>
                <M.Photo>사진</M.Photo>
                <M.Img src="default.jpeg"></M.Img>
                <M.PhotoChangeContainer><M.PhotoChange>사진 변경</M.PhotoChange></M.PhotoChangeContainer>
            </M.InfoEditContainer>
            
        </div>
    )
}

export default ModeifyInformation;