import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import AuthProvider from './providers/AuthProvider.tsx';

const documentRoot = document.getElementById('root') as HTMLElement;
const root: ReactDOM.Root = ReactDOM.createRoot(documentRoot);
root.render(
  <React.StrictMode>
      <BrowserRouter basename="">
    <AuthProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
