/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('brAccountFiscalDocument', {
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
			allowNull: true,
			field: 'name'
		},
		electronic: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'electronic'
		},
		nfseEletronic: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'nfse_eletronic'
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
		tableName: 'br_account_fiscal_document',
		timestamps: false
	});
};
