<template>
    <div class="wxdx-tech-card">
        <span :class="icon" class="icon"></span>
        <span class="title">{{ title }}</span>
        <p class="desc">{{ title }}</p>
    </div>
</template>

<script>
    export default {
        name: 'wxdx-tech-card',
        props: {
            icon: [String],
            title: [String],
            desc: [String]
        },
    };
</script>

<style scoped lang="stylus">
.wxdx-tech-card
    display flex
    flex-direction column
    border-radius 4px
    height: 200px;
    color: #fff
    background-color rgba(255, 255, 255, .2)
    cursor pointer
    &:hover
        color #374895
        background-color #fff
    .icon
        margin: 2rem 0 0;
        flex: 0 0 auto
        font-size 2.5rem
        font-weight bold
    .title
        flex: 0 0 auto
        font-size: 1rem
        margin: 30px 0 10px 0
        font-weight bold
    .desc
        flex: 1 1 auto
        font-size: .75rem
</style>