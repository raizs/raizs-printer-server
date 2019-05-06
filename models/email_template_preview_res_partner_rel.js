/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emailTemplatePreviewResPartnerRel', {
		emailTemplatePreviewId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'email_template_preview',
				key: 'id'
			},
			unique: true,
			field: 'email_template_preview_id'
		},
		resPartnerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'res_partner_id'
		}
	}, {
		tableName: 'email_template_preview_res_partner_rel',
		timestamps: false
	});
};
