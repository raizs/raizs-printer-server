/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountReconcileModelTemplate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		chartTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_chart_template',
				key: 'id'
			},
			field: 'chart_template_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'sequence'
		},
		hasSecondLine: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'has_second_line'
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'account_id'
		},
		label: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'label'
		},
		amountType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'amount_type'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'amount'
		},
		taxId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax_template',
				key: 'id'
			},
			field: 'tax_id'
		},
		secondAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account_template',
				key: 'id'
			},
			field: 'second_account_id'
		},
		secondLabel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'second_label'
		},
		secondAmountType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'second_amount_type'
		},
		secondAmount: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'second_amount'
		},
		secondTaxId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax_template',
				key: 'id'
			},
			field: 'second_tax_id'
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
		tableName: 'account_reconcile_model_template',
		timestamps: false
	});
};
