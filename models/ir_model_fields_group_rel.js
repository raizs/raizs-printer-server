/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irModelFieldsGroupRel', {
		fieldId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_model_fields',
				key: 'id'
			},
			unique: true,
			field: 'field_id'
		},
		groupId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_groups',
				key: 'id'
			},
			field: 'group_id'
		}
	}, {
		tableName: 'ir_model_fields_group_rel',
		timestamps: false
	});
};
