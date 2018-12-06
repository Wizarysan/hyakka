import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Test } from './components/Test';
declare let module: any

ReactDOM.render(<Test compiler="Typescript" framework="React..." bundler="Webpack" />,
document.getElementById('root'));

if (module.hot) {
   module.hot.accept();
}