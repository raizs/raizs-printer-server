/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleSubscriptionTemplate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'code'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		recurringRuleType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'recurring_rule_type'
		},
		recurringInterval: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'recurring_interval'
		},
		userClosable: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'user_closable'
		},
		paymentMandatory: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'payment_mandatory'
		},
		color: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'color'
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
		}
	}, {
		tableName: 'sale_subscription_template',
		timestamps: false
	});
};
