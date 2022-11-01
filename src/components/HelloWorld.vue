<script setup lang="ts">
const props = defineProps<{
  msg: string,
  msg2: string,
}>();
</script>

<template>
    <h1>{{ props.msg }}</h1>
    <h2>{{ props.msg2 }}</h2>
</template>