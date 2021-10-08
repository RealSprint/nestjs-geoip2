import { GeoIP2ModuleOptions } from "./geoip2.interfaces";
import { GeoIP2 } from './geoip2.interfaces';
export declare function getGeoIP2OptionsToken(connection: string): string;
export declare function getGeoIP2ConnectionToken(connection: string): string;
export declare function createGeoIP2Connection(options: GeoIP2ModuleOptions): Promise<GeoIP2>;
