/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nfeReboque', {
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
		placaVeiculo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'placa_veiculo'
		},
		ufVeiculo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'uf_veiculo'
		},
		rntc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'rntc'
		},
		vagao: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vagao'
		},
		balsa: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'balsa'
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
		tableName: 'nfe_reboque',
		timestamps: false
	});
};
