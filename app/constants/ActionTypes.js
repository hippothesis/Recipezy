/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const ActionTypes = {
  shoppingList: {
    ADD_INGREDIENT: 'ADD_INGREDIENT_TO_SHOPPING_LIST',
    REMOVE_INGREDIENT: 'REMOVE_INGREDIENT_FROM_SHOPPING_LIST',
    EDIT_INGREDIENT: 'EDIT_INGREDIENT_IN_SHOPPING_LIST',
    MARK_INGREDIENT_AS_BOUGHT: 'MARK_INGREDIENT_AS_BOUGHT_IN_SHOPPING_LIST',
    MARK_INGREDIENT_AS_NOT_BOUGHT: 'MARK_INGREDIENT_AS_NOT_BOUGHT_IN_SHOPPING_LIST'
  },
  inventoryList: {
    ADD_INGREDIENT: 'ADD_INGREDIENT_TO_INVENTORY_LIST',
    REMOVE_INGREDIENT: 'REMOVE_INGREDIENT_FROM_INVENTORY_LIST',
    EDIT_INGREDIENT:'EDIT_INGREDIENT_IN_INVENTORY_LIST',
    MARK_INGREDIENT_AS_USED: 'MARK_INGREDIENT_AS_USED_IN_INVENTORY_LIST',
    MARK_INGREDIENT_AS_NOT_USED: 'MARK_INGREDIENT_AS_NOT_USED_IN_INVENTORY_LIST'
  },
  ingredientList: {
    ADD_INGREDIENT: 'ADD_INGREDIENT_TO_SEARCH_LIST',
    REMOVE_INGREDIENT: 'REMOVE_INGREDIENT_FROM_SEARCH_LIST',
    EDIT_INGREDIENT: 'EDIT_INGREDIENT_IN_SEARCH_LIST'
  },
  ingredients: {
    ADD_INGREDIENT: 'ADD_INGREDIENT_TO_INGREDIENTS',
    ADD_INGREDIENTS: 'ADD_INGREDIENTS_TO_INGREDIENTS'
  },
  recipeSearchResults: {
    SEARCH_RECIPES_REQUEST: 'SEARCH_RECIPES_REQUEST',
    SEARCH_RECIPES_SUCCESS: 'SEARCH_RECIPES_SUCCESS',
    SEARCH_RECIPES_FAILURE: 'SEARCH_RECIPES_FAILURE'
  },
  recipes: {
    ADD_RECIPE: 'ADD_RECIPE_TO_RECIPES',
    ADD_RECIPES: 'ADD_RECIPES_TO_RECIPES'
  },
  filters:{
    UPDATE_ALLERGIES: 'UPDATE_ALLERGIES',
    UPDATE_CUISINES: 'UPDATE_CUISINES',
    UPDATE_DIETS: 'UPDATE_DIETS',
    UPDATE_NUTRITION: 'UPDATE_NUTRITION',
    UPDATE_TYPES: 'UPDATE_TYPES'
  },
  navigation: {
    SELECT_RECIPE: 'SELECT_RECIPE'
  }
};

export default ActionTypes;
