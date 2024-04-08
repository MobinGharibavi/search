<template>
  <section class="w-full flex p-10 gap-4 flex-col bg-orange text-white">
    <h2 class="font-bold text-3xl">ویزا</h2>
    <div class="grid gap-4 grid-cols-4 grid-rows-2">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="bg-white h-max hover:shadow-2xl group rounded-lg hover:rounded-t-lg hover:rounded-none gap-3 text-black relative p-2 flex flex-col"
      >
        <div class="rounded-lg overflow-hidden">
          <img :src="item.img" alt="..." />
        </div>

        <div class="flex flex-col gap-2 5">
          <h6 class="font-bold text-lg">{{ item.title }}</h6>
          <p class="text-gray-400">{{ item.body }}</p>
        </div>

        <div
          class="bg-white z-50 shadow-2xl group-hover:opacity-100 h-20 opacity-0 absolute transition-all duration-500 flex items-end -bottom-[4.5rem] left-0 right-0 rounded-b-lg p-2"
        >
          <button
            class="text-white p-0 h-0 group-hover:h-auto transition-all duration-500 bg-blue-500 rounded-lg group-hover:py-2 w-full"
          >
            درخواست ویزا
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = ref([
  {
    title: "ویزا دوبی",
    body: "ویزا گردشگری دوبی",
    img: "https://www.panypay.com/IMG_Files/bigthumb-sur-oman-OMAN1110-2135757126.jpg",
  },
  {
    title: "ویزا عمان",
    body: "ویزا گردشگری عمان",
    img: "https://www.panypay.com/IMG_Files/bigthumb-sur-oman-OMAN1110-2135757126.jpg",
  },
  {
    title: "ویزا اردن",
    body: "ویزا گردشگری اردن",
    img: "https://www.panypay.com/IMG_Files/bigthumb-sur-oman-OMAN1110-2135757126.jpg",
  },
  {
    title: "ویزا ارمنستان",
    body: "ویزا گردشگری ارمنستان",
    img: "https://www.panypay.com/IMG_Files/bigthumb-sur-oman-OMAN1110-2135757126.jpg",
  },
  {
    title: "ویزا آذربایجان",
    body: "ویزا گردشگری آذربایجان",
    img: "https://www.panypay.com/IMG_Files/bigthumb-sur-oman-OMAN1110-2135757126.jpg",
  },
  {
    title: "ویزا قطر",
    body: "ویزا گردشگری قطر",
    img: "https://www.panypay.com/IMG_Files/bigthumb-sur-oman-OMAN1110-2135757126.jpg",
  },
  {
    title: "ویزا کانادا",
    body: "ویزا گردشگری کانادا",
    img: "https://www.panypay.com/IMG_Files/bigthumb-sur-oman-OMAN1110-2135757126.jpg",
  },
  {
    title: "ویزا روسیه",
    body: "ویزا گردشگری روسیه",
    img: "https://www.panypay.com/IMG_Files/bigthumb-sur-oman-OMAN1110-2135757126.jpg",
  },
]);
</script>
