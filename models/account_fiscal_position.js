/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPosition', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
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
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
		},
		autoApply: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'auto_apply'
		},
		vatRequired: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'vat_required'
		},
		countryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country',
				key: 'id'
			},
			field: 'country_id'
		},
		countryGroupId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_group',
				key: 'id'
			},
			field: 'country_group_id'
		},
		zipFrom: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'zip_from'
		},
		zipTo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'zip_to'
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
		journalId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_journal',
				key: 'id'
			},
			field: 'journal_id'
		},
		accountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_account',
				key: 'id'
			},
			field: 'account_id'
		},
		productSerieId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_document_serie',
				key: 'id'
			},
			field: 'product_serie_id'
		},
		productDocumentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_fiscal_document',
				key: 'id'
			},
			field: 'product_document_id'
		},
		serviceSerieId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_document_serie',
				key: 'id'
			},
			field: 'service_serie_id'
		},
		serviceDocumentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_fiscal_document',
				key: 'id'
			},
			field: 'service_document_id'
		},
		fiscalType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'fiscal_type'
		},
		finalidadeEmissao: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'finalidade_emissao'
		},
		indFinal: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ind_final'
		},
		indPres: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ind_pres'
		}
	}, {
		tableName: 'account_fiscal_position',
		timestamps: false
	});
};
