import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hyakka from './components/Hyakka/Hyakka';
declare let module: any

ReactDOM.render(<Hyakka />,
document.getElementById('root'));

if (module.hot) {
   module.hot.accept();
}