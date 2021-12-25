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
router.get('/user_flight_info/:user_id/:id/:id2', userController.user_find_flight_details);  
router.get('/adjust_seats_db_again/:id', userController.delete_seats_from_db_user_deleted_reservation); 
router.get('/email_me/:user_id/:id', userController.user_email_summary);    

router.get('/adjust_edit_seats/:user_id/:id/:id2', userController.edit_dep_seats_same_flight);    
router.get('/get_old_seats/:id', userController.get_old_dep_seats); 
router.get('/get_old_seats_id/:id', userController.get_old_dep_seats_id); 
router.get('/get_number_of_passengers/:id', userController.get_number_of_passengers); 

router.post('/change_seats/:user_id/:id/:id2', userController.get_new_seats_dep);
router.post('/change_seats1/:user_id/:id/:id2', userController.get_new_seats_dep_id);
router.post('/change_seats2/:user_id/:id/:id2', userController.adjust_res_with_new_dep_seats);


router.post('/change_seats3/:user_id/:id/:id2', userController.get_new_seats_return);
router.post('/change_seats4/:user_id/:id/:id2', userController.get_new_seats_return_id);
router.post('/change_seats5/:user_id/:id/:id2', userController.adjust_res_with_new_return_seats);



router.get('/adjust_edit_seats2/:user_id/:id/:id2', userController.edit_return_seats_same_flight );    
router.get('/get_old_seats2/:id', userController.get_old_return_seats); 
router.get('/get_old_seats_id2/:id', userController.get_old_return_seats_id ); 


router.post('/edit_search/:user_id/:id/:id2/:id3/:id4', userController.user_edit_dep_flight_search);
router.get('/edit_search_result', userController.user_edit_dep_flight_search_results);    

router.get('/edit_departure_seats/:user_id/:id/:id2', userController.user_edit_dep_flight_seats );   
router.get('/edit_summary_dep/:user_id/:id/:id2/:id3/:id4', userController.user_edit_summary_dep );     
                                                                                                

router.get('/edit_dep_db/:user_id/:id/:id2/:id3/:id4', userController.user_edit_dep_adjust_db ); 
router.get('/edit_res_db/:user_id/:id/:id2/:id3/:id4', userController.user_edit_dep_flight_res); 


router.get('/lokma',userController.user_test)
module.exports = router;