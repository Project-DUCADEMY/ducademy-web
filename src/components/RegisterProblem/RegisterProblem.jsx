import ReactQuill from 'react-quill';
import axios from 'axios';
import { useMemo, useRef, useState } from 'react';
import "react-quill/dist/quill.snow.css";

import styled from 'styled-components'

const Main = styled.div`
  width: 800px;
  background-color: grey;
  height: 850px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
`

const Wrapper = styled.div`
	width: 700px;
	height: 600px;
	overflow-y: scroll;
  background-color: white;
	&::-webkit-scrollbar {
		display: none;
	}
`
const InputTheme = styled.input`
  outline: none;
  border: 0; 
  box-shadow: 0 0 0 2px #C4C4C4;
  height: 25px;
  font-size: 14px;
`
const TitleInput = styled(InputTheme)`
  width: 480px;
`
const CategoryInput = styled(InputTheme)`
  width: 180px;
`
const TopInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
`
const BottomInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  height: 120px;
  flex-direction: column;
  align-items: flex-start;
`
const BottomInput = styled(InputTheme)`
  width: 300px;
`
const CommentInput = styled.textarea`
  width: 350px;
  resize: none;
  &:focus {
    outline: none;
  }
  outline: none;
  border: 0; 
  box-shadow: 0 0 0 2px #C4C4C4;
  font-size: 14px;
`
function ProblemResister() {
  const [value, setValue] = useState('');
  const quillRef = useRef();

  // 이미지 처리를 하는 핸들러
  const imageHandler = () => {
    console.log('에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!');

    // 1. 이미지를 저장할 input type=file DOM을 만든다.
    const input = document.createElement('input');
    // 속성 써주기
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    // input이 클릭되면 파일 선택창이 나타난다.

    // input에 변화가 생긴다면 = 이미지를 선택
    input.addEventListener('change', async () => {
      console.log('온체인지');
      const file = input.files[0];
      // multer에 맞는 형식으로 데이터 만들어준다.
      const formData = new FormData();
      formData.append('img', file); // formData는 키-밸류 구조
      // 백엔드 multer라우터에 이미지를 보낸다.
      try {
        const result = await axios.post('/problem/registerimg', formData);
        console.log('성공 시, 백엔드가 보내주는 데이터', result.data.url);
        const IMG_URL = result.data.url;
        // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
        // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
        // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.

        // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
        // 1. 에디터 root의 innerHTML을 수정해주기
        // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
        // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
        // editor.root.innerHTML =
        //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.

        // 2. 현재 에디터 커서 위치값을 가져온다
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range, 'image', IMG_URL);
      } catch (error) {
      	const editor = quillRef.current.getEditor(); 
      	const range = editor.getSelection();
        editor.insertEmbed(range, 'image', 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpZTvydV.png');
        alert('이미지 ')
      }
    });
  };

  // Quill 에디터에서 사용하고싶은 모듈들을 설정한다.
  // useMemo를 사용해 modules를 만들지 않는다면 매 렌더링 마다 modules가 다시 생성된다.
  // 그렇게 되면 addrange() the given range isn't in document 에러가 발생한다.
  // -> 에디터 내에 글이 쓰여지는 위치를 찾지 못하는듯
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['image'],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        ],
        handlers: {
          // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
          image: imageHandler,
        },
      },
    };
  }, []);
  // 위에서 설정한 모듈들 foramts을 설정한다
  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'image',
  ];

  // 이벤트 핸들러
  const onClickContents = () => {
    const editor = quillRef.current.getEditor();
    // console.log(quillRef.current);
    console.log(editor.root); // 에디터 안의 내용 HTML 태그
    // 현재 에디터 안에 어떤 데이터가 들어있는지 확인해 보자
    console.log(quillRef.current.getEditorContents());
  };

  return (
  <Main>
    <TopInputContainer>
      <TitleInput placeholder={"제목을 입력하세요"}/>
      <CategoryInput placeholder={"유형"}/>
    </TopInputContainer>
    <Wrapper>
      {/*<button onClick={onClickContents}>에디터 안의 내용들</button>*/}
      <ReactQuill
      	bounds= {'self'}
        ref={quillRef}
        theme='snow'
        placeholder='본문'
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
    </Wrapper>
    <TopInputContainer>
    <BottomInputContainer>
      <BottomInput/>
      <BottomInput/>
      <BottomInput/>
    </BottomInputContainer>
    <CommentInput></CommentInput>   
    </TopInputContainer>
  </Main>
  );
}

export default ProblemResister;