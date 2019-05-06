/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPositionTaxRule', {
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
			allowNull: true,
			field: 'name'
		},
		domain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'domain'
		},
		fiscalPositionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_fiscal_position',
				key: 'id'
			},
			field: 'fiscal_position_id'
		},
		tipoProduto: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tipo_produto'
		},
		cstIcms: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cst_icms'
		},
		csosnIcms: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'csosn_icms'
		},
		cstPis: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cst_pis'
		},
		cstCofins: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cst_cofins'
		},
		cstIpi: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cst_ipi'
		},
		cfopId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_cfop',
				key: 'id'
			},
			field: 'cfop_id'
		},
		taxId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_id'
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
		icmsAliquotaCredito: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_credito'
		},
		incluirIpiBase: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'incluir_ipi_base'
		},
		reducaoIcms: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'reducao_icms'
		},
		reducaoIcmsSt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'reducao_icms_st'
		},
		reducaoIpi: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'reducao_ipi'
		},
		l10NBrIssqnDeduction: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'l10n_br_issqn_deduction'
		},
		aliquotaMva: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'aliquota_mva'
		},
		icmsStAliquotaDeducao: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_deducao'
		},
		temDifal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'tem_difal'
		},
		taxIcmsInterId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_icms_inter_id'
		},
		taxIcmsIntraId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_icms_intra_id'
		},
		taxIcmsFcpId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_tax',
				key: 'id'
			},
			field: 'tax_icms_fcp_id'
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
		tableName: 'account_fiscal_position_tax_rule',
		timestamps: false
	});
};
