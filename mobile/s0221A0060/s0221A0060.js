
import React from "react";
import styled from 'styled-components';

<link href="https://fonts.googleapis.com/css?family=Apple+SD+Gothic+Neo&display=swap" rel="stylesheet"/>



const Container = styled.div`



  .wrap {

    width: 100%;
    height: 100%;

  }
  
  .inner{

    width: 85%;
    margin: 0 auto;
    position: relative;

  }


  .backBtn {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 37px;
    overflow: hidden;
  }

  .backBtn>img {
    width: 100%;
  }

  .title {
    width: 172px;
    height: 40px;
    position: absolute;
    top: 96px;
    overflow: hidden;
  }


  .hightlight {
    width: 113px;
    height: 19px;
    background: rgba(252, 242, 0, 0.9599999785423279);
    opacity: 1;
    position: absolute;
    top: 21px;
  }

  .title>span {
    width: 172px;
    color: rgba(29, 29, 29, 1);
    position: absolute;
    top: 0px;
    left: 0px;
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    font-size: 33px;
   
  }

  .btn-wrap{

    width: 85%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    
  }

  .requestBtn{

    width: 140px;
    height: 50px;
    background-color: #00878d;
    border-radius: 50px;
    text-align: center;
    color: white;
    font-size: 21px;
    font-weight: 500;
    line-height: 50px;
    font-family: Apple SD Gothic Neo;
  }

  .delBtn {
    width: 140px;
    height: 50px;
    background: rgba(226, 56, 56, 1);
    border-radius: 50px;
    color: rgba(255, 255, 255, 1);
    font-family: Apple SD Gothic Neo;
    font-weight: 500;
    font-size: 21px;
    text-align: center;
    line-height: 50px;
  }

  .form{
    width: 100%;
    position: absolute;
    top: 170px;
  }

  .inputWrap{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 7%;
    position: relative;
  }

  .label{
    font-family: Apple SD Gothic Neo;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }

  input{
    width: 70%;
    border: none;
    border-bottom: 3px solid #707070;
  }

  select{

    width: 70%;
    border: none;
    border-bottom: 3px solid #707070;
  }

  textarea{

    width: 100%;
    height: 50%;
    border-radius: 20px;
    border: 3px solid #707070;
    margin-top: 10px;
    resize: none;
    font-family: Apple SD Gothic Neo;
    font-size: 14px;
  }

  .won, .searchBtn, .addBtn{
    position: absolute;
    right: 0;
  }

  .won{
    font-family: Apple SD Gothic Neo;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }

  .searchBtn{
    width: 22px;
    height: 22px;
    margin-top: -5px;
  }

  .searchBtn>img{
    width: 100%;
  }

  .addBtn{
    width: 22px;
    height: 22px;
    background-color: #00878d;
    border-radius: 50px;
    margin-top: -5px;
  }
  .addBtn>img{
    width: 80%;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5px;
   
  }

  input:focus{
    outline:none;
  }

  textarea:focus{
    outline:none;
  }
 

  



`


const s0221A0060 = () => {
  return (
      <Container>

        <div class="wrap">
        <div class="inner">


          <div class="backBtn">
            <img src="./images/backBtnIcon.png"></img>
          </div>
          

          <div class="title">
            <div class="hightlight"></div><span>????????????</span>
          </div>

          <div class="form">

            <div class="inputWrap">

              <div class="label">??????</div>

              <input></input>

            </div>

            <div class="inputWrap">

              <div class="label">??????</div>

              <select></select>

            </div>

            <div class="inputWrap">

              <div class="label">????????????</div>
              <div class="searchBtn"><img src="./images/magnifying-glass.png"></img></div>

              <input></input>

            </div>

            <div class="inputWrap">

              <div class="label">????????????</div>
              
              <input></input>
              <div class="won">???</div>

            </div>

            <div class="inputWrap">

              <div class="label">????????????</div>
              <div class="addBtn"><img src="./images/plus.png"></img></div>

              <input></input>

            </div>

            <div class="textfieldWrap">
              <div class="label">????????????</div>
              <textarea></textarea>
            </div>

          </div>





        </div>

        <div class="btn-wrap">

          <div class="requestBtn">????????????</div>
          <div class="delBtn">??????</div>

        </div>



        </div>

  </Container>
  );
}

export default s0221A0060;




