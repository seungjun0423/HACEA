// 모듈 임포트 
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

// 이미지 임포트 
import flower from '../../Images/Hawaii/Flower.png'
import crown from '../../Images/Hawaii/FlowerCrown.png'
import sunset from '../../Images/Hawaii/Sunset.png'

const Div = styled.div`
  display:flex;
  width:100%;
  height:100%;
  margin-top:3.7em;
  z-index:-1;
  margin-bottom:5em;
`
const AutoplaySlider = withAutoplay(AwesomeSlider);


export default function Slider (){
  return (
    <Div>
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
        <div data-src={flower} />
        <div data-src={crown} />
        <div data-src={sunset} />
      </AutoplaySlider>
    </Div>
  )
}
