import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import logo from './../../assets/images/logo.svg'
import { Container, Content, Header, Location, EnterApp } from './style'

export const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={ logo } alt="Happy" title="Happy"/>

        <Header>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </Header>

        <Location>
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </Location>

        <EnterApp to="/app">
          <FiArrowRight size={ 26 } color="rgba(0, 0, 0, .6)"/>
        </EnterApp>
      </Content>
    </Container>
  )
}
