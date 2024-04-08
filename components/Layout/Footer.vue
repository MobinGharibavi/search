<template>
  <div class="border-t bg-orange-200 mt-52">
    <UtilsNewsletters class="-mt-36"/>
    <footer class="max-w-7xl mx-auto w-full py-1 pb-5 flex items-center justify-between">

      <div class="flex flex-col justify-center gap-8">

          <div class="flex flex-col gap-2">
            <h5 class="text-orange text-3xl font-bold">CRSTRIP</h5>
          <p>If You Want To Go Far, Go Together</p>
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4 items-center">
              <NuxtLink to="/" class="p-2.5 rounded-lg bg-white">
                <Icon name="mdi:instagram"  size="2rem" />
              </NuxtLink>
              <NuxtLink to="/" class="p-2.5 rounded-lg bg-white">
                <Icon name="mingcute:telegram-fill"  size="2rem" />
              </NuxtLink>
              <NuxtLink to="/" class="p-2.5 rounded-lg bg-white">
                <Icon name="ic:baseline-whatsapp"  size="2rem" />
              </NuxtLink>
            </div>
  
            <p class="font-bold"><span class="text-orange">CRSTRIP</span>.COM</p>
        </div>

      </div>

      <div class="flex justify-between w-2/3 py-10">
        <main class="space-y-5">
          <h4 class="font-bold text-xl">
            {{ $t("footer.title.call_info") }}
          </h4>
          <ul class="flex lg:flex-col justify-between lg:justify-start lg:gap-3">
            <div class="flex items-center gap-3">
              <p>CrsTrip.com@gmail.com</p>
            </div>
            <div class="flex items-center gap-3">
              <Icon name="mage:phone-call" />
              <p class="rtl:flex-row-reverse flex gap-2">
                <span class="flex rtl:flex-row-reverse"><span>+</span>964</span
                ><span>780</span><span>814</span>
                <span>3063</span>
              </p>
            </div>
            <div class="flex items-center gap-3">
              <Icon name="mingcute:location-fill" />
              <p>Najaf, Iraq</p>
            </div>
          </ul>
        </main>
        <main class="space-y-5">
          <h4 class="font-bold text-xl">
            {{ $t("footer.title.roadmap") }}
          </h4>

          <ul class="flex lg:flex-col justify-between lg:justify-start lg:gap-3">
            <li>{{ $t("footer.call_info.charge") }}</li>
            <li>{{ $t("footer.call_info.call") }}</li>
            <li>{{ $t("footer.call_info.ticket") }}</li>
          </ul>
        </main>
        <main class="space-y-5">
          <h4 class="font-bold text-xl">
            {{ $t("footer.title.site_info") }}
          </h4>
          <div class="flex gap-5">
            <ul class="flex lg:flex-col justify-between lg:justify-start lg:gap-3">
            <li>{{ $t("footer.site_info.op1") }}</li>
            <li>{{ $t("footer.site_info.op2") }}</li>
            <li>{{ $t("footer.site_info.op3") }}</li>
          </ul>
          </div>
        </main>
      </div>
    </footer>
  </div>
  <div
    class="flex bg-white items-center rtl:flex-row-reverse justify-center gap-2 py-5 border-t w-full"
  >
    <Icon name="ic:baseline-copyright"/>
    <p class="text-sm text-end lg:text-center text-wrap text-[#1D1B20]">
      {{ $t("footer.copyright") }}
    </p>
  </div>
</template>

<script setup></script>
