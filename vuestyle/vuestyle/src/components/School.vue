<template>
    <div>
        <p :style="styles">{{ msg }}</p>

        <button @click="styles.color = 'red'">RED</button>
        <button @click="styles.fontSize = '30px'">BIG</button>
        <button @click="styles.backgroundColor = 'yellow'">YELLOW</button>
        <button @click="changeVisibility">SHOW/HIDE</button>
        <button @click="addSchool('ESMAE')">NOVA ESCOLA</button>
        <button @click="isFilter = true">FILTRAR ESCOLAS</button>

        <h2>{{ filteredSchools.length }} escolas do IPP</h2>
        <ul v-if="schools.length">
            <li v-for="school in filteredSchools" :key="school">
                {{ school }}
            </li>
        </ul>
        <p v-else>SEM ESCOLAS</p>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg:'A ESMAD é uma escola do IPP',
                styles: {
                    color: '',
                    fontSize: '',
                    backgroundColor: '',
                    visibility: 'visible'
                },
                schools:['ESMAD', 'ISEP', 'ESE', 'ISCAP', 'ESTG', 'ESS', 'ESHT'],
                isFilter: false
            }
        },
        methods: {
            changeVisibility() {
                if (this.styles.visibility == 'visible') {
                    this.styles.visibility = 'hidden'
                } else {
                    this.styles.visibility = 'visible'
                }
            },

            addSchool(school) {
                if (this.schools.some(s => s == school)) {
                    alert('Escola já existe')
                } else {
                    this.schools.push(school)
                }

            }
        },
        computed: {
            filteredSchools() {
                if(this.isFilter) {
                    return this.schools.filter(school => school.starsWith('E'))
                } else {
                    return this.schools
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>