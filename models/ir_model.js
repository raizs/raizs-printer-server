/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irModel', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		model: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'model'
		},
		info: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'info'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		transient: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'transient'
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
		},
		isMailThread: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_mail_thread'
		}
	}, {
		tableName: 'ir_model',
		timestamps: false
	});
};
