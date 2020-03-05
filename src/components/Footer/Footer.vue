<template>
    <!-- Main Footer -->
    <footer class="main-footer">
        <!-- To the right -->
        <div class="pull-right hidden-xs">
            Version 2.4.0
        </div>
        <!-- Default to the left -->
        <strong>Copyright &copy; {{year}} <a href="#">Almsaeed Studio</a>.</strong> All rights reserved.
    </footer>
</template>

<script>
    export default {
        name: 'bottom',
        data() {
            return {
                year: new Date().getFullYear()
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
