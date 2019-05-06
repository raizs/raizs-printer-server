/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('busPresence', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_users',
				key: 'id'
			},
			unique: true,
			field: 'user_id'
		},
		lastPoll: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'last_poll'
		},
		lastPresence: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'last_presence'
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'status'
		}
	}, {
		tableName: 'bus_presence',
		timestamps: false
	});
};
