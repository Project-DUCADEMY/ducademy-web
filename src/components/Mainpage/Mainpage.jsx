import * as M from "./Mainpage.style"
import {useState,useEffect} from "react"

import Carousel from "./CarouselSmall"


// import leftArrow from "assets/image/leftArrow"
// import right from "assets/image/rightArrow"

// import leftArrowN from "../../assets/image/leftArrow1N.svg"
import leftArrowN from "../../assets/image/mainPage/leftArrow1Y.svg"

// import rightArrowN from "../../assets/image/rightArrow1N.svg"
import rightArrowN from "../../assets/image/mainPage/rightArrow1Y.svg"

import exam from "../../assets/image/mainPage/exam.svg"
import group from "../../assets/image/mainPage/group.svg"
import note from "../../assets/image/mainPage/note.svg"
import question from "../../assets/image/mainPage/question.svg"
import quiz from "../../assets/image/mainPage/quiz.svg"
import quizzes from "../../assets/image/mainPage/quizzes.svg"

const Mainpage = () => {
	

	const [explains,setExplains] = useState([
		{
			id:1,
			link:"problems",
			comment:"원하는 분야/ 수준의 문제를 찾아 풀어보세요",
			img:exam
		},{
			id:2,
			link:"workbook",
			comment:"문제집을 풀어보세요",
			img:group
		},{
			id:3,
			link:"note",
			comment:"문제에 대해 나만의 노트를 만들어보세요",
			img:note
		},{
			id:4,
			link:"exam",
			comment:"제한시간안에 문제를 풀어보세요",
			img:question
		},{
			id:5,
			link:"QandA",
			comment:"모르는 문제를 물어보세요",
			img:quiz
		},{
			id:6,
			link:"group",
			comment:"그룹을 만들어 함께 공부하세요",
			img:quizzes
		}
	])
	
	return (
		
		<M.MainContainer>
			
		<Carousel/>

<M.Content>
	{
		explains.map((i,idx) => (
			<M.explains 
			key={i.id} 
			to={i.link} 
			isFloat={idx % 2 == 0?true:false}>
				{
					<>
					<div>
					<h1>{i.comment}</h1>
					<p>천재가 알려줍니다</p>
					</div>
					<img src={i.img}/>
					</>
				}
			</M.explains>			
		))
	}
</M.Content>
<M.Temp/>

		</M.MainContainer>

		
	)
}

export default Mainpage;