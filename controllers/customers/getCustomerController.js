const getCustomerUseCase = require('../../useCases/customers/getCustomerUseCase');

const invoke = async (req) => {
	const dto = await { customerId: req.params.id };
	return getCustomerUseCase.handle(dto);
};

module.exports = { invoke };
