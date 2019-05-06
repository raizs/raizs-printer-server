/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brAccountServiceType', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		code: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'code'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'br_account_service_type',
				key: 'id'
			},
			field: 'parent_id'
		},
		internalType: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'internal_type'
		},
		federalNacional: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'federal_nacional'
		},
		federalImportado: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'federal_importado'
		},
		estadualImposto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'estadual_imposto'
		},
		municipalImposto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'municipal_imposto'
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
		tableName: 'br_account_service_type',
		timestamps: false
	});
};
