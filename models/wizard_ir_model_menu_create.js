/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wizardIrModelMenuCreate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		menuId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_ui_menu',
				key: 'id'
			},
			field: 'menu_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
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
		tableName: 'wizard_ir_model_menu_create',
		timestamps: false
	});
};
