<script setup>
import AboutItem from "@/components/aboutItem.vue";

defineProps({
      usrName:{
        type:String,
        required: false
      }
    }
)
</script>
<template>
  <div id="aboutMeList">
  <about-item :userName="usrName">
  <template #secLab>
     Personal Info
  </template>
  <template #secInfo>Im 20 : ) and my name is mihkel hain : (</template>
  </about-item>

  <about-item :user-name="usrName">
    <template #secLab>
      Hobbies
    </template>
    <template #secInfo>Me luv vimeogames and programming</template>
  </about-item>

  <about-item :user-name="usrName">
    <template #secLab>
       experience
    </template>
    <template #secInfo>yeah this is my first time using vue, using no tutorials, ik bad idea</template>
  </about-item>

  <about-item :user-name="usrName">
    <template #secLab>Long text test</template>
    <template #secInfo> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim quam. Vivamus eu dui rutrum, venenatis tortor a, lacinia dolor. Maecenas sollicitudin purus et rhoncus hendrerit. Integer placerat lorem lectus, quis sollicitudin leo finibus sed. Nam rutrum nisl felis, id placerat neque pretium vitae. Sed consectetur arcu nec lacus luctus, consectetur placerat ligula placerat. Suspendisse id felis felis.
      In sem ante, pharetra quis fermentum ut, ultricies sed nibh. Nunc ante urna, laoreet vel auctor et, maximus non arcu. Fusce eget orci lobortis, varius ligula sit amet, dignissim nulla. Etiam ante arcu, lacinia ac porta quis, maximus eget ante. Pellentesque tristique, lorem tincidunt accumsan laoreet, dolor mauris cursus elit, vel vehicula ante justo sit amet elit. Quisque id bibendum leo. Nunc aliquam tellus orci, quis bibendum lacus consequat at.
      Maecenas efficitur nulla vel pellentesque scelerisque. Etiam blandit enim magna, nec iaculis magna dapibus id. Etiam neque diam, scelerisque ac lectus at, rhoncus pulvinar nisi. Fusce et eros malesuada, rhoncus dui sed, gravida sem. Duis nec felis semper tellus vulputate condimentum. Curabitur eu tempus diam. Donec ac ipsum ipsum. Donec vitae est in dui convallis tincidunt imperdiet eget turpis. Vivamus sollicitudin imperdiet lacus ac interdum. Etiam viverra mi in quam hendrerit, sed tincidunt arcu malesuada. Nunc pharetra ac nisi vitae pulvinar. Sed volutpat nisi eget posuere sagittis. </template>
  </about-item>
  </div>
</template>
<style scoped>
#aboutMeList{
  border: solid whitesmoke;
}
</style>