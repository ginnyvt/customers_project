const customerRepository = require('../../repositories/customerRepository');
const Customer = require('../../entities/customers');

const handle = async (dto) => {
	const { customerId, customerData } = dto;
	let customer = await customerRepository.get(customerId);

	if (customer) {
		customer = new Customer(
			customer.customerId,
			customerData.firstname || customer.firstname,
			customerData.lastname || customer.lastname,
			customerData.favoriteIceCream || customer.favoriteIceCream,
			customerData.customerClass || customer.customerClass
		);
	} else {
		return false;
	}

	return customerRepository.update(customer);
};

module.exports = { handle };
