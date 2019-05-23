import React from 'react';// 引入核心的react 库
import ReactDOM from 'react-dom';// 操作dom库
// import * as serviceWorker from './serviceWorker';

import router from './Router'
// import App from './02-lifecycle-communicate/practice'

//jsx 语法

ReactDOM.render(router, document.getElementById('root'));
// jsx语法 会被编译成 React.createElement("div","hello world");

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
