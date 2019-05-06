/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountReportGeneralLedger', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		initialBalance: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'initial_balance'
		},
		sortby: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'sortby'
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
		displayAccount: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'display_account'
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
		tableName: 'account_report_general_ledger',
		timestamps: false
	});
};
