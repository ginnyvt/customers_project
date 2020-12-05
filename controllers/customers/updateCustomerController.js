const updateCustomerUseCase = require('../../useCases/customers/updateCustomerUseCase');

const invoke = async (req) => {
	const customerId = { customerId: req.params.id };
	const customerData = req.body;
	const dto = { customerId, customerData };

	const updatedCustomer = await updateCustomerUseCase.handle(dto);
	if (updatedCustomer === false) {
		return {
			code: 400,
			message: 'Cannot update customer. Customer might not exist',
			success: false,
		};
	} else {
		return { code: 200, data: updatedCustomer, success: true };
	}
};

module.exports = { invoke };
