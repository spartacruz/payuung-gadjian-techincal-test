const models = require('../models')
const validate = require('../function/validation.js')

exports.get_employee_byCompanyId_api = async (req, res) => {
    try {
        let get_company = await models.companies.findOne({
            where: {
                id: req.params.company_id
            },
            include: [{
                model: models.employees,
                attributes: {exclude: ['company_id','createdAt', 'updatedAt']}
            }],
            attributes: ['id','company_name', 'is_active']
        })

        if(get_company == null) {
            res.statusMessage = ": Data not found"
            return res.status(422).json({
                "status": 422,
                "code": "422",
                "data": null,
                "message": "Data is not found"
            })
        }

        res.statusMessage = ": Success"
        return res.status(200).json({
            "status": 200,
            "code": "200",
            "data": get_company,
            "message": "Success"
        })
    } catch (err) {
        console.log(err)
    }
}
exports.get_employee_byId_api = async (req, res) => {
    try {    
        let get_employee = await models.employees.findOne({
            where: {
                id: req.params.id
            },
            attributes: {exclude: ['company_id', 'createdAt', 'updatedAt']}
        })

        if (get_employee == null) {
            res.statusMessage = ': Data not found'
            return res.status(422).json({
                "status": 422,
                "code": "422",
                "data": null,
                "message": "Data is not found"
            })
        }

        res.statusMessage = ': Success'
        return res.status(200).json({
            "status": 200,
            "code": "200",
            "data": get_employee,
            "message": "Success"
        })
    } catch (err) {
        console.log(err)
    }
}

exports.add_employee_api = async (req, res) => {
    try {

        const check = validate(req.body, "employee")
        let is_valid = false
        
        try {
            console.log(check.error.details[0].message)
        } catch (err) {
            console.log("Validation Pass")
            is_valid = true
        }

        if(!is_valid) {
            res.statusMessage = "Invalid request"
            return res.status(400).json({
                "status": 400,
                "code": "400",
                "data": null,
                "message": check.error.details[0].message
            })
        }

        const count = await models.employees.findOne({
            where: {
                email: req.body.email
            }
        })

        if (count) {
             res.statusMessage = "Conflict"
            return res.status(409).json({
                "status": 409,
                "code": "409",
                "data": null,
                "message": "Email already exist"
            })
        }

        req.body.company_id = req.params.company_id
        const result = await models.employees.create(req.body)
        let data = {
            "id": result.id,
            "company_id": result.company_id
        }
        res.statusMessage = 'Created'
        return res.status(201).json({
            "status": 201,
            "code": "201",
            "data": data,
            "message": "Success"
        })
    } catch (err) {
        console.log(err)
    } 
}

exports.update_employee_api = async (req, res) => {
    try {

        const check = validate(req.body, "employee")
        let is_valid = false
        
        try {
            console.log(check.error.details[0].message)
        } catch (err) {
            console.log("Validation Pass")
            is_valid = true
        }

        if(!is_valid) {
            res.statusMessage = ": Invalid request"
            return res.status(400).json({
                "status": 400,
                "code": "400",
                "data": null,
                "message": check.error.details[0].message
            })
        }

        try {
            let check_email = await models.employees.findOne({
                where: {
                    email: req.body.email
                },
                raw: true
            })

            if(check_email != null) {
                res.statusMessage = ": Conflict"
                return res.status(409).json({
                    "status": 409,
                    "code": "409",
                    "data": null,
                    "message": "Email already exist"
                })
            }
        } catch (err) {
            console.log("email check skip, because no email on body")
        }

        req.body = {
            "name": req.body.name,
            "email": req.body.email,
            "phone_number": req.body.phone_number,
            "jobtitle": req.body.jobtitle,
            "company_id": req.params.company_id 
        }

        await models.employees.update(req.body, {
            where: {
                id: req.params.employee_id
            }
        })

        let data = {
            "id": req.params.employee_id,
            "company_id": req.params.company_id
        }
        res.statusMessage = ': Success'
        return res.status(201).json({
            "status": 201,
            "code": "201",
            "data": data,
            "message": 'Success'
        })
    } catch (err) {
        console.log(err)
    }
}

exports.delete_employee_api = async (req, res) => {
    try {
        const destroy = await models.employees.destroy({
            where: {
                id: req.params.id
            }
        })

        if (destroy) {
            res.statusMessage = ": Success"
            return res.status(204).send()
        } else {
            res.statusMessage = ": employee_id not exist"
            return res.status(400).send()
        }
    } catch (err) {
        console.log(err)
    }
}