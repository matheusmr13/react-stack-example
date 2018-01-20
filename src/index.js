import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';


if (!window.location.hash) {
	window.location = `https://accounts.spotify.com/authorize?client_id=a94d7c3f7ae64cd4a78bd9b7b02c08d9&response_type=token&redirect_uri=${window.location.href}&state=123`;
} else {
	ReactDOM.render(<App />, document.getElementById('root'));
}
registerServiceWorker();
