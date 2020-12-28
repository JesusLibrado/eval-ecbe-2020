import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts';
import AccountView from 'src/views/account/AccountView';
import DashboardView from 'src/views/DashboardView';
import VehicleGridView from 'src/views/VehicleGridView';
import NotFoundView from './views/errors/NotFoundView';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <AccountView /> },
      { path: '', element: <DashboardView /> },
      { path: 'vehicles', element: <VehicleGridView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '404',
    element: <NotFoundView />
  }
];

export default routes;
