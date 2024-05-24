import { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import CommonStyle from '../../styles/CommonStyle'
import GitHubIcon from 'components/Common/Icon/GitHubIcon'
import MailIcon from 'components/Common/Icon/MailIcon'

const ContactLink: FunctionComponent = function () {
  return (
    <Container>
      <Div>
        <Link to="https://github.com/Haze-S" target="_blank">
          <GitHubIcon />
        </Link>
      </Div>
      <Div>
        <a href="mailto:skdml20022@gmail.com" target="_blank">
          <MailIcon />
        </a>
      </Div>
    </Container>
  )
}

export default ContactLink

const Container = styled.div`
  display: flex;
  gap: 13px;
`

const Div = styled.div`
  width: 37px;
  height: 37px;

  a {
    &:hover {
      svg path {
        fill: ${CommonStyle.color.purple05};
      }
    }
  }
`
