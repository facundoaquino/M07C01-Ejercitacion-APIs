const { Product, Category } = require('../../database/models')

const producsController = {
	latest: async (req, res) => {
		const PRODUCTS_LIMIT = 8
		const meta = {
			status: 200,
			count: PRODUCTS_LIMIT,
			url: req.originalUrl,
		}
		try {
			const products = await Product.findAll({
				order: [['createdAt', 'desc']],
				limit: PRODUCTS_LIMIT,
			})
			const data = [...products]
			const response = { meta, data }

			res.send(response)
		} catch (err) {
			console.log(err)
			res.status(500).send({ error: 'error en  en la base de datos' })
		}
	},
	offers: async (req, res) => {
		const PRODUCTS_LIMIT = 8
		const meta = {
			status: 200,
			count: PRODUCTS_LIMIT,
			url: req.originalUrl,
		}

		const products = await Product.findAll({
			order: [['discount', 'desc']],
			limit: PRODUCTS_LIMIT,
		})
		const data = [...products]
		const response = { meta, data }

		res.send(response)
	},
	categories: async (req, res) => {
		const meta = {
			status: 200,
			url: req.originalUrl,
		}
		const category = await Category.findOne({
			where: {
				name: req.params.category,
			},
			include: ['products'],
		})
		const { products } = category

		const response = { meta, data: products }

		res.send(response)
	},
}

module.exports = producsController
