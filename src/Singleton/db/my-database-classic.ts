import { IUser } from '../../entities/user.entity';

const users: IUser[] = [];

export const MyDataBaseModule = {
  add(user: IUser): void {
    users.push(user);
  },

  remove(user: IUser): void {
    users.splice(user.id, 1);
  },

  show(): void {
    console.log(users);
  },
};
