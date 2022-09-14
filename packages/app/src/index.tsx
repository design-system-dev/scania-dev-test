// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createElement as h, StrictMode } from 'react';
// import './register-web-components';
import 'design-tokens/dist/tokens.css';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
