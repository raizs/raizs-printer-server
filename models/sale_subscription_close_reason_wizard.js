/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleSubscriptionCloseReasonWizard', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		closeReasonId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'sale_subscription_close_reason',
				key: 'id'
			},
			field: 'close_reason_id'
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
		tableName: 'sale_subscription_close_reason_wizard',
		timestamps: false
	});
};
