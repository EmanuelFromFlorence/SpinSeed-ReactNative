import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useLocation } from 'react-router';
import jwt from 'jsonwebtoken';
import { loginUser, receiveToken, doInit } from 'store/actions/authActions';
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input,
} from 'reactstrap';
import Widget from '../../../components/Widget/Widget';

import loginImage from '../../../assets/loginImage.svg';
import SofiaLogo from '../../../components/Icons/SidebarIcons/SofiaLogo';
import GoogleIcon from '../../../components/Icons/AuthIcons/GoogleIcon.js';
import TwitterIcon from '../../../components/Icons/AuthIcons/TwitterIcon.js';
import FacebookIcon from '../../../components/Icons/AuthIcons/FacebookIcon.js';
import GithubIcon from '../../../components/Icons/AuthIcons/GithubIcon.js';
import LinkedinIcon from '../../../components/Icons/AuthIcons/LinkedinIcon.js';

const Login = () => {
  const [email, setEmail] = useState('admin@flatlogic.com');
  const [password, setPassword] = useState('password');

  const location = useLocation();
  const dispatch = useDispatch();

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const doLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const signUp = () => {
    dispatch(push('/register'));
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      dispatch(receiveToken(token));
      dispatch(doInit());
    }
  }, []);

  return (
    <div className='auth-page'>
      <Container className='col-12'>
        <Row className='d-flex align-items-center'>
          <Col xs={12} lg={6} className='left-column'>
            <Widget className='widget-auth widget-p-lg'>
              <div className='d-flex align-items-center justify-content-between py-3'>
                <p className='auth-header mb-0'>Login</p>
                <div className='logo-block'>
                  <SofiaLogo />
                  <p className='mb-0'>SpinSeed</p>
                </div>
              </div>
              <div className='auth-info my-2'>
                <p>
                  This is a real app with Node.js backend - use{' '}
                  <b>"admin@flatlogic.com / password"</b> to login!
                </p>
              </div>
              <form onSubmit={doLogin}>
                <FormGroup className='my-3'>
                  <FormText>Email</FormText>
                  <Input
                    id='email'
                    className='input-transparent pl-3'
                    value={email}
                    onChange={changeEmail}
                    type='email'
                    required
                    name='email'
                    placeholder='Email'
                  />
                </FormGroup>
                <FormGroup className='my-3'>
                  <div className='d-flex justify-content-between'>
                    <FormText>Password</FormText>
                    <Link to='/error'>Forgot password?</Link>
                  </div>
                  <Input
                    id='password'
                    className='input-transparent pl-3'
                    value={password}
                    onChange={changePassword}
                    type='password'
                    required
                    name='password'
                    placeholder='Password'
                  />
                </FormGroup>
                <div className='bg-widget d-flex justify-content-center'>
                  <Button
                    className='rounded-pill my-3'
                    type='submit'
                    color='secondary-red'
                  >
                    Login
                  </Button>
                </div>
                <p className='dividing-line my-3'>&#8195;Or&#8195;</p>
                <div className='d-flex align-items-center my-3'>
                  <p className='social-label mb-0'>Login with:</p>
                  <div className='socials'>
                    <a
                      href='https://flatlogic.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <GoogleIcon />
                    </a>
                    <a
                      href='https://twitter.com/flatlogic/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <TwitterIcon />
                    </a>
                    <a
                      href='https://www.facebook.com/flatlogic'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FacebookIcon />
                    </a>
                    <a
                      href='https://github.com/flatlogic/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <GithubIcon />
                    </a>
                    <a
                      href='https://www.linkedin.com/company/flatlogic/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <LinkedinIcon />
                    </a>
                  </div>
                </div>
                <Link to='/register'>Don’t have an account? Sign Up here</Link>
              </form>
            </Widget>
          </Col>
          <Col xs={0} lg={6} className='right-column'>
            <div>
              <img src={loginImage} alt='Error page' />
            </div>
          </Col>
        </Row>
      </Container>
      <footer className='auth-footer'>
        {new Date().getFullYear()} &copy; SpinSeed.
      </footer>
    </div>
  );
};

Login.isAuthenticated = () => {
  const token = localStorage.getItem('token');
  if (!token) return;
  const date = new Date().getTime() / 1000;
  const data = jwt.decode(token);
  if (!data) return;
  return date < data.exp;
};

export default Login;
