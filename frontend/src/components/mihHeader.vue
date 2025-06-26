<script setup>
defineProps({
  usrName:{
    type:String,
    required: false
  }
    }
)
</script>

<template>
 <div id="headId">
   <p id="headEle"> <!-- TODO make this change to guest if user is not logged in else it displays the username -->
     mhWebsite@{{usrName}} ~
   </p>

   <div id="buttonHead">
     <button id="headEle">
       main page
     </button>
     <button id="headEle">
       blog
     </button>
     <button id="headEle">
       contact me
     </button>
     <button id="headEle">
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
button{
  border-radius: 6px;
  background: black;
  color: cornflowerblue;
}
button:hover{
  color:#2760A2;
  cursor: pointer;
}
#logHead{
  margin-left: auto;
  margin-right: 10px;
}
</style>