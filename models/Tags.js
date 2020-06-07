module.exports = function (sequelize, DataTypes) {
    const Tags = sequelize.define('Tags', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        TagsValue: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
    }, {
        tableName: 'Tags'
    });
    Tags.associate = models => {
        Tags.belongsToMany(models.Posts, {through: 'TagsPosts'})
    };


    return Tags;
};
