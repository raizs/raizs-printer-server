/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('accountFiscalPositionTemplate', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'sequence'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		chartTemplateId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'account_chart_template',
				key: 'id'
			},
			field: 'chart_template_id'
		},
		note: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'note'
		},
		autoApply: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'auto_apply'
		},
		vatRequired: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'vat_required'
		},
		countryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country',
				key: 'id'
			},
			field: 'country_id'
		},
		countryGroupId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_country_group',
				key: 'id'
			},
			field: 'country_group_id'
		},
		zipFrom: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'zip_from'
		},
		zipTo: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'zip_to'
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
		indFinal: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ind_final'
		},
		indPres: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'ind_pres'
		}
	}, {
		tableName: 'account_fiscal_position_template',
		timestamps: false
	});
};
