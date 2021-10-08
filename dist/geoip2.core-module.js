"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GeoIP2CoreModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoIP2CoreModule = void 0;
const common_1 = require("@nestjs/common");
const geoip2_utils_1 = require("./geoip2.utils");
let GeoIP2CoreModule = GeoIP2CoreModule_1 = class GeoIP2CoreModule {
    static forRoot(options, connection) {
        const geoIP2OptionsProvider = {
            provide: geoip2_utils_1.getGeoIP2OptionsToken(connection),
            useValue: options,
        };
        const geoIP2ConnectionProvider = {
            provide: geoip2_utils_1.getGeoIP2ConnectionToken(connection),
            useValue: geoip2_utils_1.createGeoIP2Connection(options),
        };
        return {
            module: GeoIP2CoreModule_1,
            providers: [
                geoIP2OptionsProvider,
                geoIP2ConnectionProvider,
            ],
            exports: [
                geoIP2OptionsProvider,
                geoIP2ConnectionProvider,
            ],
        };
    }
    static forRootAsync(options, connection) {
        const geoIP2ConnectionProvider = {
            provide: geoip2_utils_1.getGeoIP2ConnectionToken(connection),
            useFactory(options) {
                return geoip2_utils_1.createGeoIP2Connection(options);
            },
            inject: [geoip2_utils_1.getGeoIP2OptionsToken(connection)],
        };
        return {
            module: GeoIP2CoreModule_1,
            imports: options.imports,
            providers: [...this.createAsyncProviders(options, connection), geoIP2ConnectionProvider],
            exports: [geoIP2ConnectionProvider],
        };
    }
    static createAsyncProviders(options, connection) {
        if (!(options.useExisting || options.useFactory || options.useClass)) {
            throw new Error('Invalid configuration. Must provide useFactory, useClass or useExisting');
        }
        if (options.useExisting || options.useFactory) {
            return [
                this.createAsyncOptionsProvider(options, connection)
            ];
        }
        return [
            this.createAsyncOptionsProvider(options, connection),
            { provide: options.useClass, useClass: options.useClass },
        ];
    }
    static createAsyncOptionsProvider(options, connection) {
        if (!(options.useExisting || options.useFactory || options.useClass)) {
            throw new Error('Invalid configuration. Must provide useFactory, useClass or useExisting');
        }
        if (options.useFactory) {
            return {
                provide: geoip2_utils_1.getGeoIP2OptionsToken(connection),
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: geoip2_utils_1.getGeoIP2OptionsToken(connection),
            async useFactory(optionsFactory) {
                return await optionsFactory.createGeoIP2ModuleOptions();
            },
            inject: [options.useClass || options.useExisting],
        };
    }
};
GeoIP2CoreModule = GeoIP2CoreModule_1 = __decorate([
    common_1.Global(),
    common_1.Module({})
], GeoIP2CoreModule);
exports.GeoIP2CoreModule = GeoIP2CoreModule;
