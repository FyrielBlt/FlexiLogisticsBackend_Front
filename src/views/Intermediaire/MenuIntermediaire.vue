<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <side-bar >
      <template v-slot:menu>
        <!-- Generale -->

        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
          GENERAL
        </p>

        <router-link
          v-if="verifPermission('Dashboard') != 0"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'Intermediaire' ? activeClass : inactiveClass,
          ]"
           :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../Intermediaire'
              : 'Intermediaire'
          "
         
          ><i class="bi bi-bank2"></i>

          <span class="mx-4">Dashboard</span>
        </router-link>
        <router-link
          v-if="verifPermission('Profile') != 0"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'ProfilIntermediaire' ? activeClass : inactiveClass,
          ]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../ProfilIntermediaire'
              : 'ProfilIntermediaire'
          "
          ><i class="bi bi-file-earmark-person"></i>
          <span class="mx-4">Profile</span>
        </router-link>
        <!--fin  Generale -->
        <!--  users -->
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">USERS</p>
        <!-- personel -->
        <router-link
          v-if="verifPermission('Personnelle') != 0"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'PersonnelIntermediaire'
              ? activeClass
              : inactiveClass,
          ]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../personnelIntermediaire'
              : 'personnelIntermediaire'
          "
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 612 612"
            style="enable-background: new 0 0 612 612"
            xml:space="preserve"
          >
            <g>
              <path
                fill="currentColor"
                d="M306,317.657c46.677,0,84.514-37.838,84.514-84.514S352.677,148.629,306,148.629c-46.676,0-84.514,37.838-84.514,84.514
		S259.324,317.657,306,317.657z M350.041,262.785c-4.179,13.816-22.078,24.202-43.529,24.202c-21.453,0-39.352-10.386-43.53-24.202
		H350.041z M448.225,405.086v27.858c0,4.129-2.752,8.928-6.524,10.606c-14.62,6.506-54.354,19.82-135.844,19.82
		c-81.489,0-121.008-13.315-135.628-19.82c-3.773-1.679-6.453-6.478-6.453-10.606v-27.858c0-41.747,31.497-76.379,72.054-81.018
		c1.232-0.141,2.917,0.387,3.921,1.115c18.7,13.537,41.522,21.617,66.322,21.617c24.799,0,47.657-8.08,66.356-21.617
		c1.005-0.728,2.526-1.255,3.759-1.115C416.746,328.707,448.225,363.339,448.225,405.086z M612,329.552v16.487
		c0,2.443-1.799,5.284-4.031,6.277c-8.653,3.851-32.255,11.731-80.482,11.731c-48.229,0-73.514-7.881-82.166-11.731
		c-2.233-0.992-5.715-3.833-5.715-6.277v-16.487c0-24.707,20.494-45.204,44.498-47.949c0.729-0.083,2.652,0.229,3.247,0.66
		c11.067,8.012,25.038,12.794,39.715,12.794c14.678,0,28.438-4.782,39.505-12.794c0.596-0.431,1.782-0.742,2.511-0.66
		C593.083,284.349,612,304.845,612,329.552z M166.68,352.317c-8.653,3.851-33.095,11.73-81.324,11.73
		c-48.229,0-72.25-7.88-80.903-11.73C2.219,351.324,0,348.483,0,346.04v-16.487c0-24.707,18.812-45.204,42.815-47.949
		c0.729-0.083,1.811,0.229,2.405,0.659c11.067,8.013,24.617,12.795,39.293,12.795c14.677,0,28.227-4.782,39.294-12.795
		c0.594-0.431,3.358-0.742,4.088-0.659c24.003,2.746,44.498,23.242,44.498,47.949v16.487
		C172.395,348.483,168.913,351.324,166.68,352.317z M84.514,177.771c-27.624,0-50.019,22.394-50.019,50.019
		c0,27.625,22.394,50.019,50.019,50.019s50.019-22.394,50.019-50.019S112.139,177.771,84.514,177.771z M84.514,258.22
		c-12.956,0-23.766-6.272-26.29-14.617h52.581C108.281,251.948,97.471,258.22,84.514,258.22z M527.486,177.771
		c-27.625,0-50.02,22.394-50.02,50.019c0,27.625,22.395,50.019,50.02,50.019c27.624,0,50.019-22.394,50.019-50.019
		S555.11,177.771,527.486,177.771z M527.485,258.22c-12.956,0-23.767-6.272-26.29-14.617h52.58
		C551.252,251.948,540.441,258.22,527.485,258.22z"
              />
            </g>
          </svg>
          <span class="mx-4">Personnelle</span>
        </router-link>
        <!-- client -->
        <router-link
          v-if="verifPermission('Client') != 0"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'ClientIntermediaire' ? activeClass : inactiveClass,
          ]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../clientIntermediaire'
              : 'clientIntermediaire'
          "
          ><i class="bi bi-person"></i>
          <span class="mx-4">Client</span>
        </router-link>
        <!-- transporteur -->
        <router-link
          v-if="verifPermission('Transporteur') != 0"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'TransporteurIntermediaire'
              ? activeClass
              : inactiveClass,
          ]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../transporteurIntermediaire'
              : 'transporteurIntermediaire'
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-truck"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            />
          </svg>

          <span class="mx-4">Transporteur</span>
        </router-link>
        <!-- role -->
        <router-link
          v-if="verifPermission('Role') != 0"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Role' ? activeClass : inactiveClass]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../role'
              : 'role'
          "
          ><i class="bi bi-card-checklist"></i>
          <span class="mx-4">Role</span>
        </router-link>
        <!-- permission -->
        <router-link
          v-if="verifPermission('Permision') != 0"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Permission' ? activeClass : inactiveClass]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../permission'
              : 'permission'
          "
          ><i class="bi bi-bookmark-star"></i>
          <span class="mx-4">Permision</span>
        </router-link>

        <!-- fin users -->
        <!-- ville -->
        <p
          class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400"
          v-if="verifPermission('Ville') != 0"
        >
          VILLES
        </p>
        <!-- Facture client -->
      

         <router-link
          v-if="verifPermission('Ville') != 0"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'VilleIntermediaire' ? activeClass : inactiveClass,
          ]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../villeIntermediaire'
              : 'villeIntermediaire'
          "
          ><i class="bi bi-building"></i>
          <span class="mx-4">Ville</span>
        </router-link>
          <router-link
         v-if="verifPermission('Trajet') != 0"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'trajetIntermediaire' ? activeClass : inactiveClass,
          ]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../trajetIntermediaire'
              : 'trajetIntermediaire'
          "
          ><i class="bi bi-minecart"></i>
          <span class="mx-4">Trajet</span>
        </router-link>
        <!-- demandeDeLivraison -->
        <p
          class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400"
          v-if="verifPermission('Demande') != 0"
        >
          DEMANDE LIVRAISION
        </p>
        <!-- Facture client -->
        <router-link
          v-if="verifPermission('Demande') != 0"
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'DemandeIntermediaire' ||
            $route.name === 'DemandeDevis' ||
            $route.name === 'OffreIntermediaire'||
            $route.name === 'DetailDemandeIntermediaire'
              ? activeClass
              : inactiveClass,
          ]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../demandeIntermediaire'
              : 'demandeIntermediaire'
          "
          ><svg
            width="20px"
            height="20px"
            viewBox="0 -12 158 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M6.72129 53.8326C5.22886 54.369 3.79008 55.0461 2.42414 55.8549C1.99492 56.0692 1.62306 56.3841 1.33985 56.7732C1.05664 57.1622 0.870351 57.614 0.796627 58.0907C0.728141 58.9623 1.18429 59.8347 2.14826 60.6823C2.95005 61.3417 3.81412 61.9203 4.72808 62.4099C5.42909 62.8132 6.14303 63.1944 6.85696 63.575C7.87906 64.1201 8.93607 64.6808 9.92071 65.3035C23.2735 73.7162 35.4245 81.1753 48.7508 87.2021C48.7223 87.6822 48.6907 88.1609 48.6584 88.6377C48.5679 89.9855 48.4749 91.3782 48.4729 92.7533C48.4699 94.8297 48.4618 96.9073 48.4484 98.9863C48.4141 105.578 48.3786 112.395 48.5989 119.098C48.6784 121.515 49.5403 123.243 51.0256 123.964C52.5872 124.719 54.5946 124.279 56.6783 122.719C57.4297 122.156 58.1998 121.524 59.032 120.785C62.6824 117.545 66.3277 114.298 70.0078 111.02L73.343 108.049C73.3682 108.068 73.3927 108.087 73.4153 108.107L76.4991 110.778C80.01 113.816 83.6397 116.957 87.1829 120.08C88.1921 120.967 89.2071 121.85 90.2279 122.727C93.3395 125.417 96.5596 128.198 99.4515 131.179C100.984 132.756 102.474 133.498 104.264 133.498C105.036 133.487 105.803 133.372 106.546 133.158C109.158 132.442 110.843 130.835 112.011 127.954C116.411 117.096 120.915 106.068 125.269 95.4041C128.844 86.644 132.416 77.8832 135.985 69.1212C143.674 50.3116 150.308 31.082 155.854 11.5231C156.526 9.25442 156.998 6.93056 157.266 4.57852C157.355 4.03355 157.322 3.47531 157.169 2.945C157.015 2.41468 156.745 1.92589 156.379 1.51476C155.937 1.11363 155.412 0.817045 154.841 0.646857C154.272 0.476668 153.671 0.437215 153.083 0.531243C152.306 0.62523 151.539 0.799482 150.796 1.05151L150.696 1.08216C149.028 1.58303 147.355 2.06949 145.682 2.5567C141.796 3.6879 137.778 4.85757 133.878 6.19107C105.715 15.8287 77.1517 26.3209 48.9821 37.3766C40.8575 40.564 32.5849 43.7787 24.5844 46.8861C18.6266 49.1966 12.6722 51.5121 6.72129 53.8326ZM60.3339 83.5438C61.8845 82.2395 63.3543 81.0069 64.863 79.8484C70.7773 75.3015 76.6975 70.7617 82.6228 66.2304C94.2653 57.3147 106.305 48.0953 118.081 38.9404C121.682 36.1433 125.099 32.9988 128.404 29.9637C129.539 28.9229 130.673 27.8776 131.816 26.8465C132.728 26.0243 134.254 24.6486 133.408 21.9607C133.38 21.8729 133.335 21.7918 133.275 21.7225C133.215 21.6532 133.141 21.5973 133.059 21.5582C132.976 21.5193 132.886 21.4978 132.794 21.4951C132.703 21.4924 132.612 21.5085 132.527 21.5424C132.174 21.6862 131.833 21.8131 131.504 21.9328C130.819 22.1684 130.152 22.4534 129.508 22.7856C107.655 34.7331 88.645 50.3999 70.2617 65.552C66.1042 68.9781 62.1856 72.5122 58.0409 76.2499C56.2809 77.8377 54.5032 79.432 52.7074 81.0335L11.7046 58.6697C11.9409 58.5229 12.189 58.3963 12.4463 58.2911C19.0407 55.791 25.6326 53.2819 32.2218 50.7636C48.3566 44.61 65.0432 38.2463 81.5231 32.1929C96.1997 26.8017 111.219 21.5788 125.743 16.5278C130.572 14.8487 135.401 13.1663 140.228 11.4807C142.099 10.8263 143.986 10.3144 145.986 9.77318C146.515 9.63008 147.047 9.48508 147.581 9.33807C139.534 35.016 129.269 60.2022 119.336 84.5728C114.116 97.3783 108.723 110.61 103.68 123.835C89.9733 112.724 76.6781 100.978 63.8163 89.6134C62.0792 88.077 60.3384 86.5399 58.5939 85.0022C59.187 84.5045 59.7653 84.0193 60.3319 83.5438H60.3339ZM67.952 103.131L56.1931 113.163L55.2608 91.3281L67.952 103.131Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="157"
                  height="134"
                  fill="currentColor"
                  transform="translate(0.777344)"
                />
              </clipPath>
            </defs>
          </svg>
          <span class="mx-4">Demande</span>
        </router-link>
        <!-- Facture -->
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
          FACTURES
        </p>
        <!-- Facture client -->
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'FactureClient' ||
            $route.name === 'UploadFacture' ||
            $route.name === 'PayementClient'
              ? activeClass
              : inactiveClass,
          ]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../factureClient'
              : 'factureClient'
          "
          ><svg
            width="20px"
            height="20px"
            viewBox="0 -12 158 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M6.72129 53.8326C5.22886 54.369 3.79008 55.0461 2.42414 55.8549C1.99492 56.0692 1.62306 56.3841 1.33985 56.7732C1.05664 57.1622 0.870351 57.614 0.796627 58.0907C0.728141 58.9623 1.18429 59.8347 2.14826 60.6823C2.95005 61.3417 3.81412 61.9203 4.72808 62.4099C5.42909 62.8132 6.14303 63.1944 6.85696 63.575C7.87906 64.1201 8.93607 64.6808 9.92071 65.3035C23.2735 73.7162 35.4245 81.1753 48.7508 87.2021C48.7223 87.6822 48.6907 88.1609 48.6584 88.6377C48.5679 89.9855 48.4749 91.3782 48.4729 92.7533C48.4699 94.8297 48.4618 96.9073 48.4484 98.9863C48.4141 105.578 48.3786 112.395 48.5989 119.098C48.6784 121.515 49.5403 123.243 51.0256 123.964C52.5872 124.719 54.5946 124.279 56.6783 122.719C57.4297 122.156 58.1998 121.524 59.032 120.785C62.6824 117.545 66.3277 114.298 70.0078 111.02L73.343 108.049C73.3682 108.068 73.3927 108.087 73.4153 108.107L76.4991 110.778C80.01 113.816 83.6397 116.957 87.1829 120.08C88.1921 120.967 89.2071 121.85 90.2279 122.727C93.3395 125.417 96.5596 128.198 99.4515 131.179C100.984 132.756 102.474 133.498 104.264 133.498C105.036 133.487 105.803 133.372 106.546 133.158C109.158 132.442 110.843 130.835 112.011 127.954C116.411 117.096 120.915 106.068 125.269 95.4041C128.844 86.644 132.416 77.8832 135.985 69.1212C143.674 50.3116 150.308 31.082 155.854 11.5231C156.526 9.25442 156.998 6.93056 157.266 4.57852C157.355 4.03355 157.322 3.47531 157.169 2.945C157.015 2.41468 156.745 1.92589 156.379 1.51476C155.937 1.11363 155.412 0.817045 154.841 0.646857C154.272 0.476668 153.671 0.437215 153.083 0.531243C152.306 0.62523 151.539 0.799482 150.796 1.05151L150.696 1.08216C149.028 1.58303 147.355 2.06949 145.682 2.5567C141.796 3.6879 137.778 4.85757 133.878 6.19107C105.715 15.8287 77.1517 26.3209 48.9821 37.3766C40.8575 40.564 32.5849 43.7787 24.5844 46.8861C18.6266 49.1966 12.6722 51.5121 6.72129 53.8326ZM60.3339 83.5438C61.8845 82.2395 63.3543 81.0069 64.863 79.8484C70.7773 75.3015 76.6975 70.7617 82.6228 66.2304C94.2653 57.3147 106.305 48.0953 118.081 38.9404C121.682 36.1433 125.099 32.9988 128.404 29.9637C129.539 28.9229 130.673 27.8776 131.816 26.8465C132.728 26.0243 134.254 24.6486 133.408 21.9607C133.38 21.8729 133.335 21.7918 133.275 21.7225C133.215 21.6532 133.141 21.5973 133.059 21.5582C132.976 21.5193 132.886 21.4978 132.794 21.4951C132.703 21.4924 132.612 21.5085 132.527 21.5424C132.174 21.6862 131.833 21.8131 131.504 21.9328C130.819 22.1684 130.152 22.4534 129.508 22.7856C107.655 34.7331 88.645 50.3999 70.2617 65.552C66.1042 68.9781 62.1856 72.5122 58.0409 76.2499C56.2809 77.8377 54.5032 79.432 52.7074 81.0335L11.7046 58.6697C11.9409 58.5229 12.189 58.3963 12.4463 58.2911C19.0407 55.791 25.6326 53.2819 32.2218 50.7636C48.3566 44.61 65.0432 38.2463 81.5231 32.1929C96.1997 26.8017 111.219 21.5788 125.743 16.5278C130.572 14.8487 135.401 13.1663 140.228 11.4807C142.099 10.8263 143.986 10.3144 145.986 9.77318C146.515 9.63008 147.047 9.48508 147.581 9.33807C139.534 35.016 129.269 60.2022 119.336 84.5728C114.116 97.3783 108.723 110.61 103.68 123.835C89.9733 112.724 76.6781 100.978 63.8163 89.6134C62.0792 88.077 60.3384 86.5399 58.5939 85.0022C59.187 84.5045 59.7653 84.0193 60.3319 83.5438H60.3339ZM67.952 103.131L56.1931 113.163L55.2608 91.3281L67.952 103.131Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="157"
                  height="134"
                  fill="currentColor"
                  transform="translate(0.777344)"
                />
              </clipPath>
            </defs>
          </svg>
          <span class="mx-4">Facture Client</span>
        </router-link>
        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[
            $route.name === 'factureTransporteur' ||
            $route.name === 'VoirFacture' ||
            $route.name === 'PayementTransporteur'
              ? activeClass
              : inactiveClass,
          ]"
          :to="
            $route.params.id || $route.params.facture || $route.params.demande
              ? '../factureTransporteur'
              : 'factureTransporteur'
          "
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 -12 158 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M6.72129 53.8326C5.22886 54.369 3.79008 55.0461 2.42414 55.8549C1.99492 56.0692 1.62306 56.3841 1.33985 56.7732C1.05664 57.1622 0.870351 57.614 0.796627 58.0907C0.728141 58.9623 1.18429 59.8347 2.14826 60.6823C2.95005 61.3417 3.81412 61.9203 4.72808 62.4099C5.42909 62.8132 6.14303 63.1944 6.85696 63.575C7.87906 64.1201 8.93607 64.6808 9.92071 65.3035C23.2735 73.7162 35.4245 81.1753 48.7508 87.2021C48.7223 87.6822 48.6907 88.1609 48.6584 88.6377C48.5679 89.9855 48.4749 91.3782 48.4729 92.7533C48.4699 94.8297 48.4618 96.9073 48.4484 98.9863C48.4141 105.578 48.3786 112.395 48.5989 119.098C48.6784 121.515 49.5403 123.243 51.0256 123.964C52.5872 124.719 54.5946 124.279 56.6783 122.719C57.4297 122.156 58.1998 121.524 59.032 120.785C62.6824 117.545 66.3277 114.298 70.0078 111.02L73.343 108.049C73.3682 108.068 73.3927 108.087 73.4153 108.107L76.4991 110.778C80.01 113.816 83.6397 116.957 87.1829 120.08C88.1921 120.967 89.2071 121.85 90.2279 122.727C93.3395 125.417 96.5596 128.198 99.4515 131.179C100.984 132.756 102.474 133.498 104.264 133.498C105.036 133.487 105.803 133.372 106.546 133.158C109.158 132.442 110.843 130.835 112.011 127.954C116.411 117.096 120.915 106.068 125.269 95.4041C128.844 86.644 132.416 77.8832 135.985 69.1212C143.674 50.3116 150.308 31.082 155.854 11.5231C156.526 9.25442 156.998 6.93056 157.266 4.57852C157.355 4.03355 157.322 3.47531 157.169 2.945C157.015 2.41468 156.745 1.92589 156.379 1.51476C155.937 1.11363 155.412 0.817045 154.841 0.646857C154.272 0.476668 153.671 0.437215 153.083 0.531243C152.306 0.62523 151.539 0.799482 150.796 1.05151L150.696 1.08216C149.028 1.58303 147.355 2.06949 145.682 2.5567C141.796 3.6879 137.778 4.85757 133.878 6.19107C105.715 15.8287 77.1517 26.3209 48.9821 37.3766C40.8575 40.564 32.5849 43.7787 24.5844 46.8861C18.6266 49.1966 12.6722 51.5121 6.72129 53.8326ZM60.3339 83.5438C61.8845 82.2395 63.3543 81.0069 64.863 79.8484C70.7773 75.3015 76.6975 70.7617 82.6228 66.2304C94.2653 57.3147 106.305 48.0953 118.081 38.9404C121.682 36.1433 125.099 32.9988 128.404 29.9637C129.539 28.9229 130.673 27.8776 131.816 26.8465C132.728 26.0243 134.254 24.6486 133.408 21.9607C133.38 21.8729 133.335 21.7918 133.275 21.7225C133.215 21.6532 133.141 21.5973 133.059 21.5582C132.976 21.5193 132.886 21.4978 132.794 21.4951C132.703 21.4924 132.612 21.5085 132.527 21.5424C132.174 21.6862 131.833 21.8131 131.504 21.9328C130.819 22.1684 130.152 22.4534 129.508 22.7856C107.655 34.7331 88.645 50.3999 70.2617 65.552C66.1042 68.9781 62.1856 72.5122 58.0409 76.2499C56.2809 77.8377 54.5032 79.432 52.7074 81.0335L11.7046 58.6697C11.9409 58.5229 12.189 58.3963 12.4463 58.2911C19.0407 55.791 25.6326 53.2819 32.2218 50.7636C48.3566 44.61 65.0432 38.2463 81.5231 32.1929C96.1997 26.8017 111.219 21.5788 125.743 16.5278C130.572 14.8487 135.401 13.1663 140.228 11.4807C142.099 10.8263 143.986 10.3144 145.986 9.77318C146.515 9.63008 147.047 9.48508 147.581 9.33807C139.534 35.016 129.269 60.2022 119.336 84.5728C114.116 97.3783 108.723 110.61 103.68 123.835C89.9733 112.724 76.6781 100.978 63.8163 89.6134C62.0792 88.077 60.3384 86.5399 58.5939 85.0022C59.187 84.5045 59.7653 84.0193 60.3319 83.5438H60.3339ZM67.952 103.131L56.1931 113.163L55.2608 91.3281L67.952 103.131Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="157"
                  height="134"
                  fill="currentColor"
                  transform="translate(0.777344)"
                />
              </clipPath>
            </defs>
          </svg>
          <span class="mx-2">Facture Transporteur</span>
        </router-link>
      </template>
    </side-bar>

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="container mx-auto px-6 py-8">
          <router-view />
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/SideBar.vue";
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import Url from "../../store/Api.js";
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  name: "Menu",
  components: {
    SideBar,
    Header,
    Footer,
  },
  data() {
    return {
      ListeTousPermissions: [],
      show: false,
      activeClass: "bg-gray-600 bg-opacity-35 text-gray-100 border-gray-100",
      inactiveClass:
        "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100",
    };
  },
  async created() {
    await axios
      .get(Url + "Roles/" + localStorage.getItem("idRole"), {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        this.ListeTousPermissions = res.data.rolePermission;
      });
  },
  computed: {
    ...mapGetters(["ListePermissionsAll"]),
  },

  mounted() {
    this.$store.dispatch("Get_Permission_All");
    //this.$store.dispatch("Get_Tous_Permissions");
    //this.route = this.$route.name;
    // this.tet();
  },
  methods: {
    affiche() {
      if (!this.show) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    verifPermission(per) {
      let idPer = this.ListePermissionsAll.filter(
        (el) => el.permission1 == per
      ).map((el) => el.idPermission)[0];
      return this.ListeTousPermissions.filter((el) => el.idPermision == idPer)
        .length;
    },
  },
};
</script>
