const { Recipe, Diet } = require('../../db.js').models;

// ----
module.exports = async function getDefaultRecipes(req, res, next) {
  try {
    const response = await Recipe.findAll({
      limit: 100,
      attributes: ['id', 'title', 'image', 'score'],
      include: { 
        model: Diet,
        as: 'diets',
        attributes: ['name'],
        through: { attributes: [] }
      }
    });

    const recipes = response.map(recipe => ({
      ...recipe.dataValues,
      diets: recipe.dataValues.diets.map(diet => diet.name)
    }));

    res.send(recipes);
  } 

  catch (error) { next(error) }
};
