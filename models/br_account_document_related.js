/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brAccountDocumentRelated', {
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
		invoiceRelatedId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_invoice',
				key: 'id'
			},
			field: 'invoice_related_id'
		},
		documentType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'document_type'
		},
		accessKey: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'access_key'
		},
		serie: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'serie'
		},
		internalNumber: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'internal_number'
		},
		stateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'state_id'
		},
		cnpjCpf: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cnpj_cpf'
		},
		cpfcnpjType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cpfcnpj_type'
		},
		inscrEst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'inscr_est'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		fiscalDocumentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_fiscal_document',
				key: 'id'
			},
			field: 'fiscal_document_id'
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
		invoiceEletronicId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'invoice_eletronic',
				key: 'id'
			},
			field: 'invoice_eletronic_id'
		}
	}, {
		tableName: 'br_account_document_related',
		timestamps: false
	});
};
