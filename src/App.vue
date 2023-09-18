<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
      <div class="profile-picture">
        <img alt="Vue logo" src="./assets/my-picture.jpeg">
      </div>
    </header>
    <main>
      <p>Hi, Welcome To Moeez's First Vue App</p>
      <section>
        <h2>About Me</h2>
        <ul>
          <li><strong>Major:</strong> Computer Science</li>
          <li><strong>Interests:</strong> Athletics, Cooking, Travelling, and Fitness</li>
          <li><strong>Graduation Year:</strong> December 2023</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: "My First Vue Application"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 40px;
}

header {
  background-color: grey;
  padding: 20px;
}

header h1 {
  color: #fff;
}

.profile-picture {
  width: 400px; /* Adjust the width to your preference */
  height: 50%; /* Make it square by setting the same height as width */
  overflow: hidden; /* Hide any overflowing parts of the image */
  border-radius: 100%; /* Make it circular by setting border-radius to 50% */
  margin: 0 auto; /* Center the image horizontally */
}

.profile-picture img {
  max-width: 100%;
  height: 100%;
  display: block; /* Remove any extra spacing below the image */
  border-radius: 10%; /* Apply border-radius to maintain circular shape */
}

main {
  margin: 20px;
}

section {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 10px;
}
</style>