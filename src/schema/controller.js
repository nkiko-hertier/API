import * as schema from "./schema.js";

// Create a new document
export const Create = async (model, data) => {
  if (!schema[model]) return 0;
  const item = new schema[model](data);
  return await item.save();
};

// Read documents (all or by filter)
export const Read = async (model, filter = {}) => {
  if (!schema[model]) return 0;
  return await schema[model].find(filter);
};

// Read one by ID
export const ReadOne = async (model, id) => {
  if (!schema[model]) return 0;
  return await schema[model].findById(id);
};

// Update document by ID
export const Update = async (model, data, id) => {
  if (!schema[model]) return 0;
  return await schema[model].findByIdAndUpdate(id, data, { new: true });
};

// Delete document by ID
export const Delete = async (model, id) => {
  if (!schema[model]) return 0;
  return await schema[model].findByIdAndDelete(id);
};
