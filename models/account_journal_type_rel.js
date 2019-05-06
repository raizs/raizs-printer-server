/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountJournalTypeRel', {
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
		typeId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account_type',
				key: 'id'
			},
			field: 'type_id'
		}
	}, {
		tableName: 'account_journal_type_rel',
		timestamps: false
	});
};
