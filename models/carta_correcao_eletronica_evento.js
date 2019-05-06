/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cartaCorrecaoEletronicaEvento', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		eletronicDocId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'invoice_eletronic',
				key: 'id'
			},
			field: 'eletronic_doc_id'
		},
		idCce: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'id_cce'
		},
		datahoraEvento: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'datahora_evento'
		},
		tipoEvento: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'tipo_evento'
		},
		sequencialEvento: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequencial_evento'
		},
		correcao: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'correcao'
		},
		message: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'message'
		},
		protocolo: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'protocolo'
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
		tableName: 'carta_correcao_eletronica_evento',
		timestamps: false
	});
};
