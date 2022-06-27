// 모듈 임포트
import react,{ Fragment } from 'react'
import styled from 'styled-components'

// 이미지 임포트
import flower from '../../Images/Hawaii/Flower.png'
import tree from '../../Images/Hawaii/Tree.png'
import sunset from '../../Images/Hawaii/Sunset.png'
import crown from '../../Images/Hawaii/FlowerCrown.png'


const Wrapper = styled.div`
  display:flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
`
const Back = styled.img`
  width:100%;
  height:100%;
`

function Main(){
    return (
          <Wrapper>
          <Back src={crown}></Back>
          <Back src={flower} ></Back>
          <Back src={tree}></Back>
          <Back src={sunset}></Back>
          </Wrapper>
    )
}

export default Main