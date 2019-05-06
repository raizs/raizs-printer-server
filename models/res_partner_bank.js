/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resPartnerBank', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		accNumber: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'acc_number'
		},
		sanitizedAccNumber: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
			field: 'sanitized_acc_number'
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
		bankId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_bank',
				key: 'id'
			},
			field: 'bank_id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
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
		accNumberDig: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'acc_number_dig'
		},
		braNumber: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bra_number'
		},
		braNumberDig: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bra_number_dig'
		}
	}, {
		tableName: 'res_partner_bank',
		timestamps: false
	});
};
