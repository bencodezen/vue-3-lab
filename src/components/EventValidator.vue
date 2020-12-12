<script>
export default {
  props: {
    email: {
      type: String,
      required: true
    }
  },
  emits: {
    'submit-form': ({ email }) => {
      if (email) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit-form', { email: this.email })
    }
  }
}
</script>

<template>
  <div>
    <button @click="submitForm">Submit Form</button>
  </div>
</template>

<style></style>
