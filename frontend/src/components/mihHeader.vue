<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigate = (path) => {
  router.push(path)
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
      <button id="headEle">
        log in
      </button>
      <button id="headEle">
        sign up
      </button>
    </div>
  </div>
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