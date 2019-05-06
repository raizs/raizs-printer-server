/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irModuleModule', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		writeDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'write_date'
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
		website: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'website'
		},
		summary: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'summary'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'name'
		},
		author: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'author'
		},
		icon: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'icon'
		},
		state: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'state'
		},
		latestVersion: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'latest_version'
		},
		shortdesc: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'shortdesc'
		},
		categoryId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_module_category',
				key: 'id'
			},
			field: 'category_id'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		application: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'application'
		},
		demo: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'demo'
		},
		web: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'web'
		},
		license: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'license'
		},
		sequence: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: '100',
			field: 'sequence'
		},
		autoInstall: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			defaultValue: false,
			field: 'auto_install'
		},
		maintainer: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'maintainer'
		},
		contributors: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'contributors'
		},
		publishedVersion: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'published_version'
		},
		url: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'url'
		},
		menusByModule: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'menus_by_module'
		},
		reportsByModule: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'reports_by_module'
		},
		viewsByModule: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'views_by_module'
		},
		imported: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'imported'
		}
	}, {
		tableName: 'ir_module_module',
		timestamps: false
	});
};
