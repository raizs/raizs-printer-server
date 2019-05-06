/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('userAddresses', {
		resPartnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'res_partner_id'
		},
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
		receiverName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'receiver_name'
		},
		cep: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'cep'
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'address'
		},
		number: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'number'
		},
		complement: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'complement'
		},
		neighbourhood: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'neighbourhood'
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'city'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'state'
		},
		isDefaultAddress: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'is_default_address'
		}
	}, {
		tableName: 'user_addresses',
		timestamps: false
	});
};
