<template>
  <main>
    <section class="section card">
      <h1 class="title">Quienes somos</h1>
      <div class="columns">
        <div class="column">
          <h2 class="subtitle is-4">El HUERTÓDROMO, UN ESPACIO DEL BARRIO Y PARA EL BARRIO</h2>
          <p class="mb-5">
            Es un proyecto de huerto urbano comunitario y agroecológico que se encuentra integrado
            en el barrio y en su entorno. Está abierto a TODAS las personas, colectivos o entidades
            que quieran acercarse, conocer, tocar la tierra o proponer cualquier tipo de actividad
            sociocultural. En el Huertódromo tienen cabida actividades e iniciativas muy diversas,
            siempre y cuando promuevan la convivencia, la conciencia ecológica, la salud, el arte o
            la solidaridad. También nos encanta trabajar en red y generar sinergias con otros
            huertos urbanos, para aprender unos de otros, intercambiar y ayudarnos a llevar a todo
            el barrio a la huerta.
          </p>

          <h2 class="subtitle is-4">UN PROYECTO COMUNITARIO AUTOGESTIONADO Y COMPARTIDO</h2>
          <p class="mb-5">
            El espacio está cedido por el Ayuntamiento de Toledo a IntermediAcción, que a su vez nos
            cede a la asociación Huertódromo. Un proceso que se construye en conjunto, compartiendo
            las responsabilidades, tanto en el cuidado del espacio como de las personas que forman
            parte de él. Nos organizamos de manera asamblearia en cuanto a la gestión y la toma de
            decisiones del huerto. Por lo tanto, es una experiencia de participación activa y una
            oportunidad perfecta para hacer comunidad, creando un espacio de aprendizaje e
            intercambio de conocimientos, habilidades y experiencias…
          </p>

          <h2 class="subtitle is-4">DONDE SE PRACTICA EL ECOFEMINISMO Y LA AGROECOLOGIA</h2>
          <p class="mb-5">
            Hasta hace poco, el terreno que hoy ocupa el Huertódromo se encontraba muy degradado,
            pero con ganas y con tiempo, hoy florece aquí un PROYECTO AGROECOLÓGICO precioso abierto
            al barrio. Sus parcelas se trabajan de forma colectiva y en el que las tareas hortelanas
            como airear la tierra, sembrar o recolectar alimentos saludables, se convierten en un
            medio para que vecinos y vecinas de distintas edades, géneros, culturas… se encuentren.
            Es un espacio diverso donde construir una CONVIVENCIA sana y positiva, o charlar de
            cosas serias como el sabor, el olor y el aspecto de un tomate de antaño… ¡Como el que
            cultivaban nuestros abuelos y abuelas!
          </p>

          <h2 class="subtitle is-4">ASAMBLEA</h2>
          <div class="mb-5">
            <ul>
              <li>
                <a href="https://drive.google.com/open?id=0B51wuvX8pdaqcjlua2Q1RXlzUUU">
                  Reglamento huertodromo
                </a>
              </li>
              <li><a href="">Inscripción como hortelano/a </a></li>
              <li><a href="">Solicitud de llaves del huertódromo</a></li>
              <li><a href="">Plantilla del avance de las comisiones</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import vuecal from 'vue-cal';
export default {
  components: { 'vue-cal': vuecal },
  async created() {},
  data() {
    return {
      loaded: false,
      events: [
        {
          start: '2021-08-18 18:00',
          end: '2021-08-18 21:00',
          title: 'Asamblea general',
          class: 'leisure',
          content: 'Asamblea general verano'
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
.vuecal--month-view .vuecal__cell {
  height: 80px;
}

.vuecal--month-view .vuecal__cell-content {
  justify-content: flex-start;
  height: 100%;
  align-items: flex-end;
}

.vuecal--month-view .vuecal__cell-date {
  padding: 4px;
}
.vuecal--month-view .vuecal__no-event {
  display: none;
}
</style>
