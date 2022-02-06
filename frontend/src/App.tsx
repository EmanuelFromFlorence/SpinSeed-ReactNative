import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect, Router } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { ConnectedRouter } from 'connected-react-router';
import { getHistory } from 'store';
import { AdminRoute, UserRoute, AuthRoute } from 'routes/RouteComponents';
import { useTypedSelector } from 'hooks/useTypedSelector';

import Starter from 'pages/starter';
import ErrorPage from 'pages/error/ErrorPage';
import LayoutComponent from 'components/Layout/Layout';
import Login from 'pages/auth/login/Login';
import Register from 'pages/auth/register/Register';
import DocumentationLayout from 'documentation/DocumentaionLayout';

import './styles/app.scss';

const CloseButton = () => <i className='la la-close notifications-close' />;

const App = () => {
  const currentUser = useTypedSelector((store) => store.auth.currentUser);
  const loadingInit = useTypedSelector((store) => store.auth.loadingInit);

  const dispatch = useDispatch();

  if (loadingInit) {
    return <div />;
  }

  return (
    <div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar
        closeButton={<CloseButton />}
      />
      <ConnectedRouter history={getHistory()}>
        <Router history={getHistory()}>
          <Switch>
            <Route
              path='/'
              exact
              render={() => <Redirect to='/app/dashboard' />}
            />
            <Route
              path='/app'
              exact
              render={() => <Redirect to='/app/dashboard' />}
            />
            <UserRoute
              path='/app'
              dispatch={dispatch}
              component={LayoutComponent}
            />
            <AdminRoute
              path='/admin'
              currentUser={currentUser}
              dispatch={dispatch}
              component={LayoutComponent}
            />
            <Route
              path='/documentation'
              exact
              render={() => (
                <Redirect to='/documentation/getting-started/overview' />
              )}
            />
            <Route path='/documentation' component={DocumentationLayout} />
            <AuthRoute
              dispatch={dispatch}
              path='/starter'
              exact
              component={Starter}
            />
            <AuthRoute
              dispatch={dispatch}
              path='/login'
              exact
              component={Login}
            />
            <AuthRoute
              dispatch={dispatch}
              path='/register'
              exact
              component={Register}
            />
            <Route path='/error' exact component={ErrorPage} />
            <Redirect from='*' to='/app/dashboard' />
            <Route path='*' exact render={() => <Redirect to='/error' />} />
          </Switch>
        </Router>
      </ConnectedRouter>
    </div>
  );
};

export default React.memo(App);
