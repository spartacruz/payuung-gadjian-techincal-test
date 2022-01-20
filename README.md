# payuung-gadjian-techincal-test
A NodeJS-based Backend REST API CRUD (Technical Test) using MySQL (with Sequelize ORM)

API Documentation (provided by user) : [Technical Test - Postman documenter](https://documenter.getpostman.com/view/1423163/U16htmT8#dc5d089d-adf5-4fca-aacd-c83e7be03a10)
<br>Technical test guidelines : (root)/Payuung x gadjian.pdf

## Authentication

No authentication required for this API

## Fibonnaci counter

Request :
- Method : POST
- Endpoint : `/api/fibonacci`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
  "n": 10
}
```

Response :

### 200:Success
- Status Code : `200`
- Message Status : `200:Success`

```json 
{
  "status": 200,
  "code": "200",
  "data": {
    "result": "0 1 1 2 3 5 8 13 21 34"
  },
  "message": "Success"
}
```

### 400:Invalid Request
- Status Code : `400`
- Message Status : `400:Invalid Request`

```json 
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "n is required"
}
```


## Combination Counter

Request :
- Method : POST
- Endpoint : `/api/combination`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "n": 4,
    "r": 2
}
```
Response :

### 200:Success
- Status Code : `200`
- Message Status : `200:Success`

```json 
{
  "status": 200,
  "code": "200",
  "data": {
    "result": 6
  },
  "message": "Success"
}
```

### 400:Invalid Request
- Status Code : `400`
- Message Status : `400:Invalid Request`

```json 
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "n or r is required"
}
```

## Company - Add Company

Request :
- Method : POST
- Endpoint : `/api/companies`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "company_name": "",
    "telephone_number": "",
    "address": ""
}
```
Response :

### 201:Created
- Status Code : `201`
- Message Status : `201:Created`

```json 
{
  "status": 201,
  "code": "201",
  "data": {
    "id": ""
  },
  "message": "Success"
}
```

### 400:Invalid Request
- Status Code : `400`
- Message Status : `400:Invalid Request`

```json 
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "company_name is required"
}
```

### 409:Conflict
- Status Code : `409`
- Message Status : `409:Conflict`

```json 
{
  "status": 409,
  "code": "409",
  "data": null,
  "message": "Company Name already exist"
}
```

## Company - Get Companies

Request :
- Method : GET
- Endpoint : `/api/companies`
- Header :
    - Content-Type: application/json
    - Accept: application/json

Response :

### 200:Success
- Status Code : `200`
- Message Status : `200:Success`

```json 
{
  "status": 200,
  "code": "200",
  "data": {
    "count": 2,
    "rows": [
      {
        "id": 1,
        "company_name": "xxxx",
        "telephone_number": "xxxx",
        "is_active": false,
        "address": "xxxx"
      },
      {
        "id": 2,
        "company_name": "xxxx",
        "telephone_number": "xxxx",
        "is_active": false,
        "address": "xxxx"
      }
    ]
  },
  "message": "Success"
}
```

### 422:Data Not Found
- Status Code : `422`
- Message Status : `422:Data Not Found`

```json 
{
  "status": 422,
  "code": "422",
  "data": null,
  "message": "Data is not found"
}
```


## Company - Set Company Active

Request :
- Method : PUT
- Endpoint : `/api/companies/:id/set_active`
- Header :
    - Content-Type: application/json
    - Accept: application/json

Response :

### 200:Success
- Status Code : `200`
- Message Status : `200:OK`

```json 
{
  "status": 201,
  "code": "201",
  "data": {
    "id": "",
    "is_active": true
  },
  "message": "Success"
}
```

### 422:Data Not Found
- Status Code : `422`
- Message Status : `422:Data Not Found`

```json 
{
  "status": 422,
  "code": "422",
  "data": null,
  "message": "Data is not found"
}
```

### 400:Company Already Active
- Status Code : `400`
- Message Status : `400:Company Already Active`

```json 
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "Company is already active"
}
```


## Employee - Get Employees by Company ID

Request :
- Method : GET
- Endpoint : `/api/companies/:id/employees`
- Header :
    - Content-Type: application/json
    - Accept: application/json

Response :

### 200:Success
- Status Code : `200`
- Message Status : `200:OK`

```json 
{
  "status": 200,
  "code": "200",
  "data": {
    "id": 1,
    "company_name": "",
    "is_active": false,
    "employees": [
      {
        "id": 1,
        "name": "xxxx",
        "phone_number": "xxxx",
        "jobtitle": "xxxx"
      },
      {
        "id": 2,
        "name": "xxxx",
        "phone_number": "xxxx",
        "jobtitle": "xxxx"
      }
    ]
  },
  "message": "Success"
}
```
### 422:Data Not Found
- Status Code : `422`
- Message Status : `422:Data Not Found`

```json 
{
  "status": 422,
  "code": "422",
  "data": null,
  "message": "Data is not found"
}
```

## Employee - Get Employees by ID

Request :
- Method : GET
- Endpoint : `/api/companies/:id`
- Header :
    - Content-Type: application/json
    - Accept: application/json

Response :

### 200:Success
- Status Code : `200`
- Message Status : `200:OK`

```json 
{
  "status": 200,
  "code": "200",
  "data": {
    "id": 1,
    "name": "xxxx",
    "phone_number": "xxxx",
    "jobtitle": "xxxx"
  },
  "message": "Success"
}
```
### 422:Data Not Found
- Status Code : `422`
- Message Status : `422:Data Not Found`

```json 
{
  "status": 422,
  "code": "422",
  "data": null,
  "message": "Data is not found"
}
```

## Employee - Add Employee

Request :
- Method : POST
- Endpoint : `/api/companies/:company_id/employees`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "name": "",
    "email": "",
    "phone_number": "",
    "jobtitle": ""
}
```
Response :

### 201:Success
- Status Code : `201`
- Message Status : `201:Success`

```json 
{
  "status": 201,
  "code": "201",
  "data": {
    "id": "",
    "company_id": ""
  },
  "message": "Success"
}
```

### 400:Invalid Request
- Status Code : `400`
- Message Status : `400:Invalid Request`

```json 
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "name is required"
}
```

### 409:Conflict
- Status Code : `409`
- Message Status : `409:Conflict`

```json 
{
  "status": 409,
  "code": "409",
  "data": null,
  "message": "Email already exist"
}
```

## Employee - Update Employee

Request :
- Method : PUT
- Endpoint : `/api/companies/:company_id/employees/:employee_id`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "name": "",
    "phone_number": "",
    "jobtitle": ""
}
```
Response :

### 201:Created
- Status Code : `201`
- Message Status : `201:Created`

```json 
{
  "status": 201,
  "code": "201",
  "data": {
    "id": "",
    "company_id": ""
  },
  "message": "Success"
}
```

### 400:Invalid Request
- Status Code : `400`
- Message Status : `400:Invalid Request`

```json 
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "name is required"
}
```

### 409:Conflict
- Status Code : `409`
- Message Status : `409:Conflict`

```json 
{
  "status": 409,
  "code": "409",
  "data": null,
  "message": "Email already exist"
}
```

## Employee - Update Employee

Request :
- Method : DEL
- Endpoint : `/api/employees/:id`
- Header :
    - Content-Type: application/json
    - Accept: application/json


## Countries - Get Countries

Request :
- Method : GET
- Endpoint : `/api/countries`
- Header :
    - Content-Type: application/json
    - Accept: application/json

Response :

### 201:Success
- Status Code : `200`
- Message Status : `201:Success`

```json 
{
  "status": 200,
  "code": "200",
  "data": [
    {
      "name": "",
      "region": "",
      "timezones": []
    },
    {
      "name": "",
      "region": "",
      "timezones": []
    }
  ],
  "message": "Success"
}
```

### 400:Failed to get countries from restcountries.com
- Status Code : `400`
- Message Status : `400:Failed to get countries from restcountries.com`

```json 
{
  "status": 400,
  "code": "400",
  "data": null,
  "message": "Something Went Wrong"
}
```

