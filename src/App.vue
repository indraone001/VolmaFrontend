<template>
  <div id="app"> 
    <div class="scroll">
      <router-view/>

    </div>
  </div>
</template>

<style>
/* 
  @import google font
 */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

.scroll {
  overflow: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  /* width: 0px; 
  background: transparent; */
  display: none;
}
</style>
