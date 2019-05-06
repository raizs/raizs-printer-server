/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFinancialHtmlReport', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		debitCredit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'debit_credit'
		},
		dateRange: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'date_range'
		},
		comparison: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'comparison'
		},
		cashBasis: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'cash_basis'
		},
		analytic: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'analytic'
		},
		hierarchyOption: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'hierarchy_option'
		},
		showJournalFilter: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'show_journal_filter'
		},
		unfoldAllFilter: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'unfold_all_filter'
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
		generatedMenuId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_ui_menu',
				key: 'id'
			},
			field: 'generated_menu_id'
		},
		taxReport: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'tax_report'
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
		}
	}, {
		tableName: 'account_financial_html_report',
		timestamps: false
	});
};
