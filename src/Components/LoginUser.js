import React from 'react';



class LoginUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (

      <div>
        <form>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input type="email" className="form-control" placeholder="Enter email.." />
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input type="passowrd" className="form-control" placeholder="Password.." />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>



      /** 
            <div>
      
              <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={(event, newValue) => this.setState({ username: newValue })}
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) => this.setState({ password: newValue })}
              />
              <br />
              <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </div>
      
      */
    );
  }
}

export default LoginUser;