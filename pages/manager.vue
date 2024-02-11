<template>
  <div class="min-h-screen">
    <button>Sign out</button>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ middleware: ['auth'] })
</script>