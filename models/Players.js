module.exports = function (sequelize, DataTypes) {
    const Players = sequelize.define('Players', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        number: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true,
            }
        }
    }, {
        tableName: 'Players'
    });
    Players.associate = models => {
        Players.belongsTo(models.Teams)
    };

    return Players;
};
