/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoiceEletronicSelectionWizard', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		invoiceId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			field: 'invoice_id'
		},
		einvoiceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'invoice_eletronic',
				key: 'id'
			},
			field: 'einvoice_id'
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
		tableName: 'invoice_eletronic_selection_wizard',
		timestamps: false
	});
};
