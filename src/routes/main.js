import { Router } from "express";
import * as controller from "../schema/controller.js";

const router = Router();

// Get all documents from a module (e.g. /users)
router.get('/:module', async (req, res) => {
  try {
    const result = await controller.Read(req.params.module);
    if (result === 0) return res.status(404).json({ message: 'Module not found' });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single document by ID (e.g. /users/123)
router.get('/:module/:id', async (req, res) => {
  try {
    const result = await controller.ReadOne(req.params.module, req.params.id);
    if (result === 0) return res.status(404).json({ message: 'Module not found' });
    if (!result) return res.status(404).json({ message: 'Document not found' });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new document (e.g. POST /users)
router.post('/:module', async (req, res) => {
  try {
    const result = await controller.Create(req.params.module, req.body);
    if (result === 0) return res.status(404).json({ message: 'Module not found' });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update document by ID (e.g. PUT /users/123)
router.put('/:module/:id', async (req, res) => {
  try {
    const result = await controller.Update(req.params.module, req.params.id, req.body);
    if (result === 0) return res.status(404).json({ message: 'Module not found' });
    if (!result) return res.status(404).json({ message: 'Document not found' });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete document by ID (e.g. DELETE /users/123)
router.delete('/:module/:id', async (req, res) => {
  try {
    const result = await controller.Delete(req.params.module, req.params.id);
    if (result === 0) return res.status(404).json({ message: 'Module not found' });
    if (!result) return res.status(404).json({ message: 'Document not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
