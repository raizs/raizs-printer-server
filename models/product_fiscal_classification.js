/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productFiscalClassification', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code'
		},
		category: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'category'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
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
		unidadeTributacao: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'unidade_tributacao'
		},
		descricaoUnidade: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'descricao_unidade'
		},
		cest: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cest'
		},
		federalNacional: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'federal_nacional'
		},
		federalImportado: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'federal_importado'
		},
		estadualImposto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'estadual_imposto'
		},
		municipalImposto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'municipal_imposto'
		},
		classeEnquadramento: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'classe_enquadramento'
		},
		codigoEnquadramento: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'codigo_enquadramento'
		},
		taxIpiId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_ipi_id'
		},
		ipiTipo: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'ipi_tipo'
		},
		ipiReducaoBc: {
			type: DataTypes.DOUBLE,
			allowNull: false,
			field: 'ipi_reducao_bc'
		},
		ipiCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ipi_cst'
		},
		taxIcmsStId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_icms_st_id'
		},
		icmsStAliquotaReducaoBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_reducao_base'
		},
		icmsStAliquotaMva: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_mva'
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
		tableName: 'product_fiscal_classification',
		timestamps: false
	});
};
