import styled from 'styled-components'

export const Aside = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 3.2rem 2.4rem;
  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);


  img {
    width: 4.8rem;
  }

  a, button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    background: #12AFCB;
    border: 0;
    border-radius: 1.6rem;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background: #17D6EB;
    }
}
`
