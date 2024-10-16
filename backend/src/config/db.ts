import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('todo_database', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
