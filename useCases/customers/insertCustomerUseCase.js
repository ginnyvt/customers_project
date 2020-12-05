const Customer = require('../../entities/customers');
const customerRepository = require('../../repositories/customerRepository');

// handle validated customer's data

const handle = async (validCustomer) => {
	const existCustomer = await customerRepository.checkExist(validCustomer);

	if (existCustomer) {
		return false;
	} else {
		const newCustomer = new Customer(
			validCustomer.customerId,
			validCustomer.firstname,
			validCustomer.lastname,
			validCustomer.favoriteIceCream,
			validCustomer.customerClass
		);

		await customerRepository.insert(newCustomer);
		return newCustomer;
	}
};

module.exports = { handle };
