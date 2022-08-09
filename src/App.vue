<template>
  <div class="app" data-width="20rem">
    <input v-model="loginForm.username" type="text" placeholder="Username" data-space-bottom="0.5rem" />
    <input v-model="loginForm.password" type="password" placeholder="Password" data-space-bottom="0.5rem" />
    <br>
    <button type="primary" @click="handleLogin">login</button>
    <br>
    <button @click="removeCookie">Clear</button>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      loginForm : {
          username: '',
          password: '',
          token: ''
      }
    }
  }
}
</script>
