"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./test/index");
var testRoutes = [
    { path: 'login', component: index_1.TestComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(testRoutes);
//# sourceMappingURL=login.routing.js.map