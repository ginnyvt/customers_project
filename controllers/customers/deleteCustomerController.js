const deleteCustomerUseCase = require('../../useCases/customers/deleteCustomerUseCase');

const invoke = async (req) => {
	const dto = { customerId: req.params.id };
	const deletedCustomer = await deleteCustomerUseCase.handle(dto);
	if (deletedCustomer === false) {
		return {
			code: 400,
			message: 'Cannot delete customer. Customer might not exist',
			success: false,
		};
	} else {
		return { code: 200, data: deletedCustomer, success: true };
	}
};

module.exports = { invoke };
