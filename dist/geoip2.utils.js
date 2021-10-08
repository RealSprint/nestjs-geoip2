"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeoIP2Connection = exports.getGeoIP2ConnectionToken = exports.getGeoIP2OptionsToken = void 0;
const geoip2_node_1 = require("@maxmind/geoip2-node");
const geoip2_constants_1 = require("./geoip2.constants");
function getGeoIP2OptionsToken(connection) {
    return `${connection || geoip2_constants_1.GEOIP2_MODULE_CONNECTION}_${geoip2_constants_1.GEOIP2_MODULE_OPTIONS_TOKEN}`;
}
exports.getGeoIP2OptionsToken = getGeoIP2OptionsToken;
function getGeoIP2ConnectionToken(connection) {
    return `${connection || geoip2_constants_1.GEOIP2_MODULE_CONNECTION}_${geoip2_constants_1.GEOIP2_MODULE_CONNECTION_TOKEN}`;
}
exports.getGeoIP2ConnectionToken = getGeoIP2ConnectionToken;
function createGeoIP2Connection(options) {
    return geoip2_node_1.Reader.open(options.config.file, options.config.opts);
}
exports.createGeoIP2Connection = createGeoIP2Connection;
