/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irLogging', {
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
		createUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'create_uid'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
		},
		dbname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'dbname'
		},
		level: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'level'
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'message'
		},
		path: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'path'
		},
		func: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'func'
		},
		line: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'line'
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
		tableName: 'ir_logging',
		timestamps: false
	});
};
