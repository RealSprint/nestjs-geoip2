import { DynamicModule, Provider } from '@nestjs/common';
import { GeoIP2ModuleAsyncOptions, GeoIP2ModuleOptions } from './geoip2.interfaces';
export declare class GeoIP2CoreModule {
    static forRoot(options: GeoIP2ModuleOptions, connection?: string): DynamicModule;
    static forRootAsync(options: GeoIP2ModuleAsyncOptions, connection: string): DynamicModule;
    static createAsyncProviders(options: GeoIP2ModuleAsyncOptions, connection?: string): Provider[];
    static createAsyncOptionsProvider(options: GeoIP2ModuleAsyncOptions, connection?: string): Provider;
}
