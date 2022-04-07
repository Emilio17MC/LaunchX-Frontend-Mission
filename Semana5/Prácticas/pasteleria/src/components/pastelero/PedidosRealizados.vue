<template>
  <div>
    <h2>Pedidos</h2>

    <table>
      <tr>
        <td colspan="3">Datos de Contacto</td>
        <td colspan="6">Sabor del pastel</td>
        <td colspan="7">Adornos del pastel</td>
        <td colspan="1">Adicional</td>
      </tr>

      <tr>
        <td>Nombre</td>
        <td>Número de celular</td>
        <td>Correo electrónico</td>

        <td>Chocolate</td>
        <td>Choco-vainilla</td>
        <td>Cajeta</td>
        <td>Durazno</td>
        <td>Fresa</td>
        <td>Queso con Zarzamora</td>

        <td>Fondant</td>
        <td>Betún</td>
        <td>Chantilly</td>
        <td>Merengue</td>
        <td>Grajeas</td>
        <td>Placa decorativa</td>
        <td>Velas</td>

        <td>
          <p>Descripción general del pastel</p>
        </td>
      </tr>

      <tr>
        <td>Nick van de Wall</td>
        <td>1122334455</td>
        <td>nickwall@mail.com</td>
        <td>✔</td>
        <td></td>
        <td>✔</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>✔</td>
        <td></td>
        <td>✔</td>
        <td></td>
        <td>✔</td>
        <td>Pastel redondo para 35 personas</td>
      </tr>
      <tr>
        <td>Daan Romers</td>
        <td>2222334455</td>
        <td>daan@mail.com</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>✔</td>
        <td></td>
        <td>✔</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>✔</td>
        <td>Pastel rectangular para 100 personas</td>
      </tr>

      <tr>
        <td>Nick Rotteveel</td>
        <td>7788994455</td>
        <td>nickrottveel@mail.com</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>✔</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>✔</td>
        <td></td>
        <td></td>
        <td>✔</td>
        <td>Pastel redondo para 60 personas</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "PedidosRealizados",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
