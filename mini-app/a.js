System.register(["./b"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var b_1;
    return {
        setters: [
            function (b_1_1) {
                b_1 = b_1_1;
            }
        ],
        execute: function () {
            console.log(b_1.default);
            alert('hello');
        }
    };
});
//# sourceMappingURL=a.js.map