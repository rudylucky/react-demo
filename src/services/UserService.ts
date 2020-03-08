import BaseService, { IBaseEntity } from './BaseService'

export interface IUserEntity extends IBaseEntity {
  username?: string
  fullName?: string
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

}

export default UserService