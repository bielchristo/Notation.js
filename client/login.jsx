import React from "react"
// this is a comment
const Login = ({messages}) => {
  return (
    <div>
      <form>
        <label>
          Name:
          
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
    </div>
  );
}

export default Login