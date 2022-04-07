<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo_pasteleria.png">
    
    <CantidadesAdornos />
    <CantidadesPasteles />
    <PedidosRealizados />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CantidadesAdornos from '@/components/pastelero/CantidadesAdornos.vue'
import CantidadesPasteles from '@/components/pastelero/CantidadesPasteles.vue'
import PedidosRealizados from '@/components/pastelero/PedidosRealizados.vue'

export default {
  name: 'PasteleroView',
  components: {
    HelloWorld, CantidadesAdornos, CantidadesPasteles, PedidosRealizados
  }
}
</script>
