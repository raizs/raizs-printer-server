/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brZipResult', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		zipId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_zip',
				key: 'id'
			},
			field: 'zip_id'
		},
		searchId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_zip_search',
				key: 'id'
			},
			field: 'search_id'
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
		streetType: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'street_type'
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
			allowNull: false,
			references: {
				model: 'res_state_city',
				key: 'id'
			},
			field: 'city_id'
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
		tableName: 'br_zip_result',
		timestamps: false
	});
};
