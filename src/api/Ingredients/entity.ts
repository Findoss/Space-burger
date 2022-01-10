import { schema } from 'normalizr';

const ingredientSchema = new schema.Entity('ingredients');
export const ingredientsSchema = new schema.Array(ingredientSchema);
