const Template = require('../models/mongodb/template');

// Get all templates
exports.getAllTemplates = async (req, res) => {
    try {
        const templates = await Template.find();
        res.status(200).json(templates);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching templates', error });
    }
};
// Add missing getTemplateById function
exports.getTemplateById = async (req, res) => {
    try {
      const template = await Template.findById(req.params.id);
      if (!template) {
        return res.status(404).json({ message: 'Template not found' });
      }
      res.status(200).json(template);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching template', error });
    }
  };
// Create a new template
exports.createTemplate = async (req, res) => {
    const newTemplate = new Template(req.body);
    try {
        const savedTemplate = await newTemplate.save();
        res.status(201).json(savedTemplate);
    } catch (error) {
        res.status(400).json({ message: 'Error creating template', error });
    }
};

// Update a template
exports.updateTemplate = async (req, res) => {
    try {
        const updatedTemplate = await Template.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedTemplate);
    } catch (error) {
        res.status(400).json({ message: 'Error updating template', error });
    }
};

// Delete a template
exports.deleteTemplate = async (req, res) => {
    try {
        await Template.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting template', error });
    }
};