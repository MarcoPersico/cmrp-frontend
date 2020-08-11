import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './modules/App/App';
import ContextUIPorvider from './context/ui.context';
import Services from './services';

const Index = () => (
  <BrowserRouter>
    <ContextUIPorvider>
      <Services>
        <App />
      </Services>
    </ContextUIPorvider>
  </BrowserRouter>
);

ReactDom.render(
  <Index />,
  document.getElementById('root'),
);
