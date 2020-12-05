// validate customer input data

const insertCustomerUseCase = require('../../useCases/customers/insertCustomerUseCase');

const invoke = async (req) => {
	const customer = req.body;
	const newCustomer = await insertCustomerUseCase.handle(customer);
	if (newCustomer === false) {
		return {
			code: 400,
			message: 'Cannot create new customer. The customer may already exist',
			success: false,
		};
	} else {
		return { code: 200, data: newCustomer, success: true };
	}
};

module.exports = { invoke };
