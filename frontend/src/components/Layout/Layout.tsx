import React from 'react';
import { Switch, Route, useLocation } from 'react-router';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Breadcrumbs from '../Breadbrumbs/Breadcrumbs';
import Dashboard from '../../pages/dashboard/Dashboard';
import ChangePasswordFormPage from 'pages/CRUD/changePassword/ChangePasswordFormPage';

import UsersTablePage from 'pages/CRUD/Users/table/UsersTablePage';
import UsersViewPage from 'pages/CRUD/Users/page/UsersViewPage';
import UsersFormPage from 'pages/CRUD/Users/form/UsersFormPage';

import ProductsTablePage from 'pages/CRUD/Products/table/ProductsTablePage';
import ProductsViewPage from 'pages/CRUD/Products/page/ProductsViewPage';
import ProductsFormPage from 'pages/CRUD/Products/form/ProductsFormPage';

import CategoriesTablePage from 'pages/CRUD/Categories/table/CategoriesTablePage';
import CategoriesViewPage from 'pages/CRUD/Categories/page/CategoriesViewPage';
import CategoriesFormPage from 'pages/CRUD/Categories/form/CategoriesFormPage';

import OrdersTablePage from 'pages/CRUD/Orders/table/OrdersTablePage';
import OrdersViewPage from 'pages/CRUD/Orders/page/OrdersViewPage';
import OrdersFormPage from 'pages/CRUD/Orders/form/OrdersFormPage';

import ReviewsTablePage from 'pages/CRUD/Reviews/table/ReviewsTablePage';
import ReviewsViewPage from 'pages/CRUD/Reviews/page/ReviewsViewPage';
import ReviewsFormPage from 'pages/CRUD/Reviews/form/ReviewsFormPage';

import PromocodesTablePage from 'pages/CRUD/Promocodes/table/PromocodesTablePage';
import PromocodesViewPage from 'pages/CRUD/Promocodes/page/PromocodesViewPage';
import PromocodesFormPage from 'pages/CRUD/Promocodes/form/PromocodesFormPage';

import s from './Layout.module.scss';

const Layout = () => {
  const location = useLocation();

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <main className={s.content}>
          <Breadcrumbs url={location.pathname} />
          <Switch>
            <Route path={'/app/dashboard'} exact component={Dashboard} />
            <Route path={'/app/user'} exact component={UsersFormPage} />
            <Route
              path={'/app/password'}
              exact
              component={ChangePasswordFormPage}
            />

            <Route path={'/admin/users'} exact component={UsersTablePage} />
            <Route path={'/admin/users/new'} exact component={UsersFormPage} />
            <Route
              path={'/admin/users/:id/edit'}
              exact
              component={UsersFormPage}
            />
            <Route path={'/admin/users/:id'} exact component={UsersViewPage} />

            <Route
              path={'/admin/products'}
              exact
              component={ProductsTablePage}
            />
            <Route
              path={'/admin/products/new'}
              exact
              component={ProductsFormPage}
            />
            <Route
              path={'/admin/products/:id/edit'}
              exact
              component={ProductsFormPage}
            />
            <Route
              path={'/admin/products/:id'}
              exact
              component={ProductsViewPage}
            />

            <Route
              path={'/admin/categories'}
              exact
              component={CategoriesTablePage}
            />
            <Route
              path={'/admin/categories/new'}
              exact
              component={CategoriesFormPage}
            />
            <Route
              path={'/admin/categories/:id/edit'}
              exact
              component={CategoriesFormPage}
            />
            <Route
              path={'/admin/categories/:id'}
              exact
              component={CategoriesViewPage}
            />

            <Route path={'/admin/orders'} exact component={OrdersTablePage} />
            <Route
              path={'/admin/orders/new'}
              exact
              component={OrdersFormPage}
            />
            <Route
              path={'/admin/orders/:id/edit'}
              exact
              component={OrdersFormPage}
            />
            <Route
              path={'/admin/orders/:id'}
              exact
              component={OrdersViewPage}
            />

            <Route path={'/admin/reviews'} exact component={ReviewsTablePage} />
            <Route
              path={'/admin/reviews/new'}
              exact
              component={ReviewsFormPage}
            />
            <Route
              path={'/admin/reviews/:id/edit'}
              exact
              component={ReviewsFormPage}
            />
            <Route
              path={'/admin/reviews/:id'}
              exact
              component={ReviewsViewPage}
            />

            <Route
              path={'/admin/promocodes'}
              exact
              component={PromocodesTablePage}
            />
            <Route
              path={'/admin/promocodes/new'}
              exact
              component={PromocodesFormPage}
            />
            <Route
              path={'/admin/promocodes/:id/edit'}
              exact
              component={PromocodesFormPage}
            />
            <Route
              path={'/admin/promocodes/:id'}
              exact
              component={PromocodesViewPage}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
