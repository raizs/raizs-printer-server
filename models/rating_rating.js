/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ratingRating', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		resName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_name'
		},
		resModelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'res_model_id'
		},
		resModel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'res_model'
		},
		resId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'res_id'
		},
		parentResName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'parent_res_name'
		},
		parentResModelId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'ir_model',
				key: 'id'
			},
			field: 'parent_res_model_id'
		},
		parentResModel: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'parent_res_model'
		},
		parentResId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent_res_id'
		},
		ratedPartnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'rated_partner_id'
		},
		partnerId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner',
				key: 'id'
			},
			field: 'partner_id'
		},
		rating: {
			type: DataTypes.DOUBLE,
			allowNull: true,
			field: 'rating'
		},
		ratingText: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'rating_text'
		},
		feedback: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'feedback'
		},
		messageId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'mail_message',
				key: 'id'
			},
			field: 'message_id'
		},
		accessToken: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'access_token'
		},
		consumed: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'consumed'
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
		tableName: 'rating_rating',
		timestamps: false
	});
};
