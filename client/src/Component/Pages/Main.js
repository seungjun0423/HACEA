// 모듈 임포트
import react,{ Fragment } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

// 컴포넌트 임포트
import Modal from '../Atoms/Modal'
import Slider from '../Atoms/Slider'

// 이미지 임포트


const Wrapper = styled.div`
  display:flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Div = styled.div`
  position:fixed;
  bottom:10em;
`
const Div2 = styled.div`
  width:100%;
`

function Main(){
  const modalState = useSelector((state)=>state.modal.modal)
    return (
          <Wrapper>
            <Div>
              {modalState? <Modal></Modal> : null}
            </Div>
            <Div2>
            <Slider></Slider>
            </Div2>
          </Wrapper>
    )
}

export default Main