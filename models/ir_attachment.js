/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('irAttachment', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		datasFname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'datas_fname'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'description'
		},
		resName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_name'
		},
		resModel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_model'
		},
		resField: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_field'
		},
		resId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'res_id'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
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
		companyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_company',
				key: 'id'
			},
			field: 'company_id'
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'type'
		},
		url: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'url'
		},
		public: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'public'
		},
		accessToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'access_token'
		},
		dbDatas: {
			type: "BYTEA",
			allowNull: true,
			field: 'db_datas'
		},
		storeFname: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'store_fname'
		},
		fileSize: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'file_size'
		},
		checksum: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'checksum'
		},
		mimetype: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'mimetype'
		},
		indexContent: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'index_content'
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
		tableName: 'ir_attachment',
		timestamps: false
	});
};
