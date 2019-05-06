/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irServerObjectLines', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		serverId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_act_server',
				key: 'id'
			},
			field: 'server_id'
		},
		col1: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_model_fields',
				key: 'id'
			},
			field: 'col1'
		},
		value: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'value'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
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
		tableName: 'ir_server_object_lines',
		timestamps: false
	});
};
