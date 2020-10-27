import styled from 'styled-components'
import { Link } from 'react-router-dom'

import landing from './../../assets/images/landing.svg'

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 3rem 0;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
`

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 110rem;
  height: 100%;
  max-height: 68rem;
  background: url(${ landing }) no-repeat 80% center;
  background-size: contain;
`

export const Header = styled.header`
  max-width: 35rem;

  h1 {
    font-size: 7.6rem;
    font-weight: 900;
    line-height: 7rem;
  }
 
  p {
    font-size: 2.4rem;
    line-height: 3.4rem;
    margin-top: 4rem;
  }
`

export const Location = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  font-size: 2.4rem;
  line-height: 3.4rem;
  text-align: right;

  strong {
    font-weight: 800;
  }
`

export const EnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  text-decoration: none;
  width: 8.8rem;
  height: 8.8rem;
  background-color: #FFD666;
  border-radius: 3rem;
  transition: background-color .2s;

  &:hover {
    background-color: #96FEFF;
  }
`
