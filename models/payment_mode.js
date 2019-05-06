/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('paymentMode', {
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		bankAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner_bank',
				key: 'id'
			},
			field: 'bank_account_id'
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
		tipoPagamento: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tipo_pagamento'
		}
	}, {
		tableName: 'payment_mode',
		timestamps: false
	});
};
