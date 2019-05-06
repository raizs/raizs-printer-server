/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFinancialHtmlReportLine', {
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
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'code'
		},
		financialReportId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_financial_html_report',
				key: 'id'
			},
			field: 'financial_report_id'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_financial_html_report_line',
				key: 'id'
			},
			field: 'parent_id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		domain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'domain'
		},
		formulas: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'formulas'
		},
		groupby: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'groupby'
		},
		figureType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'figure_type'
		},
		greenOnPositive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'green_on_positive'
		},
		level: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'level'
		},
		specialDateChanger: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'special_date_changer'
		},
		showDomain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'show_domain'
		},
		hideIfZero: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'hide_if_zero'
		},
		actionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'action_id'
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
		tableName: 'account_financial_html_report_line',
		timestamps: false
	});
};
