const app = new Vue({
    el: "#app",
    data: {
        msg: "Hello World"
    }
});

const app2 = new Vue({
    el: "#app-2",
    data: {
        msg: "Once only"
    }
});

const app3 = new Vue({
    el: "#app-3",
    data: {
        rawHtml: '<span style="color: red">This should be red.</span>'
    }
});

const app4 = new Vue({
    el: "#app-4",
    data: {
        dynamicId: "dynamic",
        isButtonDisabled: false
    }
});

const app5 = new Vue({
    el: "#app-5",
    data: {
        number: 1,
        ok: true,
        message: 'Hello',
        id: 'foobar'
    }
});

const app6 = new Vue({
    el: "#app-6",
    data: {
        seen: false,
        url: "https://www.google.com"
    },
    methods: {
        doSomething: function() {
            console.log("click !!")
        },
        onSubmit: function () {
            console.log("submit click")
        }
    }
});
