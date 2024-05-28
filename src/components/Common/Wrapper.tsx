import { FunctionComponent, ReactNode } from 'react'
import viewSize from 'utils/viewSize'
import styled from '@emotion/styled'
import MediaQuery from 'react-responsive'

type Props = {
  children: ReactNode
}

const Wrapper: FunctionComponent<Props> = function ({ children }: Props) {
  return (
    <div>
      <MediaQuery minWidth={viewSize.PC}>
        <PC>{children}</PC>
      </MediaQuery>
      <MediaQuery minWidth={viewSize.mobile} maxWidth={viewSize.PC}>
        <Tablet>{children}</Tablet>
      </MediaQuery>
      <MediaQuery maxWidth={viewSize.mobile}>
        <Mobile>{children}</Mobile>
      </MediaQuery>
    </div>
  )
}

export default Wrapper

const PC = styled.main`
  width: 1024px;
  margin: 0 auto;
`

const Tablet = styled.main`
  width: 100%;
  padding: 0 20px;
`

const Mobile = styled.main`
  width: 100%;
  padding: 0 10px;
`
