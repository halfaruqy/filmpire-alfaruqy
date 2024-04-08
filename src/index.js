/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './app/store';
import './index.css';

const theme = createTheme({});

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
  <BrowserRouter>
  <App />
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);
