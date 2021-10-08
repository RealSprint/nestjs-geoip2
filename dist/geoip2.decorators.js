"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectGeoIP2 = void 0;
const common_1 = require("@nestjs/common");
const geoip2_utils_1 = require("./geoip2.utils");
exports.InjectGeoIP2 = (connection) => {
    return common_1.Inject(geoip2_utils_1.getGeoIP2ConnectionToken(connection));
};
