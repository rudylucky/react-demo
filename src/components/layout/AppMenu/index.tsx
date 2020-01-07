import React from 'react';
import AppButton from 'components/base/AppButton';

const style = require('./index.module.scss')

const AppMenu: React.FC = () => {
    const menus = ['首页', '技术', '生活', '杂谈', '笔记', '电影', '读书']
    return (
        <div className={style.appMenu}>
            {menus.map(v => (<div className={style.menuItem}>{v}</div>))}
        </div>
    );
}

export default AppMenu;
