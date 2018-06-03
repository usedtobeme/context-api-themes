import React from 'react'
import styled from 'styled-components'
import Theme from '../../themes'

const Main = styled.main`
  padding: 2em;
`

const ThemedMain = props => (
  <Theme.Consumer>
    {({ theme }) => <Main {...props} theme={theme} />}
  </Theme.Consumer>
)

export default ThemedMain
