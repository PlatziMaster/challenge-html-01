import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

import data from './api.json';

const homeContainer = document.getElementById('app');
render(<App data={data} />, homeContainer);
