/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoiceEletronicItem', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.TEXT,
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
		invoiceEletronicId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'invoice_eletronic',
				key: 'id'
			},
			field: 'invoice_eletronic_id'
		},
		productId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
		},
		tipoProduto: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tipo_produto'
		},
		cfop: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cfop'
		},
		ncm: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ncm'
		},
		uomId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'uom_id'
		},
		quantidade: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'quantidade'
		},
		precoUnitario: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'preco_unitario'
		},
		itemPedidoCompra: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'item_pedido_compra'
		},
		frete: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'frete'
		},
		seguro: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'seguro'
		},
		desconto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'desconto'
		},
		outrasDespesas: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'outras_despesas'
		},
		tributosEstimados: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'tributos_estimados'
		},
		valorBruto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_bruto'
		},
		valorLiquido: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_liquido'
		},
		indicadorTotal: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'indicador_total'
		},
		origem: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'origem'
		},
		icmsCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icms_cst'
		},
		icmsAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota'
		},
		icmsTipoBase: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icms_tipo_base'
		},
		icmsBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_base_calculo'
		},
		icmsAliquotaReducaoBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_reducao_base'
		},
		icmsValor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_valor'
		},
		icmsValorCredito: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_valor_credito'
		},
		icmsAliquotaCredito: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_credito'
		},
		icmsStTipoBase: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'icms_st_tipo_base'
		},
		icmsStAliquotaMva: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_mva'
		},
		icmsStAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota'
		},
		icmsStBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_base_calculo'
		},
		icmsStAliquotaReducaoBase: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_aliquota_reducao_base'
		},
		icmsStValor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_st_valor'
		},
		icmsAliquotaDiferimento: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_diferimento'
		},
		icmsValorDiferido: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_valor_diferido'
		},
		icmsMotivoDesoneracao: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icms_motivo_desoneracao'
		},
		icmsValorDesonerado: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_valor_desonerado'
		},
		ipiCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ipi_cst'
		},
		ipiAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ipi_aliquota'
		},
		ipiBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ipi_base_calculo'
		},
		ipiReducaoBc: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ipi_reducao_bc'
		},
		ipiValor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ipi_valor'
		},
		iiBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ii_base_calculo'
		},
		iiAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ii_aliquota'
		},
		iiValorDespesas: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ii_valor_despesas'
		},
		iiValor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ii_valor'
		},
		iiValorIof: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'ii_valor_iof'
		},
		pisCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'pis_cst'
		},
		pisAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'pis_aliquota'
		},
		pisBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'pis_base_calculo'
		},
		pisValor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'pis_valor'
		},
		pisValorRetencao: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'pis_valor_retencao'
		},
		cofinsCst: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cofins_cst'
		},
		cofinsAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_aliquota'
		},
		cofinsBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_base_calculo'
		},
		cofinsValor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_valor'
		},
		cofinsValorRetencao: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'cofins_valor_retencao'
		},
		issqnCodigo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'issqn_codigo'
		},
		issqnAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'issqn_aliquota'
		},
		issqnBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'issqn_base_calculo'
		},
		issqnValor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'issqn_valor'
		},
		issqnValorRetencao: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'issqn_valor_retencao'
		},
		csllBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'csll_base_calculo'
		},
		csllAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'csll_aliquota'
		},
		csllValorRetencao: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'csll_valor_retencao'
		},
		irrfBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'irrf_base_calculo'
		},
		irrfAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'irrf_aliquota'
		},
		irrfValorRetencao: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'irrf_valor_retencao'
		},
		inssBaseCalculo: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'inss_base_calculo'
		},
		inssAliquota: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'inss_aliquota'
		},
		inssValorRetencao: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'inss_valor_retencao'
		},
		accountInvoiceLineId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_invoice_line',
				key: 'id'
			},
			field: 'account_invoice_line_id'
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
		cest: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cest'
		},
		classeEnquadramentoIpi: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'classe_enquadramento_ipi'
		},
		codigoEnquadramentoIpi: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'codigo_enquadramento_ipi'
		},
		temDifal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'tem_difal'
		},
		icmsBcUfDest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_bc_uf_dest'
		},
		icmsAliquotaFcpUfDest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_fcp_uf_dest'
		},
		icmsAliquotaUfDest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_uf_dest'
		},
		icmsAliquotaInterestadual: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_interestadual'
		},
		icmsAliquotaInterPart: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_aliquota_inter_part'
		},
		icmsUfRemet: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_uf_remet'
		},
		icmsUfDest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_uf_dest'
		},
		icmsFcpUfDest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'icms_fcp_uf_dest'
		},
		informacaoAdicional: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'informacao_adicional'
		}
	}, {
		tableName: 'invoice_eletronic_item',
		timestamps: false
	});
};
