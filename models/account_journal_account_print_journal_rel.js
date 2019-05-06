/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountJournalAccountPrintJournalRel', {
		accountPrintJournalId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_print_journal',
				key: 'id'
			},
			unique: true,
			field: 'account_print_journal_id'
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
		tableName: 'account_journal_account_print_journal_rel',
		timestamps: false
	});
};
