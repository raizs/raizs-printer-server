/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('deliveryCarrier', {
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
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		integrationLevel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'integration_level'
		},
		prodEnvironment: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'prod_environment'
		},
		debugLogging: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'debug_logging'
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
		productId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'product_product',
				key: 'id'
			},
			field: 'product_id'
		},
		zipFrom: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'zip_from'
		},
		zipTo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'zip_to'
		},
		margin: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'margin'
		},
		freeOver: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'free_over'
		},
		amount: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'amount'
		},
		fixedPrice: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'fixed_price'
		},
		deliveryType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'delivery_type'
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
		tableName: 'delivery_carrier',
		timestamps: false
	});
};
