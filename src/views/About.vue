<template>
  <div class="about">
    <h1>Example V-FOR Vue</h1>
    <div>
      <ul>
        <li v-for="(ingrediente, i) in ingredientes" :key="ingrediente.id">{{ingrediente}} - {{i}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ingredientes: ['Lionel', 'Mateo', 'Andrea']
    }
  }
}
</script>