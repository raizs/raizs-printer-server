/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('productCategory', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		parentLeft: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent_left'
		},
		parentRight: {
			type: DataTypes.INTEGER,
			allowNull: true,
			field: 'parent_right'
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'name'
		},
		completeName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'complete_name'
		},
		parentId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_category',
				key: 'id'
			},
			field: 'parent_id'
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
		removalStrategyId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'product_removal',
				key: 'id'
			},
			field: 'removal_strategy_id'
		},
		vtexId: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'vtex_id'
		}
	}, {
		tableName: 'product_category',
		timestamps: false
	});
};
