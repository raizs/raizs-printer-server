/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('stockDate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		stockDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'stock_date'
		},
		dateStart: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_start'
		},
		dateEnd: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'date_end'
		},
		useOnMonday: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'use_on_monday'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		vendorId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'vendor_id'
		},
		productsSum: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'products_sum'
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
		tableName: 'stock_date',
		timestamps: false
	});
};
