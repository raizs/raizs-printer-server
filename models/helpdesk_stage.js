/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('helpdeskStage', {
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		isClose: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_close'
		},
		fold: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'fold'
		},
		templateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_template',
				key: 'id'
			},
			field: 'template_id'
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
		tableName: 'helpdesk_stage',
		timestamps: false
	});
};
