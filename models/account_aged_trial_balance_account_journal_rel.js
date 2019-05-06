/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAgedTrialBalanceAccountJournalRel', {
		accountAgedTrialBalanceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_aged_trial_balance',
				key: 'id'
			},
			unique: true,
			field: 'account_aged_trial_balance_id'
		},
		accountJournalId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'account_journal_id'
		}
	}, {
		tableName: 'account_aged_trial_balance_account_journal_rel',
		timestamps: false
	});
};
