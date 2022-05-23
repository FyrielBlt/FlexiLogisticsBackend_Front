<template>
  <div>
    <!-- Breadcrumb -->
    <!-- <Breadcrumb :breadcrumbName="Tables" /> -->
    <bread-crumb>
      <template v-slot:bread1> Users </template>
      <template v-slot:bread> Permission </template>
    </bread-crumb>
    <!-- alert -->

    <div class="mt-4">
      <h2 class="text-xl font-semibold leading-tight text-gray-700">
        Les Permissions
      </h2>
      <div class="flex flex-col mt-3 text-center sm:flex-row">
        <div class="flex">
          <div class="relative">
            <select
              class="
                block
                w-full
                h-full
                px-4
                py-2
                pr-8
                leading-tight
                text-gray-700
                bg-white
                border border-gray-400
                rounded-l
                appearance-none
                focus:outline-none focus:bg-white focus:border-gray-500
              "
              v-model="ParpagePermission"
            >
              <option value="1">1</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>

            <div
              class="
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-gray-700
                pointer-events-none
              "
            >
              <svg
                class="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="relative block mt-2 sm:mt-0">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" class="w-4 h-4 text-gray-500 fill-current">
              <path
                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
              />
            </svg>
          </span>

          <input
            placeholder="Search"
            class="
              block
              w-full
              py-2
              pl-8
              pr-6
              text-xm text-gray-700
              placeholder-gray-400
              bg-white
              border border-b border-gray-400
              rounded-l rounded-r
              appearance-none
              sm:rounded-l-none
              focus:bg-white
              focus:placeholder-gray-600
              focus:text-gray-700
              focus:outline-none
            "
            v-model="recherchePermission"
          />
        </div>
      </div>

      <div class="mt-6">
        <div class="my-6 overflow-hidden bg-white rounded-md shadow">
          <table class="w-full text-center border-collapse">
            <thead class="border-b">
              <tr>
                <th
                  class="
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-gray-100
                    uppercase
                    bg-indigo-800
                  "
                >
                  Permission
                </th>
                <th
                  v-for="role in ListeRoles"
                  :key="role.idRole"
                  class="
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-gray-100
                    uppercase
                    bg-indigo-800
                  "
                >
                  {{ role.role1 }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="permission in ListePermissions"
                :key="permission.idPermission"
              >
                <td class="px-6 py-4 text-lg text-gray-700 border-b">
                  {{ permission.permission1 }}
                </td>
                <td
                  class="px-6 py-4 text-gray-700 border-b"
                  v-for="role in ListeRoles"
                  :key="role.idRole"
                >
                  <button
                    class="
                      inline-flex
                      px-2
                      text-xx
                      font-semibold
                      leading-5
                      text-green-700
                      bg-green-100
                      rounded-full
                    "
                    v-if="verif(role.idRole, permission.rolePermission) != null"
                    @click="
                      Desactive(verif(role.idRole, permission.rolePermission))
                    "
                  >
                    Active
                  </button>
                  <button
                    class="
                      inline-flex
                      px-2
                      text-xx
                      font-semibold
                      leading-5
                      text-red-700
                      bg-red-100
                      rounded-full
                    "
                    v-else
                    @click="Active(permission.idPermission, role.idRole)"
                  >
                    Désactivé
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="
              flex flex-col
              items-center
              px-2
              py-2
              bg-white
              border-t
              xs:flex-row xs:justify-between
            "
          >
            <div class="inline-flex xs:mt-0">
              <!-- PAGINATION -->
              <pagination-vue
                :current="currentPermission"
                :total="totalPermission"
                :per-page="perPagePermission"
                @page-changed="ChangePage"
              ></pagination-vue>
            </div>
          </div>
        </div>

        <!-- {{ListePermissions}} -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import BreadCrumb from "../../../../components/Intermediaire/BreadCrumb.vue";
import PaginationVue from "../../../../components/Intermediaire/pagination/PaginationVue.vue";

export default {
  components: {
    BreadCrumb,
    PaginationVue,
  },
  data() {
    return {
      ParpagePermission: "1",
      recherchePermission: "",
      // success: false,
      // timeout: false,
      // timeoutt: false,
      // successDeactive: false,
    };
  },
  computed: {
    ...mapGetters([
      "ListeRoles",
      "ListePermissions",
      "currentPermission",
      "perPagePermission",
      "parPagePermission",
      "totalPermission",
    ]),
  },
  mounted() {
    this.$store.dispatch("Get_Role");
    this.$store.dispatch("Get_Permission");
  },
  methods: {
    ChangePage(NumPage) {
      this.$store.dispatch("Get_NoveauPermission", NumPage);
    },
    verif(idRole, rolePermission) {
      return rolePermission
        .filter((el) => el.idRole == idRole)
        .map((el) => el.idRolePermission)[0];
    },

    Active(idPermission, idRole) {
      let RolePermission = {
        IdRole: idRole,
        IdPermision: idPermission,
      };
      this.$store.dispatch("Active_Permission", RolePermission);
      // this.startAlert();
      this.$swal({
        position: "top-end",
        icon: "success",
        toast: true,
        title: "Permission activée",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    Desactive(idRolePermission) {
      this.$store.dispatch("Desactive_Permission", idRolePermission);
      //this.startAlertDesactive();
      this.$swal({
        position: "top-end",
        icon: "success",
        toast:true,
        title: "Permission Desactivée",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  },
  watch: {
    ParpagePermission() {
      this.$store.dispatch("Changer_ParpagePermission", this.ParpagePermission);
    },
    recherchePermission() {
      this.$store.dispatch("Chercher_Permission", this.recherchePermission);
    },
  },
};
</script>