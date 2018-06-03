import React, { Component } from 'react'
import StyleGuide from './containers/StyleGuide'
import Theme, { themes } from './themes'

class App extends Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }))
    }

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    return (
      <Theme.Provider value={this.state}>
        <StyleGuide />
      </Theme.Provider>
    )
  }
}

export default App
