class Customer {
	constructor(
		customerId,
		firstname,
		lastname,
		favoriteIceCream,
		customerClass
	) {
		this.customerId = customerId;
		this.firstname = firstname;
		this.lastname = lastname;
		this.favoriteIceCream = favoriteIceCream;
		this.customerClass = customerClass;
	}
}

module.exports = Customer;
