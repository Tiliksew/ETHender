import express  from "express";
import {registerOfficer,registerSupplier,loginAdmin,loginSupplier,loginOfficer,displayDashboard, userLogin} from '../controllers/users.js'
const router =express.Router()

/** *
  *  @DESC registration routes for different 
*/
router.post('/supplier-registration',registerSupplier)
router.post('/officer-registration',registerOfficer)


/** *
   * @DESC login routes for different 
*/
router.post('/user-login',async(req,res)=>{
await userLogin(req.body,'supplier',res)
})
router.post('/admin-login',loginAdmin)
router.post('/officer-login',loginOfficer)
router.post('/supplier-login',loginSupplier)

/** *
   * @DESC registration routes for different 
*/

router.get('/dashboard',displayDashboard)
export default router