export interface IUser {
  name: string;
}

export function createUser(name: string): IUser {
  return { name };
}
