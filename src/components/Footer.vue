<template>
    <footer class="modern-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-22 text-center">
            <ul class="social-links">
              <li>
                <a href="https://www.linkedin.com/in/moeez-khan-/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/MuhammadMoeezKhan" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.moeezkhan.com/" target="_blank" rel="noopener noreferrer">
                  Portfolio Website
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </template>


<script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style>
  .modern-footer {
    background-color: #333;
    color: #fff;
    padding-top: 20px;
    padding-bottom: 10px;
    text-align: center;
  }
  
  .social-links {
    list-style: none;
    padding: 0;
  }
  
  .social-links li {
    display: inline-block;
    margin: 0 10px;
  }
  
  .social-links a {
    color: #fff;
    text-decoration: none;
  }
  
  .social-links a:hover {
    text-decoration: underline;
  }
</style>  