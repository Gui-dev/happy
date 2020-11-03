import styled from 'styled-components'

export const Container = styled.section`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;

  .leaflet-container {
    z-index: 2
  }

  .create-orphanage {
    position: absolute;
    right: 4rem;
    bottom: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.4rem;
    height: 6.4rem;
    background-color: #15C3D6;
    border-radius: 2rem;
    transition: background-color 0.2s;
    z-index: 3;

    &:hover {
      background-color: #17D6ED;
    }
  }

  .map-popup .leaflet-popup-content-wrapper {
    background-color: rgba(255, 255, 255, .8);
    border-radius: 2rem;
    box-shadow: none;
  }
  
  .map-popup .leaflet-popup-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: bold;
    color: #0089A5;
    margin: 0.8rem 1.2rem;
  }

  .map-popup .leaflet-popup-content a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    background-color: #15C3D6;
    box-shadow: 1.7rem 2.7rem 4.1rem rgba(23, 142, 166, 0.16);
    border-radius: 1.2rem
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`

export const SideBar = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 44rem;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  padding: 8rem;

  header h1 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 4.2rem;
    margin-top: 6.4rem;
  }

  header p {
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.8rem;
    margin-top: 2.4rem;
  }

  footer {
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;

    strong {
      font-size: 1.8rem;
      font-weight: 800
    }

    span {
      font-size: 1.8rem;
      font-weight: 600
    }
  }
`
