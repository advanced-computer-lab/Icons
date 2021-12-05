const express = require('express');
const userController = require('../Controller/userController');

const router = express.Router();
router.post('/search', userController.user_flight_find);
router.get('/search_Results', userController.user_search_result);
router.post('/update/:id',userController.update_user);
router.get('/user_info/:id',userController.user_info);
router.get('/search_Return', userController.user_search_result_return);
router.get('/seats', userController.user_seats);
router.get('/seats3', userController.find_seats_departure);
router.post('/test2',userController.save_seats);
router.post('/test3', userController.delete_seats);
router.get('/getdepartureflightnumber/:id',userController.deparute_flightno);
router.get('/getretrunflightnumber/:id',userController.return_flightno)
router.get('/show', userController.user_findall);
router.get('/getuserid/:user_id',userController.save_userid);
router.get('/seats4', userController.find_seats_return);
router.post('/test22',userController.save_seats2);
router.post('/test33', userController.delete_seats2);
router.get('/helper5', userController.user_summary_helper5);
router.get('/helper6', userController.user_summary_helper6);
router.get('/helper7/:user_id',userController.user_Reservations);
router.get('/helper8', userController.user_summary_helper7);
router.get('/reservation_info/:id',userController.user_Reservations_info)
router.delete('/delete_reservation/:id',userController.delete_Reservation)
router.get('/send_mail/:id',userController.send_mail)
router.get('/adjust_seats',userController.adjust_seats)
router.get('/guest_summary/:id',userController.guest_summary)
router.get('/adjust_price',userController.calculate_price)
router.get('/save/:user_id',userController.helper10);
router.get('/send_id',userController.helper11);
module.exports = router;