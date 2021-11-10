import React from "react"
import Login from './login.jsx'
// import { AutomaticPrefetchPlugin } from "webpack";
// import Button from './Button.jsx'
import Display from './Display.jsx'

// this is the parent component which will have access to the state
// the state contains two key value pairs, the current messages and the collections of messages inside an array
//we also used bind to attach the function post to the app constructor

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMessage: '',
      messages: []
    }
    this.post = this.post.bind(this)
  }
// this function will make the update of the state by concatenating the current messahe to the value of messages and set the current state back to an empty string

  post() {
    this.setState({
      messages: [...this.state.messages, this.state.currentMessage],
      currentMessage: ''
    })
  }


  // the render method will render a div containing an h1 tag with the name of the app, an input field with the functionality on change which will set the peoperty currentmessages in set state with the value of the input, and also a button which will invoke post.
  // the function is also rendering a child component display whoch will carry the value of the messages property from state
  render(){
    return(
      <div className='main' 

      style={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
      }}>
        <div className="header"><h1>Gratitude list !</h1></div>
        <div style={{display: 'flex', width: '100%', justifyContent: 'center', margin: '20px 0'}}>
            
            
            <input
              id="inputField"
              placeholder='hi Annie...'
              onChange={(evt) => {
                this.setState({
                  currentMessage: evt.target.value
                });
            }} value={this.state.currentMessage}></input>
            <button className="btn" id="buttonClick" onClick={this.post}>Post</button>
        </div>

        <Display messages={this.state.messages}/>
        <Login />
      </div>
    );
  }
}

export default App;


/* If you build an <Input/> component, you'll need to have a callback prop that will set the state in <App/> like handleChange={(value) => {this.setState({currentMessage: value})}}  */