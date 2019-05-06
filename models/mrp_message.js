/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mrpMessage', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			field: 'id'
		},
		name: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'name'
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'message'
		},
		productTmplId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_template',
				key: 'id'
			},
			field: 'product_tmpl_id'
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
		bomId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_bom',
				key: 'id'
			},
			field: 'bom_id'
		},
		workcenterId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_workcenter',
				key: 'id'
			},
			field: 'workcenter_id'
		},
		validUntil: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'valid_until'
		},
		routingId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mrp_routing',
				key: 'id'
			},
			field: 'routing_id'
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
		tableName: 'mrp_message',
		timestamps: false
	});
};
