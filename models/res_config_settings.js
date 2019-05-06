/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resConfigSettings', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		groupMultiCompany: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_multi_company'
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
		defaultUserRights: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'default_user_rights'
		},
		defaultExternalEmailServer: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'default_external_email_server'
		},
		moduleBaseImport: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_base_import'
		},
		moduleGoogleCalendar: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_google_calendar'
		},
		moduleGoogleDrive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_google_drive'
		},
		moduleGoogleSpreadsheet: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_google_spreadsheet'
		},
		moduleAuthOauth: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_auth_oauth'
		},
		moduleAuthLdap: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_auth_ldap'
		},
		moduleBaseGengo: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_base_gengo'
		},
		moduleInterCompanyRules: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_inter_company_rules'
		},
		modulePad: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_pad'
		},
		moduleVoip: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_voip'
		},
		companySharePartner: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'company_share_partner'
		},
		defaultCustomReportFooter: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'default_custom_report_footer'
		},
		groupMultiCurrency: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_multi_currency'
		},
		failCounter: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'fail_counter'
		},
		aliasDomain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'alias_domain'
		},
		authSignupResetPassword: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'auth_signup_reset_password'
		},
		authSignupUninvited: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'auth_signup_uninvited'
		},
		authSignupTemplateUserId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'auth_signup_template_user_id'
		},
		companyShareProduct: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'company_share_product'
		},
		groupUom: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_uom'
		},
		groupProductVariant: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_product_variant'
		},
		groupStockPackaging: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_stock_packaging'
		},
		groupSalePricelist: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_sale_pricelist'
		},
		groupProductPricelist: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_product_pricelist'
		},
		groupPricelistItem: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_pricelist_item'
		},
		mailPushNotification: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'mail_push_notification'
		},
		fcmApiKey: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'fcm_api_key'
		},
		fcmProjectId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'fcm_project_id'
		},
		moduleProcurementJit: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'module_procurement_jit'
		},
		moduleProductExpiry: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_product_expiry'
		},
		groupStockProductionLot: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_stock_production_lot'
		},
		groupStockTrackingLot: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_stock_tracking_lot'
		},
		groupStockTrackingOwner: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_stock_tracking_owner'
		},
		groupStockAdvLocation: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_stock_adv_location'
		},
		groupWarningStock: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_warning_stock'
		},
		usePropagationMinimumDelta: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_propagation_minimum_delta'
		},
		moduleStockPickingBatch: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_stock_picking_batch'
		},
		moduleStockBarcode: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_stock_barcode'
		},
		moduleDeliveryDhl: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_delivery_dhl'
		},
		moduleDeliveryFedex: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_delivery_fedex'
		},
		moduleDeliveryUps: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_delivery_ups'
		},
		moduleDeliveryUsps: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_delivery_usps'
		},
		moduleDeliveryBpost: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_delivery_bpost'
		},
		groupStockMultiLocations: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_stock_multi_locations'
		},
		groupStockMultiWarehouses: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_stock_multi_warehouses'
		},
		chartTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'account_chart_template',
				key: 'id'
			},
			field: 'chart_template_id'
		},
		moduleAccountAccountant: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_accountant'
		},
		groupAnalyticAccounting: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_analytic_accounting'
		},
		groupWarningAccount: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_warning_account'
		},
		groupCashRounding: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_cash_rounding'
		},
		moduleAccountAsset: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_asset'
		},
		moduleAccountDeferredRevenue: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_deferred_revenue'
		},
		moduleAccountBudget: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_budget'
		},
		moduleAccountPayment: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_payment'
		},
		moduleAccountReports: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_reports'
		},
		moduleAccountReportsFollowup: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_reports_followup'
		},
		moduleL10NUsCheckPrinting: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_l10n_us_check_printing'
		},
		moduleAccountBatchDeposit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_batch_deposit'
		},
		moduleAccountSepa: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_sepa'
		},
		moduleAccountSepaDirectDebit: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_sepa_direct_debit'
		},
		moduleAccountPlaid: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_plaid'
		},
		moduleAccountYodlee: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_yodlee'
		},
		moduleAccountBankStatementImportQif: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_bank_statement_import_qif'
		},
		moduleAccountBankStatementImportOfx: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_bank_statement_import_ofx'
		},
		moduleAccountBankStatementImportCsv: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_bank_statement_import_csv'
		},
		moduleAccountBankStatementImportCamt: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_bank_statement_import_camt'
		},
		moduleCurrencyRateLive: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_currency_rate_live'
		},
		modulePrintDocsaway: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_print_docsaway'
		},
		moduleProductMargin: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_product_margin'
		},
		moduleL10NEuService: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_l10n_eu_service'
		},
		moduleAccountTaxcloud: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_taxcloud'
		},
		useSaleNote: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_sale_note'
		},
		groupDiscountPerSoLine: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_discount_per_so_line'
		},
		moduleSaleMargin: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_sale_margin'
		},
		groupSaleLayout: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_sale_layout'
		},
		groupWarningSale: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_warning_sale'
		},
		portalConfirmation: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'portal_confirmation'
		},
		portalConfirmationOptions: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'portal_confirmation_options'
		},
		moduleSalePayment: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_sale_payment'
		},
		moduleWebsiteQuote: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_website_quote'
		},
		groupSaleDeliveryAddress: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_sale_delivery_address'
		},
		multiSalesPrice: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'multi_sales_price'
		},
		multiSalesPriceMethod: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'multi_sales_price_method'
		},
		salePricelistSetting: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'sale_pricelist_setting'
		},
		groupShowPriceSubtotal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_show_price_subtotal'
		},
		groupShowPriceTotal: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_show_price_total'
		},
		groupProformaSales: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_proforma_sales'
		},
		saleShowTax: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'sale_show_tax'
		},
		defaultInvoicePolicy: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'default_invoice_policy'
		},
		defaultDepositProductId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'default_deposit_product_id'
		},
		autoDoneSetting: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'auto_done_setting'
		},
		moduleWebsiteSaleDigital: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_website_sale_digital'
		},
		moduleDelivery: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_delivery'
		},
		moduleProductEmailTemplate: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_product_email_template'
		},
		moduleSaleCoupon: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_sale_coupon'
		},
		moduleStockLandedCosts: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_stock_landed_costs'
		},
		groupRouteSoLines: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_route_so_lines'
		},
		moduleSaleOrderDates: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_sale_order_dates'
		},
		groupDisplayIncoterm: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_display_incoterm'
		},
		useSecurityLead: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_security_lead'
		},
		defaultPickingPolicy: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'default_picking_policy'
		},
		lockConfirmedPo: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'lock_confirmed_po'
		},
		poOrderApproval: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'po_order_approval'
		},
		defaultPurchaseMethod: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'default_purchase_method'
		},
		modulePurchaseRequisition: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_purchase_requisition'
		},
		groupWarningPurchase: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_warning_purchase'
		},
		moduleStockDropshipping: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_stock_dropshipping'
		},
		groupManageVendorPrice: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_manage_vendor_price'
		},
		moduleAccount3WayMatch: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_account_3way_match'
		},
		isInstalledSale: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_installed_sale'
		},
		groupAnalyticAccountForPurchases: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_analytic_account_for_purchases'
		},
		usePoLead: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_po_lead'
		},
		nfeEmailTemplate: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_template',
				key: 'id'
			},
			field: 'nfe_email_template'
		},
		moduleSaleSubscriptionDashboard: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_sale_subscription_dashboard'
		},
		moduleSaleSubscriptionAsset: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_sale_subscription_asset'
		},
		groupMassMailingCampaign: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_mass_mailing_campaign'
		},
		moduleHrOrgChart: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_hr_org_chart'
		},
		expenseAliasPrefix: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'expense_alias_prefix'
		},
		useMailgateway: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_mailgateway'
		},
		moduleSaleManagement: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_sale_management'
		},
		useManufacturingLead: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_manufacturing_lead'
		},
		moduleMrpByproduct: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_mrp_byproduct'
		},
		moduleMrpMps: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_mrp_mps'
		},
		moduleMrpPlm: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_mrp_plm'
		},
		moduleMrpMaintenance: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_mrp_maintenance'
		},
		moduleQualityMrp: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_quality_mrp'
		},
		moduleMrpRepair: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'module_mrp_repair'
		},
		groupMrpRoutings: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'group_mrp_routings'
		}
	}, {
		tableName: 'res_config_settings',
		timestamps: false
	});
};
