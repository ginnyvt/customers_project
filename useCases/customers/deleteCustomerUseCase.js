const customerRepository = require('../../repositories/customerRepository');

const handle = async (dto) => {
	const customer = await customerRepository.get(dto);
	if (customer) {
		customerRepository.remove(customer);
		return { customer, message: 'Customer deleted succesfully' };
	} else {
		return { message: 'Customer not found' };
	}
};

module.exports = { handle };
