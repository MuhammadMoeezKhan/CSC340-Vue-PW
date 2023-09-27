<template>
  <div>
    <Navbar />
    <Toast />

    <div class="container mt-4">
      <header class="bg-light text-white p-4">
        <h1>{{ title }}</h1>
        <div class="profile-picture">
          <img alt="Vue logo" src="./assets/my-picture.jpeg" class="img-fluid rounded-circle">
        </div>
      </header>

      <main class="mt-4">

        <section>
          <div>
            <template v-if="showLogin">
              <LoginForm />
              <p>If you do not have an account, please <span @click="showLogin=false">Sign Up</span></p>
            </template>
            <template v-else>
              <SignupForm />
              <p>If you are alreday registered, please <span @click="showLogin=true">Login</span></p>
            </template>
          </div>
        </section>

        <section class="bg-light p-4 rounded">
          <h2>About Me</h2>
          <ul>
            <li v-for="intro in introduction" :key="intro.title">
              <strong>{{ intro.title }}</strong>
              <span>{{ intro.content }}</span>
            </li>
          </ul>
        </section>

        <section class="bg-light p-4 mt-4 rounded">
          <h2>Favorite Books</h2>
          <ul>
            <li v-for="book in books" :key="book">
              <strong>Title: </strong> {{ book.title }} 
              <strong> Author: </strong> {{ book.author }}
              <!-- <span>{{ book.price }}</span> -->
            </li>
          </ul>
          <ul>
            <li v-for="user in users" :key="user">
              <strong>First: </strong>{{ user.firstName }}
              <strong> Last: </strong>{{ user.lastName }}
              <strong> DOB: </strong>{{ user.dob }}
            </li>
          </ul>
        </section>
      </main>
    </div>

    <Footer />
  </div>
</template>


<script>
import Toast from './components/Toast.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import SignUpForm from './components/SignupForm.vue'
import LoginForm from './components/LoginForm.vue'

import db from '../firebase/init.js'
import {col, addDoc} from 'firebase/firestore'
import {doc , setDoc} from 'firebase/firestore'
import {collection1, getDoc} from 'firebase/firestore'
import {where, query, collection, getDocs} from 'firebase/firestore'

export default {
  name: 'App',

  components: {
    Toast,
    Navbar,
    Footer,
    SignUpForm,
    LoginForm
  },

  data() {
    return {
      title: "Moeez's First Vue Application",
      introduction: [
        {title: 'Major: ', content: 'Computer Science'},
        {title: 'Interests: ', content: 'Athletics, Cooking, Travelling, and Fitness'},
        {title: 'Graduation Year: ', content: 'December 2023'},
      ],
      btitle: '',
      bauthor: '',
      books: [
        // {title: 'AI: ', author: 'Elon Musk', price:'$75'},
        // {title: 'Java: ', author: 'Chad', price:'$65'},
        // {title: 'C++: ', author: 'Google', price:'$35'},
      ],
      users: [],
      isLoggedIn: false,
      showLogin: true
    }
  },

  methods: {
    async createUser(){
      const colRef = collection(db, 'users')
      const dataObj = {
        firstName: 'Moeez',
        lastName: 'Khan',
        dob: '2001'
      }
      const docRef = await addDoc(colRef, dataObj)
    },
    async createBook(){
      await setDoc(doc
      (db, 'books', 'lib1'),
      {author: 'Chad', title: 'Java', location: 'DePauw', address: 'Greencastle'},
      {merge: true});
      await setDoc(doc
      (db, 'books', 'lib2'),
      {author: 'Elon', title: 'AI', location: 'California', address: 'SF'},
      {merge: true});
      await setDoc(doc
      (db, 'books', 'lib3'),
      {author: 'Google', title: 'C++', location: 'Washington', address: 'Seattle'},
      {merge: true})
    },
    async getBook(){
      const docSnap = await getDoc(doc(db, 'books', 'royo'))
      if(docSnap.exists){
        this.btitle = 
        docSnap.data().title
        this.bauthor = 
        docSnap.data().author
      }
      else{
        console.log("document does not exist")
      }
    },
    async getBooks(){
      const querySnap = await getDocs(query(collection(db, 'books')));

      querySnap.forEach((doc) => {
        this.books.push(doc.data())
      })
    },
    async getUsers(){
      const q = query(collection(db, 'users'), where ('firstName', '==', 'Moeez'))
      const querySnap = await getDocs(q);

      querySnap.forEach((doc) => {
        this.users.push(doc.data())
      })
    }
  },

  created(){
    this.getBooks()
    this.getBook()
    this.createUser()
    this.createBook()
    this.getUsers()
  }  
}
</script>


<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

header {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

header h1 {
  color:  black;
  font-size: 30px;
  margin-bottom: 15px;
}

.profile-picture {
  width: 300px; 
  height: 60%; 
  overflow: hidden; 
  border-radius: 100%; 
  margin: 0 auto; 
}

.profile-picture img {
  width: 300px;
  height: 260px; /* Set the height and width to be equal for a perfect circle */
  display: block;
  border-radius: 50%; /* Make the image circular */
  border: 4px solid #333; /* Add a border around the image */
  margin: 0 auto;
}

main {
  margin: 0px;
}

section {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
}

h2 {
  color: #333;
  margin-top: 0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}
</style>