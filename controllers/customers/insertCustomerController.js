// validate customer input data

const insertCustomerUseCase = require('../../useCases/customers/insertCustomerUseCase');

const invoke = async (req) => {
	const dto = req.body;
	// console.log(inputData);
	return await insertCustomerUseCase.handle(dto);
};

module.exports = { invoke };
