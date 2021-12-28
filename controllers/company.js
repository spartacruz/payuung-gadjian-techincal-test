const models = require('../models')
const validate = require('../function/validation.js')

exports.add_company_api = async (req, res) =>{
    try { 

        const check = validate(req.body, "company")
        let is_valid = false
        
        try {
            console.log(check.error.details[0].message)
        } catch (err) {
            console.log("Validation Pass")
            is_valid = true
        }

        if(!is_valid) {
            res.statusMessage = "Invalid request"
                return res.status(409).json({
                    "status": 400,
                    "code": "400",
                    "data": null,
                    "message": check.error.details[0].message
                })
        } else {
            const count = await models.companies.count({
                where: {
                    company_name: req.body.company_name
                }
            })

            if (count != 0) {
                res.statusMessage = "Conflict"
                return res.status(409).json({
                    "status": 409,
                    "code": "409",
                    "data": null,
                    "message": "Company Name already exist"
                })
            } else {
                const result = await models.companies.create(req.body)
                res.statusMessage = "Success"
                return res.status(201).json({
                    "status": 201,
                    "code": "201",
                    "data": {
                        "id": result.id
                    },
                    "message": "Success"
                })
            }
        }

    } catch (err) {
        console.log(err)
    }
}

exports.get_company_api = async (req, res) => {
    try {
        let get_company = await models.companies.findAndCountAll({
            attributes: {exclude: ['createdAt', 'updatedAt']}
        })

        if (get_company.count < 1) {
            res.statusMessage = ": Data Not Found"
            return res.status(422).json({
                "status": 422,
                "code": "422",
                "data": null,
                "message": "Data is Not Found"
            })
        }

        res.statusMessage = ": Success"
        return res.status(200).json({
            "status": 200,
            "code": "200",
            "data": {
                get_company
            },
            "message": "Success"
        })

    } catch (err) {
        console.log(err)
    }
}

exports.set_active_company_api = async (req, res) => {
    try {
        let company = await models.companies.findOne({
            where: {
                id: req.params.id
            }
        })

        if (!company) {
            res.statusMessage = ': Data not found'
            return res.status(422).json({
                "status": 422,
                "code": "422",
                "data": null,
                "message": "Data is not found"
            })
        }

        if (company['is_active'] == 0) {
            await models.companies.update({is_active: true}, {
                where: {
                    id: req.params.id
                }
            })

            company = await models.companies.findOne({
                where: {
                    id: req.params.id
                },
            })

            data = {
                "id": company['id'],
                "is_active": company['is_active']
            }
        } else {
            res.statusMessage = ': Company already active'
            return res.status(400).json({
                "status": 400,
                "code": "400",
                "data": null,
                "message": "Company is already active"
            })
        }

        res.statusMessage = ": Success"
        return res.status(200).json({
            "status": 200,
            "code": "200",
            "data": data,
            "message": "Success"
        })
    } catch (err) {
        console.log(err)
    }
}