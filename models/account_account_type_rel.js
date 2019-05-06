/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountAccountTypeRel', {
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
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'account_id'
		}
	}, {
		tableName: 'account_account_type_rel',
		timestamps: false
	});
};
