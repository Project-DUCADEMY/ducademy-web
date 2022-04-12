const hr = {
    width : "100%",
    height : "3px",
	backgroundColor: "black"
}

const img = {
    backgroundColor : "black",
    width : "80px",
    height : "80px",
    margin : "10px 0px 0px 6px"
}

// const img = styled.div`
//     backgroundColor:"black";
// `
    


const ModeifyInformation = () => {
    return(
        <div>
            <div><h2>정보 수정</h2></div>
            <div style={hr}></div>
            <div>
                <div><h3>사진</h3></div>
                <div style={img}></div>
                <img></img>
            </div>
            
        </div>
    )
}

export default ModeifyInformation;