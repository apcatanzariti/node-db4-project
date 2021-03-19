const express = require('express');

const helmet = require('helmet');

const db = require('./../data/db-config');

const server = express();

server.use(helmet());

server.use(express.json());

server.get('/', (req, res) => {
    res.json({ message: 'hey I am working!' });
});

server.get('/api/:id', async (req, res) => {
    const recipeData = await db.select('*')
    .from('recipes')
    .where('recipe_id', req.params.id);

    const stepData = await db.select('*')
    .from('step_ingredients as si')
    .join('steps as s', 'si.step_id', 's.step_id')
    .join('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .where('s.recipe_id', req.params.id);

    res.status(200).json({
        recipe_id: recipeData[0].recipe_id,
        recipe_name: recipeData[0].recipe_name,
        created_at: recipeData[0].created_at,
        steps: stepData.map(step => {
            return {
            step_id: step.step_id,
            step_number: step.step_number,
            step_instructions: step.step_text,
            ingredients: stepData.map(ingredient => {
                return {
                    ingredient_id: ingredient.ingredient_id,
                    ingredient_name: ingredient.ingredient_name,
                    quantity: ingredient.quantity
                }
            })
            }
        })
    });
});

module.exports = server;