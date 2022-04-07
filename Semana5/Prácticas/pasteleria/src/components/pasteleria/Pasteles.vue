<template>
  <div class="hello">
    <section>
      <h2>Sabores de Pasteles</h2>
      <table>
        <thead>
          <td><b>Sabor</b></td>
          <td><b>Precio</b></td>
        </thead>
        <tbody>
          <tr>
            <td>Chocolate</td>
            <td>$249.00</td>
          </tr>

          <tr>
            <td>Choco-vainilla</td>
            <td>$299.00</td>
          </tr>

          <tr>
            <td>Cajeta</td>
            <td>$274.50</td>
          </tr>

          <tr>
            <td>Durazno</td>
            <td>$349.00</td>
          </tr>

          <tr>
            <td>Fresa</td>
            <td>$299.00</td>
          </tr>

          <tr>
            <td>Queso con Zarzamora</td>
            <td>$349.00</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "Pasteles",
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
</style>
