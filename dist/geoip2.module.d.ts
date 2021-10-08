import { DynamicModule } from '@nestjs/common';
import { GeoIP2ModuleAsyncOptions, GeoIP2ModuleOptions } from './geoip2.interfaces';
export declare class GeoIP2Module {
    static forRoot(options: GeoIP2ModuleOptions, connection?: string): DynamicModule;
    static forRootAsync(options: GeoIP2ModuleAsyncOptions, connection?: string): DynamicModule;
}
