import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 48px;
    color: ${props => props.theme.colors.primary};
    padding: 70px 0 40px;
    text-align: center;
  }

  .resultContainer {
    flex: 1;
    width: 100%;

    padding: 50px 0 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fafafa;
    border-radius: 25px 25px 0 0;
  }
`
