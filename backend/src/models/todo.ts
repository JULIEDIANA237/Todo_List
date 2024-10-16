import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Assurez-vous que l'instance de sequelize est bien configurée

class Todo extends Model {
  public id!: number;
  public title!: string;
  public completed!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

// Initialiser le modèle avec les colonnes nécessaires
Todo.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize, // L'instance sequelize importée
    modelName: 'Todo', // Nom du modèle
    tableName: 'todos', // Nom de la table dans la base de données
  }
);

export default Todo;
