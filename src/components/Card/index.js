import React from 'react'
import styled from 'styled-components'
import Theme from '../../themes'

const Card = styled.div`
  background-color: ${props => props.theme.bg};
  margin: 1em;
  padding: 1em;
  border-radius: 5px;
  color: ${props => props.theme.main};
  box-shadow: 0px 0px 10px hsla(0, 0%, 60%, 0.5);
`

const ThemedCard = props => (
  <Theme.Consumer>
    {({ theme }) => <Card {...props} theme={theme} />}
  </Theme.Consumer>
)

export default ThemedCard
