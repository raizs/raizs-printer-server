/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irConfigParameter', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		key: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'key'
		},
		value: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'value'
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
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
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
		tableName: 'ir_config_parameter',
		timestamps: false
	});
};
