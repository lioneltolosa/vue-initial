<template>
    <div>
        <h1>Course VUE Initial </h1>
        <h3 v-once>{{title}}</h3>
        <span>{{ sayHello() }} - <a v-bind:href="link">Google</a></span>
        <br>
        <p v-html="finishLink"></p>
        <br>
        <button v-on:click="increase(4)">Click me</button>
        <button v-on:click="counter++">Click me</button>
        <p>{{ counter * 2 > 10 ? 'Greater than 10' : 'Smaller than 10'}}</p>
        <p>{{counter}}</p>
        <br>
        <p @mousemove="updateCordinates">
        Cordinates: {{x}} / {{y}}
        <span @mousemove.stop="">DEAD STOP</span>
        </p>
        <input type="text" @keyup.enter.space="alertMe">
        <br>
        <input type="text" v-model="name">
        Name {{ name }}
        <br>
        <h3>Computed Example</h3>
        <p>Mensaje original: "{{ message }}"</p>
        <p>Mensaje invertido computado: "{{ reversedMessage }}"</p>
        <br>
        <div>
            <div class="demo" 
                 @click="atachedRed = !atachedRed"
                 :class="{divClases}">
            </div>
            <div class="demo" :class="{red: atachedRed}"></div>
            <div class="demo" :class="color"></div>
            <input type="text" v-model="color">
            <small>Cambia el color al escribir, red or blue or green</small>
        </div>

        <div>
            <div class="demo1" :style="{backgroundColor: color}"></div>
            <div class="demo1" :style="myStyle"></div>
            <div class="demo1" :style="[myStyle, {height: width + 'px'}]"></div>
            <input type="text" v-model="color">
            <input type="text" v-model="width">
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            title: 'Holis mami',
            link: 'http://google.com',
            finishLink: '<a href="http://google.com">Google v-html</a>',
            counter: 0,
            x: 0,
            y: 0,
            name: 'Lionel',
            message: 'Hola',
            atachedRed: false,
            color: 'grey',
            width: 100
        }
    },
    methods: {
        sayHello: function() {
        this.title = '!!Hello'
        return this.title
        },
        increase: function(step) {
        this.counter += step;
        },
        updateCordinates: function (event) {
        this.x = event.clientX;
        this.y = event.clientY;
        },
        alertMe: function() {
        alert('Alert')
        }
        },
        computed: {
            reversedMessage: function() {
                return this.message.split('').reverse().join('')
            },
            divClases: function() {
                return {
                    red: this.atachedRed,
                    blue: !this.atachedRed
                }
            },
            myStyle: function() {
                return {
                    backgroundColor: this.color,
                    width: this.width + 'px'
                }
            }
        },
        watch: {
            counter: function() {
                var vm = this;
                setTimeout( function() {
                    vm.counter = 555;
                }, 2000)
            }
        }
    }
</script>
<style scoped>
    .demo {
        width: 100px;
        height: 100px;
        background-color: gray;
        display: inline-block;
        margin: 10px;
    }

    .demo1 {
        width: 100px;
        height: 100px;
        background-color: gray;
        display: inline-block;
        margin: 10px;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }

    .blue {
        background-color: blue;
    }
</style>
