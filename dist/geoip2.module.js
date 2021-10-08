"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GeoIP2Module_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoIP2Module = void 0;
const common_1 = require("@nestjs/common");
const geoip2_core_module_1 = require("./geoip2.core-module");
let GeoIP2Module = GeoIP2Module_1 = class GeoIP2Module {
    static forRoot(options, connection) {
        return {
            module: GeoIP2Module_1,
            imports: [geoip2_core_module_1.GeoIP2CoreModule.forRoot(options, connection)],
            exports: [geoip2_core_module_1.GeoIP2CoreModule],
        };
    }
    static forRootAsync(options, connection) {
        return {
            module: GeoIP2Module_1,
            imports: [geoip2_core_module_1.GeoIP2CoreModule.forRootAsync(options, connection)],
            exports: [geoip2_core_module_1.GeoIP2CoreModule],
        };
    }
};
GeoIP2Module = GeoIP2Module_1 = __decorate([
    common_1.Module({})
], GeoIP2Module);
exports.GeoIP2Module = GeoIP2Module;
