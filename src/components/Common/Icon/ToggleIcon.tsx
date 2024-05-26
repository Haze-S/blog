import styled from '@emotion/styled'
import CommonStyle from '../../../styles/CommonStyle'

function ToggleIcon() {
  return (
    <Container>
      <Line />
      <Line />
      <Line />
    </Container>
  )
}

export default ToggleIcon

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 22px;
  cursor: pointer;

  &:hover {
    div {
      background-color: ${CommonStyle.color.purple06};
    }
  }
`

const Line = styled.div`
  width: 32px;
  height: 3px;
  background-color: #000;
`
