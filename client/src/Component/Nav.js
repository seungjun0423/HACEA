// 모듈 임포트
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { Fragment } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// 아톰즈 임포트


const Div = styled.div`
  width: 100vw;
  height: 3.5em;
  border: 0.01em solid #000;
  text-align: center;
  vertical-align: middle;
  position: fixed;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

const Div2 = styled.div`
  display: flex;
  position: fixed;
  top: 0.4em;
  right: 0;
`

export default function Nav() {
  let select = useSelector(state => state)
  const dispatch = useDispatch()

  return(
    <Fragment>
      <Div>
        <Div2>

        </Div2>
      </Div>
    </Fragment>
  )
}

