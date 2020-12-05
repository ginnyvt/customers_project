const customerRepository = require('../../repositories/customerRepository');

const handle = async (dto) => {
	const customer = await customerRepository.get(dto);
	console.log(customer);
	if (customer) {
		customerRepository.remove(customer);
		return { customer };
	} else {
		return false;
	}
};

module.exports = { handle };
