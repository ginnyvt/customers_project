const updateCustomerUseCase = require('../../useCases/customers/updateCustomerUseCase');

const invoke = async (req) => {
	const customerId = { customerId: req.params.id };
	const customerData = req.body;
	const dto = { customerId, customerData };
	// console.log(dto);
	return await updateCustomerUseCase.handle(dto);
};

module.exports = { invoke };
