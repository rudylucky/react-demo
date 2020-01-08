import BaseService, { BaseEntity, AppResponse } from './BaseService'

export interface MenuEntity extends BaseEntity {
  name?: string,
  path?: string,
  children?: Array<MenuEntity>
}

class MenuService extends BaseService<MenuEntity> {
  private static instance: MenuService

  constructor() {
    super('menu')
  }

  static getInstance() {
    if (typeof MenuService.instance === 'undefined') {
      MenuService.instance = new MenuService
    }
    return new MenuService()
  }

  getMenu(): Array<MenuEntity> {
    return [
      { name: '首页',
        code: 'index',
        path: '/index'
      },
      {
        name: '技术',
        code: 'tech',
        path: 'tech',
        children: [{
          name: 'Java',
          code: 'java',
          path: 'java'
        }, {
          name: 'JS',
          code: 'js',
          path: 'js'
        }, {
          name: 'Python',
          code: 'python',
          path: 'python',
        }, {
          name: 'Golang',
          code: 'golang',
          path: 'golang'
        }],
      },
      {
        name: '生活',
        code: 'life',
        path: 'life',
      },
      {
        name: '杂谈',
        code: 'talk',
        path: 'talk',
      },
      {
        name: '笔记',
        code: 'note',
        path: 'note',
      },
      {
        name: '电影',
        code: 'movie',
        path: 'movie',
      },
      {
        name: '读书',
        code: 'reading',
        path: 'reading',
      }
    ]
  }

}

export default MenuService