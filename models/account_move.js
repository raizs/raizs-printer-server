/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountMove', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		ref: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ref'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date'
		},
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
		},
		currencyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_currency',
				key: 'id'
			},
			field: 'currency_id'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount'
		},
		narration: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'narration'
		},
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		matchedPercentage: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'matched_percentage'
		},
		taxCashBasisRecId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_partial_reconcile',
				key: 'id'
			},
			field: 'tax_cash_basis_rec_id'
		},
		createUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'create_uid'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		writeUid: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'write_uid'
		},
		writeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'write_date'
		},
		stockMoveId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_move',
				key: 'id'
			},
			field: 'stock_move_id'
		}
	}, {
		tableName: 'account_move',
		timestamps: false
	});
};
