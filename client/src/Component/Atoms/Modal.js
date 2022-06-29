// 모듈 임포트
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// 부트스트랩 임포트
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// 카카오 로그인 버튼 임포트
import OauthButton from './Kakao';

// 액션 임포트 
import {modal} from '../../Redux/Slice/ModalSlice'

const Div = styled.div`
  display:flex;
  justify-content:center;
  box-sizing:content-box;
  z-index:2;
`

export default function BasicMadal() {
  const dispatch = useDispatch()
  return (
    <Div>
      <Modal.Dialog>
        <Div>
          <Modal.Header>
            <Modal.Title>로그인</Modal.Title>
          </Modal.Header>
        </Div>
        <Modal.Body>
          <OauthButton></OauthButton>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={()=>dispatch(modal(false))}>Close</Button>
      </Modal.Footer>
      </Modal.Dialog>
    </Div>
  );
}

