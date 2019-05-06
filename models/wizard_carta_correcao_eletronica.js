/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wizardCartaCorrecaoEletronica', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		correcao: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'correcao'
		},
		sequential: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequential'
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
		message: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'message'
		},
		sentXml: {
			type: "BYTEA",
			allowNull: true,
			field: 'sent_xml'
		},
		sentXmlName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'sent_xml_name'
		},
		receivedXml: {
			type: "BYTEA",
			allowNull: true,
			field: 'received_xml'
		},
		receivedXmlName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'received_xml_name'
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
		tableName: 'wizard_carta_correcao_eletronica',
		timestamps: false
	});
};
