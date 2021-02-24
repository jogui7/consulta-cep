import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 56px;
    color: ${props => props.theme.colors.primary};
    padding: 75px 0;
  }

  .a {
    flex: 1;
    width: 100%;
    background-color: #fafafa;
    border-radius: 25px 25px 0;
  }
`
