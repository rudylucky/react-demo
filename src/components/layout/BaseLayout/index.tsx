import React from 'react';
import AppHeader from '../AppHeader';

const style = require('./index.module.scss')

const BaseLayout: React.FC = () => {
  return (
    <div className={style.baseLayout}>
      <div className={style.header}>
        <AppHeader />
      </div>
      <div className={style.sider}>

      </div>
      <div className={style.cotent}></div>
    </div>
  );
}

export default BaseLayout;
