import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Avatar from "./Avatar"
import {Button} from '../Button'
import Footer from '../layouts/Footer'

//Avatars
import avatar1 from '../../avatars/avatar-1.png'
import avatar2 from '../../avatars/avatar-2.png'
import avatar3 from '../../avatars/avatar-3.png'
import avatar4 from '../../avatars/avatar-4.png'

const SpeakerList = () => {
    return (
    <MainContainer>
       <div className="container">
         <div className="row mx-auto justify-content-center">
          {/*Speaker 1*/}
            <div className="card col-md-6 p-2">
                <img src={avatar1} alt="" className="card-img-top mx-auto"/>
               <div className="card-body">
                  <h3 className="card-title text-center pb-2">
                     Bob Marley 
                  </h3>
                  <h5> Subject: <b>NODE JS</b></h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dicta ipsum hic eos maiores assumenda soluta quae, error rerum illum voluptas qui saepe nisi debitis tempora numquam dolore. Iste, tenetur!</p>
                  <Link to='/speaker/info/0'>
        <Button className="btn btn-primary text-uppercase">more info about speaker</Button>
                  </Link>
               </div>
            </div>
          {/*Speaker 2*/}
            <div className="card col-md-6 p-2">
                <img src={avatar2} alt="" className="card-img-top mx-auto"/>
               <div className="card-body">
                  <h3 className="card-title text-center pb-2">
                     Lauryn Hill
                  </h3>
                  <h5> Subject: <b>MONGO DB</b></h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dicta ipsum hic eos maiores assumenda soluta quae, error rerum illum voluptas qui saepe nisi debitis tempora numquam dolore. Iste, tenetur!</p>
                  <Link to='/speaker/info/1'>
        <Button className="btn btn-primary text-uppercase">more info about speaker</Button>
                  </Link>
               </div>
            </div>
          {/*Speaker 3*/}
            <div className="card col-md-6 p-2">
                <img src={avatar3} alt="" className="card-img-top mx-auto"/>
               <div className="card-body">
                  <h3 className="card-title text-center pb-2">
                     Sean Paul
                  </h3>
                  <h5> Subject: <b>ExpressJS</b></h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dicta ipsum hic eos maiores assumenda soluta quae, error rerum illum voluptas qui saepe nisi debitis tempora numquam dolore. Iste, tenetur!</p>
                  <Link to='/speaker/info/2'>
        <Button className="btn btn-primary text-uppercase">more info about speaker</Button>
                  </Link>
               </div>
            </div>
          {/*Speaker 3*/}
            <div className="card col-md-6 p-2">
                <img src={avatar4} alt="" className="card-img-top mx-auto"/>
               <div className="card-body">
                  <h3 className="card-title text-center pb-2">
                    Vybz Kartel
                  </h3>
                  <h5> Subject: <b>ReactJS</b></h5>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dicta ipsum hic eos maiores assumenda soluta quae, error rerum illum voluptas qui saepe nisi debitis tempora numquam dolore. Iste, tenetur!</p>
                  <Link to='/speaker/info/3'>
        <Button className="btn btn-primary text-uppercase">more info about speaker</Button>
                  </Link>
               </div>
            </div>
         </div>    
       </div>  
     <Footer />    
    </MainContainer>
    )
}

export default SpeakerList

const MainContainer = styled.div`
  background: var(--deep-dark-blue);
  @media (min-width: 768px) {
    .col-md-6 {
      max-width: 40% !important;
    }
  }

  .card {
    background: transparent !important;
    border: none;
  }

  h3 {
    color: var(--yummy-burgundy);
  }

  h5 {
    color: var(--tomato);
  }
  p {
    color: var(--orange);
  }

  .btn {
    background-color: Transparent;
    background-repeat: no-repeat;
    border-color: var(--dark-red);
    &:hover {
      background-color: #c34;
      border-color: var(--dark-red);
    }
    &:focus {
      background: var(--tomato) !important;
      border-color: var(--tomato) !important;
    }
  }`