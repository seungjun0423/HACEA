// 모듈 임포트
import styled from "styled-components"
import { Link } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'

// 부트스트랩 임포트 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

// 컴포넌트 임포트
import Madal from './Atoms/Modal';

import {modal} from '../Redux/Slice/ModalSlice'
import { Fragment } from 'react';

const Div = styled.div`
  width: 100vw;
  height: 3.22em;
  text-align: center;
  vertical-align: middle;
  position: fixed;
  background-color: #fff;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items:center;
`


export default function BasicNav() {
  const modalState = useSelector((state)=>state.modal.modal)
  const dispatch = useDispatch()
  console.log(modalState)

return (
  <Fragment>
        <Div>
          <Navbar key='xxl'  expand='xxl'className="mb-3" fixed='top'>
          <Container fluid>
            <Navbar.Brand href="/">훌라로 떠나는 하와이 여행</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-xxl`} aria-labelledby={`offcanvasNavbarLabel-expand-xxl`} placement="end">

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/talk">게시판</Nav.Link>
                <Nav.Link href="/lecture">강의실</Nav.Link>
                <NavDropdown title="함께하는 사람들" id={`offcanvasNavbarDropdown-expand-xxl`}>
                  <NavDropdown.Item href="#action3">할라우</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">선생님1</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">선생님2</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link onClick={()=>{dispatch(modal(!modalState));console.log(modalState)}} >로그인</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </Div>
      </Fragment>
  );
}