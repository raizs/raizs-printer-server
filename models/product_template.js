/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productTemplate', {
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
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		descriptionPurchase: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description_purchase'
		},
		descriptionSale: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description_sale'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
		},
		rental: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'rental'
		},
		categId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_category',
				key: 'id'
			},
			field: 'categ_id'
		},
		listPrice: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'list_price'
		},
		volume: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'volume'
		},
		weight: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'weight'
		},
		saleOk: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'sale_ok'
		},
		purchaseOk: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'purchase_ok'
		},
		uomId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'uom_id'
		},
		uomPoId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_uom',
				key: 'id'
			},
			field: 'uom_po_id'
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
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
		},
		defaultCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'default_code'
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
		responsibleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_users',
				key: 'id'
			},
			field: 'responsible_id'
		},
		saleDelay: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'sale_delay'
		},
		tracking: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'tracking'
		},
		descriptionPicking: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description_picking'
		},
		descriptionPickingout: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description_pickingout'
		},
		descriptionPickingin: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description_pickingin'
		},
		serviceType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'service_type'
		},
		saleLineWarn: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'sale_line_warn'
		},
		saleLineWarnMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'sale_line_warn_msg'
		},
		expensePolicy: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'expense_policy'
		},
		invoicePolicy: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'invoice_policy'
		},
		fiscalType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'fiscal_type'
		},
		origin: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'origin'
		},
		fiscalClassificationId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_fiscal_classification',
				key: 'id'
			},
			field: 'fiscal_classification_id'
		},
		serviceTypeId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_service_type',
				key: 'id'
			},
			field: 'service_type_id'
		},
		cest: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'cest'
		},
		fiscalCategoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_fiscal_category',
				key: 'id'
			},
			field: 'fiscal_category_id'
		},
		purchaseMethod: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'purchase_method'
		},
		purchaseLineWarn: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'purchase_line_warn'
		},
		purchaseLineWarnMsg: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'purchase_line_warn_msg'
		},
		productBrandId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_brand',
				key: 'id'
			},
			field: 'product_brand_id'
		},
		productId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'productId'
		},
		reserved: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'reserved'
		},
		height: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'height'
		},
		length: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'length'
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
		shouldUpload: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'should_upload'
		},
		metaTagDescription: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'meta_tag_description'
		},
		recurringInvoice: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'recurring_invoice'
		},
		subscriptionTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_subscription_template',
				key: 'id'
			},
			field: 'subscription_template_id'
		},
		canBeExpensed: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'can_be_expensed'
		},
		hsCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'hs_code'
		},
		markup: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'markup'
		},
		produceDelay: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'produce_delay'
		}
	}, {
		tableName: 'product_template',
		timestamps: false
	});
};
