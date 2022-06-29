// 모듈 임포트
import react,{ Fragment } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

// 컴포넌트 임포트
import Modal from '../Atoms/Modal'
import Slider from '../Atoms/Slider'

// 이미지 임포트
import flower from '../../Images/Hawaii/Flower.png'
import tree from '../../Images/Hawaii/Tree.png'
import sunset from '../../Images/Hawaii/Sunset.png'
import crown from '../../Images/Hawaii/FlowerCrown.png'


const Wrapper = styled.div`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Div = styled.span`
  position:fixed;
  bottom:10em;
`

function Main(){
  const modalState = useSelector((state)=>state.modal.modal)
    return (
          <Wrapper>
            <Div>
              {modalState? <Modal></Modal> : null}
            </Div>
            <Slider></Slider>
          </Wrapper>
    )
}

export default Main