// 모듈 임포트
import styled from "styled-components"
import { Fragment } from 'react';
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
import Slider from './Atoms/Slider';

// 액션 임포트
import {modal} from '../Redux/Slice/ModalSlice'

const Div = styled.div`
  position: fixed;
  width: 120%;
  height: 3.7em;
  text-align: center;
  vertical-align: middle;
  background-color: #fff;
  display: flex;
  z-index:1000000;
`

const Div2 = styled.div`
  display: flex;
  position: fixed;
  top: 0.4em;
  right: 0;
`



export default function BasicNav() {
  const modalState = useSelector((state)=>state.modal.modal)
  const dispatch = useDispatch()
  console.log(modalState)

return (
      <Fragment>
        <Div>
          <Div2>
          <Navbar key='xxl'  expand='xxl'className="mb-3" fixed='top' >
          <Container fluid>
            <Navbar.Brand href="/">
              <h2>훌라 그리고 하와이</h2>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-xxl`} aria-labelledby={`offcanvasNavbarLabel-expand-xxl`} placement="end" >

              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`} >
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/introtuction" >소개</Nav.Link>
                <Nav.Link href="/shop">쇼핑하기</Nav.Link>
                <Nav.Link href="/lecture">강의실</Nav.Link>

                <NavDropdown title="커뮤니티" id={`offcanvasNavbarDropdown-expand-xxl`}>
                  <NavDropdown.Item href="#action4">1</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">2</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="함께하는 사람들" id={`offcanvasNavbarDropdown-expand-xxl`}>
                  <NavDropdown.Item href="#action3">할라우</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">선생님1</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">선생님2</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/"> 교류하기</Nav.Link>
                <Nav.Link onClick={()=>{dispatch(modal(!modalState));console.log(modalState)}} >로그인</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </Div2>
      </Div>
      </Fragment>
  );
}