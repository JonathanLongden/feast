import React, { Component } from 'react';
import "./Login.css";
import axios from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event){
     event.preventDefault();
    const userLogin = {
      username: this.state.username,
      password: this.state.password
    }
    
    axios.post('/api/Users/login', userLogin) 
        .then((res) => {
          console.log(res);
          // this.setAccessToken(res.data.id);
        })
        .catch((error) => {
          console.log(error);
        })
  }

  // setAccessToken(accessToken){
  //   axios.post('/api/Users/' + accessToken + '/accessTokens' )
  //     .then((res) => {
  //       console.log(res);
  //       // this.props.history.push('/') 
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }



  render() {
    return (
    <div>
      <div id="hero-overlay"></div>
      <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' />
          {' '}Log-in to Feast
        </Header>
        <Form size='large' onSubmit={(e) => this.handleSubmit(e)}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='teal' fluid size='large'>Login</Button>
          </Segment>
        </Form>
        <Message>
          New to Feast? <a href='./SignUp'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>

    </div>       
               
    );
  }
}

export default Login;
