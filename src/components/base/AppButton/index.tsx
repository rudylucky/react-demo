import React from 'react';

const style = require('./index.scss');

const AppButton: React.FC = (props) => {
  return (
  <button className={style.container}>{props.children}</button>
  );
};

export default AppButton;