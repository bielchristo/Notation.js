import React from "react"
// import { AutomaticPrefetchPlugin } from "webpack";
// import Button from './Button.jsx'
import Display from './Display.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: '',
      messages: []
    }
    this.post = this.post.bind(this)
  }

  post() {
    this.setState({
      messages: [...this.state.messages, this.state.currentMessage],
      currentMessage: ''
    })
  }

  render(){
    return(
      <div style={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
      }}>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center', margin: '20px 0'}}>
            <button className="btn" onClick={this.post}>Post</button>
            <input
              id="inputField"
              placeholder='Start typing'
              onChange={(evt) => {
                this.setState({
                  currentMessage: evt.target.value
                });
            }} value={this.state.currentMessage}></input>
        </div>

        <Display messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;


/* If you build an <Input/> component, you'll need to have a callback prop that will set the state in <App/> like handleChange={(value) => {this.setState({currentMessage: value})}}  */