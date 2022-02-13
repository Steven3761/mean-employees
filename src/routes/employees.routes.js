const { Route } = require('express')
const {Router} = require('express')
const router = Router()

const employessCtrl = require('../controllers/employe.escontrollers')

router.get('/', employessCtrl.getEmployees)
router.post('/', employessCtrl.createEmployee)
router.get('/', employessCtrl.getEmployee)
router.put('/', employessCtrl.editEmployee)
router.delete('/', employessCtrl.deleteEmployee)


module.exports = router

