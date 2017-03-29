/*
 * Copyright 2017-present, Hippothesis, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Button,
  CheckBox,
  Container,
  Icon,
  Input,
  Item,
  List,
  ListItem,
  Text
} from 'native-base';
import { connect } from 'react-redux';

import Images from '../constants/Images';
import {
  addIngredientToInventoryList,
  removeIngredientFromInventoryList,
  editIngredientInInventoryList,
  markIngredientAsUsedInInventoryList,
  markIngredientAsNotUsedInInventoryList
} from '../actions/InventoryListActions';

class InventoryListView extends Component {
  // Set up navigation options for the lists navigator
  static navigationOptions = {
    tabBar: {
      label: 'Inventory List'
    }
  }

  // Add a new ingredient to the inventory list
  addIngredient() {
    this.props.addIngredient('');
  }

  // Remove an ingredient from the inventory list
  removeIngredient(id) {
    this.props.removeIngredient(id);
  }

  // Edit an ingredient in the inventory list
  editIngredient(id, name) {
    this.props.editIngredient(id, name);
  }

  // Mark an ingredient as used or not used in the inventory list
  markIngredient(id, used) {
    if (used) {
      this.props.markIngredientAsNotUsed(id);
    } else {
      this.props.markIngredientAsUsed(id);
    }
  }

  render() {
    return (
     <Container>
        <Image
          style={styles.headerImage}
          source={Images.backgrounds.fridge}
        >
          <Text style={styles.headerText}>Organize</Text>
        </Image>

        <Button
          style={styles.headerButton}
          onPress={() => this.addIngredient('')}
        >
          <Icon style={styles.headerButtonIcon} name="add"/>
        </Button>

        <List
          style={styles.inventoryList}
          dataArray={this.props.inventoryList}
          renderRow={(ingredient) =>
            <ListItem style={styles.inventoryListItem}>
              <Item style={styles.ingredientItem}>
                <CheckBox
                  style={styles.ingredientCheckBox}
                  checked={ingredient.used}
                  onPress={() => this.markIngredient(ingredient.id, ingredient.used)}
                />
                <Input
                  placeholder="New ingredient"
                  defaultValue={ingredient.name}
                  onChangeText={(name) => this.editIngredient(ingredient.id, name)}
                />
                <Button transparent
                  style={styles.trashButton}
                  onPress={() => this.removeIngredient(ingredient.id)}
                >
                  <Icon style={styles.trashIcon} name="trash"/>
                </Button>
            </Item>
            </ListItem>
          }
        />
      </Container>
    );
  }
}

const styles = {
  headerImage: {
    height: 110,
    width: null,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  headerText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 30,
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'Avenir-Light',
    letterSpacing: 2
  },
  headerButton: {
    alignSelf: 'flex-end',
    top: -25,
    marginRight: 40,
    height: 50,
    width: 50,
    padding: 0,
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: '#f2487a',
    zIndex: 10,
  },
  headerButtonIcon: {
    fontSize: 40,
    backgroundColor: 'transparent',
  },
  inventoryList: {
    marginTop: -50,
  },
  inventoryListItem: {
    margin: 0,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10
  },
  ingredientItem: {
    borderWidth: 0,
  },
  ingredientCheckBox: {
    marginRight: 30,
  },
  trashButton: {
    paddingRight: 0,
    paddingTop: 10,
  },
  trashIcon: {
    color: '#707070'
  }
};

function mapStateToProps(state) {
  return {
    inventoryList: state.inventoryList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addIngredient: (name) => dispatch(addIngredientToInventoryList(name)),
    removeIngredient: (id) => dispatch(removeIngredientFromInventoryList(id)),
    editIngredient: (id, name) => dispatch(editIngredientInInventoryList(id, name)),
    markIngredientAsUsed: (id) => dispatch(markIngredientAsUsedInInventoryList(id)),
    markIngredientAsNotUsed: (id) => dispatch(markIngredientAsNotUsedInInventoryList(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryListView);
