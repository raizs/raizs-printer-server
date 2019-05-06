/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountJournalInboundPaymentMethodRel', {
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			unique: true,
			field: 'journal_id'
		},
		inboundPaymentMethod: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_payment_method',
				key: 'id'
			},
			field: 'inbound_payment_method'
		}
	}, {
		tableName: 'account_journal_inbound_payment_method_rel',
		timestamps: false
	});
};
