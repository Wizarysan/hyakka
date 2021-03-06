import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Hyakka from './components/Hyakka/Hyakka';
import initialState from './store/initialState';
import configureStore from './store/configStore';
//declare let module: any

const store = configureStore(initialState);

// (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
// (window as any).__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
    <Provider store={store}>
        <Hyakka />
    </ Provider>
,
document.getElementById('root'));

// if (module.hot) {
//    module.hot.accept();
// }