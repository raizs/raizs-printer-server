/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('relModulesLangexport', {
		wizId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'base_language_export',
				key: 'id'
			},
			unique: true,
			field: 'wiz_id'
		},
		moduleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_module_module',
				key: 'id'
			},
			field: 'module_id'
		}
	}, {
		tableName: 'rel_modules_langexport',
		timestamps: false
	});
};
