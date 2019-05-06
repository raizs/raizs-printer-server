/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('busBus', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		channel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'channel'
		},
		message: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'message'
		},
		createUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'create_uid'
		},
		writeUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'write_uid'
		},
		writeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'write_date'
		}
	}, {
		tableName: 'bus_bus',
		timestamps: false
	});
};
