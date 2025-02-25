"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRepository = void 0;
var ApiRepository = /** @class */ (function () {
    function ApiRepository() {
        var _this = this;
        this.isBrokenValue = function () { return Math.random() > (1 / 2); };
        this.getWeatherData = function (lat, long) { return __awaiter(_this, void 0, void 0, function () {
            var url, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://api.open-meteo.com/v1/forecast?latitude=".concat(lat, "&longitude=").concat(long, "&current=temperature_2m");
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        }); };
        this.getWeatherFromServiceA = function (lat, long) { return __awaiter(_this, void 0, void 0, function () {
            var data, _a, temp;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.getWeatherData(lat, long)];
                    case 2:
                        data = _b.sent();
                        return [2 /*return*/, { temp: this.isBrokenValue() ? data.current.temperature_2m : data.current.temperature_2m.toString() }];
                    case 3:
                        _a = _b.sent();
                        temp = this.isBrokenValue() ? Math.round(Math.random() * 30) : Math.round(Math.random() * 30).toString();
                        return [2 /*return*/, { temp: temp }];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.getWeatherFromServiceB = function (lat, long) { return __awaiter(_this, void 0, void 0, function () {
            var data, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 300); })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.getWeatherData(lat, long)];
                    case 2:
                        data = _b.sent();
                        return [2 /*return*/, {
                                temp: data.current.temperature_2m,
                                elevation: data.elevation,
                                latitude: data.latitude,
                                longitude: data.longitude,
                            }];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, {
                                temp: Math.round(Math.random() * 30),
                                elevation: Math.round(Math.random() * 100),
                                latitude: lat,
                                longitude: long,
                            }];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    }
    return ApiRepository;
}());
exports.ApiRepository = ApiRepository;
