const path = require('path');

// Local files
const customerRepository = require('./repositories/customerRepository');
const insertCustomerController = require('./controllers/customers/insertCustomerController');
const getCustomerController = require('./controllers/customers/getCustomerController');
const deleteCustomerController = require('./controllers/customers/deleteCustomerController');
const updateCustomerController = require('./controllers/customers/updateCustomerController');

// 3-parties packages
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pageviews'));

// Server config
const { port, host } = require('./assets/serverConfig.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const menuPath = path.join(__dirname, 'index.html');

// Routes

// ######################################
// ############# HTML Pages #############
// ######################################

app.get('/', (req, res) => {
	res.sendFile(menuPath);
});

// List all customer client side render
app.get('/list-customers', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'listCustomer.html'));
});

// Add new customer client side render
app.get('/add-customer', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'newCustomer.html'));
});

app.get('/view-customer/:id', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'getCustomer.html'));
});

app.get('/delete-customer/:id', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'deleteCustomer.html'));
});

app.get('/update-customer/:id', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'updateCustomer.html'));
});
// #########################################
// ############# API Endpoints #############
// #########################################

// List all customers api
app.get('/customers', async (req, res) => {
	const data = await customerRepository.listAll();
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(data));
});

app.post('/customers', async (req, res) => {
	const data = await insertCustomerController.invoke(req);
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(data));
});

app.get('/customer/:id', async (req, res) => {
	const data = await getCustomerController.invoke(req);
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(data));
});

app.patch('/customer/:id', async (req, res) => {
	const data = await updateCustomerController.invoke(req);
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(data));
});

app.delete('/customer/:id', async (req, res) => {
	const data = await deleteCustomerController.invoke(req);
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(data));
});

app.listen(port, host);
