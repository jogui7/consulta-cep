import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  max-width: 900px;
  height: 60px;

  top: 30px;
  position: relative;

  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 25px;

  box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 1px 0px 7px 0px rgba(0, 0, 0, 0.25);

  form {
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
  }

  form input {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 25px;
    border-radius: 25px 0 0 25px;
    font: 400 16px Roboto, sans-serif;
    color: ${props => props.color};
  }

  form input::placeholder {
    font-size: 16px;
    color: #c5c5c5;
    font: 400 16px Roboto, sans-serif;
  }

  form button {
    height: 100%;
    border-radius: 0 25px 25px 0;
    border: none;
    background-color: white;
    padding: 0 25px;
    box-sizing: content-box;
    cursor: pointer;
  }

  button svg {
    height: 35px;
  }
`
