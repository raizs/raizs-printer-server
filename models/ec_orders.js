/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ecOrders', {
		resPartnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'res_partner_id'
		},
		mpid: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mpid'
		},
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		craetedAt: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			defaultValue: sequelize.now,
			field: 'craeted_at'
		},
		closed: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'closed'
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: 'pending',
			field: 'status'
		}
	}, {
		tableName: 'ec_orders',
		timestamps: false
	});
};
