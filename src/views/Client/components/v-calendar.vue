<template>
  <div class="text-center section">
    <p class="text-lg font-medium text-gray-600 mb-6" style="background-color: white;
    position: relative;
    top: 15px;">
      Calendrier des demandes
    </p>
    <v-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="calendardata()"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-20 z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow  overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </v-calendar>
  </div>
</template>

<script>
export default {
  props:["demandes"],
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      masks: {
        weekdays: 'WWW',
      },
      attributes: [
        {
          customData: {
            title: 'Lunch with mom.',
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, month, 1),
        },
        
      ],
    };
  },
  methods:{
    calendardata(){
      let list = [];
      this.demandes.forEach(element => {
        if (element.idEtatdemandeNavigation.etatDemande == "Achevé") {
          let ob = {
        customData: {
            title: element.idDemande,
            class: 'bg-green-500 font-semibold text-white',
          },
          dates: element.date,
      }
      list.push(ob)
        }else{
           let ob = {
        customData: {
            title: element.idDemande,
            class: 'bg-slate-500 font-semibold text-white',
          },
          dates: element.date,
      }
      list.push(ob)
        }
       
      
      });
      
      return list
    }
  }
};
</script>

<style lang="postcss" scoped>
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>