const deleteCustomerUseCase = require('../../useCases/customers/deleteCustomerUseCase');

const invoke = async (req) => {
	const dto = await { customerId: req.params.id };
	return deleteCustomerUseCase.handle(dto);
};

module.exports = { invoke };
