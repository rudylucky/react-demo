import BaseService, { IBaseEntity } from './BaseService'
import { ContentType } from 'common/requests'

export interface IUserEntity extends IBaseEntity {
  username?: string
  fullName?: string
}

export interface ILoginParam {
  username: string
  password: string
}

class UserService extends BaseService<IUserEntity> {

  private static instance: UserService

  constructor() {
    super('user')
  }

  static getInstance() {
    if (typeof UserService.instance === 'undefined') {
      UserService.instance = new UserService()
    }
    return UserService.instance
  }

  login(params: ILoginParam) {
    return this.request('login', params, ContentType.FORM)
  }

}

export default UserService