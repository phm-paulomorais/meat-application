export class User {
  constructor(public email: string,
              public name: string,
              private password: string){}

  matches(another: User): boolean {
    return another !== undefined &&
      another.email === this.email &&
      another.password === this.password
  }
}

export const users: {[key:string]: User} = {
  "teste1@gmail.com": new User('teste1@gmail.com', 'Teste1', 'teste1'),
  "teste2@gmail.com": new User('teste2@gmail.com', 'Teste2', 'teste2')
}
