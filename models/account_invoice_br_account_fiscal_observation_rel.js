/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountInvoiceBrAccountFiscalObservationRel', {
		accountInvoiceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			unique: true,
			field: 'account_invoice_id'
		},
		brAccountFiscalObservationId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'br_account_fiscal_observation',
				key: 'id'
			},
			field: 'br_account_fiscal_observation_id'
		}
	}, {
		tableName: 'account_invoice_br_account_fiscal_observation_rel',
		timestamps: false
	});
};
