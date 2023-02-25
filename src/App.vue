<script setup>
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import MenuItem from "./components/MenuItem.vue";
import { ref, onMounted } from "vue";
import MusicPlayer from "@/components/MusicPlayer.vue";

let openMenu = ref(false);
</script>
<template>
  <div>
    <div
      class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between">
      <div class="items-center ml-6 flex">
        <button type="button" class="rounded-full mr-4 bg-black p-[1px] cursor-pointer">
          <ChevronLeft fillColor="#FFFFFF" :size="30" class="" />
        </button>
        <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
          <ChevronRight fillColor="#FFFFFF" :size="30" class="" />
        </button>
      </div>
      <button @click="openMenu = !openMenu" :class="openMenu ? 'bg-[#282828]' : 'bg-black'"
        class="bg-black hover:bg-[#282828] rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer">
        <div class="absolute items-center">
          <img src="./assets/download.jpeg" class="ml-1 rounded-full" width="23" alt="" />
        </div>
        <div class="text-white text-[14px] ml-8 mr-1 font-semibold">
          Dovran Ovetdiyev
        </div>
      </button>
      <div v-if="openMenu" class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1">
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="px-3 py-2.5 hover:bg-[#3E3D3d] border-b border-b-gray-600">
            <router-link to="/profile">Profile</router-link>
          </li>
          <li class="px-3 py-2.5 hover:bg-[#3E3D3d] border-b border-b-gray-600">
            <router-link to="/profile">Log out</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div id="SideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-black">
      <router-link to="/">
        <img width="125" src="/images/icons/spotify-logo.png" alt="" />
      </router-link>
      <div class="my-8">
        <router-link to="/">
          <MenuItem class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/" />
        </router-link>
        <router-link to="/search">
          <MenuItem class="ml-[1px]" :iconSize="23" name="Search" iconString="search" pageUrl="/search" />
        </router-link>
        <router-link to="/library">
          <MenuItem class="ml-[1px]" :iconSize="23" name="Library" iconString="library" pageUrl="/library" />
        </router-link>
        <div class="py-3.5">
          <router-link to="playlist">
            <MenuItem class="ml-[1px]" :iconSize="23" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
          </router-link>
          <router-link to="liked songs">
            <MenuItem class="ml-[1px]" :iconSize="23" name="Liked songs" iconString="liked" pageUrl="/liked songs" />
          </router-link>
        </div>
        <div class="border-b border-b-gray-700"></div>
        <ul>
          <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">
            My playlist #1
          </li>
          <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">
            My playlist #2
          </li>
        </ul>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
  <div class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black">
    <div class="mt-[70px]"></div>
    <router-view></router-view>
    <div class="mb-[100px]"></div>
  </div>
  <ChevronDown></ChevronDown>
</template>

