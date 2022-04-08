import { MyDataBaseModule } from '../db/my-database-classic';

const listaUsers = MyDataBaseModule;

listaUsers.add({ id: 1, name: 'Juan', age: 20 });
listaUsers.add({ id: 2, name: 'Pedro', age: 30 });
listaUsers.add({ id: 3, name: 'Maria', age: 40 });
listaUsers.show();
