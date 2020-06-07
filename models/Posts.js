module.exports = function (sequelize, DataTypes) {
    const Posts = sequelize.define('Posts', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        PostValue: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        }
    }, {
        tableName: 'Posts'
    });
    Posts.associate = models => {
        Posts.belongsToMany(models.Tags, {through: 'TagsPosts'})
    };

    return Posts;
};
