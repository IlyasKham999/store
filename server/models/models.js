const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Jewelry = sequelize.define("jewelry", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Clock = sequelize.define("clock", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Perfume = sequelize.define("perfume", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const LeatherProducts = sequelize.define("leatherProducts", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const TypeBrand = sequelize.define("type_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Type.hasMany(Jewelry);
Jewelry.belongsTo(Type);

Brand.hasMany(Jewelry);
Jewelry.belongsTo(Brand);

Type.hasMany(Clock);
Clock.belongsTo(Type);

Brand.hasMany(Clock);
Clock.belongsTo(Brand);

Type.hasMany(Perfume);
Perfume.belongsTo(Type);

Brand.hasMany(Perfume);
Perfume.belongsTo(Brand);

Type.hasMany(LeatherProducts);
LeatherProducts.belongsTo(Type);

Brand.hasMany(LeatherProducts);
LeatherProducts.belongsTo(Brand);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
  Jewelry,
  Clock,
  Perfume,
  LeatherProducts,
  Type,
  Brand,
};
