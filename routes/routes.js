const express = require('express')

const fibonacci_api = require('../function/fibonacci.js')
const combination_api = require('../function/combination.js')
const countries_api = require('../function/countries.js')

const controllersCompany = require('../controllers/company.js')
const controllersEmployee = require('../controllers/employee.js')

const router = express.Router();

router.post('/api/fibonacci', fibonacci_api);
router.post('/api/combination', combination_api);
router.get('/api/countries', countries_api);

router.post('/api/companies', controllersCompany.add_company_api);
router.get('/api/companies', controllersCompany.get_company_api);
router.put('/api/companies/:id/set_active', controllersCompany.set_active_company_api);

router.get('/api/companies/:company_id/employees', controllersEmployee.get_employee_byCompanyId_api);
router.get('/api/employees/:id', controllersEmployee.get_employee_byId_api);
router.post('/api/companies/:company_id/employees', controllersEmployee.add_employee_api);
router.put('/api/companies/:company_id/employees/:employee_id', controllersEmployee.update_employee_api);
router.delete('/api/employees/:id', controllersEmployee.delete_employee_api);

module.exports = router