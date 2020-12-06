import React , {Component} from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default class Login extends Component{

  constructor(props){
    super(props)
    this.state = {
      email: null,
      password: null,
    }
  }

  handleSubmit = async (e) =>{
    e.preventDefault()
    const data1 = this.state
    await Axios.post("http://localhost:5000/users/login", data1)
               .then(res =>{
                 window.location = '/profile'
               })
                .catch(error =>{
                    this.setState({
                      message: error.response.data.msg
                    })
                  })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    let error ='';

    if (this.state.message){
      error =(
        <div className = "alert">
        {this.state.message}
        </div>
      )
    }

  return (
    <div className='Form'>
      <form className='abc' onSubmit={this.handleSubmit} >
        <h1>
        <br/><br/><br/><br/>Let's get started<br/>
        Login into your account!<br/><br/><br/>
        </h1>
        {error}
        <div className='input'>
          <input
            className='inputs'
            type='email'
            name='email'
            placeholder='Enter your email'
            onChange = {this.handleInputChange}
          />
        </div>
        <div className='input'>
          <input
            className='inputs'
            type='password'
            name='password'
            placeholder='Enter your password'
            onChange = {this.handleInputChange}
          />
        </div>
        <button className='button' type='submit'>
          Login
        </button> <br/>
        <span className='register'>
          Not a member? Register <Link to = '/register'>here</Link>
        </span>
      </form>
    </div>
  );
};
};
