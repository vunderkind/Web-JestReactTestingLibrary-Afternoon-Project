import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';

ReactDOM.render(
  <Counter user='Pere' countLimit={5} />,
  document.getElementById('root'));
