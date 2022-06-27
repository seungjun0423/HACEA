// 모듈 임포트
import styled from "styled-components"

// 이미지 임포트
import instar from '../Images/SNS/instartgramlogo.png'
import youtube from '../Images/SNS/youtubelogo.png'

const Div = styled.div`
width: 100vw;
height: 8em;
border-top: 0.001em solid #000;
display: flex;
justify-content: space-around;
align-items: center;
`


const Logo = styled.img`
  width:3em;
  height: 3em;
  cursor: pointer;
`

export default function Footer() {
  return(
    <Div>
      <p>
        하와이문화교류협회  |  고유번호 : 258-80-00237  |  대표자 : 김보희  010-7304-2013<br></br>
        주소 : (06683) 서울시 서초구 방배로15길 13 지층 (동광빌딩)<br></br>
        Copyright © 하와이문화교류협회.
      </p>
      <Logo src={instar} >       
      </Logo>
    </Div>
  )
}


