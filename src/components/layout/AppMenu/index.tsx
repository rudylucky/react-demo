import React from 'react';
import AppButton from 'components/base/AppButton';
import MenuItem from './MenuItem';

const style = require('./index.module.scss')

const AppMenu: React.FC = (props) => {

  const menus: Array<{ name: string, subMenu?: Array<string> }> = [
    { name: '首页', },
    {
      name: '技术',
      subMenu: ['Java', 'JS', 'Python', 'Golang'],
    },
    { name: '生活', },
    { name: '杂谈', },
    { name: '笔记', },
    { name: '电影', },
    { name: '读书' }
  ]

  return (
    <div className={style.appMenu}>
      {menus.map(v => (<MenuItem name={v?.name} subMenu={v?.subMenu} />))}
    </div>
  );
}

export default AppMenu;
