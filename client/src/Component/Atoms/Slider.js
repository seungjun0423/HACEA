// 모듈 임포트 
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

// 이미지 임포트 
import Bikiny from '../../Images/Hawaii/Bikiny.png'
import Adventure from '../../Images/Hawaii/Adventure.png'
import Pink from '../../Images/Hawaii/Pink.png'
import Sunset from '../../Images/Hawaii/Sunset.png'
import Sunglasses from '../../Images/Hawaii/Sunglasses.png'
import Beach from '../../Images/Hawaii/Beach.png'


const Div = styled.div`
  display:flex;
  width:100%;
  height:100%;
  margin-top:3.7em;
  z-index:-1;
  margin-bottom:60em;


`
const AutoplaySlider = withAutoplay(AwesomeSlider);


export default function Slider (){
  return (
    <Div>
      <AutoplaySlider play={true} cancelOnInteraction={false} interval={3000}>
        <div data-src={Sunset} />
        <div data-src={Sunglasses} />
      </AutoplaySlider>
    </Div>
  )
}
