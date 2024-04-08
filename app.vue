<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { setLocale } = useI18n();
onMounted(() => {
  setLocale("fa");
  document.documentElement.setAttribute("dir", "rtl");
  document.documentElement.setAttribute("lang", "fa");
});
</script>