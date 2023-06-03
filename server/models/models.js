const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketProduct = sequelize.define("basket_product", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Jewelry = sequelize.define("jewelry", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: false,
  },
  name: { type: DataTypes.STRING, allowNull: false, unique: false },
  brandId: { type: DataTypes.INTEGER, allowNull: false, unique: false },
  form: { type: DataTypes.STRING, allowNull: false, unique: false },
  title: { type: DataTypes.STRING, allowNull: false, unique: false },
  price: { type: DataTypes.INTEGER, allowNull: false, unique: false },
  img: { type: DataTypes.STRING, allowNull: false, unique: false },
});

const Clock = sequelize.define("clock", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: false },
  brandId: { type: DataTypes.INTEGER, allowNull: false, unique: false },
  form: { type: DataTypes.STRING, allowNull: false, unique: false },
  title: { type: DataTypes.STRING, allowNull: false, unique: false },
  price: { type: DataTypes.INTEGER, allowNull: false, unique: false },
  img: { type: DataTypes.STRING, allowNull: false, unique: false },
});

const Perfume = sequelize.define("perfume", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: false },
  brandId: { type: DataTypes.INTEGER, allowNull: false, unique: false },
  form: { type: DataTypes.STRING, allowNull: false, unique: false },
  title: { type: DataTypes.STRING, allowNull: false, unique: false },
  price: { type: DataTypes.INTEGER, allowNull: false, unique: false },
  img: { type: DataTypes.STRING, allowNull: false, unique: false },
});

const LeatherProducts = sequelize.define("leatherProducts", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: false },
  brandId: { type: DataTypes.INTEGER, allowNull: false, unique: false },
  form: { type: DataTypes.STRING, allowNull: false, unique: false },
  title: { type: DataTypes.STRING, allowNull: false, unique: false },
  price: { type: DataTypes.INTEGER, allowNull: false, unique: false },
  img: { type: DataTypes.STRING, allowNull: false, unique: false },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    unique: false,
  },
});

const Brand = sequelize.define("brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    unique: false,
  },
});

const TypeBrand = sequelize.define("type_brand", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

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

Type.hasMany(Brand);
Brand.belongsTo(Type);

Brand.hasMany(Type);
Type.belongsTo(Brand);

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

module.exports = {
  Jewelry,
  Clock,
  Perfume,
  LeatherProducts,
  Type,
  Brand,
  User,
  Basket,
};
