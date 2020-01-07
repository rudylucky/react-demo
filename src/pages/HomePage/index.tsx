import React from 'react';

const HomePage: React.FC = (props) => {
  return (
    <button>{props.children}</button>
  );
};

export default HomePage;