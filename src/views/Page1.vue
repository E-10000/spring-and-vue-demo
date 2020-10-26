<template>
    <div>
        <h1>页面1</h1>
    </div>
</template>

<script>
    export default {
        name: "Page1",
        created() {
            console.log(this.$route);
            console.log(this.$router)
    }
    }
</script>

<style scoped>

</style>