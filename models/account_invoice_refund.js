/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountInvoiceRefund', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		dateInvoice: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'date_invoice'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'description'
		},
		filterRefund: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'filter_refund'
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
		fiscalPositionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position',
				key: 'id'
			},
			field: 'fiscal_position_id'
		}
	}, {
		tableName: 'account_invoice_refund',
		timestamps: false
	});
};
