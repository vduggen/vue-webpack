<template>
   <div class="wrapper">
      <img src="./assets/logo.png" alt="Logo webpack e vue">

      <h1>
         Hello world from app <strong>Vue</strong> by <strong>Webpack</strong>
      </h1>
   </div>
</template>

<script>
export default {}
</script>

<style>
.wrapper {
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   width: 100%;
}

.wrapper h1 {
   font-family: sans-serif;
}

.wrapper h1 strong:first-child {
   color: #2fb982;
}

.wrapper h1 strong:last-child {
   color: #1c78c0;
}
</style>