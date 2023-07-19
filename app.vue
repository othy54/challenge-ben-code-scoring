<template>
  <div class="container">
    <div class="wrapper">
      <Notation v-model:value="ergonomy" identifier="ergonomy" title="Ui/Ux" />
      <Notation v-model:value="design" identifier="design" title="Design" />
      <Notation v-model:value="performance" identifier="performance" title="Performance" />
      <Notation v-model:value="quality" identifier="quality" title="Qualité" />
      <Total class="col-span-2 opacity-0" :class="isAllScored && 'opacity-1'" :score="score" />
    </div>
  </div>
</template>
<script setup>
const ergonomy = ref(0);
const design = ref(0);
const performance = ref(0);
const quality = ref(0);

const score = computed(() => {
  return (ergonomy.value + design.value + performance.value + quality.value) / 4
})

const isAllScored = computed(() => {
  return (ergonomy.value > 0 && design.value > 0) && (performance.value > 0 && quality.value > 0);
})
</script>
<style lang="postcss">
body {
  font-family: 'Boska', serif;
  margin: 0;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  &>div {
    margin: 0 auto;
  }

}

.col-span-2 {
  grid-column: span 2 / span 2;
}

.opacity-0 {
  opacity: 0;
  transition: 0.3s
}

.opacity-1 {
  opacity: 1
}

h2 {
  text-align: center;
}
</style>