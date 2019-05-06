/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('invoiceEletronic', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'code'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
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
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		tipoOperacao: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tipo_operacao'
		},
		model: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'model'
		},
		serie: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_document_serie',
				key: 'id'
			},
			field: 'serie'
		},
		serieDocumento: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'serie_documento'
		},
		numero: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'numero'
		},
		numeroControle: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'numero_controle'
		},
		dataEmissao: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'data_emissao'
		},
		dataFatura: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'data_fatura'
		},
		dataAutorizacao: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'data_autorizacao'
		},
		ambiente: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ambiente'
		},
		finalidadeEmissao: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'finalidade_emissao'
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
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		commercialPartnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'commercial_partner_id'
		},
		partnerShippingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_shipping_id'
		},
		paymentTermId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_payment_term',
				key: 'id'
			},
			field: 'payment_term_id'
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
		valorBruto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_bruto'
		},
		valorFrete: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_frete'
		},
		valorSeguro: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_seguro'
		},
		valorDesconto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_desconto'
		},
		valorDespesas: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_despesas'
		},
		valorBcIcms: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_bc_icms'
		},
		valorIcms: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_icms'
		},
		valorIcmsDeson: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_icms_deson'
		},
		valorBcIcmsst: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_bc_icmsst'
		},
		valorIcmsst: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_icmsst'
		},
		valorIi: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_ii'
		},
		valorIpi: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_ipi'
		},
		valorPis: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_pis'
		},
		valorCofins: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_cofins'
		},
		valorEstimadoTributos: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_estimado_tributos'
		},
		valorServicos: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_servicos'
		},
		valorBcIssqn: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_bc_issqn'
		},
		valorIssqn: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_issqn'
		},
		valorPisServicos: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_pis_servicos'
		},
		valorCofinsServicos: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_cofins_servicos'
		},
		valorRetencaoIssqn: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_retencao_issqn'
		},
		valorRetencaoPis: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_retencao_pis'
		},
		valorRetencaoCofins: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_retencao_cofins'
		},
		valorBcIrrf: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_bc_irrf'
		},
		valorRetencaoIrrf: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_retencao_irrf'
		},
		valorBcCsll: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_bc_csll'
		},
		valorRetencaoCsll: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_retencao_csll'
		},
		valorBcInss: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_bc_inss'
		},
		valorRetencaoInss: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_retencao_inss'
		},
		valorFinal: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_final'
		},
		informacoesLegais: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'informacoes_legais'
		},
		informacoesComplementares: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'informacoes_complementares'
		},
		codigoRetorno: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'codigo_retorno'
		},
		mensagemRetorno: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mensagem_retorno'
		},
		numeroNfe: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'numero_nfe'
		},
		xmlToSend: {
			type: "BYTEA",
			allowNull: true,
			field: 'xml_to_send'
		},
		xmlToSendName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'xml_to_send_name'
		},
		emailSent: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'email_sent'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
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
		paymentModeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'payment_mode',
				key: 'id'
			},
			field: 'payment_mode_id'
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
		},
		indDest: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ind_dest'
		},
		indIeDest: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ind_ie_dest'
		},
		tipoEmissao: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tipo_emissao'
		},
		modalidadeFrete: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'modalidade_frete'
		},
		transportadoraId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'transportadora_id'
		},
		placaVeiculo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'placa_veiculo'
		},
		ufVeiculo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'uf_veiculo'
		},
		rntc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'rntc'
		},
		ufSaidaPaisId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'uf_saida_pais_id'
		},
		localEmbarque: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'local_embarque'
		},
		localDespacho: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'local_despacho'
		},
		numeroFatura: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'numero_fatura'
		},
		faturaBruto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'fatura_bruto'
		},
		faturaDesconto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'fatura_desconto'
		},
		faturaLiquido: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'fatura_liquido'
		},
		notaEmpenho: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'nota_empenho'
		},
		pedidoCompra: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'pedido_compra'
		},
		contratoCompra: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'contrato_compra'
		},
		sequencialEvento: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequencial_evento'
		},
		reciboNfe: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'recibo_nfe'
		},
		chaveNfe: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'chave_nfe'
		},
		protocoloNfe: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'protocolo_nfe'
		},
		nfeProcessada: {
			type: "BYTEA",
			allowNull: true,
			field: 'nfe_processada'
		},
		nfeProcessadaName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'nfe_processada_name'
		},
		valorIcmsUfRemet: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_icms_uf_remet'
		},
		valorIcmsUfDest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_icms_uf_dest'
		},
		valorIcmsFcpUfDest: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor_icms_fcp_uf_dest'
		},
		nfseEletronic: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'nfse_eletronic'
		},
		verifyCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'verify_code'
		},
		numeroNfse: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'numero_nfse'
		},
		stockWasUpdated: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'stock_was_updated'
		}
	}, {
		tableName: 'invoice_eletronic',
		timestamps: false
	});
};
