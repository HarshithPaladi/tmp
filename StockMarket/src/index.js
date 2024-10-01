import React from 'react'; // Importing the React library
import ReactDOM from 'react-dom/client'; // Importing the ReactDOM library for rendering React components
import './index.css'; // Importing the CSS file for global styles
import App from './components/App'; // Importing the main App component
import { Provider } from 'react-redux'; // Importing the Provider component from react-redux to connect the app with the Redux store
import store from './store/store'; // Importing the Redux store

// Creating a root element to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component wrapped with the Provider component to make the Redux store available to the entire app
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);