<template>
    <div>
        <button @click="showMessage">Click me</button>
        <button @click="showMessageWithParameters(msg)">Click me</button>
        <button @click="showMessageWithEvent">Click me</button>

        <div v-on:click="showMessage">
            <button v-on:click.stop="showMessage">CLICA-ME (stop)</button>
        </div>
        <div>
            <button v-on:click.once="showMessage">CLICA-ME (once)</button>
            <br />
            <button v-on:keyup.tab="showMessage">CLICA-ME (tab)</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Programação Web I'
            }
        },
        methods: {
            showMessage() {
                alert(this.msg);
            },
            showMessageWithParameters(message) {
                alert(message);
            },
            showMessageWithEvent(event) {
                alert(event.target.tagName);
                alert(event.type);
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>