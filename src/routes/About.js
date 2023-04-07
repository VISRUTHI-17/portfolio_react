import React from 'react'
import Image2 from '../components/Image2';
import Education from '../components/Education';

const About = (props) => {
  return (
    <div>
      <Image2 button={props.work.click4}/>
      <Education/>
    </div>
  );
}

export default About;