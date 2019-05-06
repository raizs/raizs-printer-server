/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('baseModuleUninstall', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		showAll: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'show_all'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_module_module',
				key: 'id'
			},
			field: 'module_id'
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
		tableName: 'base_module_uninstall',
		timestamps: false
	});
};
