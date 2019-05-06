/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('procurementGroup', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		moveType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'move_type'
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
		saleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'sale_order',
				key: 'id'
			},
			field: 'sale_id'
		}
	}, {
		tableName: 'procurement_group',
		timestamps: false
	});
};
