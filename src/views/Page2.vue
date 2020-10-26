<template>
    <div>
        <h1>页面2</h1>
    </div>
</template>

<script>
export default {
        name: "Page2",
        created() {
            console.log(this.$route)
            console.log(this.$router)
        }
    }
</script>

<style scoped>

</style>