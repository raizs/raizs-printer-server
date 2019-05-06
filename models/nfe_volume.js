/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('nfeVolume', {
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
		quantidadeVolumes: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'quantidade_volumes'
		},
		especie: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'especie'
		},
		marca: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'marca'
		},
		numeracao: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'numeracao'
		},
		pesoLiquido: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'peso_liquido'
		},
		pesoBruto: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'peso_bruto'
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
		tableName: 'nfe_volume',
		timestamps: false
	});
};
