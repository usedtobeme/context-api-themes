import React from 'react'
import styled from 'styled-components'
import Theme from '../../themes'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  cursor: pointer;
  background-color: transparent;
`
const ThemedButton = props => (
  <Theme.Consumer>
    {({ theme }) => <Button {...props} theme={theme} />}
  </Theme.Consumer>
)

export default ThemedButton
