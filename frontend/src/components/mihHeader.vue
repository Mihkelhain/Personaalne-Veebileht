<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigate = (path) => {
  router.push(path)
}
defineProps({
  usrName:{
    type:String,
    required:false
  }
})

function openLogin() {
  console.log("Opened login")
  document.getElementById("myForm").style.display = "block";
}
function openSignUp() {
  document.getElementById("myForm").style.display = "block";
}
function closeLogin() {
  document.getElementById(  "myForm").style.display = "none";
}
function closeSignUp() {
  document.getElementById("myForm").style.display = "none";
}
</script>

<template>
  <div id="headId">
    <p id="headEle">
      mhWebsite@{{usrName}} ~
    </p>

    <div id="buttonHead">
      <button @click="navigate('/')" id="headEle">
        main page
      </button>
      <button @click="navigate('/blog')" id="headEle">
        blog
      </button>
      <button @click="navigate('/contactMe')" id="headEle">
        contact me
      </button>
      <button @click="navigate('/sshPortal')" id="headEle">
        ssh portal
      </button>
    </div>

    <div id="logHead">
      <button id="headEle" onclick="openLogin()">
        log in
      </button>
      <button id="headEle">
        sign up
      </button>
    </div>
  </div>
  <div class="logPopUp" id="loginPop"></div>
  <div class="signPopUp" id="signUpPop"></div>

</template>

<style scoped>
#headId{
  display: flex;
  flex-direction: row;
  background: black;
  margin-top: 10px;
  border:solid;
  border-color: white;
  width: 100%;
  border-radius: 10px 10px 0 0;
  text-align: left;
}
#headEle{
  margin: 5px;
}
button {
  border-radius: 8px;
  border: 2px solid white;
  background: black;
  color: cornflowerblue;
  text-decoration: none;
  padding: 5px;
  display: inline-block;
}

button:hover {
  color: #2760A2;
  cursor: pointer;
}
#logHead{
  margin-left: auto;
  margin-right: 10px;
}
</style>