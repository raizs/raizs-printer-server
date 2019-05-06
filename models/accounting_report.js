/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountingReport', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		dateFrom: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_from'
		},
		dateTo: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_to'
		},
		targetMove: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'target_move'
		},
		enableFilter: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'enable_filter'
		},
		accountReportId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_financial_report',
				key: 'id'
			},
			field: 'account_report_id'
		},
		labelFilter: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'label_filter'
		},
		filterCmp: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'filter_cmp'
		},
		dateFromCmp: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_from_cmp'
		},
		dateToCmp: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_to_cmp'
		},
		debitCredit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'debit_credit'
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
		tableName: 'accounting_report',
		timestamps: false
	});
};
