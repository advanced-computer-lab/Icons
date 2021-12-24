const express = require('express');
const userController = require('../Controller/userController');

const router = express.Router();
router.post('/search', userController.user_flight_find);
router.get('/search_Results', userController.user_search_result);
router.get('/search_Return', userController.user_search_result_return);
router.get('/seats', userController.user_seats);
router.get('/reservation_info/:user_id/:id',userController.user_Reservations_info)
router.get('/send_mail/:user_id/:id',userController.send_mail)


// ___________________________________________________________________//
router.post('/sign_up', userController.user_regisertaion);
router.post('/login', userController.user_login);
router.post('/change_password/:id', userController.user_change_password);
router.get('/guest_summary/:user_id/:id/:id2',userController.user_guest_summary); 
router.get('/departure_seats/:user_id/:id/:id2',userController.Flight_Departure_seats); 
router.get('/return_seats/:user_id/:id/:id2',userController.Flight_Return_seats);    
router.post('/save_seats', userController.user_save_seats_dep);
router.post('/save_seats_id', userController.user_save_seats_dep_id);
router.post('/return_save_seats_id', userController.user_save_seats_return_id);
router.post('/return_save_seats', userController.user_save_seats_return);
router.get('/final_summary/:user_id/:id/:id2', userController.user_final_summary);   
router.get('/save_reservation/:user_id/:id/:id2', userController.user_save_reservation );
router.get('/adjust_seats/:user_id/:id/:id2', userController.adjust_seats);  
router.get('/adjust_seats_db/:user_id/:id/:id2', userController.adjust_seats_db); 
router.get('/current_reservations/:user_id/:id', userController.user_Reservations);  
router.delete('/delete_reservation/:id', userController.user_delete_res);  
router.get('/user_flight_info/:user_id/:id', userController.user_find_flight_details);  
router.get('/adjust_seats_db_again/:id', userController.delete_seats_from_db_user_deleted_reservation); 
router.get('/email_me/:user_id/:id', userController.user_email_summary);    

module.exports = router;