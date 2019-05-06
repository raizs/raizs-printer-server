/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wizardCancelNfe', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		edocId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'invoice_eletronic',
				key: 'id'
			},
			field: 'edoc_id'
		},
		justificativa: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'justificativa'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
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
		tableName: 'wizard_cancel_nfe',
		timestamps: false
	});
};
