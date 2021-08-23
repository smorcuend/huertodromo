<template>
  <div>
    <h2 class="is-size-3 mb-4">Actas</h2>
    <b-table :data="data" :columns="columns"></b-table>

    <h2 class="is-size-3 mb-4 mt-4">Organización</h2>
    <div class="content">
      <ul>
        <li>En contrucción...</li>
        <li>En contrucción...</li>
        <li>En contrucción...</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'asamblea',
  data() {
    return {
      data: [
        {
          id: 2,
          date: '2021-08-18 18:00',
          title: 'Asamblea general verano',
          description:
            'Asamblea general verano 2021. Presentación nuevos hortelanos. Invitados: Huertos de ocio de Olias del Rey',
          people: 8
        },
        {
          id: 1,
          date: '2021-08-18 18:00',
          title: 'Asamblea general preverano',
          description: 'Asamblea general pre verano 2021. Presentación nuevos miembros',
          people: 8
        }
      ],
      columns: [
        {
          field: 'date',
          label: 'Fecha',
          centered: true
        },
        {
          field: 'title',
          label: 'Título'
        },
        {
          field: 'description',
          label: 'Descripción'
        },
        {
          field: 'people',
          label: 'Asistentes'
        }
      ]
    };
  }
};
</script>
