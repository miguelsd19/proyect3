<template>

  <v-container>
    <h1>Lista de proyectos</h1>
     <v-data-table
     :headers="headers"
     :search="search"
     :items="proyects"
     >
      <template v-slot:top >
       <v-toolbar flat color="white">
        <v-text-field v-model="search" label="Buscar" single-line class="mr-4"></v-text-field>
        <v-btn
        color="blue"
        @click="add"
        >nuevo
        </v-btn>
      </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        color="blue"
                >
                    <v-icon
                            small
                            class="detailIcon mr-2"
                            @click="show(item)"
                    >
                        mdi-eye
                    </v-icon>
                </v-btn>
            </template>
            <span>Detalles</span>
        </v-tooltip>
               
        <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                        color="yellow"
                >
                    <v-icon
                            small
                            class="editIcon mr-2"
                    >
                        mdi-pencil
                    </v-icon>
                </v-btn>
            </template>
            <span>Editar</span>
            
        </v-tooltip>
               
    <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              color="red"
              >
             <v-icon>
              mdi-delete
              </v-icon>
          </v-btn>
        </template>
        <span>Eliminar</span>
        </v-tooltip>
      </template>

     </v-data-table>
     
     <v-card-actions class="px-3 pb-3">
       <v-flex-text-xs-right>
       <v-btn >
       Dark
     </v-btn>
     </v-flex-text-xs-right>
      </v-card-actions>
  </v-container>
</template>
<script>
import {mapActions,mapMutations,mapState} from 'vuex';
export default {
  data(){
    return{
      headers:[{text:"id", value:"id"},
              {text:"Nombre", value:"nombre"},
              {text:"Fecha",value:"fecha"},
              {text:"Hora", value:"hora"},
              {text:"Prioridad", value:"prioridad"},
              {text:"Materia", value:"materia"},
              {text:"Acciones", value: "actions",sortable :false}],
        search:""
    }
  },
  computed:{
        ...mapState("proyects", ["proyects"])
},
methods:{
        ...mapActions("proyects", ["getProyects"]),
        ...mapMutations("proyects",["setCurrentProyects"]),
    add(){
      console.log("Crar nuevo proyecto")
    },
    show(proyect){
      console.log(proyect)
    }
},
  mounted(){
    this.getProyects()
  }
}
</script>