<template>
  <div
    class="flex items-center justify-center gap-5 -mt-52 mb-10"
  >
  <div class="flex flex-col gap-5">
    <div class="bg-white py-3 px-5 w-80 gap-2 rounded-lg flex flex-col">
      <h3>جستجو پرواز</h3>
      <div class="flex items-center">
        <!-- radio btn -->
      </div>

      <!-- change flight -->


      <div class="border rounded-lg flex gap-2 text-gray-500 cursor-pointer px-5 py-3">
        <Icon name="mdi:location" />
        <span>مقصد</span>
      </div>
      <div class="border rounded-lg flex gap-2 text-gray-500 cursor-pointer px-5 py-3">
        <Icon name="simple-line-icons:calender" />
        <span>تاریخ برگشت</span>
      </div>
      <div class="border rounded-lg flex gap-2 text-gray-500 cursor-pointer px-5 py-3">
        <Icon name="mdi:users" />
        <span>مسافران</span>
      </div>

      <button class="bg-orange text-white rounded-xl flex items-center justify-center gap-1 font-semibold py-3">
        <Icon name="ic:outline-search" />
        <span>جستجو</span>
      </button>
    </div>

    <div class="flex flex-col overflow-hidden rounded-t-xl">
      <!-- <img class="w-80" src="https://www.noavarantravel.com/uploads/tourpackages/istanbul-638270062804617017.jpg" alt=""> -->
      <img class="w-80" src="/img/visa.jpg" alt="">

      <div class="bg-white rounded-t-3xl -mt-5 py-4 justify-center items-center flex flex-col">
        <h4 class="text-orange font-bold text-xl">ویزا توریستی ترکیه</h4>
        <p>برای مشاهده جزئیات کلیک کنید</p>

        <p class="font-bold mt-5"><span class="text-orange">CRSTRIP</span>.COM</p>
      </div>
    </div>
  </div>

  <MainSearchData />
  </div>
</template>
