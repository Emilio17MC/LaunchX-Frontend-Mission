<template>
  <div class="formulario">
    <section>
      <h2>Sabores en Stock</h2>
      <table>
        <thead>
          <td><b>Sabor</b></td>
          <td><b>Cantidad</b></td>
        </thead>
        <tbody>
          <tr>
            <td>Chocolate</td>
            <td>17</td>
          </tr>

          <tr>
            <td>Choco-vainilla</td>
            <td>18</td>
          </tr>

          <tr>
            <td>Cajeta</td>
            <td>20</td>
          </tr>

          <tr>
            <td>Durazno</td>
            <td>14</td>
          </tr>

          <tr>
            <td>Fresa</td>
            <td>13</td>
          </tr>

          <tr>
            <td>Queso con Zarzamora</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "CantidadesAdornos",
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
