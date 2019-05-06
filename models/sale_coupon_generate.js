/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('saleCouponGenerate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nbrCoupons: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'nbr_coupons'
		},
		generationType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'generation_type'
		},
		partnersDomain: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'partners_domain'
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
		tableName: 'sale_coupon_generate',
		timestamps: false
	});
};
