import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

export const Aside = styled.aside`
  position: fixed;
  height: 100%;
  padding: 3.2rem 2.4rem;
  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 4.8rem;
  }

  a, button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    width: 4.8rem;
    height: 4.8rem;
    background: #12AFCB;
    border: 0;
    border-radius: 1.6rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: #17D6EB;
    }
  }
`

export const Main = styled.main`
  flex: 1;
`

export const OrphanageDetails = styled.div`
  width: 700px;
  margin: 64px auto;
  background: #FFFFFF;
  border: 1px solid #D3E2E5;
  border-radius: 2rem;
  overflow: hidden;

  > img {
    width: 100%;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(6 ,1fr);
    column-gap: 1.6rem;

    margin: 1.6rem 4rem 0;

    button {
      font-size: 1.8rem;
      height: 8.8rem;
      border: 0;
      background: none;
      border-radius: 2rem;
      outline: none;
      overflow: hidden;
      cursor: pointer;
      
      opacity: 0.6;

      &.active {
        opacity: 1;
      }

      img {
        width: 100%;
        height: 8.8rem;
        object-fit: cover;
      }
    }
  }
`

export const OrphanageDetailsContent = styled.div`
  padding: 8rem;

  h1 {
    font-size: 5.4rem;
    color: #4D6F80;
    line-height: 5.4rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.8rem;
    line-height: 28px;
    color: #5C8599;
    margin-top: 2.4rem;
  }

  .map-container {
    margin-top: 6.4rem;
    background: #E6F7FB;
    border: 1px solid #B3DAE2;
    border-radius: 2rem;

    footer {
      padding: 2rem 0;
      text-align: center;

      a {
        font-size: 1.8rem;
        line-height: 2.4rem;
        color: #0089A5;
        text-decoration: none;
      }
    }

    .leaflet-container {
      border-bottom: 1px solid #DDE3F0;
      border-radius: 2rem;
    }
  }

  hr {
    margin: 6.4rem 0;
    width: 100%;
    height: 1px;
    border: 0;
    background: #D3E2E6;
  }

  h2 {
    font-size: 3.6rem;
    line-height: 4.6rem;
    color: #4D6F80;
  }

  .open-details {
    margin-top: 2.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;

    div {
      padding: 3.2rem 2.4rem;
      border-radius: 2rem;
      line-height: 2.8rem;

      svg {
        display: block;
        margin-bottom: 2rem;
      }

      &.hour {
        font-size: 1.8rem;
        background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
        border: 1px solid #B3DAE2;
        color: #5C8599;
      }

      &.open-on-weekends {
        font-size: 1.8rem;
        background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
        border: 1px solid #A1E9C5;
        color: #37C77F;
      }
    }
  }
`

export const ButtonContact = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: #FFFFFF;
  width: 100%;
  height: 64px;
  margin-top: 64px;
  background: #3CDC8C;
  border: 0;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.2s;

  svg {
    margin-right: 1.6rem;
  }

  &:hover {
    background: #36CF82;
  }
`

