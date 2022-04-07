<template>
  <div class="hello">
    <section>
      <h2>Adornos de pasteles</h2>
      <table>
        <thead>
          <td><b>Adorno</b></td>
          <td><b>Precio</b></td>
        </thead>

        <tbody>
          <tr>
            <td>Fondant</td>
            <td>$350.00</td>
          </tr>

          <tr>
            <td>Betún</td>
            <td>$150.00</td>
          </tr>

          <tr>
            <td>Chantilly</td>
            <td>$150.00</td>
          </tr>

          <tr>
            <td>Merengue</td>
            <td>$150.00</td>
          </tr>

          <tr>
            <td>Grajeas</td>
            <td>$150.00</td>
          </tr>

          <tr>
            <td>Placa decorativa</td>
            <td>$75.00</td>
          </tr>

          <tr>
            <td>Velas</td>
            <td>$15.00 / pza</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "Adorno",
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
