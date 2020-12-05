const path = require('path');
const fs = require('fs');

// Get database file
const dataFile = path.join(__dirname, '..', 'db', 'Tran_Quynh_customers.json');

// Read database file
const readDB = () => {
	try {
		const existCustomers = fs.readFileSync(dataFile, 'utf8');
		return JSON.parse(existCustomers);
	} catch (err) {
		return [];
	}
};

// Write to database
const writeToDB = (data) => {
	try {
		fs.writeFileSync(dataFile, JSON.stringify(data, null, 4), {
			encoding: 'utf-8',
			flag: 'w',
		});
		return 'Write successfully';
	} catch (err) {
		return err;
	}
};

// List all customers
const listAll = async () => {
	return await readDB();
};

// Get customer by id
const get = async (dto) => {
	const customers = await readDB();
	const existCustomer = customers.find((customer) => {
		return customer.customerId === parseInt(dto.customerId);
	});
	return existCustomer || null;
};

// Insert new customer
const insert = async (customer) => {
	const customers = await readDB();
	customers.push(customer);
	await writeToDB(customers);
	return customer;
};

// Check Exist
const checkExist = async (customer) => {
	const customers = await readDB();
	const existCustomer = customers.filter((x) => {
		return x.customerId === parseInt(customer.customerId);
	});
	return existCustomer.length > 0;
};

// Delete customer
const remove = async (dto) => {
	const customers = await readDB();
	const filteredCustomers = customers.filter((customer) => {
		return customer.customerId !== parseInt(dto.customerId);
	});
	await writeToDB(filteredCustomers);
};

// Update customer
const update = async (customer) => {
	// Find index of customer
	const customers = await readDB();
	const index = customers.findIndex((cus) => {
		return cus.customerId === customer.customerId;
	});
	customers[index] = customer;
	await writeToDB(customers);
	return customer;
};

module.exports = { listAll, checkExist, insert, get, update, remove };
