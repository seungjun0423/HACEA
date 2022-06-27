// 모듈 임포트
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


// 컴포넌트 임포트 

// 이미지 임포트
import logo from '../Images/Logo/logo.png'



const Div = styled.div`
  width: 100vw;
  height: 7em;
  text-align: center;
  vertical-align: middle;
  position: fixed;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: left;
  box-sizing: border-box;
`

const Div2 = styled.div`
  display: flex;
  position: fixed;
  top: 1.5em;
  cursor:pointer;
  margin-left:2.5em;
`

const Div3 = styled.div`
  display: flex;
  position: fixed;
  top: 1.5em;
  cursor:pointer;
`

const Img = styled.img`
  width:8em;
  height:3em;
`

export default function Nav() {

  return(
    <Fragment>
      <Div>
        <Div2>
          <Link to='/'>
           <h1>훌라로 떠나는 하와이 여행</h1> 
          </Link>
        </Div2>
        
      </Div>
    </Fragment>
  )
}

