<template>
  <section class="bg-orange-200 flex flex-col mt-10">

    <div class="flex flex-col py-10 justify-center items-center gap-5">
      <h2 class="text-3xl font-extrabold">سوالات پر تکرار</h2>
      <p class="text-gray-600 w-1/2 text-center">
        در این بخش سوالاتی که معمولا در مورد وبسایت ایجاد میشود قرار داده شده. در صورت وجود سوالی که در موارد زیر وجود ندارد میتوانید با  <span class="text-orange">پشتیبانی</span>  تماس بگیرید.
      </p>

      <div class="flex items-center gap-5">
        <button class="text-white bg-orange rounded-lg flex items-center px-5 gap-3 py-3">
          <Icon name="streamline:customer-support-1-solid" />
          <span>مشاهده سوالات بیشتر</span>
        </button>
        <button class="text-white bg-blue-500 rounded-lg flex items-center gap-3 px-5 py-3">
          <span>مشاهده سوالات بیشتر</span>
          <Icon name="bx:arrow-back" />
        </button>
      </div>
    </div>

    <section class="grid w-full px-16 grid-cols-2 pt-10 gap-5 grid-rows-3 bg-white">
      <div v-for="(item, index) in items" :key="index" class="border-2 gap-2 rounded-lg cursor-pointer py-3 px-5 flex items-center">
        <Icon name="ph:plus" class="text-blue-500" size="2rem"/>
        <span>{{ item.title }}</span>
      </div>
    </section>
  </section>
</template>


<script setup>
const items= ref([
  {
    title: "چطور میتوانم یک تیکت پشتیبانی ثبت کنم؟",
    body: "",
  },
  {
    title: "چطور یک بلیط هواپیما رزروکنم؟",
    body: "",
  },
  {
    title: "چطور میتوانم تیکت های خود را پیگیری کنم؟",
    body: "",
  },
  {
    title: "چطور میتوانم برای ویزای توریستی درخواست بدهم؟",
    body: "",
  },
  {
    title: "چطور در سایت اطلاعات آژانس خود را ویرایش کنم؟",
    body: "",
  },
  {
    title: "مبلغ و قوانین استرداد بلیط چقدر است؟",
    body: "",
  },
])
</script>