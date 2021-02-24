import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  max-width: 1200px;
  height: 60px;

  top: 30px;
  position: relative;
  padding-right: 25px;

  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 25px;

  box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, 0.25);

  input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 25px;
    border-radius: 25px 0 0 25px;
    font: 400 16px Roboto, sans-serif;
  }

  input::placeholder {
    font-size: 16px;
    color: #c5c5c5;
    font: 400 16px Roboto, sans-serif;
  }

  svg {
    height: 35px;
    cursor: pointer;
  }
`
