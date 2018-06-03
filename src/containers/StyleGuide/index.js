import React from 'react'
import Theme from '../../themes'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Main from '../../components/Main'

const StyleGuide = props => (
  <Main>
    <header>
      <h1>Style Guide</h1>
      <Theme.Consumer>
        {({ theme, toggleTheme }) => (
          <Button onClick={toggleTheme}>Current theme: {theme.name}</Button>
        )}
      </Theme.Consumer>
    </header>
    <section>
      <article>
        <h2>Buttons</h2>
        <Button>Button</Button>
      </article>
      <article>
        <h2>Card</h2>
        <Card>I'm a card</Card>
      </article>
      <article>
        <h2>Card &amp; Button</h2>
        <Card>
          <p>I'm a card</p>
          <Button>With a button</Button>
        </Card>
      </article>
    </section>
  </Main>
)
export default StyleGuide
