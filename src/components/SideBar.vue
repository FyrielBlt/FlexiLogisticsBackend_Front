<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = true"
      class="
        fixed
        inset-0
        z-20
        transition-opacity
        bg-black
        opacity-50
        lg:hidden
      "
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="
        fixed
        inset-y-0
        left-0
        z-30
        w-64
        overflow-y-auto
        transition
        duration-300
        transform
        bg-gray-900
        lg:translate-x-0 lg:static lg:inset-0
      "
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <svg
            version="1.1"
            id="Icons"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 32 32"
            style="enable-background: new 0 0 32 32"
            xml:space="preserve"
          >
            <polyline class="st0" points="2,9 19,9 19,24 10,24 " />
            <circle class="st0" cx="24" cy="24" r="2" />
            <circle class="st0" cx="8" cy="24" r="2" />
            <polyline
              class="st0"
              points="19,24 19,13 25,13 29,18 29,24 26,24 "
            />
            <line class="st0" x1="4" y1="13" x2="13" y2="13" />
            <line class="st0" x1="2" y1="17" x2="11" y2="17" />
            <rect x="-288" y="-432" class="st3" width="536" height="680" />
          </svg>

          <span class="mx-2 text-2xl font-semibold text-white">P F E 2022</span>
        </div>
      </div>

      <nav class="mt-10">
      
       
        <!-- slot -->
          <slot name="menu"> </slot> 
        <!-- fin slot -->
        <!-- client -->
       
        <!-- fin client -->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props:["isOpen"],
  name:"SideBar",
  data(){
    return{
      activeClass:"bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100",
      inactiveClass:"border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
    }
    
  },
 
  

}
</script>
<style type="text/css">
.st0 {
  fill: none;
  stroke: #4f46e5;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}

.st1 {
  fill: none;
  stroke: #4f46e5;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-dasharray: 3;
}
.st2 {
  fill: none;
  stroke: #4f46e5;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.st3 {
  fill: none;
}
</style>