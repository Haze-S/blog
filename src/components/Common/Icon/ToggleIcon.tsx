import styled from '@emotion/styled'
import CommonStyle from '../../../styles/CommonStyle'
import { FunctionComponent } from 'react'

const ToggleIcon: FunctionComponent = function () {
  return (
    <Container>
      <Line />
      <Line />
      <Line />
    </Container>
  )
}

export default ToggleIcon

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 22px;
  cursor: pointer;

  div {
    background-color: ${CommonStyle.color.black};
  }

  &:hover {
    div {
      background-color: ${CommonStyle.color.purple06};
    }
  }

  &:checked {
    div {
      background-color: ${CommonStyle.color.purple06};
    }
  }
`

const Line = styled.div`
  width: 32px;
  height: 3px;
`
