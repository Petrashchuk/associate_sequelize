module.exports = function (sequelize, DataTypes) {
    const Teams = sequelize.define('Teams', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        teamName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
    }, {
        tableName: 'Teams'
    });
    Teams.associate = models => {
        Teams.hasMany(models.Players)
    };


    return Teams;
};
