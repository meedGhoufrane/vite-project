<template>
    <div class="center examplex">
      <vs-navbar center-collapsed v-model="active">
        <template #left>
          <img style="height: 2rem;" src="OIP.jpg" alt="">
        </template>
        <vs-navbar-item :active="$route.fullPath  == '/'">
          <router-link to="/">Home 
      </router-link>
  
        </vs-navbar-item>
        <vs-navbar-item v-show="AuthUser.name" :active="$route.fullPath  == '/tasks'">
          <router-link to="/tasks">Tasks</router-link>
        </vs-navbar-item>
  
  
        <template v-if="!AuthUser.name" #right>
          <vs-button flat><router-link to="/LoginForm">login</router-link></vs-button>
          <vs-button> <router-link to="/RegistrationForm">sign up</router-link></vs-button>
        </template>
        <template v-else #right>
          <vs-button flat><router-link class="font-bold" to="/profile">{{AuthUser.name}}</router-link></vs-button>
          <vs-button @click="logout()" danger> logout </vs-button>
        </template>
      </vs-navbar>
  
    </div>
  </template>
  <script>
  import axios from '../axios/axios-config.js';
  
  export default {
    data: () => ({
      active: 'guide',
  
      AuthUser: {
        name: ""
        ,
        email: ""
      }
  
    })
    ,
    created() {
      this.getInfoFromStorage();
    }
    ,
    methods: {
      getInfoFromStorage() {
        this.AuthUser.email = localStorage.getItem('email');
        this.AuthUser.name = localStorage.getItem('name');
      }
      ,
  
      logout() {
        axios.post('/logout')
          .then(response => {
            if (response.data.status) {
              localStorage.removeItem('token');
              localStorage.removeItem('name');
              localStorage.removeItem('email');
              this.$router.push('/login');
            }
  
          })
          .catch(error => {
              console.error('Logout failed:', error);
              localStorage.removeItem('token');
              localStorage.removeItem('name');
              localStorage.removeItem('email');
              this.$router.push('/login');
          });
      }
    },
    updated() {
          this.getInfoFromStorage();
       
    }
  }
  </script>