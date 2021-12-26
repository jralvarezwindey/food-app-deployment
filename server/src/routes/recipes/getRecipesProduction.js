const { Op } = require('sequelize');
const { Recipe, Diet } = require('../../db.js').models;

// ----
module.exports = async function getRecipes(req, res, next) {
  const query = req.query.title.toLowerCase();
  const defaultRecipes = req.query.defaultRecipes;

  try {
    const dbResponse = defaultRecipes === 'true'
      ? await Recipe.findAll({
          limit: 100,
          attributes: ['id', 'title', 'image', 'score'],
          include: { 
            model: Diet,
            as: 'diets',
            attributes: ['name'],
            through: { attributes: [] }
          }
        })
      : await Recipe.findAll({
          attributes: ['id', 'title', 'image', 'score'],
          include: { 
            model: Diet,
            as: 'diets',
            attributes: ['name'],
            through: { attributes: [] }
          },
          where: {
            title: {
              [Op.iLike]: `%${query}%`
            } 
          },
        });

    const dbRecipes = dbResponse.map(recipe => ({
      ...recipe.dataValues,
      diets: recipe.dataValues.diets.map(diet => diet.name)
    }));

    res.send(dbRecipes);
  } 

  catch (error) { next(error) }
};
