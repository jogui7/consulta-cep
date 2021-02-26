import styled from 'styled-components'

interface ContainerProps {
  searchBarStyle: string
}

export const Container = styled.div<ContainerProps>`
  width: 70%;
  max-width: 900px;
  height: 60px;

  top: 30px;
  position: relative;

  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: ${props =>
    props.searchBarStyle === 'error' ? '2px solid #db2323' : 'none'};
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
    color: ${props => (props.searchBarStyle === 'error' ? '#db2323' : '#000')};
  }

  form input::placeholder {
    font-size: 16px;
    color: ${props =>
      props.searchBarStyle === 'error' ? '#db2323' : '#c5c5c5'};
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

  button svg path {
    height: 35px;
    stroke: ${props =>
      props.searchBarStyle === 'error' ? '#db2323' : '#c5c5c5'};
  }
`
