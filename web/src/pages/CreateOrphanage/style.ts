import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Main = styled.main`
  flex: 1;
`

export const Form = styled.form`
  padding: 6.4rem 8rem;
  margin: 6.4rem auto;
  width: 700px;
  background: #FFFFFF;
  border: 1px solid #D3E2E5;
  border-radius: 2rem;
  overflow: hidden;

  fieldset {
    border: 0;
  }

  fieldset + fieldset {
    margin-top: 8rem;
  }

  legend {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 3.4rem;
    color: #5C8599;
    padding-bottom: 2.4rem;
    margin-bottom: 4rem;
    width: 100%;
    border-bottom: 1px solid #D3E2E5;
  }
`

export const InputBlock = styled.div`

  & + & {
    margin-top: 2.4rem;
  }

  label {
    font-size: 1.8rem;
    display: flex;
    line-height: 2.4rem;
    color: #8FA7B3;
    margin-bottom: 0.8rem;
  }

  span {
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: #8FA7B3;
    margin-left: 2.4rem;
  }

  input, textarea {
    font-size: 1.8rem;
    color: #5C8599;
    width: 100%;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    border-radius: 2rem;
    outline: none;
  }

  input {
    height: 6.4rem;
    padding: 0 1.6rem;
  }

  textarea {
    padding: 1.6rem;
    line-height: 2.8rem;
    min-height: 12rem;
    max-height: 24rem;
    resize: vertical;
  }

  .new-image {
    width: 100%;
    height: 6.4rem;
    background: #F5F8FA;
    border: 1px dashed #96D2F0;
    border-radius: 2rem;
    cursor: pointer;
  }

  .button-select {
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
      height: 6.4rem;
      background: #F5F8FA;
      border: 1px solid #D3E2E5;
      color: #5C8599;
      cursor: pointer;

      &.active {
        background: #EDFFF6;
        border: 1px solid #A1E9C5;
        color: #37C77F;
      }

      &:first-child {
        border-radius: 2rem 0px 0px 2rem;
      }

      &:last-child {
        border-radius: 0 2rem 2rem 0;
        border-left: 0;
      }
    }
  }
`

export const ButtonSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6.4rem;
  font-weight: 800;
  color: #FFFFFF;
  width: 100%;
  height: 6.4rem;
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
