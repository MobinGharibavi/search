<template>
  <section class="grid grid-cols-3 grid-rows-2 gap-5">
    <div
      v-for="(item, index) in 6"
      :key="index"
      class="bg-white h-[22rem] w-80 rounded-xl overflow-auto flex flex-col"
    >
      <div
        class="flex justify-end bg-white z-50 sticky top-0 items-center border-b gap-3 p-3 text-gray-500"
      >
        <span>Tehran to</span>
        <icon name="wpf:airplane-takeoff" />
      </div>

      <div class="flex flex-col items-center">
        <div
          class="border-b p-3 text-center w-full"
          v-for="(item, index) in 21"
          :key="index"
        >
          <span>Esfahan</span>
        </div>
      </div>
    </div>
  </section>
</template>
