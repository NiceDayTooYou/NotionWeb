export { default } from './header';

import React from 'react';
import ReactDOM from 'react-dom';
import './_custom-styles.scss'; // 引入全局样式文件
import Header from './Header'; // 导入主要组件

ReactDOM.render(<Header />, document.getElementById('root'));
