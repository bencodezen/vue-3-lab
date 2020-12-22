<script>
import axios from 'axios'

export default {
  data: () => ({
    userIngredientInput: '',
    ingredients: []
  }),
  methods: {
    addIngredient() {
      this.ingredients.push({
        label: this.userIngredientInput,
        count: 0
      })

      this.userIngredientInput = ''
    },
    incrementCount(label, count) {
      axios
        .post(
          'https://pantry.hasura.app/v1/graphql',
          {
            query: `
            mutation MyMutation($label: String!, $count: Int!) {
              update_pantry(where: {label: {_eq: $label}}, _set: {count: $count}) {
                affected_rows
              }
            }
          `,
            variables: {
              label,
              count
            }
          },
          {
            headers: {
              'X-Hasura-Admin-Secret': process.env.VUE_APP_HASURA_ADMIN_SECRET,
              'X-Hasura-Role': 'user'
            }
          }
        )
        .then(response => {
          if (response.data.data.update_pantry.affected_rows) {
            this.ingredients.find(item => item.label === label).count += 10
          }
        })
    }
  },
  mounted() {
    axios
      .post(
        'https://pantry.hasura.app/v1/graphql',
        {
          query: `
            query {
              pantry {
                label
                count
              }
            }
          `
        },
        {
          headers: {
            'X-Hasura-Admin-Secret': process.env.VUE_APP_HASURA_ADMIN_SECRET,
            'X-Hasura-Role': 'user'
          }
        }
      )
      .then(response => {
        this.ingredients = response.data.data.pantry
      })
  }
}
</script>

<template>
  <h1>Counter App</h1>
  <p>{{ userIngredientInput }}</p>
  <p>{{ ingredients }}</p>
  <input
    type="text"
    placeholder="Ingredient"
    v-model="userIngredientInput"
    @keyup.enter="addIngredient"
  />
  <h2>Ingredients</h2>
  <ul>
    <li v-for="ingredient in ingredients" :key="ingredient.label">
      {{ ingredient.label }} - {{ ingredient.count }}
      <button @click="incrementCount(ingredient.label, ingredient.count + 1)">
        Increment
      </button>
    </li>
  </ul>
</template>

<style></style>
