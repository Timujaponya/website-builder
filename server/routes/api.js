const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const userController = require('../controllers/users');
const templateController = require('../controllers/templates');

// User authentication routes
router.post('/login', authController.login);
router.post('/register', authController.register);

// User management routes
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Template management routes
router.get('/templates', templateController.getAllTemplates);
router.get('/templates/:id', templateController.getTemplateById);
router.post('/templates', templateController.createTemplate);
router.put('/templates/:id', templateController.updateTemplate);
router.delete('/templates/:id', templateController.deleteTemplate);

module.exports = router;