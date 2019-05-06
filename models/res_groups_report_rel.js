/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resGroupsReportRel', {
		uid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_act_report_xml',
				key: 'id'
			},
			unique: true,
			field: 'uid'
		},
		gid: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_groups',
				key: 'id'
			},
			field: 'gid'
		}
	}, {
		tableName: 'res_groups_report_rel',
		timestamps: false
	});
};
