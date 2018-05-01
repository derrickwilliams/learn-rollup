(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

    var template = "<div>hey there</div>";
    var controller = [function componentController() {}];

    var component = {
        template: template,
        controller: controller
    };

    console.log('comp.template', component.template);
    console.log('comp.controller', component.controller);

})));
