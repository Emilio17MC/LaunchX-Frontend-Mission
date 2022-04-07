<template>
  <div class="formulario">
    <h2>¡Ordena aquí!</h2>
    <form action="./ordenes.html">
      <h3>Datos del Cliente</h3>

      <!-- El formulario debe de contener los datos de contacto del cliente que son Nombre, Teléfono, Correo Electrónico, Descripción general del pastel y la selección de sabores y adornos. -->
      <label for="nombreCliente">Nombre: </label>
      <input
        type="text"
        id="nombreCliente"
        name="nombreCliente"
        placeholder="Tu nombre completo"
        required
      />

      <br />

      <label for="telefonoCliente">Número de celular: </label>
      <input
        type="tel"
        id="telefonoCliente"
        name="telefonoCliente"
        placeholder="Tu número de teléfono"
        required
      />

      <br />

      <label for="correoCliente">Correo electrónico: </label>
      <input
        type="email"
        id="correoCliente"
        name="correoCliente"
        placeholder="Tu correo electrónico"
        required
      />

      <br /><br />
      <h3>Datos del pastel</h3>

      <!-- El cliente de la pastelería tendrá la posibilidad de combinar sabores dependiendo de sus preferencias. -->
      <p>Selecciona el/los sabor(es) de tu pastel:</p>
      <input
        type="checkbox"
        name="sabor"
        value="saborChocolate"
        id="saborChocolate"
      />
      <label for="saborChocolate">Chocolate</label>

      <input
        type="checkbox"
        name="sabor"
        value="saborChocoVainilla"
        id="saborChocoVainilla"
      />
      <label for="saborChocoVainilla">Choco-vainilla</label>

      <input
        type="checkbox"
        name="sabor"
        value="saborCajeta"
        id="saborCajeta"
      />
      <label for="saborCajeta">Cajeta</label>

      <input
        type="checkbox"
        name="sabor"
        value="saborDurazno"
        id="saborDurazno"
      />
      <label for="saborDurazno">Durazno</label>

      <input type="checkbox" name="sabor" value="saborFresa" id="saborFresa" />
      <label for="saborFresa">Fresa</label>

      <input
        type="checkbox"
        name="sabor"
        value="saborQuesoConZarzamora"
        id="saborQuesoConZarzamora"
      />
      <label for="saborQuesoConZarzamora">Queso con Zarzamora</label>

      <!-- El cliente de la pastelería tendrá la posibilidad de combinar adornos dependiendo de sus preferencias. -->
      <p>Selecciona el/los adorno(s) para tu pastel:</p>
      <input
        type="checkbox"
        name="adorno"
        value="adornoFondant"
        id="adornoFondant"
      />
      <label for="adornoFondant">Fondant</label>

      <input
        type="checkbox"
        name="adorno"
        value="adornoBetun"
        id="adornoBetun"
      />
      <label for="adornoBetun">Betún</label>

      <input
        type="checkbox"
        name="adorno"
        value="adornoChantilly"
        id="adornoChantilly"
      />
      <label for="adornoChantilly">Chantilly</label>

      <input
        type="checkbox"
        name="adorno"
        value="adornoMerengue"
        id="adornoMerengue"
      />
      <label for="adornoMerengue">Merengue</label>

      <input
        type="checkbox"
        name="adorno"
        value="adornoGrajeas"
        id="adornoGrajeas"
      />
      <label for="adornoGrajeas">Grajeas</label>

      <input
        type="checkbox"
        name="adorno"
        value="adornoPlacaDecorativa"
        id="adornoPlacaDecorativa"
      />
      <label for="adornoPlacaDecorativa">Placa decorativa</label>

      <input
        type="checkbox"
        name="adorno"
        value="adornoVelas"
        id="adornoVelas"
      />
      <label for="adornoVelas">Velas</label>

      <br /><br />

      <label for="descripcionPastel">Descripción general del pastel: </label
      ><br />
      <textarea
        rows="5"
        cols="35"
        id="descripcionPastel"
        name="descripcionPastel"
        placeholder="Escribe una descripción general de cómo quieres tu pastel, incluyendo la cantidad de personas para las que lo deseas y detalles adicionales en caso de ser necesarios."
      ></textarea>

      <br /><br />

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Formulario",
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
