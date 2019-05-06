/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleSubscription', {
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
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'code'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
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
		dateStart: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date_start'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
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
		recurringNextDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'recurring_next_date'
		},
		recurringTotal: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'recurring_total'
		},
		recurringMonthly: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'recurring_monthly'
		},
		closeReasonId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_subscription_close_reason',
				key: 'id'
			},
			field: 'close_reason_id'
		},
		templateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_subscription_template',
				key: 'id'
			},
			field: 'template_id'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
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
		countryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country',
				key: 'id'
			},
			field: 'country_id'
		},
		industryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner_industry',
				key: 'id'
			},
			field: 'industry_id'
		},
		uuid: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'uuid'
		},
		paymentTokenId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'payment_token',
				key: 'id'
			},
			field: 'payment_token_id'
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
		actualNextDeliveryDate: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'actual_next_delivery_date'
		},
		recId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'rec_id'
		},
		sellerId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'seller_id'
		},
		accountName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'account_name'
		},
		document: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'document'
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'status'
		},
		periodicity: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'periodicity'
		},
		deliveryWeekday: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'delivery_weekday'
		},
		secondDelivery: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'second_delivery'
		},
		activeSubscriptionDate: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'active_subscription_date'
		},
		isBeingFixed: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'is_being_fixed'
		},
		paymentError: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'payment_error'
		}
	}, {
		tableName: 'sale_subscription',
		timestamps: false
	});
};
