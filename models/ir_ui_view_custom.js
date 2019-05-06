/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irUiViewCustom', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		refId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_ui_view',
				key: 'id'
			},
			field: 'ref_id'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		},
		arch: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'arch'
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
		tableName: 'ir_ui_view_custom',
		timestamps: false
	});
};
