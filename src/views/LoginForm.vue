<template>
    <v-container>
      <v-form @submit.prevent="submitForm">
        <v-text-field v-model="formData.email" label="Email" type="email" required></v-text-field>
        <v-text-field v-model="formData.password" label="Password" type="password" required></v-text-field>
        <v-btn type="submit" color="primary">Login</v-btn>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
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
  /* Add custom styles here if needed */
  </style>
  