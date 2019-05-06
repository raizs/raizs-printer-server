/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brZipSearch', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'zip'
		},
		street: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'street'
		},
		district: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'district'
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
		stateId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'state_id'
		},
		cityId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_state_city',
				key: 'id'
			},
			field: 'city_id'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		addressId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'address_id'
		},
		objectName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'object_name'
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
		tableName: 'br_zip_search',
		timestamps: false
	});
};
