const customerRepository = require('../../repositories/customerRepository');

const handle = async (dto) => {
	return await customerRepository.get(dto);
};

module.exports = { handle };
