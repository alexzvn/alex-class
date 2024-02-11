<template>
  <Aura class="-z-10 opacity-50" />

  <UContainer class="static">
    <div class="mx-auto mt-20 text-center">
      <h1 class="text-4xl font-bold text-center">Alex Class</h1>
      <p class="text-center">View alex schedule class or register topic bellow.</p>

      <UButton class="mt-5" size="lg">Request Topic</UButton>
    </div>

    <UCard class="mt-10">
      <div class="flex space-x-5">
        <div class="w-[20%] flex flex-col">
          <UButton variant="outline">
            <Icon name="logos:vue" />
            <span>View Schedule</span>
          </UButton>
        </div>

        <div class="w-[80%]">
          his
        </div>
      </div>

    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>

</script>

<style>
.dark body {
  background: #0a0a0a;
}
</style>
