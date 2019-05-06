/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('resCountryState', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		countryId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'res_country',
				key: 'id'
			},
			unique: true,
			field: 'country_id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			field: 'code'
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
		ibgeCode: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ibge_code'
		}
	}, {
		tableName: 'res_country_state',
		timestamps: false
	});
};
