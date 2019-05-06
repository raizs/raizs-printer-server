/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wizardInutilizationNfeNumeration', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		numerationStart: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'numeration_start'
		},
		numerationEnd: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'numeration_end'
		},
		serie: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'br_account_document_serie',
				key: 'id'
			},
			field: 'serie'
		},
		modelo: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'modelo'
		},
		justificativa: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'justificativa'
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
		tableName: 'wizard_inutilization_nfe_numeration',
		timestamps: false
	});
};
