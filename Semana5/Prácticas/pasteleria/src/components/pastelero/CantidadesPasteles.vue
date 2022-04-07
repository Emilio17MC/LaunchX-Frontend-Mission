<template>
  <div>
    <section>
      <h2>Adornos en Stock</h2>

      <table>
        <thead>
          <td><b>Adorno</b></td>
          <td><b>Cantidad</b></td>
          <td><b>Unidades</b></td>
        </thead>

        <tbody>
          <tr>
            <td>Fondant</td>
            <td>15</td>
            <td>kg</td>
          </tr>

          <tr>
            <td>Betún</td>
            <td>7</td>
            <td>kg</td>
          </tr>

          <tr>
            <td>Chantilly</td>
            <td>10</td>
            <td>kg</td>
          </tr>

          <tr>
            <td>Merengue</td>
            <td>12</td>
            <td>kg</td>
          </tr>

          <tr>
            <td>Grajeas</td>
            <td>3</td>
            <td>kg</td>
          </tr>

          <tr>
            <td>Placa decorativa</td>
            <td>35</td>
            <td>unidades</td>
          </tr>

          <tr>
            <td>Velas</td>
            <td>250</td>
            <td>piezas</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "CantidadesPasteles",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  padding-left: 5rem;
}

section {
  text-align: left;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.formulario {
  text-align: left;
}
</style>
