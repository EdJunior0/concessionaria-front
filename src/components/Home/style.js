import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 200px;

  .card {
    background-color: #180f0f80;
    padding: 50px;
    border-radius: 4%;
    box-shadow: 3px 3px 1px 0px;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: rgb(230, 230, 230);
  }

  .label-float input {
    width: 100%;
    padding: 5px 5px;
    display: inline-block;
    border: 0;
    color: #ffffff;
    border-bottom: 2px solid rgb(230, 230, 230);
    background-color: rgb(81, 81, 81);
    outline: none;
    min-width: 180px;
    font-size: 16px;
    transition: all 0.3s ease-out;
  }

  .label-float {
    position: relative;
    padding-top: 13px;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .label-float input:focus {
    border-bottom: 2px solid rgb(234, 234, 234);
  }

  button {
    background-color: rgb(81, 81, 81);
    border-color: #6c6c6c;
    color: #ffffff;
    padding: 7px;
    font-weight: bold;
    font-size: 12pt;
    margin-top: 20px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: all 0.3s ease-out;
    width: 200px;
  }

  button:hover {
    background-color: #6c6c6c;
    color: #ffffff;
  }

  .justify-center {
    display: flex;
    justify-content: center;
  }

  hr {
    margin-top: 10%;
    margin-bottom: 10%;
    width: 60%;
  }

  p {
    color: #9c9c9f;
    font-size: 14pt;
    text-align: center;
  }

  a {
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease-out;
  }

  a:hover {
    color: #9c9c9f;
  }
`;
