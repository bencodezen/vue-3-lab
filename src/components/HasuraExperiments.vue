<script>
export default {
  setup() {
    console.log(process.env)

    const fetchHasura = async () => {
      const result = await fetch(
        'https://counter-experiment.hasura.app/v1/graphql',
        {
          method: 'POST',
          headers: {
            'X-Hasura-Admin-Secret': process.env.VUE_APP_HASURA_ADMIN_SECRET,
            'X-Hasura-Role': 'user',
            'X-Hasura-User-Id': 'test'
          },
          body: JSON.stringify({
            query: `
              query {
                counter {
                  id
                  saved_count
                }
              }
            `
          })
        }
      ).then(res => res.json())

      console.log(result)
    }

    return {
      fetchHasura
    }
  }
}
</script>

<template>
  <h1>Hasura Experiments</h1>
  <button @click="fetchHasura">Fetch Hasura</button>
</template>

<style></style>
