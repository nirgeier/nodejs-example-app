
const express = require('express');
const services = require('../services');

const router = express.Router();
const { friendService, loggerService } = services;

router.get('/friends', (req, res) => {
  loggerService.log({
    level: 'info',
    message: 'Requested all friends'
  });
  friendService.getFriends(req, res);
});

router.post('/friend', (req, res) => {
  friendService.postFriend(req, res);
});

router.put('/friend', (req, res) => {
  friendService.putFriend(req, res);
});

router.delete('/friend', (req, res) => {
  friendService.deleteFriend(req, res);
});

module.exports = router;
