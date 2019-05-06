/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mailMassMailingContact', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'name'
		},
		companyName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'company_name'
		},
		titleId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'res_partner_title',
				key: 'id'
			},
			field: 'title_id'
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'email'
		},
		createDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'create_date'
		},
		optOut: {
			type: DataTypes.BOOLEAN,
			allowNull: true,
			field: 'opt_out'
		},
		unsubscriptionDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'unsubscription_date'
		},
		messageBounce: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'message_bounce'
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
		messageLastPost: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'message_last_post'
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
		tableName: 'mail_mass_mailing_contact',
		timestamps: false
	});
};
