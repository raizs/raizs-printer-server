/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irActServerResPartnerRel', {
		irActServerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'ir_act_server',
				key: 'id'
			},
			unique: true,
			field: 'ir_act_server_id'
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
		tableName: 'ir_act_server_res_partner_rel',
		timestamps: false
	});
};
