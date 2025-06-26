<script setup>
defineProps({
  userName: {
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="item">
    <div id="mainHeader">
      <h3>
        mhWebsite@{{ userName }}:-$ &nbsp
      </h3>
      <h3 id="entSlot">
        <slot name="secLab"></slot>
      </h3>
    </div>
    <div class="details">
      <p>
        <slot name="secInfo"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
 .details{
   margin: auto;
   width: calc(100% - 12.5em);
 }
 h3{
   color: #99ff95;
 }
#mainHeader{
  display: flex;
  flex-direction: row;
  margin-left: 5px;
}
#entSlot{
  color:white;
}
</style>
