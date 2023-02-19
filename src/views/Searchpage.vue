<template>
  <div class="p-8">
    <button
      type="button"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Browse all
    </button>
    <div class="py-1.5"></div>
    <div
      class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6"
    >
      <Categoryselect
        category="Podcasts"
        image="https://i1.sndcdn.com/artworks-RbVrYfaSxarSDjCd-Isx61w-t500x500.jpg"
      />
      <Categoryselect
        category="Made for you"
        image="https://davidguetta.com/wp-content/uploads/2021/05/ImGood_Blue-1.jpg"
      />
      <Categoryselect
        category="New releases"
        image="https://www.udiscovermusic.com/wp-content/uploads/2021/05/Billie-Eilish-Happier-Than-Ever-Tour-1000x600.jpg"
      />
      <Categoryselect
        category="Hip-hop"
        image="https://m.media-amazon.com/images/I/61v6lSOpccL._SL1500_.jpg"
      />
      <Categoryselect
        category="Pop"
        image="https://m.media-amazon.com/images/I/81zsD5RoiOL._SL1200_.jpg"
      />
      <Categoryselect
        category="Mood"
        image="http://content.cdn.sap.com/is/image/sap/sap-coldplay-2:1534x1320?wid=640&hei=550&fit=stretch,1"
      />
      <Categoryselect
        category="Rock"
        image="https://media.npr.org/assets/img/2022/12/05/genre-rock_wide-e03b1f76034eaf7859ec6a8de02050d9903ee458.jpg"
      />
      <Categoryselect
        category="Charts"
        image="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"
      />
      <Categoryselect
        category="Made for you"
        image="https://davidguetta.com/wp-content/uploads/2021/05/ImGood_Blue-1.jpg"
      />
      <Categoryselect
        category="Made for you"
        image="https://davidguetta.com/wp-content/uploads/2021/05/ImGood_Blue-1.jpg"
      />
      <Categoryselect
        category="Made for you"
        image="https://davidguetta.com/wp-content/uploads/2021/05/ImGood_Blue-1.jpg"
      />
      <Categoryselect
        category="Made for you"
        image="https://davidguetta.com/wp-content/uploads/2021/05/ImGood_Blue-1.jpg"
      />
      <Categoryselect
        category="Made for you"
        image="https://davidguetta.com/wp-content/uploads/2021/05/ImGood_Blue-1.jpg"
      />
      <Categoryselect
        category="Made for you"
        image="https://davidguetta.com/wp-content/uploads/2021/05/ImGood_Blue-1.jpg"
      />
      <Categoryselect
        category="Made for you"
        image="https://davidguetta.com/wp-content/uploads/2021/05/ImGood_Blue-1.jpg"
      />
    </div>
  </div>
</template>
<script setup>
import Categoryselect from "../components/Categoryselect.vue";
</script>
