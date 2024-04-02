<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="formData.name" label="Name" required></v-text-field>
      <v-text-field v-model="formData.email" label="Email" type="email" required></v-text-field>
      <v-text-field v-model="formData.password" label="Password" type="password" required></v-text-field>
      <v-btn type="submit" color="primary">Register</v-btn>
    </v-form>
  </v-container>
</template>

<script> 
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData);
    }
  }
};
</script>

<style scoped>

</style>
