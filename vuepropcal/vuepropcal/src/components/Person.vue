<template>
    <div>
        <h1>Person</h1>
        <p>First Name: {{person.firstName}}</p>
        <p>Last Name: {{person.lastName}}</p>
        <p>Age: {{person.age}}</p>
        <button @click="printDataPerson">IMPRIMIR NOME E IDADE DA PESSOA</button>
        {{printDataPerson()}}
        {{printDataPerson()}}
        <!-- Invoca o computed printDataPersonComputed -->
        {{printDataPersonComputed}}
        {{printDataPersonComputed}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                person: {firstName: 'Rui', lastName: 'Silva', age:23}
            }
        },
        created () {
            console.log('Evento: Criação');
        },
        mounted () {
            console.log('Evento: Montagem');
        },
        updated () {
            console.log('Evento: Atualização');
        },
        methods: {
            printDataPerson() {
                console.log(`Method --> Nome: ${this.person.firstName}' e Idade: ${this.person.age}`);
            },
        },
        computed: {
            printDataPersonComputed() {
                console.log(`Computed --> Nome: ${this.person.firstName}' e Idade: ${this.person.age}`);
            },

            getFullNameComputed() {
                return `${this.person.firstName} ${this.person.lastName}`;
            }
        },
        watch: {
            'person.age'(newValue, oldValue) {
                console.log(`Idade Alterada de: ${oldValue} para: ${newValue}`);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>