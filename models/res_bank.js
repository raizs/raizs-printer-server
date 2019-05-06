/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resBank', {
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
		street: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'street'
		},
		street2: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'street2'
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'zip'
		},
		city: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'city'
		},
		state: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_state',
				key: 'id'
			},
			field: 'state'
		},
		country: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country',
				key: 'id'
			},
			field: 'country'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'email'
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'phone'
		},
		active: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'active'
		},
		bic: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'bic'
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
		number: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'number'
		},
		district: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'district'
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
		accNumberFormat: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'acc_number_format'
		}
	}, {
		tableName: 'res_bank',
		timestamps: false
	});
};
