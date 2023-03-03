import React from 'react'
import './Project.css';
import Image67 from '../assets/img2.png';


// const boxes = [
//   <Box text={text} image={Image67} />,
//   <Box text={text} image={Image67} />,
//   <Box text={text} image={Image67} />,
// ];

const Project = () => {
  return (
    <div className='carousel'>
      {/* <Carousel con={boxes}/> */}
    </div>
  );
}
const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

//   const Box = (props) =>{
//   return (
//     <div>
//       <img src={props.image} alt="carousel-image" />
//       <p>{props.text}</p>
//     </div>
//   );
// }

export default Project;