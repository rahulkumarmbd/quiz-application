export const validateHandler = async (schema, data) => {
  if (!schema || !data) return;
  const validationErrors = [];

  for (const fieldName of Object.keys(data)) {
    try {
      const fieldSchema = schema.fields[fieldName];
      await fieldSchema.validate(data[fieldName]);
    } catch (error) {
      validationErrors.push({
        name: fieldName,
        message: error.message,
      });
    }
  }

  return validationErrors;
};
