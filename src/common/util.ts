import { ICurrentUser } from 'reducers/userReducer'

export function getCurrentUser(): ICurrentUser | null {
  const json = sessionStorage.getItem('user')
  return json && JSON.parse(json)
}

export function setCurrentUser(user: ICurrentUser) {
  sessionStorage.setItem('user', JSON.stringify(user))
}

export function rmCurrentUser() {
  sessionStorage.removeItem('user')
}

export function merge<A, B>(source: A, target: B): A | B {
  return source
}

export function uuid(): string {
  const s: Array<any> = []
  const hexDigits = '0123456789abcdef'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4'
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'

  var uuid = s.join('')
  return uuid
}

export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
