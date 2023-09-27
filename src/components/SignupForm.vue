<template>
  <div class="signup-container">
    <form>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" required v-model="username">
      <input type="email" placeholder="Email" required v-model="email">
      <input type="password" placeholder="Password" required v-model="password">
      <button @click="signUp">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/init.js'

export default {
  data() {
    return {
      title: 'Sign Up Page',
      username: '',
      email: '',
      password: ''
    }
  },

  methods: {
    async signUp() {
      console.log(this.username);
        console.log(this.email);
        console.log(this.password);
        createUserWithEmailAndPassowrd(auth, this.email, this.password)
        .then((credential) =>{
          console.log('user signed up', this.username)
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }
}
</script>

<style scoped>
.signup-container {
  max-width: 300px;
  margin: 0 auto;
}

form {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
