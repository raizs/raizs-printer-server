/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nfeDuplicata', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		invoiceEletronicId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'invoice_eletronic',
				key: 'id'
			},
			field: 'invoice_eletronic_id'
		},
		numeroDuplicata: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'numero_duplicata'
		},
		dataVencimento: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'data_vencimento'
		},
		valor: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'valor'
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
		tableName: 'nfe_duplicata',
		timestamps: false
	});
};
