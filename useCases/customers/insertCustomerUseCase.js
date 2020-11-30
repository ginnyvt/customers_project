const Customer = require('../../entities/customers');
const customerRepository = require('../../repositories/customerRepository');

// handle validated customer's data

const handle = async (validatedDto) => {
	const existCustomer = await customerRepository.checkExist(validatedDto);
	console.log(existCustomer);

	if (existCustomer) {
		return { message: 'customer already exist' };
	} else {
		const newCustomer = new Customer(
			validatedDto.customerId,
			validatedDto.firstname,
			validatedDto.lastname,
			validatedDto.favoriteIceCream,
			validatedDto.customerClass
		);

		return await customerRepository.insert(newCustomer);
	}
};

module.exports = { handle };
