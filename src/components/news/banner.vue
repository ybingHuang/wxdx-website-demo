<template>
    <div class="banner" :style="getStyle()">
        <div class="title-wrapper">
            <span :class="`icon ${icon}`"></span>
            <div class="title-text">
                <span class="title">{{ title }}</span>
                <span class="sub-title">{{ subtitle }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'banner',
        props: {
            icon: [String],
            title: [String],
            subtitle: [String],
            height: [String],
            background: [String]
        },

        methods: {
            getStyle() {
                let style = '';
                if (this.height) {
                    style += `height: ${this.height}`;
                }

                if (this.background) {
                    style += `background:url(${this.background}) 100%`;
                }
                return style;
            }
        }
    };
</script>

<style scoped lang="stylus">
.banner
    padding: 0 16%
    height: 200px
    background linear-gradient(to right, #29C7D2, #332DAC)
    color: #fff
    text-align left
    .title-wrapper
        padding-top: 3rem
    .title-text
        display: inline-flex;
        flex-direction: column;
        position: relative;
        top: -18px;
    .title
        margin-top: 0
        font-size 1.5rem
    .icon
        font-size: 3rem
    .sub-title
        line-height: .75rem;

</style>