import React from 'react';
import AppHeader from '../AppHeader';
import './index.scss';

const BaseLayout: React.FC = () => {
  return (
    <div className="base-layout">
      <div className="header">
        <AppHeader />
      </div>
      <div className="sider">
      </div>
      <div className="content">

      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default BaseLayout;
