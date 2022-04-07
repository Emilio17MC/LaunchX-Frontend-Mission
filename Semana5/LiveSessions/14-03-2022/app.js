const app = Vue.createApp({
    data() {
        return {
            nombre: "Rodrigo",
            apellido: "Martínez",
            email: "rmartinez@innovaccion.mx",
            genero: "male",
            foto: "http://randomuser.me/api/portraits/men/10.jpg",
        };
    },

    methods: {
        async cambiarUsuario() {
            const res = await fetch("https://randomuser.me/api");
            const { results } = await res.json();

            // console.log(results)

            this.nombre = results[0].name.first;
            this.apellido = results[0].name.last;
            this.email = results[0].email;
            this.genero = results[0].gender;
            this.foto = results[0].picture.large;
        },
    },
});

app.mount("#app");
