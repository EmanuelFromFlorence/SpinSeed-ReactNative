import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';

import reactLogo from '../../assets/react-logo.svg';

import Widget from '../../components/Widget/Widget';

import s from './Dashboard.module.scss';

const Dashboard = () => {
  const currentUser = useSelector((store) => store.auth.currentUser);

  return (
    <div className={s.root}>
      <h1 className='page-title'>
        Welcome, {currentUser ? currentUser.firstName || 'User' : 'User'}!{' '}
        <br />
        <small>
          <small>Your role is {currentUser && currentUser.role}</small>
        </small>
      </h1>
      <Row>
        <Col lg={6}>
          <Widget>
            <Row className='align-items-center'>
              <Col md={6}>
                <img src={reactLogo} alt='react' />
              </Col>
            </Row>
          </Widget>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
