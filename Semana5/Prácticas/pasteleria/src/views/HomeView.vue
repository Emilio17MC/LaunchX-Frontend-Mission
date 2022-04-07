<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_pasteleria.png">
    <p>Pasteles de otra galaxia a tu mesa.</p>

    <Pasteles />
    <Adornos />
    <InfoPasteleria />
    <Formulario />

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import InfoPasteleria from '@/components/pasteleria/InfoPasteleria.vue'
import Pasteles from '@/components/pasteleria/Pasteles.vue'
import Adornos from '@/components/pasteleria/Adornos.vue'
import Formulario from '@/components/pasteleria/Formulario.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, InfoPasteleria, Pasteles, Adornos, Formulario
  }
}
</script>
