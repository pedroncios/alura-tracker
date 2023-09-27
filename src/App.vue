<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import TarefaForm from './components/TarefaForm.vue';

export default defineComponent({
  name: 'App',
  components: { BarraLateral, TarefaForm }
})
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <TarefaForm />
    </div>
  </main>
</template>

<style scoped></style>
