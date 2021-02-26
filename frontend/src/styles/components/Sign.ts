import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  max-width: 900px;
  height: 100%;
  max-height: 450px;

  display: flex;
  flex-direction: column;

  border-radius: 25px;

  background-color: #0e0d87;

  box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, 0.25);

  p {
    font: 400 48px Roboto, sans-serif;
  }

  .upperContainer {
    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: center;

    flex: 3;
    padding: 30px 3%;

    color: #fff;
  }

  .upperContainer h1 {
    padding: 0;
    font: 400 78px Roboto, sans-serif;
    text-align: left;
  }

  hr {
    width: 100%;
    height: 10px;
    background-color: #fff;
    border: none;
  }

  .lowerContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex: 1;
    padding: 0 3%;

    border-radius: 0 0 25px 25px;

    background-color: #215fa8;
    color: #fff;
  }
`
