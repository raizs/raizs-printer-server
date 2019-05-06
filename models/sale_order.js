/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleOrder', {
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
		origin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'origin'
		},
		clientOrderRef: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'client_order_ref'
		},
		accessToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'access_token'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		dateOrder: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'date_order'
		},
		validityDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'validity_date'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		confirmationDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'confirmation_date'
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'user_id'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		partnerInvoiceId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_invoice_id'
		},
		partnerShippingId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_shipping_id'
		},
		pricelistId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_pricelist',
				key: 'id'
			},
			field: 'pricelist_id'
		},
		analyticAccountId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_analytic_account',
				key: 'id'
			},
			field: 'analytic_account_id'
		},
		invoiceStatus: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'invoice_status'
		},
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
		},
		amountUntaxed: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_untaxed'
		},
		amountTax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_tax'
		},
		amountTotal: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount_total'
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
			allowNull: false,
			references: {
				model: 'account_fiscal_position',
				key: 'id'
			},
			field: 'fiscal_position_id'
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
		teamId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'crm_team',
				key: 'id'
			},
			field: 'team_id'
		},
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
		},
		activityDateDeadline: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'activity_date_deadline'
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
		incoterm: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'stock_incoterms',
				key: 'id'
			},
			field: 'incoterm'
		},
		pickingPolicy: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'picking_policy'
		},
		warehouseId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'stock_warehouse',
				key: 'id'
			},
			field: 'warehouse_id'
		},
		procurementGroupId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'procurement_group',
				key: 'id'
			},
			field: 'procurement_group_id'
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
		totalBruto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_bruto'
		},
		totalTax: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_tax'
		},
		totalIpi: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_ipi'
		},
		totalIcmsSt: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_icms_st'
		},
		totalDesconto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_desconto'
		},
		totalDespesas: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_despesas'
		},
		totalSeguro: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_seguro'
		},
		totalFrete: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'total_frete'
		},
		subscriptionId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_subscription',
				key: 'id'
			},
			field: 'subscription_id'
		},
		salesChannel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'salesChannel'
		},
		workflowInRetry: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'workflowInRetry'
		},
		statusDescription: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'statusDescription'
		},
		marketPlaceOrderId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'marketPlaceOrderId'
		},
		orderSequence: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'order_sequence'
		},
		affiliateId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'affiliateId'
		},
		orderIsComplete: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'orderIsComplete'
		},
		paymentNames: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'paymentNames'
		},
		vtexOrigin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_origin'
		},
		authorizedDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'authorizedDate'
		},
		workflowInErrorState: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'workflowInErrorState'
		},
		orderId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'orderId'
		},
		vtexCreationDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'vtex_creationDate'
		},
		lastMessageUnread: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'lastMessageUnread'
		},
		vtexStatus: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_status'
		},
		shippingEstimatedDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'shippingEstimatedDate'
		},
		shippingStreet: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'shippingStreet'
		},
		shippingCountryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country',
				key: 'id'
			},
			field: 'shippingCountryId'
		},
		shippingStateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'shippingStateId'
		},
		shippingCityId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_state_city',
				key: 'id'
			},
			field: 'shippingCityId'
		},
		shippingZip: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'shippingZip'
		},
		shippingNumber: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'shippingNumber'
		},
		shippingDistrict: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'shippingDistrict'
		},
		shippingComplement: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'shippingComplement'
		},
		paymentTxId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'payment_transaction',
				key: 'id'
			},
			field: 'payment_tx_id'
		},
		paymentAcquirerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'payment_acquirer',
				key: 'id'
			},
			field: 'payment_acquirer_id'
		},
		subscriptionManagement: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'subscription_management'
		},
		codePromoProgramId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_coupon_program',
				key: 'id'
			},
			field: 'code_promo_program_id'
		},
		carrierId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'delivery_carrier',
				key: 'id'
			},
			field: 'carrier_id'
		},
		deliveryPrice: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'delivery_price'
		},
		deliveryMessage: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'delivery_message'
		},
		deliveryRatingSuccess: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'delivery_rating_success'
		},
		invoiceShippingOnDelivery: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'invoice_shipping_on_delivery'
		},
		commitmentDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'commitment_date'
		},
		requestedDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'requested_date'
		},
		effectiveDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'effective_date'
		},
		basketId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'subscription_basket',
				key: 'id'
			},
			field: 'basket_id'
		},
		stockDeducted: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'stock_deducted'
		},
		driverName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'driver_name'
		},
		stopNumber: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'stop_number'
		},
		receiverName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'receiver_name'
		},
		arriveAt: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'arrive_at'
		},
		barcode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'barcode'
		},
		boxes: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'boxes'
		}
	}, {
		tableName: 'sale_order',
		timestamps: false
	});
};
