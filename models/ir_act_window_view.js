/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irActWindowView', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		viewId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_ui_view',
				key: 'id'
			},
			field: 'view_id'
		},
		viewMode: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'view_mode'
		},
		actWindowId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_act_window',
				key: 'id'
			},
			field: 'act_window_id'
		},
		multi: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'multi'
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
		tableName: 'ir_act_window_view',
		timestamps: false
	});
};
