import Vue from 'vue';
import app from '../../src/App.vue';

describe('test app.vue', () => {
    it('组件加载后，title 应该是 Hello world', function () {
        let vm = new Vue(app).$mount();
        expect(vm.title).toEqual('Hello world');
    });
    console.log(111);

});
