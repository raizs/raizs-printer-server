/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resCompanyBrAccountCnae', {
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			unique: true,
			field: 'company_id'
		},
		cnaeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'br_account_cnae',
				key: 'id'
			},
			field: 'cnae_id'
		}
	}, {
		tableName: 'res_company_br_account_cnae',
		timestamps: false
	});
};
