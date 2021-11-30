(() => {
    var __webpack_modules__ = {
        269: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        var value;
                        result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                            resolve(value);
                        }))).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            }, __generator = this && this.__generator || function(thisArg, body) {
                var f, y, t, g, _ = {
                    label: 0,
                    sent: function() {
                        if (1 & t[0]) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return function(op) {
                            if (f) throw new TypeError("Generator is already executing.");
                            for (;_; ) try {
                                if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                                0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                                switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                                  case 0:
                                  case 1:
                                    t = op;
                                    break;

                                  case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: !1
                                    };

                                  case 5:
                                    _.label++, y = op[1], op = [ 0 ];
                                    continue;

                                  case 7:
                                    op = _.ops.pop(), _.trys.pop();
                                    continue;

                                  default:
                                    if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1], t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2], _.ops.push(op);
                                        break;
                                    }
                                    t[2] && _.ops.pop(), _.trys.pop();
                                    continue;
                                }
                                op = body.call(thisArg, _);
                            } catch (e) {
                                op = [ 6, e ], y = 0;
                            } finally {
                                f = t = 0;
                            }
                            if (5 & op[0]) throw op[1];
                            return {
                                value: op[0] ? op[1] : void 0,
                                done: !0
                            };
                        }([ n, v ]);
                    };
                }
            }, __rest = this && this.__rest || function(s, e) {
                var t = {};
                for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0 && (t[p] = s[p]);
                if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (t[p[i]] = s[p[i]]);
                }
                return t;
            }, __spreadArrays = this && this.__spreadArrays || function() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
                var r = Array(s), k = 0;
                for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
                k++) r[k] = a[j];
                return r;
            }, __importDefault = this && this.__importDefault || function(mod) {
                return mod && mod.__esModule ? mod : {
                    default: mod
                };
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Client = void 0;
            var isomorphic_unfetch_1 = __importDefault(__webpack_require__(204)), form_data_1 = __importDefault(__webpack_require__(736)), debug_1 = __importDefault(__webpack_require__(443)), generated_1 = __webpack_require__(87), utils_1 = __webpack_require__(532), UserdbApi_1 = __webpack_require__(69), runtime_1 = __webpack_require__(618);
            __webpack_require__.g.FormData = __webpack_require__.g.FormData || form_data_1.default;
            var log = debug_1.default("adzerk-decision-sdk:client"), isNode = "undefined" != typeof process && "browser" !== process.title, isReactNative = "undefined" != typeof navigator && "ReactNative" === navigator.product, deprecatedPlacementFields = [ [ "ecpmPartition", "ecpmPartitions" ] ];
            var defaultLogger = function(lvl, msg, meta) {
                null != meta ? log("[" + lvl + "] " + msg + " [%o]", meta) : log("[" + lvl + "] " + msg);
            }, DecisionClient = function() {
                function DecisionClient(configuration, networkId, logger, siteId) {
                    this._api = new generated_1.DecisionApi(configuration), this._networkId = networkId, 
                    this._siteId = siteId, this._logger = logger;
                }
                return DecisionClient.prototype.get = function(request, additionalOpts) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var logger, processedRequest, api, response, decisions, _this = this;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if ((logger = this._logger || defaultLogger)("info", "Fetching decisions from Adzerk API"), 
                                logger("info", "Processing request: ", request), void 0 === (processedRequest = utils_1.removeUndefinedAndBlocklisted(request, [ "isMobile" ])).enableBotFiltering && (processedRequest.enableBotFiltering = !isNode), 
                                void 0 === processedRequest.placements || !processedRequest.placements.length) throw new runtime_1.RequiredError("decisionRequest", "Each request requires at least one placement");
                                return processedRequest.placements.forEach((function(p, idx) {
                                    if (void 0 === p.adTypes || !p.adTypes.length) throw new runtime_1.RequiredError("placements", "Each placement requires at least one ad type");
                                    for (var _i = 0, deprecatedPlacementFields_1 = deprecatedPlacementFields; _i < deprecatedPlacementFields_1.length; _i++) {
                                        var pair = deprecatedPlacementFields_1[_i], deprecatedField = pair[0], replacement = pair[1];
                                        null != (p[deprecatedField] || void 0) && logger("warn", "DEPRECATION WARNING: " + deprecatedField + " has been deprecated. Please use " + replacement + " instead.");
                                    }
                                    p.networkId = p.networkId || _this._networkId, p.siteId = p.siteId || _this._siteId, 
                                    p.divName = p.divName || "div" + idx;
                                })), api = this._api, ((null == additionalOpts ? void 0 : additionalOpts.includeExplanation) || (null == additionalOpts ? void 0 : additionalOpts.userAgent)) && (api = api.withPreMiddleware((function(context) {
                                    return __awaiter(_this, void 0, void 0, (function() {
                                        var headers;
                                        return __generator(this, (function(_a) {
                                            return context.init.headers || (context.init.headers = {}), headers = context.init.headers, 
                                            additionalOpts.includeExplanation && (logger("warn", "--------------------------------------------------------------\n--------------!!! WARNING - WARNING - WARNING !!!-------------\nYou have opted to include explainer details with this request!\nThis will cause performance degradation and should not be done\nin production environments.\n--------------------------------------------------------------"), 
                                            headers["x-adzerk-explain"] = additionalOpts.apiKey || ""), additionalOpts.userAgent && (headers["User-Agent"] = additionalOpts.userAgent || ""), 
                                            [ 2 ];
                                        }));
                                    }));
                                }))), logger("info", "Using the processed request: ", processedRequest), [ 4, api.getDecisions(processedRequest) ];

                              case 1:
                                return response = _a.sent(), logger("info", "Received response: ", response), decisions = response.decisions || {}, 
                                Object.keys(decisions).forEach((function(k) {
                                    decisions[k] instanceof Array || (decisions[k] = [ decisions[k] ]);
                                })), [ 2, response ];
                            }
                        }));
                    }));
                }, DecisionClient;
            }(), UserDbClient = function() {
                function UserDbClient(configuration, networkId) {
                    this._api = new UserdbApi_1.UserdbApi(configuration), this._networkId = networkId;
                }
                return UserDbClient.prototype.setCustomProperties = function(userKey, properties, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.addCustomProperties(networkId || this._networkId, userKey, properties) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.addInterest = function(userKey, interest, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.addInterests(networkId || this._networkId, userKey, interest) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.addRetargetingSegment = function(userKey, advertiserId, retargetingSegmentId, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.addRetargetingSegment(networkId || this._networkId, advertiserId, retargetingSegmentId, userKey) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.forget = function(userKey, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.forget(networkId || this._networkId, userKey) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.gdprConsent = function(gdprConsent, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.gdprConsent(networkId || this._networkId, gdprConsent) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.ipOverride = function(userKey, ip, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.ipOverride(networkId || this._networkId, userKey, ip) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.matchUser = function(userKey, partnerId, userId, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.matchUser(networkId || this._networkId, userKey, partnerId, userId) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.optOut = function(userKey, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this._api.optOut(networkId || this._networkId, userKey) ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserDbClient.prototype.read = function(userKey, networkId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var record, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                        return __generator(this, (function(_l) {
                            switch (_l.label) {
                              case 0:
                                return [ 4, this._api.read(networkId || this._networkId, userKey) ];

                              case 1:
                                return record = _l.sent(), _a = record.cookieMonster, void 0 === _a ? void 0 : _a, 
                                _b = record.dirtyCookies, void 0 === _b ? void 0 : _b, _c = record.isNew, void 0 === _c ? void 0 : _c, 
                                _d = record.adViewTimes, void 0 === _d ? void 0 : _d, _e = record.advertiserViewTimes, 
                                void 0 === _e ? void 0 : _e, _f = record.flightViewTimes, void 0 === _f ? void 0 : _f, 
                                _g = record.siteViewTimes, void 0 === _g ? void 0 : _g, _h = record.campaignViewTimes, 
                                void 0 === _h ? void 0 : _h, _j = record.pendingConversions, void 0 === _j ? void 0 : _j, 
                                _k = record.campaignConversions, void 0 === _k ? void 0 : _k, [ 2, __rest(record, [ "cookieMonster", "dirtyCookies", "isNew", "adViewTimes", "advertiserViewTimes", "flightViewTimes", "siteViewTimes", "campaignViewTimes", "pendingConversions", "campaignConversions" ]) ];
                            }
                        }));
                    }));
                }, UserDbClient;
            }(), PixelClient = function() {
                function PixelClient(fetch, agent, logger, versionString) {
                    this._fetch = fetch, this._agent = agent, this._logger = logger, this._versionString = versionString;
                }
                return PixelClient.prototype.buildFireUrl = function(params) {
                    var parsed = new URL(params.url);
                    return params.revenueOverride && parsed.searchParams.append("override", params.revenueOverride.toString()), 
                    params.additionalRevenue && parsed.searchParams.append("additional", params.additionalRevenue.toString()), 
                    params.eventMultiplier && parsed.searchParams.append("eventMultiplier", params.eventMultiplier.toString()), 
                    parsed.href;
                }, PixelClient.prototype.fire = function(params, additionalOpts) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var logger, opts, url, result, location;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return logger = this._logger || defaultLogger, opts = {
                                    method: "GET",
                                    headers: {
                                        "X-Adzerk-Sdk-Version": this._versionString,
                                        "User-Agent": (null == additionalOpts ? void 0 : additionalOpts.userAgent) || "OpenAPI-Generator/1.0/js"
                                    },
                                    redirect: "manual"
                                }, url = this.buildFireUrl(params), logger("info", "Firing Pixel at base url of: " + url), 
                                this._agent && (opts.agent = this._agent), [ 4, this._fetch(url, opts) ];

                              case 1:
                                return (result = _a.sent()).headers.has("location") && (location = result.headers.get("location")), 
                                logger("info", "Received response from pixel url: " + result.status + " with location: " + location), 
                                [ 2, {
                                    status: result.status,
                                    location: result.headers.has("location") ? result.headers.get("location") : void 0
                                } ];
                            }
                        }));
                    }));
                }, PixelClient;
            }(), Client = function() {
                function Client(opts) {
                    var _this = this, fetch = (opts.fetch || isomorphic_unfetch_1.default).bind(__webpack_require__.g), logger = opts.logger || defaultLogger, protocol = opts.protocol || "https", basePath = protocol + "://" + (opts.host || "e-" + opts.networkId + ".adzerk.net"), versionString = "adzerk-decision-sdk-js:1.0.0-beta.12";
                    if (opts.additionalVersionInfo && (versionString = opts.additionalVersionInfo + ";" + versionString), 
                    this._path = opts.path, isNode && !isReactNative) {
                        var Agent = __webpack_require__(738)(protocol).Agent;
                        this._agent = opts.agent || new Agent({
                            keepAlive: !0,
                            timeout: 1e4
                        });
                    }
                    var middleware = {
                        pre: function(context) {
                            return __awaiter(_this, void 0, void 0, (function() {
                                return __generator(this, (function(_a) {
                                    return logger("info", "Request Url: " + context.url), logger("info", "Request Headers: " + context.init.headers), 
                                    logger("info", "Request Body: " + context.init.body), null != this._agent && (context.init.agent = this._agent), 
                                    null != this._path && (context.url = "" + basePath + this._path), context.init.headers || (context.init.headers = {}), 
                                    context.init.headers["X-Adzerk-Sdk-Version"] = versionString, [ 2, context ];
                                }));
                            }));
                        },
                        post: function(context) {
                            return __awaiter(_this, void 0, void 0, (function() {
                                return __generator(this, (function(_a) {
                                    return logger("info", "Response Code: " + context.response.status), logger("info", "Response Status Text: " + context.response.statusText), 
                                    [ 2, context.response ];
                                }));
                            }));
                        }
                    }, configuration = new generated_1.Configuration({
                        basePath,
                        fetchApi: fetch,
                        apiKey: opts.apiKey,
                        middleware: __spreadArrays(opts.middlewares || [], [ middleware ])
                    });
                    this._decisionClient = new DecisionClient(configuration, opts.networkId, logger, opts.siteId), 
                    this._userDbClient = new UserDbClient(configuration, opts.networkId), this._pixelClient = new PixelClient(fetch, this._agent, logger, versionString);
                }
                return Object.defineProperty(Client.prototype, "decisions", {
                    get: function() {
                        return this._decisionClient;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Client.prototype, "userDb", {
                    get: function() {
                        return this._userDbClient;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Client.prototype, "pixels", {
                    get: function() {
                        return this._pixelClient;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Client;
            }();
            exports.Client = Client;
        },
        791: (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.RateType = exports.EventType = void 0, function(EventType) {
                EventType[EventType.ViewConversion = 1] = "ViewConversion", EventType[EventType.ClickConversion = 2] = "ClickConversion", 
                EventType[EventType.ServerToServerConversion = 3] = "ServerToServerConversion", 
                EventType[EventType.Upvote = 10] = "Upvote", EventType[EventType.Downvote = 11] = "Downvote", 
                EventType[EventType.DownvoteUninteresting = 12] = "DownvoteUninteresting", EventType[EventType.DownvoteMisleading = 13] = "DownvoteMisleading", 
                EventType[EventType.DownvoteOffensive = 14] = "DownvoteOffensive", EventType[EventType.DownvoteRepetitive = 15] = "DownvoteRepetitive", 
                EventType[EventType.DownvoteOther = 16] = "DownvoteOther", EventType[EventType.CloseAd = 17] = "CloseAd", 
                EventType[EventType.Like = 20] = "Like", EventType[EventType.Share = 21] = "Share", 
                EventType[EventType.Comment = 22] = "Comment", EventType[EventType.CommentReply = 101] = "CommentReply", 
                EventType[EventType.CommentUpvote = 102] = "CommentUpvote", EventType[EventType.CommentDownvote = 103] = "CommentDownvote", 
                EventType[EventType.Visible = 30] = "Visible", EventType[EventType.Hover = 31] = "Hover", 
                EventType[EventType.ExpandDiv = 32] = "ExpandDiv", EventType[EventType.ViewableImpression = 40] = "ViewableImpression", 
                EventType[EventType.ShareOnFacebook = 50] = "ShareOnFacebook", EventType[EventType.ShareOnTwitter = 51] = "ShareOnTwitter", 
                EventType[EventType.ShareOnPinterest = 52] = "ShareOnPinterest", EventType[EventType.ShareOnReddit = 53] = "ShareOnReddit", 
                EventType[EventType.ShareOnEmail = 54] = "ShareOnEmail", EventType[EventType.VideoStart = 70] = "VideoStart", 
                EventType[EventType.VideoFirstQuartile = 71] = "VideoFirstQuartile", EventType[EventType.VideoMidPoint = 72] = "VideoMidPoint", 
                EventType[EventType.VideoThirdQuartile = 73] = "VideoThirdQuartile", EventType[EventType.VideoComplete = 74] = "VideoComplete", 
                EventType[EventType.VideoMute = 75] = "VideoMute", EventType[EventType.VideoUnmute = 76] = "VideoUnmute", 
                EventType[EventType.VideoPause = 77] = "VideoPause", EventType[EventType.VideoRewind = 78] = "VideoRewind", 
                EventType[EventType.VideoResume = 79] = "VideoResume", EventType[EventType.VideoFullScreen = 80] = "VideoFullScreen", 
                EventType[EventType.VideoExitFullScreen = 81] = "VideoExitFullScreen", EventType[EventType.VideoExpand = 82] = "VideoExpand", 
                EventType[EventType.VideoCollapse = 83] = "VideoCollapse", EventType[EventType.VideoAcceptInvitationLinear = 84] = "VideoAcceptInvitationLinear", 
                EventType[EventType.VideoCloseLinear = 85] = "VideoCloseLinear", EventType[EventType.VideoSkip = 86] = "VideoSkip", 
                EventType[EventType.VideoProgress = 87] = "VideoProgress", EventType[EventType.VideoZeroSecondsViewed = 400] = "VideoZeroSecondsViewed", 
                EventType[EventType.VideoOneSecondsViewed = 401] = "VideoOneSecondsViewed", EventType[EventType.VideoTwoSecondsViewed = 402] = "VideoTwoSecondsViewed", 
                EventType[EventType.VideoThreeSecondsViewed = 403] = "VideoThreeSecondsViewed", 
                EventType[EventType.VideoFourSecondsViewed = 404] = "VideoFourSecondsViewed", EventType[EventType.VideoFiveSecondsViewed = 405] = "VideoFiveSecondsViewed", 
                EventType[EventType.VideoSixSecondsViewed = 406] = "VideoSixSecondsViewed", EventType[EventType.VideoSevenSecondsViewed = 407] = "VideoSevenSecondsViewed", 
                EventType[EventType.VideoEightSecondsViewed = 408] = "VideoEightSecondsViewed", 
                EventType[EventType.VideoNineSecondsViewed = 409] = "VideoNineSecondsViewed", EventType[EventType.VideoTenSecondsViewed = 410] = "VideoTenSecondsViewed", 
                EventType[EventType.VideoFifteenSecondsViewed = 415] = "VideoFifteenSecondsViewed", 
                EventType[EventType.VideoTwentySecondsViewed = 420] = "VideoTwentySecondsViewed", 
                EventType[EventType.VideoTwentyFiveSecondsViewed = 425] = "VideoTwentyFiveSecondsViewed", 
                EventType[EventType.VideoThirtySecondsViewed = 430] = "VideoThirtySecondsViewed";
            }(exports.EventType || (exports.EventType = {})), function(RateType) {
                RateType[RateType.Flat = 1] = "Flat", RateType[RateType.CPM = 2] = "CPM", RateType[RateType.CPC = 3] = "CPC", 
                RateType[RateType.CPAView = 4] = "CPAView", RateType[RateType.CPAClick = 5] = "CPAClick", 
                RateType[RateType.CPAViewAndClick = 6] = "CPAViewAndClick";
            }(exports.RateType || (exports.RateType = {}));
        },
        160: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
                return (extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                })(d, b);
            }, function(d, b) {
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            }), __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: v
                });
            } : function(o, v) {
                o.default = v;
            }), __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
                return __setModuleDefault(result, mod), result;
            }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        var value;
                        result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                            resolve(value);
                        }))).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            }, __generator = this && this.__generator || function(thisArg, body) {
                var f, y, t, g, _ = {
                    label: 0,
                    sent: function() {
                        if (1 & t[0]) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return function(op) {
                            if (f) throw new TypeError("Generator is already executing.");
                            for (;_; ) try {
                                if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                                0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                                switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                                  case 0:
                                  case 1:
                                    t = op;
                                    break;

                                  case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: !1
                                    };

                                  case 5:
                                    _.label++, y = op[1], op = [ 0 ];
                                    continue;

                                  case 7:
                                    op = _.ops.pop(), _.trys.pop();
                                    continue;

                                  default:
                                    if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1], t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2], _.ops.push(op);
                                        break;
                                    }
                                    t[2] && _.ops.pop(), _.trys.pop();
                                    continue;
                                }
                                op = body.call(thisArg, _);
                            } catch (e) {
                                op = [ 6, e ], y = 0;
                            } finally {
                                f = t = 0;
                            }
                            if (5 & op[0]) throw op[1];
                            return {
                                value: op[0] ? op[1] : void 0,
                                done: !0
                            };
                        }([ n, v ]);
                    };
                }
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DecisionApi = void 0;
            var runtime = __importStar(__webpack_require__(618)), models_1 = __webpack_require__(803), DecisionApi = function(_super) {
                function DecisionApi() {
                    return null !== _super && _super.apply(this, arguments) || this;
                }
                return __extends(DecisionApi, _super), DecisionApi.prototype.getDecisionsRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return queryParameters = {}, (headerParameters = {})["Content-Type"] = "application/json", 
                                [ 4, this.request({
                                    path: "/api/v2",
                                    method: "POST",
                                    headers: headerParameters,
                                    query: queryParameters,
                                    body: models_1.DecisionRequestToJSON(requestParameters.decisionRequest)
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.JSONApiResponse(response, (function(jsonValue) {
                                    return models_1.DecisionResponseFromJSON(jsonValue);
                                })) ];
                            }
                        }));
                    }));
                }, DecisionApi.prototype.getDecisions = function(decisionRequest) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.getDecisionsRaw({
                                    decisionRequest
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, DecisionApi;
            }(runtime.BaseAPI);
            exports.DecisionApi = DecisionApi;
        },
        69: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
                return (extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                })(d, b);
            }, function(d, b) {
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            }), __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: v
                });
            } : function(o, v) {
                o.default = v;
            }), __importStar = this && this.__importStar || function(mod) {
                if (mod && mod.__esModule) return mod;
                var result = {};
                if (null != mod) for (var k in mod) Object.hasOwnProperty.call(mod, k) && __createBinding(result, mod, k);
                return __setModuleDefault(result, mod), result;
            }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        var value;
                        result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                            resolve(value);
                        }))).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            }, __generator = this && this.__generator || function(thisArg, body) {
                var f, y, t, g, _ = {
                    label: 0,
                    sent: function() {
                        if (1 & t[0]) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return function(op) {
                            if (f) throw new TypeError("Generator is already executing.");
                            for (;_; ) try {
                                if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                                0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                                switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                                  case 0:
                                  case 1:
                                    t = op;
                                    break;

                                  case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: !1
                                    };

                                  case 5:
                                    _.label++, y = op[1], op = [ 0 ];
                                    continue;

                                  case 7:
                                    op = _.ops.pop(), _.trys.pop();
                                    continue;

                                  default:
                                    if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1], t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2], _.ops.push(op);
                                        break;
                                    }
                                    t[2] && _.ops.pop(), _.trys.pop();
                                    continue;
                                }
                                op = body.call(thisArg, _);
                            } catch (e) {
                                op = [ 6, e ], y = 0;
                            } finally {
                                f = t = 0;
                            }
                            if (5 & op[0]) throw op[1];
                            return {
                                value: op[0] ? op[1] : void 0,
                                done: !0
                            };
                        }([ n, v ]);
                    };
                }
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.UserdbApi = void 0;
            var runtime = __importStar(__webpack_require__(618)), models_1 = __webpack_require__(803), UserdbApi = function(_super) {
                function UserdbApi() {
                    return null !== _super && _super.apply(this, arguments) || this;
                }
                return __extends(UserdbApi, _super), UserdbApi.prototype.addCustomPropertiesRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling addCustomProperties.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling addCustomProperties.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                (headerParameters = {})["Content-Type"] = "application/json", this.configuration && this.configuration.apiKey && (headerParameters["X-Adzerk-ApiKey"] = this.configuration.apiKey("X-Adzerk-ApiKey")), 
                                [ 4, this.request({
                                    path: "/udb/{networkId}/custom".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "POST",
                                    headers: headerParameters,
                                    query: queryParameters,
                                    body: requestParameters.body
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.addCustomProperties = function(networkId, userKey, body) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.addCustomPropertiesRaw({
                                    networkId,
                                    userKey,
                                    body
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.addInterestsRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling addInterests.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling addInterests.");
                                if (null === requestParameters.interest || void 0 === requestParameters.interest) throw new runtime.RequiredError("interest", "Required parameter requestParameters.interest was null or undefined when calling addInterests.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                void 0 !== requestParameters.interest && (queryParameters.interest = requestParameters.interest), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/interest/i.gif".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.addInterests = function(networkId, userKey, interest) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.addInterestsRaw({
                                    networkId,
                                    userKey,
                                    interest
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.addRetargetingSegmentRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling addRetargetingSegment.");
                                if (null === requestParameters.advertiserId || void 0 === requestParameters.advertiserId) throw new runtime.RequiredError("advertiserId", "Required parameter requestParameters.advertiserId was null or undefined when calling addRetargetingSegment.");
                                if (null === requestParameters.retargetingSegmentId || void 0 === requestParameters.retargetingSegmentId) throw new runtime.RequiredError("retargetingSegmentId", "Required parameter requestParameters.retargetingSegmentId was null or undefined when calling addRetargetingSegment.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling addRetargetingSegment.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/rt/{advertiserId}/{retargetingSegmentId}/i.gif".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))).replace("{advertiserId}", encodeURIComponent(String(requestParameters.advertiserId))).replace("{retargetingSegmentId}", encodeURIComponent(String(requestParameters.retargetingSegmentId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.addRetargetingSegment = function(networkId, advertiserId, retargetingSegmentId, userKey) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.addRetargetingSegmentRaw({
                                    networkId,
                                    advertiserId,
                                    retargetingSegmentId,
                                    userKey
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.forgetRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling forget.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling forget.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                headerParameters = {}, this.configuration && this.configuration.apiKey && (headerParameters["X-Adzerk-ApiKey"] = this.configuration.apiKey("X-Adzerk-ApiKey")), 
                                [ 4, this.request({
                                    path: "/udb/{networkId}".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "DELETE",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.VoidApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.forget = function(networkId, userKey) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.forgetRaw({
                                    networkId,
                                    userKey
                                }) ];

                              case 1:
                                return _a.sent(), [ 2 ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.gdprConsentRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling gdprConsent.");
                                return queryParameters = {}, (headerParameters = {})["Content-Type"] = "application/json", 
                                this.configuration && this.configuration.apiKey && (headerParameters["X-Adzerk-ApiKey"] = this.configuration.apiKey("X-Adzerk-ApiKey")), 
                                [ 4, this.request({
                                    path: "/udb/{networkId}/consent".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "POST",
                                    headers: headerParameters,
                                    query: queryParameters,
                                    body: models_1.ConsentRequestToJSON(requestParameters.consentRequest)
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.gdprConsent = function(networkId, consentRequest) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.gdprConsentRaw({
                                    networkId,
                                    consentRequest
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.ipOverrideRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling ipOverride.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling ipOverride.");
                                if (null === requestParameters.ip || void 0 === requestParameters.ip) throw new runtime.RequiredError("ip", "Required parameter requestParameters.ip was null or undefined when calling ipOverride.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                void 0 !== requestParameters.ip && (queryParameters.ip = requestParameters.ip), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/ip/i.gif".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.ipOverride = function(networkId, userKey, ip) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.ipOverrideRaw({
                                    networkId,
                                    userKey,
                                    ip
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.matchUserRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling matchUser.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling matchUser.");
                                if (null === requestParameters.partnerId || void 0 === requestParameters.partnerId) throw new runtime.RequiredError("partnerId", "Required parameter requestParameters.partnerId was null or undefined when calling matchUser.");
                                if (null === requestParameters.userId || void 0 === requestParameters.userId) throw new runtime.RequiredError("userId", "Required parameter requestParameters.userId was null or undefined when calling matchUser.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                void 0 !== requestParameters.partnerId && (queryParameters.partnerId = requestParameters.partnerId), 
                                void 0 !== requestParameters.userId && (queryParameters.userId = requestParameters.userId), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/sync/i.gif".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.matchUser = function(networkId, userKey, partnerId, userId) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.matchUserRaw({
                                    networkId,
                                    userKey,
                                    partnerId,
                                    userId
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.optOutRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling optOut.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling optOut.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/optout/i.gif".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.BlobApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.optOut = function(networkId, userKey) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.optOutRaw({
                                    networkId,
                                    userKey
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.readRaw = function(requestParameters) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var queryParameters, headerParameters, response;
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                if (null === requestParameters.networkId || void 0 === requestParameters.networkId) throw new runtime.RequiredError("networkId", "Required parameter requestParameters.networkId was null or undefined when calling read.");
                                if (null === requestParameters.userKey || void 0 === requestParameters.userKey) throw new runtime.RequiredError("userKey", "Required parameter requestParameters.userKey was null or undefined when calling read.");
                                return queryParameters = {}, void 0 !== requestParameters.userKey && (queryParameters.userKey = requestParameters.userKey), 
                                headerParameters = {}, [ 4, this.request({
                                    path: "/udb/{networkId}/read".replace("{networkId}", encodeURIComponent(String(requestParameters.networkId))),
                                    method: "GET",
                                    headers: headerParameters,
                                    query: queryParameters
                                }) ];

                              case 1:
                                return response = _a.sent(), [ 2, new runtime.JSONApiResponse(response) ];
                            }
                        }));
                    }));
                }, UserdbApi.prototype.read = function(networkId, userKey) {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.readRaw({
                                    networkId,
                                    userKey
                                }) ];

                              case 1:
                                return [ 4, _a.sent().value() ];

                              case 2:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, UserdbApi;
            }(runtime.BaseAPI);
            exports.UserdbApi = UserdbApi;
        },
        622: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __exportStar = this && this.__exportStar || function(m, exports) {
                for (var p in m) "default" === p || exports.hasOwnProperty(p) || __createBinding(exports, m, p);
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), __exportStar(__webpack_require__(160), exports), __exportStar(__webpack_require__(69), exports);
        },
        87: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __exportStar = this && this.__exportStar || function(m, exports) {
                for (var p in m) "default" === p || exports.hasOwnProperty(p) || __createBinding(exports, m, p);
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), __exportStar(__webpack_require__(618), exports), __exportStar(__webpack_require__(622), exports), 
            __exportStar(__webpack_require__(803), exports);
        },
        244: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.ConsentRequestToJSON = exports.ConsentRequestFromJSONTyped = exports.ConsentRequestFromJSON = void 0;
            var runtime_1 = __webpack_require__(618);
            function ConsentRequestFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    userKey: runtime_1.exists(json, "userKey") ? json.userKey : void 0,
                    consent: runtime_1.exists(json, "consent") ? json.consent : void 0
                };
            }
            exports.ConsentRequestFromJSON = function(json) {
                return ConsentRequestFromJSONTyped(json, !1);
            }, exports.ConsentRequestFromJSONTyped = ConsentRequestFromJSONTyped, exports.ConsentRequestToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    userKey: value.userKey,
                    consent: value.consent
                };
            };
        },
        281: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.ContentToJSON = exports.ContentFromJSONTyped = exports.ContentFromJSON = void 0;
            var runtime_1 = __webpack_require__(618);
            function ContentFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    type: runtime_1.exists(json, "type") ? json.type : void 0,
                    template: runtime_1.exists(json, "template") ? json.template : void 0,
                    customTemplate: runtime_1.exists(json, "customTemplate") ? json.customTemplate : void 0,
                    data: runtime_1.exists(json, "data") ? json.data : void 0,
                    body: runtime_1.exists(json, "body") ? json.body : void 0
                };
            }
            exports.ContentFromJSON = function(json) {
                return ContentFromJSONTyped(json, !1);
            }, exports.ContentFromJSONTyped = ContentFromJSONTyped, exports.ContentToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    type: value.type,
                    template: value.template,
                    customTemplate: value.customTemplate,
                    data: value.data,
                    body: value.body
                };
            };
        },
        850: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DecisionToJSON = exports.DecisionFromJSONTyped = exports.DecisionFromJSON = void 0;
            var runtime_1 = __webpack_require__(618), _1 = __webpack_require__(803);
            function DecisionFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    adId: runtime_1.exists(json, "adId") ? json.adId : void 0,
                    creativeId: runtime_1.exists(json, "creativeId") ? json.creativeId : void 0,
                    flightId: runtime_1.exists(json, "flightId") ? json.flightId : void 0,
                    campaignId: runtime_1.exists(json, "campaignId") ? json.campaignId : void 0,
                    priorityId: runtime_1.exists(json, "priorityId") ? json.priorityId : void 0,
                    clickUrl: runtime_1.exists(json, "clickUrl") ? json.clickUrl : void 0,
                    contents: runtime_1.exists(json, "contents") ? json.contents.map(_1.ContentFromJSON) : void 0,
                    impressionUrl: runtime_1.exists(json, "impressionUrl") ? json.impressionUrl : void 0,
                    events: runtime_1.exists(json, "events") ? json.events.map(_1.EventFromJSON) : void 0,
                    matchedPoints: runtime_1.exists(json, "matchedPoints") ? json.matchedPoints.map(_1.MatchedPointFromJSON) : void 0,
                    pricing: runtime_1.exists(json, "pricing") ? _1.PricingDataFromJSON(json.pricing) : void 0
                };
            }
            exports.DecisionFromJSON = function(json) {
                return DecisionFromJSONTyped(json, !1);
            }, exports.DecisionFromJSONTyped = DecisionFromJSONTyped, exports.DecisionToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    adId: value.adId,
                    creativeId: value.creativeId,
                    flightId: value.flightId,
                    campaignId: value.campaignId,
                    priorityId: value.priorityId,
                    clickUrl: value.clickUrl,
                    contents: void 0 === value.contents ? void 0 : value.contents.map(_1.ContentToJSON),
                    impressionUrl: value.impressionUrl,
                    events: void 0 === value.events ? void 0 : value.events.map(_1.EventToJSON),
                    matchedPoints: void 0 === value.matchedPoints ? void 0 : value.matchedPoints.map(_1.MatchedPointToJSON),
                    pricing: _1.PricingDataToJSON(value.pricing)
                };
            };
        },
        425: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DecisionRequestToJSON = exports.DecisionRequestFromJSONTyped = exports.DecisionRequestFromJSON = void 0;
            var runtime_1 = __webpack_require__(618), _1 = __webpack_require__(803);
            function DecisionRequestFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    placements: json.placements.map(_1.PlacementFromJSON),
                    user: runtime_1.exists(json, "user") ? _1.UserFromJSON(json.user) : void 0,
                    keywords: runtime_1.exists(json, "keywords") ? json.keywords : void 0,
                    url: runtime_1.exists(json, "url") ? json.url : void 0,
                    referrer: runtime_1.exists(json, "referrer") ? json.referrer : void 0,
                    ip: runtime_1.exists(json, "ip") ? json.ip : void 0,
                    blockedCreatives: runtime_1.exists(json, "blockedCreatives") ? json.blockedCreatives : void 0,
                    isMobile: runtime_1.exists(json, "isMobile") ? json.isMobile : void 0,
                    includePricingData: runtime_1.exists(json, "includePricingData") ? json.includePricingData : void 0,
                    notrack: runtime_1.exists(json, "notrack") ? json.notrack : void 0,
                    enableBotFiltering: runtime_1.exists(json, "enableBotFiltering") ? json.enableBotFiltering : void 0,
                    enableUserDBIP: runtime_1.exists(json, "enableUserDBIP") ? json.enableUserDBIP : void 0,
                    consent: runtime_1.exists(json, "consent") ? json.consent : void 0,
                    deviceID: runtime_1.exists(json, "deviceID") ? json.deviceID : void 0,
                    parallel: runtime_1.exists(json, "parallel") ? json.parallel : void 0,
                    intendedLatitude: runtime_1.exists(json, "intendedLatitude") ? json.intendedLatitude : void 0,
                    intendedLongitude: runtime_1.exists(json, "intendedLongitude") ? json.intendedLongitude : void 0,
                    radius: runtime_1.exists(json, "radius") ? json.radius : void 0,
                    includeMatchedPoints: runtime_1.exists(json, "includeMatchedPoints") ? json.includeMatchedPoints : void 0
                };
            }
            exports.DecisionRequestFromJSON = function(json) {
                return DecisionRequestFromJSONTyped(json, !1);
            }, exports.DecisionRequestFromJSONTyped = DecisionRequestFromJSONTyped, exports.DecisionRequestToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    placements: value.placements.map(_1.PlacementToJSON),
                    user: _1.UserToJSON(value.user),
                    keywords: value.keywords,
                    url: value.url,
                    referrer: value.referrer,
                    ip: value.ip,
                    blockedCreatives: value.blockedCreatives,
                    isMobile: value.isMobile,
                    includePricingData: value.includePricingData,
                    notrack: value.notrack,
                    enableBotFiltering: value.enableBotFiltering,
                    enableUserDBIP: value.enableUserDBIP,
                    consent: value.consent,
                    deviceID: value.deviceID,
                    parallel: value.parallel,
                    intendedLatitude: value.intendedLatitude,
                    intendedLongitude: value.intendedLongitude,
                    radius: value.radius,
                    includeMatchedPoints: value.includeMatchedPoints
                };
            };
        },
        633: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.DecisionResponseToJSON = exports.DecisionResponseFromJSONTyped = exports.DecisionResponseFromJSON = void 0;
            var runtime_1 = __webpack_require__(618), _1 = __webpack_require__(803);
            function DecisionResponseFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    user: runtime_1.exists(json, "user") ? _1.UserFromJSON(json.user) : void 0,
                    decisions: runtime_1.exists(json, "decisions") ? json.decisions : void 0,
                    explain: runtime_1.exists(json, "explain") ? json.explain : void 0
                };
            }
            exports.DecisionResponseFromJSON = function(json) {
                return DecisionResponseFromJSONTyped(json, !1);
            }, exports.DecisionResponseFromJSONTyped = DecisionResponseFromJSONTyped, exports.DecisionResponseToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    user: _1.UserToJSON(value.user),
                    decisions: value.decisions,
                    explain: value.explain
                };
            };
        },
        922: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.EventToJSON = exports.EventFromJSONTyped = exports.EventFromJSON = void 0;
            var runtime_1 = __webpack_require__(618);
            function EventFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    id: runtime_1.exists(json, "id") ? json.id : void 0,
                    url: runtime_1.exists(json, "url") ? json.url : void 0
                };
            }
            exports.EventFromJSON = function(json) {
                return EventFromJSONTyped(json, !1);
            }, exports.EventFromJSONTyped = EventFromJSONTyped, exports.EventToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    id: value.id,
                    url: value.url
                };
            };
        },
        710: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.MatchedPointToJSON = exports.MatchedPointFromJSONTyped = exports.MatchedPointFromJSON = void 0;
            var runtime_1 = __webpack_require__(618);
            function MatchedPointFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    lat: runtime_1.exists(json, "lat") ? json.lat : void 0,
                    lon: runtime_1.exists(json, "lon") ? json.lon : void 0
                };
            }
            exports.MatchedPointFromJSON = function(json) {
                return MatchedPointFromJSONTyped(json, !1);
            }, exports.MatchedPointFromJSONTyped = MatchedPointFromJSONTyped, exports.MatchedPointToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    lat: value.lat,
                    lon: value.lon
                };
            };
        },
        300: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.PlacementToJSON = exports.PlacementFromJSONTyped = exports.PlacementFromJSON = void 0;
            var runtime_1 = __webpack_require__(618);
            function PlacementFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    divName: runtime_1.exists(json, "divName") ? json.divName : void 0,
                    networkId: runtime_1.exists(json, "networkId") ? json.networkId : void 0,
                    siteId: runtime_1.exists(json, "siteId") ? json.siteId : void 0,
                    adTypes: runtime_1.exists(json, "adTypes") ? json.adTypes : void 0,
                    zoneIds: runtime_1.exists(json, "zoneIds") ? json.zoneIds : void 0,
                    campaignId: runtime_1.exists(json, "campaignId") ? json.campaignId : void 0,
                    flightId: runtime_1.exists(json, "flightId") ? json.flightId : void 0,
                    adId: runtime_1.exists(json, "adId") ? json.adId : void 0,
                    clickUrl: runtime_1.exists(json, "clickUrl") ? json.clickUrl : void 0,
                    properties: runtime_1.exists(json, "properties") ? json.properties : void 0,
                    eventIds: runtime_1.exists(json, "eventIds") ? json.eventIds : void 0,
                    overrides: runtime_1.exists(json, "overrides") ? json.overrides : void 0,
                    contentKeys: runtime_1.exists(json, "contentKeys") ? json.contentKeys : void 0,
                    count: runtime_1.exists(json, "count") ? json.count : void 0,
                    proportionality: runtime_1.exists(json, "proportionality") ? json.proportionality : void 0,
                    ecpmPartition: runtime_1.exists(json, "ecpmPartition") ? json.ecpmPartition : void 0,
                    ecpmPartitions: runtime_1.exists(json, "ecpmPartitions") ? json.ecpmPartitions : void 0,
                    eventMultiplier: runtime_1.exists(json, "eventMultiplier") ? json.eventMultiplier : void 0,
                    skipSelection: runtime_1.exists(json, "skipSelection") ? json.skipSelection : void 0,
                    adQuery: runtime_1.exists(json, "adQuery") ? json.adQuery : void 0,
                    floorPrice: runtime_1.exists(json, "floorPrice") ? json.floorPrice : void 0,
                    floorCpc: runtime_1.exists(json, "floorCpc") ? json.floorCpc : void 0
                };
            }
            exports.PlacementFromJSON = function(json) {
                return PlacementFromJSONTyped(json, !1);
            }, exports.PlacementFromJSONTyped = PlacementFromJSONTyped, exports.PlacementToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    divName: value.divName,
                    networkId: value.networkId,
                    siteId: value.siteId,
                    adTypes: value.adTypes,
                    zoneIds: value.zoneIds,
                    campaignId: value.campaignId,
                    flightId: value.flightId,
                    adId: value.adId,
                    clickUrl: value.clickUrl,
                    properties: value.properties,
                    eventIds: value.eventIds,
                    overrides: value.overrides,
                    contentKeys: value.contentKeys,
                    count: value.count,
                    proportionality: value.proportionality,
                    ecpmPartition: value.ecpmPartition,
                    ecpmPartitions: value.ecpmPartitions,
                    eventMultiplier: value.eventMultiplier,
                    skipSelection: value.skipSelection,
                    adQuery: value.adQuery,
                    floorPrice: value.floorPrice,
                    floorCpc: value.floorCpc
                };
            };
        },
        906: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.PricingDataToJSON = exports.PricingDataFromJSONTyped = exports.PricingDataFromJSON = void 0;
            var runtime_1 = __webpack_require__(618);
            function PricingDataFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    price: runtime_1.exists(json, "price") ? json.price : void 0,
                    clearPrice: runtime_1.exists(json, "clearPrice") ? json.clearPrice : void 0,
                    revenue: runtime_1.exists(json, "revenue") ? json.revenue : void 0,
                    rateType: runtime_1.exists(json, "rateType") ? json.rateType : void 0,
                    eCPM: runtime_1.exists(json, "eCPM") ? json.eCPM : void 0
                };
            }
            exports.PricingDataFromJSON = function(json) {
                return PricingDataFromJSONTyped(json, !1);
            }, exports.PricingDataFromJSONTyped = PricingDataFromJSONTyped, exports.PricingDataToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    price: value.price,
                    clearPrice: value.clearPrice,
                    revenue: value.revenue,
                    rateType: value.rateType,
                    eCPM: value.eCPM
                };
            };
        },
        167: (__unused_webpack_module, exports, __webpack_require__) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.UserToJSON = exports.UserFromJSONTyped = exports.UserFromJSON = void 0;
            var runtime_1 = __webpack_require__(618);
            function UserFromJSONTyped(json, ignoreDiscriminator) {
                return null == json ? json : {
                    key: runtime_1.exists(json, "key") ? json.key : void 0
                };
            }
            exports.UserFromJSON = function(json) {
                return UserFromJSONTyped(json, !1);
            }, exports.UserFromJSONTyped = UserFromJSONTyped, exports.UserToJSON = function(value) {
                if (void 0 !== value) return null === value ? null : {
                    key: value.key
                };
            };
        },
        803: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __exportStar = this && this.__exportStar || function(m, exports) {
                for (var p in m) "default" === p || exports.hasOwnProperty(p) || __createBinding(exports, m, p);
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), __exportStar(__webpack_require__(244), exports), __exportStar(__webpack_require__(281), exports), 
            __exportStar(__webpack_require__(850), exports), __exportStar(__webpack_require__(425), exports), 
            __exportStar(__webpack_require__(633), exports), __exportStar(__webpack_require__(922), exports), 
            __exportStar(__webpack_require__(710), exports), __exportStar(__webpack_require__(300), exports), 
            __exportStar(__webpack_require__(906), exports), __exportStar(__webpack_require__(167), exports);
        },
        618: function(__unused_webpack_module, exports) {
            "use strict";
            var extendStatics, __extends = this && this.__extends || (extendStatics = function(d, b) {
                return (extendStatics = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
                })(d, b);
            }, function(d, b) {
                function __() {
                    this.constructor = d;
                }
                extendStatics(d, b), d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, 
                new __);
            }), __assign = this && this.__assign || function() {
                return (__assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                    return t;
                }).apply(this, arguments);
            }, __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))((function(resolve, reject) {
                    function fulfilled(value) {
                        try {
                            step(generator.next(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function rejected(value) {
                        try {
                            step(generator.throw(value));
                        } catch (e) {
                            reject(e);
                        }
                    }
                    function step(result) {
                        var value;
                        result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P((function(resolve) {
                            resolve(value);
                        }))).then(fulfilled, rejected);
                    }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                }));
            }, __generator = this && this.__generator || function(thisArg, body) {
                var f, y, t, g, _ = {
                    label: 0,
                    sent: function() {
                        if (1 & t[0]) throw t[1];
                        return t[1];
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: verb(0),
                    throw: verb(1),
                    return: verb(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this;
                }), g;
                function verb(n) {
                    return function(v) {
                        return function(op) {
                            if (f) throw new TypeError("Generator is already executing.");
                            for (;_; ) try {
                                if (f = 1, y && (t = 2 & op[0] ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 
                                0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                                switch (y = 0, t && (op = [ 2 & op[0], t.value ]), op[0]) {
                                  case 0:
                                  case 1:
                                    t = op;
                                    break;

                                  case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: !1
                                    };

                                  case 5:
                                    _.label++, y = op[1], op = [ 0 ];
                                    continue;

                                  case 7:
                                    op = _.ops.pop(), _.trys.pop();
                                    continue;

                                  default:
                                    if (!(t = _.trys, (t = t.length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1], t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2], _.ops.push(op);
                                        break;
                                    }
                                    t[2] && _.ops.pop(), _.trys.pop();
                                    continue;
                                }
                                op = body.call(thisArg, _);
                            } catch (e) {
                                op = [ 6, e ], y = 0;
                            } finally {
                                f = t = 0;
                            }
                            if (5 & op[0]) throw op[1];
                            return {
                                value: op[0] ? op[1] : void 0,
                                done: !0
                            };
                        }([ n, v ]);
                    };
                }
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.TextApiResponse = exports.BlobApiResponse = exports.VoidApiResponse = exports.JSONApiResponse = exports.canConsumeForm = exports.mapValues = exports.querystring = exports.exists = exports.Configuration = exports.COLLECTION_FORMATS = exports.RequiredError = exports.BaseAPI = exports.BASE_PATH = void 0, 
            exports.BASE_PATH = "https://e-23.adzerk.net".replace(/\/+$/, "");
            var BaseAPI = function() {
                function BaseAPI(configuration) {
                    var _this = this;
                    void 0 === configuration && (configuration = new Configuration), this.configuration = configuration, 
                    this.fetchApi = function(url, init) {
                        return __awaiter(_this, void 0, void 0, (function() {
                            var fetchParams, _i, _a, response, _b, _c, middleware;
                            return __generator(this, (function(_d) {
                                switch (_d.label) {
                                  case 0:
                                    fetchParams = {
                                        url,
                                        init
                                    }, _i = 0, _a = this.middleware, _d.label = 1;

                                  case 1:
                                    return _i < _a.length ? (middleware = _a[_i]).pre ? [ 4, middleware.pre(__assign({
                                        fetch: this.fetchApi
                                    }, fetchParams)) ] : [ 3, 3 ] : [ 3, 4 ];

                                  case 2:
                                    fetchParams = _d.sent() || fetchParams, _d.label = 3;

                                  case 3:
                                    return _i++, [ 3, 1 ];

                                  case 4:
                                    return [ 4, this.configuration.fetchApi(fetchParams.url, fetchParams.init) ];

                                  case 5:
                                    response = _d.sent(), _b = 0, _c = this.middleware, _d.label = 6;

                                  case 6:
                                    return _b < _c.length ? (middleware = _c[_b]).post ? [ 4, middleware.post({
                                        fetch: this.fetchApi,
                                        url,
                                        init,
                                        response: response.clone()
                                    }) ] : [ 3, 8 ] : [ 3, 9 ];

                                  case 7:
                                    response = _d.sent() || response, _d.label = 8;

                                  case 8:
                                    return _b++, [ 3, 6 ];

                                  case 9:
                                    return [ 2, response ];
                                }
                            }));
                        }));
                    }, this.middleware = configuration.middleware;
                }
                return BaseAPI.prototype.withMiddleware = function() {
                    for (var _a, middlewares = [], _i = 0; _i < arguments.length; _i++) middlewares[_i] = arguments[_i];
                    var next = this.clone();
                    return next.middleware = (_a = next.middleware).concat.apply(_a, middlewares), next;
                }, BaseAPI.prototype.withPreMiddleware = function() {
                    for (var preMiddlewares = [], _i = 0; _i < arguments.length; _i++) preMiddlewares[_i] = arguments[_i];
                    var middlewares = preMiddlewares.map((function(pre) {
                        return {
                            pre
                        };
                    }));
                    return this.withMiddleware.apply(this, middlewares);
                }, BaseAPI.prototype.withPostMiddleware = function() {
                    for (var postMiddlewares = [], _i = 0; _i < arguments.length; _i++) postMiddlewares[_i] = arguments[_i];
                    var middlewares = postMiddlewares.map((function(post) {
                        return {
                            post
                        };
                    }));
                    return this.withMiddleware.apply(this, middlewares);
                }, BaseAPI.prototype.request = function(context) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var _a, url, init, response;
                        return __generator(this, (function(_b) {
                            switch (_b.label) {
                              case 0:
                                return _a = this.createFetchParams(context), url = _a.url, init = _a.init, [ 4, this.fetchApi(url, init) ];

                              case 1:
                                if ((response = _b.sent()).status >= 200 && response.status < 300) return [ 2, response ];
                                throw response;
                            }
                        }));
                    }));
                }, BaseAPI.prototype.createFetchParams = function(context) {
                    var url = this.configuration.basePath + context.path;
                    void 0 !== context.query && 0 !== Object.keys(context.query).length && (url += "?" + this.configuration.queryParamsStringify(context.query));
                    var value, body = "undefined" != typeof FormData && context.body instanceof FormData || context.body instanceof URLSearchParams || (value = context.body, 
                    "undefined" != typeof Blob && value instanceof Blob) ? context.body : JSON.stringify(context.body), headers = Object.assign({}, this.configuration.headers, context.headers);
                    return {
                        url,
                        init: {
                            method: context.method,
                            headers,
                            body,
                            credentials: this.configuration.credentials
                        }
                    };
                }, BaseAPI.prototype.clone = function() {
                    var next = new (0, this.constructor)(this.configuration);
                    return next.middleware = this.middleware.slice(), next;
                }, BaseAPI;
            }();
            exports.BaseAPI = BaseAPI;
            var RequiredError = function(_super) {
                function RequiredError(field, msg) {
                    var _this = _super.call(this, msg) || this;
                    return _this.field = field, _this.name = "RequiredError", _this;
                }
                return __extends(RequiredError, _super), RequiredError;
            }(Error);
            exports.RequiredError = RequiredError, exports.COLLECTION_FORMATS = {
                csv: ",",
                ssv: " ",
                tsv: "\t",
                pipes: "|"
            };
            var Configuration = function() {
                function Configuration(configuration) {
                    void 0 === configuration && (configuration = {}), this.configuration = configuration;
                }
                return Object.defineProperty(Configuration.prototype, "basePath", {
                    get: function() {
                        return null != this.configuration.basePath ? this.configuration.basePath : exports.BASE_PATH;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "fetchApi", {
                    get: function() {
                        return this.configuration.fetchApi || window.fetch.bind(window);
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "middleware", {
                    get: function() {
                        return this.configuration.middleware || [];
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "queryParamsStringify", {
                    get: function() {
                        return this.configuration.queryParamsStringify || querystring;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "username", {
                    get: function() {
                        return this.configuration.username;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "password", {
                    get: function() {
                        return this.configuration.password;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "apiKey", {
                    get: function() {
                        var apiKey = this.configuration.apiKey;
                        if (apiKey) return "function" == typeof apiKey ? apiKey : function() {
                            return apiKey;
                        };
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "accessToken", {
                    get: function() {
                        var accessToken = this.configuration.accessToken;
                        if (accessToken) return "function" == typeof accessToken ? accessToken : function() {
                            return accessToken;
                        };
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "headers", {
                    get: function() {
                        return this.configuration.headers;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(Configuration.prototype, "credentials", {
                    get: function() {
                        return this.configuration.credentials;
                    },
                    enumerable: !1,
                    configurable: !0
                }), Configuration;
            }();
            function querystring(params, prefix) {
                return void 0 === prefix && (prefix = ""), Object.keys(params).map((function(key) {
                    var fullKey = prefix + (prefix.length ? "[" + key + "]" : key), value = params[key];
                    if (value instanceof Array) {
                        var multiValue = value.map((function(singleValue) {
                            return encodeURIComponent(String(singleValue));
                        })).join("&" + encodeURIComponent(fullKey) + "=");
                        return encodeURIComponent(fullKey) + "=" + multiValue;
                    }
                    return value instanceof Date ? encodeURIComponent(fullKey) + "=" + encodeURIComponent(value.toISOString()) : value instanceof Object ? querystring(value, fullKey) : encodeURIComponent(fullKey) + "=" + encodeURIComponent(String(value));
                })).filter((function(part) {
                    return part.length > 0;
                })).join("&");
            }
            exports.Configuration = Configuration, exports.exists = function(json, key) {
                var value = json[key];
                return null != value;
            }, exports.querystring = querystring, exports.mapValues = function(data, fn) {
                return Object.keys(data).reduce((function(acc, key) {
                    var _a;
                    return __assign(__assign({}, acc), ((_a = {})[key] = fn(data[key]), _a));
                }), {});
            }, exports.canConsumeForm = function(consumes) {
                for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
                    if ("multipart/form-data" === consumes_1[_i].contentType) return !0;
                }
                return !1;
            };
            var JSONApiResponse = function() {
                function JSONApiResponse(raw, transformer) {
                    void 0 === transformer && (transformer = function(jsonValue) {
                        return jsonValue;
                    }), this.raw = raw, this.transformer = transformer;
                }
                return JSONApiResponse.prototype.value = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        var _a;
                        return __generator(this, (function(_b) {
                            switch (_b.label) {
                              case 0:
                                return _a = this.transformer, [ 4, this.raw.json() ];

                              case 1:
                                return [ 2, _a.apply(this, [ _b.sent() ]) ];
                            }
                        }));
                    }));
                }, JSONApiResponse;
            }();
            exports.JSONApiResponse = JSONApiResponse;
            var VoidApiResponse = function() {
                function VoidApiResponse(raw) {
                    this.raw = raw;
                }
                return VoidApiResponse.prototype.value = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            return [ 2, void 0 ];
                        }));
                    }));
                }, VoidApiResponse;
            }();
            exports.VoidApiResponse = VoidApiResponse;
            var BlobApiResponse = function() {
                function BlobApiResponse(raw) {
                    this.raw = raw;
                }
                return BlobApiResponse.prototype.value = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.raw.blob() ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, BlobApiResponse;
            }();
            exports.BlobApiResponse = BlobApiResponse;
            var TextApiResponse = function() {
                function TextApiResponse(raw) {
                    this.raw = raw;
                }
                return TextApiResponse.prototype.value = function() {
                    return __awaiter(this, void 0, void 0, (function() {
                        return __generator(this, (function(_a) {
                            switch (_a.label) {
                              case 0:
                                return [ 4, this.raw.text() ];

                              case 1:
                                return [ 2, _a.sent() ];
                            }
                        }));
                    }));
                }, TextApiResponse;
            }();
            exports.TextApiResponse = TextApiResponse;
        },
        200: function(__unused_webpack_module, exports, __webpack_require__) {
            "use strict";
            var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), Object.defineProperty(o, k2, {
                    enumerable: !0,
                    get: function() {
                        return m[k];
                    }
                });
            } : function(o, m, k, k2) {
                void 0 === k2 && (k2 = k), o[k2] = m[k];
            }), __exportStar = this && this.__exportStar || function(m, exports) {
                for (var p in m) "default" === p || exports.hasOwnProperty(p) || __createBinding(exports, m, p);
            };
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.Client = void 0;
            var client_1 = __webpack_require__(269);
            Object.defineProperty(exports, "Client", {
                enumerable: !0,
                get: function() {
                    return client_1.Client;
                }
            }), __exportStar(__webpack_require__(791), exports), __exportStar(__webpack_require__(440), exports);
        },
        440: (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        },
        532: (__unused_webpack_module, exports) => {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: !0
            }), exports.removeUndefinedAndBlocklisted = void 0, exports.removeUndefinedAndBlocklisted = function(obj, blocklist) {
                return void 0 === blocklist && (blocklist = []), Array.isArray(obj) ? obj.map((function(o) {
                    return exports.removeUndefinedAndBlocklisted(o);
                })) : "object" != typeof obj ? obj : Object.keys(obj).reduce((function(acc, key) {
                    return blocklist.includes(key) || null == obj[key] ? acc : "object" == typeof obj[key] ? (acc[key] = exports.removeUndefinedAndBlocklisted(obj[key], blocklist), 
                    acc) : (acc[key] = obj[key], acc);
                }), {});
            };
        },
        738: module => {
            function webpackEmptyContext(req) {
                var e = new Error("Cannot find module '" + req + "'");
                throw e.code = "MODULE_NOT_FOUND", e;
            }
            webpackEmptyContext.keys = () => [], webpackEmptyContext.resolve = webpackEmptyContext, 
            webpackEmptyContext.id = 738, module.exports = webpackEmptyContext;
        },
        443: (module, exports, __webpack_require__) => {
            exports.formatArgs = function(args) {
                if (args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff), 
                !this.useColors) return;
                const c = "color: " + this.color;
                args.splice(1, 0, c, "color: inherit");
                let index = 0, lastC = 0;
                args[0].replace(/%[a-zA-Z%]/g, (match => {
                    "%%" !== match && (index++, "%c" === match && (lastC = index));
                })), args.splice(lastC, 0, c);
            }, exports.save = function(namespaces) {
                try {
                    namespaces ? exports.storage.setItem("debug", namespaces) : exports.storage.removeItem("debug");
                } catch (error) {}
            }, exports.load = function() {
                let r;
                try {
                    r = exports.storage.getItem("debug");
                } catch (error) {}
                !r && "undefined" != typeof process && "env" in process && (r = process.env.DEBUG);
                return r;
            }, exports.useColors = function() {
                if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
            }, exports.storage = function() {
                try {
                    return localStorage;
                } catch (error) {}
            }(), exports.destroy = (() => {
                let warned = !1;
                return () => {
                    warned || (warned = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
                };
            })(), exports.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
            exports.log = console.debug || console.log || (() => {}), module.exports = __webpack_require__(195)(exports);
            const {formatters} = module.exports;
            formatters.j = function(v) {
                try {
                    return JSON.stringify(v);
                } catch (error) {
                    return "[UnexpectedJSONParseError]: " + error.message;
                }
            };
        },
        195: (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = function(env) {
                function createDebug(namespace) {
                    let prevTime, namespacesCache, enabledCache, enableOverride = null;
                    function debug(...args) {
                        if (!debug.enabled) return;
                        const self = debug, curr = Number(new Date), ms = curr - (prevTime || curr);
                        self.diff = ms, self.prev = prevTime, self.curr = curr, prevTime = curr, args[0] = createDebug.coerce(args[0]), 
                        "string" != typeof args[0] && args.unshift("%O");
                        let index = 0;
                        args[0] = args[0].replace(/%([a-zA-Z%])/g, ((match, format) => {
                            if ("%%" === match) return "%";
                            index++;
                            const formatter = createDebug.formatters[format];
                            if ("function" == typeof formatter) {
                                const val = args[index];
                                match = formatter.call(self, val), args.splice(index, 1), index--;
                            }
                            return match;
                        })), createDebug.formatArgs.call(self, args);
                        (self.log || createDebug.log).apply(self, args);
                    }
                    return debug.namespace = namespace, debug.useColors = createDebug.useColors(), debug.color = createDebug.selectColor(namespace), 
                    debug.extend = extend, debug.destroy = createDebug.destroy, Object.defineProperty(debug, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null !== enableOverride ? enableOverride : (namespacesCache !== createDebug.namespaces && (namespacesCache = createDebug.namespaces, 
                        enabledCache = createDebug.enabled(namespace)), enabledCache),
                        set: v => {
                            enableOverride = v;
                        }
                    }), "function" == typeof createDebug.init && createDebug.init(debug), debug;
                }
                function extend(namespace, delimiter) {
                    const newDebug = createDebug(this.namespace + (void 0 === delimiter ? ":" : delimiter) + namespace);
                    return newDebug.log = this.log, newDebug;
                }
                function toNamespace(regexp) {
                    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
                }
                return createDebug.debug = createDebug, createDebug.default = createDebug, createDebug.coerce = function(val) {
                    if (val instanceof Error) return val.stack || val.message;
                    return val;
                }, createDebug.disable = function() {
                    const namespaces = [ ...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map((namespace => "-" + namespace)) ].join(",");
                    return createDebug.enable(""), namespaces;
                }, createDebug.enable = function(namespaces) {
                    let i;
                    createDebug.save(namespaces), createDebug.namespaces = namespaces, createDebug.names = [], 
                    createDebug.skips = [];
                    const split = ("string" == typeof namespaces ? namespaces : "").split(/[\s,]+/), len = split.length;
                    for (i = 0; i < len; i++) split[i] && ("-" === (namespaces = split[i].replace(/\*/g, ".*?"))[0] ? createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$")) : createDebug.names.push(new RegExp("^" + namespaces + "$")));
                }, createDebug.enabled = function(name) {
                    if ("*" === name[name.length - 1]) return !0;
                    let i, len;
                    for (i = 0, len = createDebug.skips.length; i < len; i++) if (createDebug.skips[i].test(name)) return !1;
                    for (i = 0, len = createDebug.names.length; i < len; i++) if (createDebug.names[i].test(name)) return !0;
                    return !1;
                }, createDebug.humanize = __webpack_require__(820), createDebug.destroy = function() {
                    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
                }, Object.keys(env).forEach((key => {
                    createDebug[key] = env[key];
                })), createDebug.names = [], createDebug.skips = [], createDebug.formatters = {}, 
                createDebug.selectColor = function(namespace) {
                    let hash = 0;
                    for (let i = 0; i < namespace.length; i++) hash = (hash << 5) - hash + namespace.charCodeAt(i), 
                    hash |= 0;
                    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
                }, createDebug.enable(createDebug.load()), createDebug;
            };
        },
        736: module => {
            module.exports = "object" == typeof self ? self.FormData : window.FormData;
        },
        820: module => {
            var s = 1e3, m = 60 * s, h = 60 * m, d = 24 * h, w = 7 * d, y = 365.25 * d;
            function plural(ms, msAbs, n, name) {
                var isPlural = msAbs >= 1.5 * n;
                return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
            }
            module.exports = function(val, options) {
                options = options || {};
                var type = typeof val;
                if ("string" === type && val.length > 0) return function(str) {
                    if ((str = String(str)).length > 100) return;
                    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
                    if (!match) return;
                    var n = parseFloat(match[1]);
                    switch ((match[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return n * y;

                      case "weeks":
                      case "week":
                      case "w":
                        return n * w;

                      case "days":
                      case "day":
                      case "d":
                        return n * d;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * h;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * m;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * s;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return n;

                      default:
                        return;
                    }
                }(val);
                if ("number" === type && isFinite(val)) return options.long ? function(ms) {
                    var msAbs = Math.abs(ms);
                    if (msAbs >= d) return plural(ms, msAbs, d, "day");
                    if (msAbs >= h) return plural(ms, msAbs, h, "hour");
                    if (msAbs >= m) return plural(ms, msAbs, m, "minute");
                    if (msAbs >= s) return plural(ms, msAbs, s, "second");
                    return ms + " ms";
                }(val) : function(ms) {
                    var msAbs = Math.abs(ms);
                    if (msAbs >= d) return Math.round(ms / d) + "d";
                    if (msAbs >= h) return Math.round(ms / h) + "h";
                    if (msAbs >= m) return Math.round(ms / m) + "m";
                    if (msAbs >= s) return Math.round(ms / s) + "s";
                    return ms + "ms";
                }(val);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
            };
        },
        301: module => {
            module.exports = '<div id="notification-link" class="notification-links" tpInjected>\r\n\r\n</div>\r\n\r\n<div id="chat-wrapper" tpInjected>\r\n  <div id="chat-container">\r\n    <div id="chat-header-container">\r\n      <ul id="chat-menu-container">\r\n        <li id="function-title">\r\n          <div id="title">\r\n            <p class="extension-title">Teleparty</p>\r\n          </div>\r\n        </li>\r\n        <li id="function-user">\r\n          <div id="link-icon">\r\n            <img class="chat-link" src="{LINK_SVG}">\r\n            <input id="share-url" type="text" readonly="true" autocomplete="off" autofocus style="display:none;" />\r\n          </div>\r\n          <a id="user-icon">\r\n            <img src="{USER_ICON}" />\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <div id="chat-link-container" style=\'display:none;\'>\r\n        <div id="chat-link">\r\n          <div id="chat-link-url">\r\n            <p>The url link goes here.</p>\r\n          </div>\r\n          <div id="chat-link-icon">\r\n            <img src="{LINK_SVG}">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div id="chat-icon-container" style="display:none">\r\n        <div id="icon-title-container">\r\n          <div id="icon-title">\r\n            <p class="extension-description">Click to switch icon</p>\r\n          </div>\r\n        </div>\r\n        <div id="icon-holder-container">\r\n          <div id="icon-holder-template">\r\n            <div class="icon-holder-wrap">\r\n              <p class="extension-txt-indicator"></p>\r\n              <ul id="icon-holder"></ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id="setting-edit" class="chat-settings-container setting-container" style="display:none">\r\n\r\n      <div class="setting-usericon">\r\n        <div class="section-b-inner section-inner">\r\n          <a class="user-icon">\r\n            <img src="{USER_ICON}" />\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="section-c setting-nickname">\r\n        <div class="section-c-inner section-inner">\r\n          <div class="nickname-section row-wrap">\r\n            <div class="nickname-wrap row-one">\r\n              <p class="extension-description">Nickname</p>\r\n            </div>\r\n            <div class="nickname-input row-two">\r\n              <input id="nickname-edit" class="extension-txt" autocomplete="off" type="text"\r\n                placeholder="{USER_NICKNAME}" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div id="settings-save" class="chat-settings-container setting-container" style="display:none">\r\n      <div class="section-d">\r\n        <div class="section-d-inner section-inner">\r\n\r\n          <div class="btns">\r\n            <button id="saveChanges" class=\'extension-btn\'>Save Changes</button>\r\n            <button id="cancelNickname" class=\'extension-btn cancel-btn\'>Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id="chat-ad-holder" style="display: none;">\r\n      <p id="chat-ad-sponsored-text">Sponsored</p>\r\n      <div id="chat-ad-container" class="chat-ad-container">\r\n        <a id="chat-ad-image-holder" rel="nofollow" target="_blank">\r\n          <img id="chat-ad-image" />\r\n        </a>\r\n      </div>\r\n      <div id="chat-ad-button" class="chat-ad-btn-container">\r\n        <a id="chat-ad-btn" class="extension-btn" rel="nofollow" target="_blank">\r\n          <p id="chat-ad-cta-text" class="extension-txt-indicator">Click to watch</p>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div id="chat-history-container">\r\n      <div id="chat-history">\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <div id="presence-indicator" class="extension-txt-indicator">\r\n      <p class="extension-txt-indicator">People are currently typing...</p>\r\n    </div>\r\n\r\n    <div id="chat-input-container" class="extension-border-top">\r\n      <input id="chat-input" class="extension-txt" type="text" placeholder="Type a message..."\r\n        autocomplete="off"></input>\r\n    </div>\r\n  </div>\r\n</div>';
        },
        204: (module, __unused_webpack_exports, __webpack_require__) => {
            module.exports = self.fetch || (self.fetch = __webpack_require__(869).default || __webpack_require__(869));
        },
        869: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            function __WEBPACK_DEFAULT_EXPORT__(e, n) {
                return n = n || {}, new Promise((function(t, r) {
                    var s = new XMLHttpRequest, o = [], u = [], i = {}, a = function() {
                        return {
                            ok: 2 == (s.status / 100 | 0),
                            statusText: s.statusText,
                            status: s.status,
                            url: s.responseURL,
                            text: function() {
                                return Promise.resolve(s.responseText);
                            },
                            json: function() {
                                return Promise.resolve(s.responseText).then(JSON.parse);
                            },
                            blob: function() {
                                return Promise.resolve(new Blob([ s.response ]));
                            },
                            clone: a,
                            headers: {
                                keys: function() {
                                    return o;
                                },
                                entries: function() {
                                    return u;
                                },
                                get: function(e) {
                                    return i[e.toLowerCase()];
                                },
                                has: function(e) {
                                    return e.toLowerCase() in i;
                                }
                            }
                        };
                    };
                    for (var l in s.open(n.method || "get", e, !0), s.onload = function() {
                        s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, n, t) {
                            o.push(n = n.toLowerCase()), u.push([ n, t ]), i[n] = i[n] ? i[n] + "," + t : t;
                        })), t(a());
                    }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers) s.setRequestHeader(l, n.headers[l]);
                    s.send(n.body || null);
                }));
            }
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                default: () => __WEBPACK_DEFAULT_EXPORT__
            });
        },
        39: module => {
            "use strict";
            module.exports = '/* Breakpoints */\r\n/* Mixins */\r\n/* Remove */\r\n@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");\r\n.r-m {\r\n  margin: 0 !important;\r\n}\r\n\r\n.r-m-t {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.r-p-t {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.r-m-l {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.r-p-l {\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.r-m-r {\r\n  margin-right: 0 !important;\r\n}\r\n\r\n.r-p-r {\r\n  padding-right: 0 !important;\r\n}\r\n\r\n.r-m-b {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.r-p-b {\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.r-b-r {\r\n  border-radius: 0px !important;\r\n}\r\n\r\n.r-boxshadow {\r\n  box-shadow: none !important;\r\n}\r\n\r\n:root {\r\n  /* Patreon Color */\r\n  --patreon: #F96854;\r\n  /* Custom Colors */\r\n  --base-red: #EF3E3A;\r\n  --active-red: #ea0f0a;\r\n  --base-blue: #4da9ff;\r\n  --base-orange: #ff8d4c;\r\n  --base-green: #24D154;\r\n  /* White Colors */\r\n  --base-white: #FAFAFA;\r\n  --white-5: #F0F0F0;\r\n  --white-10: #DCDCDC;\r\n  --white-15: #C8C8C8;\r\n  --white-20: #B4B4B4;\r\n  --white-25: #A0A0A0;\r\n  --white-30: #8C8C8C;\r\n  --white-35: #787878;\r\n  /* Black Colors */\r\n  --base-black: #191919;\r\n  --black-5: #5A5A5A;\r\n  --black-10: #464646;\r\n  --black-15: #323232;\r\n  --black-20: #282828;\r\n  --black-25: #1e1e1e;\r\n  --black-30: #0a0a0a;\r\n}\r\n\r\n.base-white-bg {\r\n  background-color: var(--base-white);\r\n}\r\n\r\n.white-5-bg {\r\n  background-color: var(--white-5);\r\n}\r\n\r\n.white-10-bg {\r\n  background-color: var(--white-10);\r\n}\r\n\r\n.white-15-bg {\r\n  background-color: var(--white-15);\r\n}\r\n\r\n.white-20-bg {\r\n  background-color: var(--white-20);\r\n}\r\n\r\n.white-25-bg {\r\n  background-color: var(--white-25);\r\n}\r\n\r\n.white-30-bg {\r\n  background-color: var(--white-30);\r\n}\r\n\r\n.white-35-bg {\r\n  background-color: var(--white-35);\r\n}\r\n\r\n.base-black-bg {\r\n  background-color: var(--base-black);\r\n}\r\n\r\n.black-5-bg {\r\n  background-color: var(--black-5);\r\n}\r\n\r\n.black-10-bg {\r\n  background-color: var(--black-10);\r\n}\r\n\r\n.black-15-bg {\r\n  background-color: var(--black-15);\r\n}\r\n\r\n.black-20-bg {\r\n  background-color: var(--black-20);\r\n}\r\n\r\n.black-25-bg {\r\n  background-color: var(--black-25);\r\n}\r\n\r\n.black-30-bg {\r\n  background-color: var(--black-30);\r\n}\r\n\r\n.black-35-bg {\r\n  background-color: var(--black-35);\r\n}\r\n\r\n.base-red-bg {\r\n  background-color: var(--base-red);\r\n}\r\n\r\n.active-red-bg {\r\n  background-color: var(--active-red);\r\n}\r\n\r\n.base-orange-bg {\r\n  background-color: var(--base-orange);\r\n}\r\n\r\n.base-blue-bg {\r\n  background-color: var(--base-blue);\r\n}\r\n\r\n.base-green-bg {\r\n  background-color: var(--base-green);\r\n}\r\n\r\n.patreon-bg {\r\n  background-color: var(--patreon);\r\n}\r\n\r\n.txt-blue {\r\n  color: var(--base-blue) !important;\r\n}\r\n\r\n.txt-red {\r\n  color: var(--base-red) !important;\r\n}\r\n\r\n.txt-white {\r\n  color: var(--base-white) !important;\r\n}\r\n\r\ndiv, p, span, a, h1, h2, h3, h4, h5, h6, li, ul, button {\r\n  word-wrap: break-word;\r\n}\r\n\r\n:root {\r\n  --regular: 400;\r\n  --medium: 500;\r\n  --semi-bold: 600;\r\n  --bold: 700;\r\n  --extra-bold: 800;\r\n  --black: 900;\r\n}\r\n\r\n.extension-title {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--base-red);\r\n  font-size: 16px;\r\n  letter-spacing: 0.2px;\r\n}\r\n.extension-txt {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--regular);\r\n  color: white;\r\n  font-size: 14px;\r\n}\r\n.extension-txt-indicator {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--regular);\r\n  color: var(--white-35);\r\n  font-size: 11px;\r\n}\r\n.extension-description {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--white-10);\r\n  font-size: 13px;\r\n}\r\n.extension-border-bot {\r\n  border-bottom: 1px solid var(--black-10);\r\n}\r\n.extension-border-top {\r\n  border-top: 1px solid var(--black-10);\r\n}\r\n.extension-btn {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  background: var(--base-red);\r\n  color: var(--base-white);\r\n  padding: 10px 0px;\r\n  border-radius: 2px;\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  transition: background 0.3s ease;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n.extension-btn:hover {\r\n  background: var(--active-red);\r\n}\r\n.extension-btn a {\r\n  font-family: "Poppins", sans-serif;\r\n  font-weight: var(--medium);\r\n  color: var(--base-white);\r\n}\r\n\r\n#alert, #alert-dialog-wrapper {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 9999999;\r\n  align-items: center;\r\n  box-shadow: 8px 6px 20px 1px rgba(0, 0, 0, 0.2);\r\n}\r\n#alert-dialog-container {\r\n  background: var(--base-black);\r\n  max-width: 400px;\r\n  margin: 0 auto;\r\n  border-radius: 4px;\r\n}\r\n#alert-title-wrapper {\r\n  padding: 20px 20px 0px 20px;\r\n}\r\n#alert-title-wrapper .alert-title {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n#alert-title-wrapper .alert-title .alert-x {\r\n  color: var(--base-white);\r\n}\r\n#alert-title-wrapper .extension-border-bot {\r\n  padding-top: 10px;\r\n}\r\n#alert-description {\r\n  padding: 10px 20px 20px 20px;\r\n}\r\n\r\n#alert-x-btn {\r\n  background: none !important;\r\n  border: none !important;\r\n}\r\n\r\n#alert-content-txt {\r\n  margin: 0 !important;\r\n}\r\n\r\n#alert-title-txt {\r\n  margin: 0 !important;\r\n}\r\n\r\n#alert-return-btn {\r\n  border: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=alert.css.map */';
        },
        644: module => {
            "use strict";
            module.exports = '@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap";\r\nbody,\r\nhtml {\r\n  font-size: 16px;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\na,\r\np,\r\nul,\r\nli,\r\nol,\r\nbutton,\r\nbody,\r\nhtml {\r\n  padding: 0em;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\na,\r\np,\r\nul,\r\nli,\r\nol,\r\nbutton,\r\nbody,\r\nhtml {\r\n  margin: 0em;\r\n}\r\nul,\r\nli,\r\nol,\r\na {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\ninput,\r\nbutton {\r\n  border: none;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nspan,\r\nbody,\r\nhtml {\r\n  user-select: text !important;\r\n  cursor: auto !important;\r\n}\r\nimg {\r\n  user-select: none !important;\r\n}\r\ndiv,\r\nsection,\r\nbutton,\r\ninput,\r\nform,\r\narticle {\r\n  outline: none;\r\n}\r\na {\r\n  display: block;\r\n  width: fit-content;\r\n}\r\nbutton,\r\ninput,\r\nform,\r\nfieldset {\r\n  background: none;\r\n}\r\nbutton:hover {\r\n  cursor: pointer;\r\n}\r\n.r-m {\r\n  margin: 0 !important;\r\n}\r\n.r-m-t {\r\n  margin-top: 0 !important;\r\n}\r\n.r-p-t {\r\n  padding-top: 0 !important;\r\n}\r\n.r-m-l {\r\n  margin-left: 0 !important;\r\n}\r\n.r-p-l {\r\n  padding-left: 0 !important;\r\n}\r\n.r-m-r {\r\n  margin-right: 0 !important;\r\n}\r\n.r-p-r {\r\n  padding-right: 0 !important;\r\n}\r\n.r-m-b {\r\n  margin-bottom: 0 !important;\r\n}\r\n.r-p-b {\r\n  padding-bottom: 0 !important;\r\n}\r\n.r-b-r {\r\n  border-radius: 0px !important;\r\n}\r\n.r-boxshadow {\r\n  box-shadow: none !important;\r\n}\r\n:root {\r\n  --patreon: #f96854;\r\n  --base-red: #ef3e3a;\r\n  --active-red: #ea0f0a;\r\n  --base-blue: #4da9ff;\r\n  --base-orange: #ff8d4c;\r\n  --base-green: #24d154;\r\n  --base-white: #fafafa;\r\n  --white-5: #f0f0f0;\r\n  --white-10: #dcdcdc;\r\n  --white-15: #c8c8c8;\r\n  --white-20: #b4b4b4;\r\n  --white-25: #a0a0a0;\r\n  --white-30: #8c8c8c;\r\n  --white-35: #787878;\r\n  --base-black: #191919;\r\n  --black-5: #5a5a5a;\r\n  --black-10: #464646;\r\n  --black-15: #323232;\r\n  --black-20: #282828;\r\n  --black-25: #1e1e1e;\r\n  --black-30: #0a0a0a;\r\n}\r\n.base-white-bg {\r\n  background-color: var(--base-white);\r\n}\r\n.white-5-bg {\r\n  background-color: var(--white-5);\r\n}\r\n.white-10-bg {\r\n  background-color: var(--white-10);\r\n}\r\n.white-15-bg {\r\n  background-color: var(--white-15);\r\n}\r\n.white-20-bg {\r\n  background-color: var(--white-20);\r\n}\r\n.white-25-bg {\r\n  background-color: var(--white-25);\r\n}\r\n.white-30-bg {\r\n  background-color: var(--white-30);\r\n}\r\n.white-35-bg {\r\n  background-color: var(--white-35);\r\n}\r\n.base-black-bg {\r\n  background-color: var(--base-black);\r\n}\r\n.black-5-bg {\r\n  background-color: var(--black-5);\r\n}\r\n.black-10-bg {\r\n  background-color: var(--black-10);\r\n}\r\n.black-15-bg {\r\n  background-color: var(--black-15);\r\n}\r\n.black-20-bg {\r\n  background-color: var(--black-20);\r\n}\r\n.black-25-bg {\r\n  background-color: var(--black-25);\r\n}\r\n.black-30-bg {\r\n  background-color: var(--black-30);\r\n}\r\n.black-35-bg {\r\n  background-color: var(--black-35);\r\n}\r\n.base-red-bg {\r\n  background-color: var(--base-red);\r\n}\r\n.active-red-bg {\r\n  background-color: var(--active-red);\r\n}\r\n.base-orange-bg {\r\n  background-color: var(--base-orange);\r\n}\r\n.base-blue-bg {\r\n  background-color: var(--base-blue);\r\n}\r\n.base-green-bg {\r\n  background-color: var(--base-green);\r\n}\r\n.patreon-bg {\r\n  background-color: var(--patreon);\r\n}\r\n.txt-blue {\r\n  color: var(--base-blue) !important;\r\n}\r\n.txt-red {\r\n  color: var(--base-red) !important;\r\n}\r\n.txt-white {\r\n  color: var(--base-white) !important;\r\n}\r\ndiv,\r\np,\r\nspan,\r\na,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\nli,\r\nul,\r\nbutton {\r\n  word-wrap: break-word;\r\n}\r\n:root {\r\n  --regular: 400;\r\n  --medium: 500;\r\n  --semi-bold: 600;\r\n  --bold: 700;\r\n  --extra-bold: 800;\r\n  --black: 900;\r\n}\r\n.extension-title {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--base-red);\r\n  font-size: 16px;\r\n  letter-spacing: 0.2px;\r\n}\r\n.extension-txt {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  color: var(--white-15);\r\n  font-size: 14px;\r\n}\r\n.extension-txt-indicator {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  color: var(--white-35);\r\n  font-size: 11px;\r\n}\r\n.extension-description {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--white-10);\r\n  font-size: 13px;\r\n}\r\n.extension-border-bot {\r\n  border-bottom: 1px solid var(--black-10);\r\n}\r\n.extension-border-top {\r\n  border-top: 1px solid var(--black-10);\r\n}\r\n.extension-btn {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  background: var(--base-red);\r\n  color: var(--base-white);\r\n  padding: 10px 0px;\r\n  border-radius: 2px;\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  transition: background 0.3s ease;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: center;\r\n  font-size: 14px;\r\n}\r\n.cancel-btn {\r\n  border: 1px solid #EF3E3A;\r\n  box-sizing: border-box;\r\n  border-radius: 2.23846px;\r\n  color: var(--base-red);\r\n  background: none !important;\r\n}\r\n.extension-btn:hover {\r\n  background: var(--active-red);\r\n}\r\n.extension-btn a {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--base-white);\r\n}\r\n::-webkit-scrollbar {\r\n  width: 2px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n  background: var(--base-red);\r\n  border-radius: 10px;\r\n}\r\n#chat-wrapper {\r\n  position: fixed;\r\n  right: 0;\r\n  width: 288px;\r\n  height: 100%;\r\n  background: var(--base-black);\r\n}\r\n#chat-container {\r\n  width: 264px;\r\n  height: 100%;\r\n  margin: 0 auto;\r\n  padding: 12px 0px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n#chat-main {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n#chat-menu-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 0px !important;\r\n  padding-left: 0px !important;\r\n}\r\n#chat-menu-container li {\r\n  list-style: none !important;\r\n}\r\n#chat-menu-container #title h1 {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  color: var(--base-red);\r\n  font-size: 16px;\r\n  letter-spacing: 0.5px;\r\n}\r\n#chat-menu-container #function-user {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n}\r\n#chat-menu-container #function-user #link-icon {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  padding-right: 10px;\r\n  cursor: pointer;\r\n}\r\n#chat-menu-container #function-user #link-icon .chat-link {\r\n  color: var(--base-white);\r\n  width: 18px;\r\n  height: 18px;\r\n  transform: scale(1);\r\n  transition: color 0.3s ease;\r\n}\r\n#chat-menu-container #function-user #link-icon .chat-link:hover {\r\n  color: var(--base-red);\r\n  transform: scale(1.05);\r\n}\r\n#chat-menu-container #function-user #user-icon img {\r\n  width: 38px;\r\n  height: 38px;\r\n  transform: scale(1);\r\n  transition: transform 0.3s ease;\r\n}\r\n#chat-menu-container #function-user #user-icon img:hover {\r\n  transform: scale(1.05);\r\n}\r\n#chat-ad-cta-text {\r\n  cursor: pointer !important;\r\n}\r\n#chat-ad-sponsored-text {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  color: var(--white-35);\r\n  font-size: 10px;\r\n  margin-bottom: 5px;\r\n}\r\n#chat-history-container {\r\n  display: flex;\r\n  flex-flow: column;\r\n  justify-content: flex-end;\r\n  flex: 1;\r\n  height: 50px;\r\n}\r\n#chat-history-container #chat-history {\r\n  overflow: auto;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-top: 10px;\r\n}\r\n#chat-ad-holder {\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid var(--black-10);\r\n}\r\n#chat-ad-header {\r\n  margin-bottom: 5px;\r\n}\r\n#chat-ad-header p {\r\n  color: var(--white-35);\r\n  font-size: 10px;\r\n}\r\n#chat-ad-image {\r\n  width: 264px;\r\n  height: 88px;\r\n  border-radius: 2px;\r\n}\r\n#chat-ad-btn {\r\n  background: linear-gradient(140deg, #dc4046 0%, #9e55a0 100%);\r\n}\r\n#chat-history-container #chat-history .msg,\r\n#chat-history-container #chat-history .msg-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  padding: 5px 0px;\r\n  align-items: center;\r\n}\r\n#chat-history-container #chat-history .msg-container {\r\n  align-items: flex-start;\r\n}\r\n#chat-history-container #chat-history .msg .icon img,\r\n#chat-history-container #chat-history .msg .icon-name img,\r\n#chat-history-container #chat-history .msg-container .icon img,\r\n#chat-history-container #chat-history .msg-container .icon-name img {\r\n  width: 36px;\r\n  height: 36px;\r\n}\r\n#chat-history-container #chat-history .msg .msg-txt,\r\n#chat-history-container #chat-history .msg-container .msg-txt {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  width: 80%;\r\n}\r\n#chat-history-container #chat-history .msg .message,\r\n#chat-history-container #chat-history .msg .message-system,\r\n#chat-history-container #chat-history .msg .message-txt,\r\n#chat-history-container #chat-history .msg-container .message,\r\n#chat-history-container #chat-history .msg-container .message-system,\r\n#chat-history-container #chat-history .msg-container .message-txt {\r\n  width: 80%;\r\n}\r\n#chat-history-container #chat-history .msg .message h3,\r\n#chat-history-container #chat-history .msg .message-system h3,\r\n#chat-history-container #chat-history .msg .message-txt h3,\r\n#chat-history-container #chat-history .msg-container .message h3,\r\n#chat-history-container #chat-history .msg-container .message-system h3,\r\n#chat-history-container #chat-history .msg-container .message-txt h3 {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--semi-bold);\r\n  color: var(--base-white);\r\n  font-size: 14px;\r\n  line-height: 1.2;\r\n  letter-spacing: 0.2px;\r\n}\r\n#chat-history-container #chat-history .msg .message p,\r\n#chat-history-container #chat-history .msg .message-system p,\r\n#chat-history-container #chat-history .msg .message-txt p,\r\n#chat-history-container #chat-history .msg-container .message p,\r\n#chat-history-container #chat-history .msg-container .message-system p,\r\n#chat-history-container #chat-history .msg-container .message-txt p {\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--regular);\r\n  font-size: 14px;\r\n  line-height: normal;\r\n}\r\n#chat-history-container #chat-history .msg .message-txt p,\r\n#chat-history-container #chat-history .msg-container .message-txt p {\r\n  color: #fff;\r\n  word-break: break-word !important;\r\n  line-height: normal;\r\n}\r\n#chat-history-container #chat-history .msg .message-system p,\r\n#chat-history-container #chat-history .msg-container .message-system p {\r\n  color: var(--white-35);\r\n  font-style: italic;\r\n  line-height: normal;\r\n}\r\n#chat-input-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  margin-bottom: 10px;\r\n}\r\n#chat-input-container input {\r\n  padding-top: 5px;\r\n  width: 100%;\r\n  border: none !important;\r\n  background: none !important;\r\n}\r\n#chat-input-container input:hover {\r\n  cursor: auto !important;\r\n}\r\n#chat-input-container #emoji-btn {\r\n  width: 10%;\r\n}\r\n#chat-input-container #emoji-btn .test-emoji-btn {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  padding: 2.5px;\r\n}\r\n#chat-icon-container {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  flex-flow: column;\r\n  height: 100%;\r\n  display: none;\r\n  padding-top: 10px;\r\n}\r\n#chat-icon-container #icon-title-container {\r\n  padding-bottom: 10px;\r\n}\r\n#chat-icon-container #icon-holder {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n}\r\n#chat-icon-container #icon-holder .image-button {\r\n  width: 25%;\r\n  padding: 1px 3.75px;\r\n}\r\n#chat-icon-container #icon-holder .image-button .img-class {\r\n  width: 100%;\r\n  height: 100%;\r\n  transform: scale(0.95);\r\n  transition: transform 0.3s ease;\r\n}\r\n#chat-icon-container #icon-holder .image-button .img-class:hover {\r\n  transform: scale(1);\r\n}\r\n\r\n#chat-ad-btn p {\r\n  color: var(--base-white);\r\n  height: 100%;\r\n}\r\n\r\n#emoji-picker-container {\r\n  position: absolute;\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  justify-content: space-between;\r\n  background: var(--black-15);\r\n  width: 100%;\r\n  height: 200px;\r\n  bottom: 136px;\r\n  border-radius: 2px;\r\n  padding: 10px;\r\n}\r\n#emoji-filter-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  height: 10%;\r\n}\r\n#emoji-filter-container .emoji-filter-icons {\r\n  width: 11%;\r\n  height: 100%;\r\n}\r\n#emoji-filter-container .emoji-filter-icons img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#emoji-category-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  position: relative;\r\n  margin-top: 4%;\r\n  height: 84%;\r\n}\r\n#emoji-category-container .emoji-category-wrap {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  height: auto;\r\n  padding-top: 10px;\r\n}\r\n#emoji-category-container .emoji-category-wrap:first-child {\r\n  padding-top: 0px;\r\n}\r\n#emoji-category-container .emoji-category-wrap p {\r\n  width: 100%;\r\n  padding-bottom: 5px;\r\n}\r\n#emoji-category-container .emoji-category-wrap img {\r\n  width: 15%;\r\n  height: auto;\r\n  padding: 4px;\r\n}\r\n#icon-holder {\r\n  padding: 0px !important;\r\n  margin: 0px !important;\r\n}\r\n#icon-holder-container {\r\n  height: calc(100% - 74px);\r\n  overflow: auto;\r\n}\r\n.icon-holder-wrap {\r\n  padding: 10px 0px;\r\n}\r\n.icon-holder-wrap:first-child {\r\n  padding: 0px;\r\n}\r\n.icon-holder-wrap p {\r\n  padding-bottom: 5px;\r\n}\r\n.setting,\r\n.setting-container {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n  display: none;\r\n}\r\n.setting-usericon {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: center;\r\n  padding-top: 10px;\r\n}\r\n.setting-usericon img {\r\n  width: 80px;\r\n  height: 80px;\r\n  transform: scale(1);\r\n  transition: transform 0.3s ease;\r\n}\r\n.setting-usericon img:hover {\r\n  transform: scale(1.05);\r\n}\r\n.setting-nickname {\r\n  margin-top: 10px;\r\n}\r\n.setting-nickname .nickname,\r\n.setting-nickname .nickname-input,\r\n.setting-nickname .nickname-wrap {\r\n  width: 100%;\r\n}\r\n.setting-nickname .nickname-wrap {\r\n  display: flex;\r\n  flex-flow: wrap column;\r\n}\r\n.setting-nickname .nickname-input {\r\n  margin-top: 5px;\r\n}\r\n.setting-nickname .nickname-input input {\r\n  border-radius: 2px;\r\n  padding: 8px 10px;\r\n  width: 100%;\r\n  background: var(--black-15);\r\n  border: none !important;\r\n}\r\n.setting-nickname .nickname-input input:hover {\r\n  cursor: auto !important;\r\n}\r\n#presence-indicator {\r\n  display: block;\r\n  padding-bottom: 5px;\r\n  height: 20px;\r\n}\r\n#patreon,\r\n#patreon-link,\r\n#patreon-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n#patreon-container {\r\n  padding-top: 10px;\r\n}\r\n#patreon-link img {\r\n  border-radius: 20px;\r\n  width: 130px;\r\n}\r\n#teleparty-blog-container {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  padding-top: 10px;\r\n  z-index: 10;\r\n}\r\n#teleparty-blog-btn {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n  height: 36px;\r\n}\r\n#teleparty-blog-btn img {\r\n  height: 32px;\r\n}\r\n#teleparty-blog-btn p {\r\n  display: flex;\r\n  flex-flow: wrap row;\r\n  align-items: center;\r\n  font-family: "Poppins", sans-serif !important;\r\n  font-weight: var(--medium);\r\n  background: var(--base-red);\r\n  color: var(--base-white);\r\n  padding: 6px 20px;\r\n  border-radius: 20px;\r\n  height: 100%;\r\n}\r\n#teleparty-blog-btn p:hover {\r\n  cursor: pointer !important;\r\n} /*# sourceMappingURL=style.min.css.map */\r\n';
        }
    }, __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        if (__webpack_module_cache__[moduleId]) return __webpack_module_cache__[moduleId].exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        return __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.exports;
    }
    __webpack_require__.n = module => {
        var getter = module && module.__esModule ? () => module.default : () => module;
        return __webpack_require__.d(getter, {
            a: getter
        }), getter;
    }, __webpack_require__.d = (exports, definition) => {
        for (var key in definition) __webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
            enumerable: !0,
            get: definition[key]
        });
    }, __webpack_require__.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")();
        } catch (e) {
            if ("object" == typeof window) return window;
        }
    }(), __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop), 
    __webpack_require__.r = exports => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(exports, "__esModule", {
            value: !0
        });
    }, (() => {
        "use strict";
        var debug = console.log.bind(window.console);
        function _defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        let PlaybackState, SessionState;
        function isHuluParty(url) {
            return url.hostname.includes(".hulu.") && url.pathname.includes("/watch");
        }
        function delay(milliseconds) {
            return function(result) {
                return new Promise((function(resolve, reject) {
                    setTimeout((function() {
                        resolve(result);
                    }), milliseconds);
                }));
            };
        }
        function delayUntil(condition, maxDelay) {
            let delayStep = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 250;
            return function(result) {
                const startTime = (new Date).getTime();
                return function checkForCondition() {
                    return condition() ? Promise.resolve(result) : null !== maxDelay && (new Date).getTime() - startTime > maxDelay ? Promise.reject(new Error("delayUntil timed out" + condition)) : delay(delayStep)().then(checkForCondition);
                }();
            };
        }
        function shove(array, value, limit) {
            array.push(value), array.length > limit && array.splice(0, array.length - limit);
        }
        function median(array) {
            return array.concat().sort()[Math.floor(array.length / 2)];
        }
        function injectScriptText(script) {
            const s = document.createElement("script");
            s.setAttribute("tpInjected", ""), s.textContent = script, (document.head || document.documentElement).appendChild(s), 
            s.remove();
        }
        !function(PlaybackState) {
            PlaybackState.LOADING = "loading", PlaybackState.PLAYING = "playing", PlaybackState.IDLE = "idle", 
            PlaybackState.AD_PLAYING = "ad_playing", PlaybackState.PAUSED = "paused", PlaybackState.NOT_READY = "not_ready";
        }(PlaybackState || (PlaybackState = {})), function(SessionState) {
            SessionState.PAUSED = "paused", SessionState.PLAYING = "playing";
        }(SessionState || (SessionState = {}));
        let StreamingServiceName;
        !function(StreamingServiceName) {
            StreamingServiceName.NETFLIX = "NETFLIX", StreamingServiceName.HULU = "HULU", StreamingServiceName.DISNEY_PLUS = "DISNEY_PLUS", 
            StreamingServiceName.HBO_MAX = "HBO_MAX", StreamingServiceName.HBO_NOW = "HBO_NOW", 
            StreamingServiceName.YOUTUBE = "YOUTUBE", StreamingServiceName.AMAZON = "AMAZON";
        }(StreamingServiceName || (StreamingServiceName = {}));
        function HuluVideoApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class HuluVideoApi extends class {
            constructor() {
                _defineProperty(this, "_uiEventsHappening", 0), _defineProperty(this, "_hostOnly", !1);
            }
            set hostOnly(hostOnly) {
                this._hostOnly = hostOnly;
            }
            get hostOnly() {
                return this._hostOnly;
            }
            get uiEventsHappening() {
                return this._uiEventsHappening;
            }
            async doAdCheck() {}
        } {
            constructor() {
                super(), HuluVideoApi_defineProperty(this, "_currentlyWatchingAds", void 0), HuluVideoApi_defineProperty(this, "_videoId", void 0), 
                HuluVideoApi_defineProperty(this, "_video", void 0), HuluVideoApi_defineProperty(this, "_isPaused", void 0), 
                HuluVideoApi_defineProperty(this, "_isPausedUpdatedAt", void 0), this._uiEventsHappening = 0, 
                this._currentlyWatchingAds = !1, this._videoId = "", this._isPaused = !1, this._isPausedUpdatedAt = 0;
                injectScriptText('window.seekScriptLoaded=!0;var seekInteraction=function(e){if(e.source==window){if(e.data.type&&"SEEK"==e.data.type)document.querySelector(\'video\').__HuluDashPlayer__.currentTime=e.data.time/1000;e.data.type&&"teardown"==e.data.type&&(window.removeEventListener("message",seekInteraction,!1),window.seekScriptLoaded=!1)}};window.addEventListener("message",seekInteraction,!1);');
            }
            async waitNewVideoReadyAsync() {
                await delayUntil((() => null != this._getCurrentTime() && this._getPlaybackState() !== PlaybackState.LOADING && this._getPlaybackState() !== PlaybackState.AD_PLAYING), 1 / 0)();
            }
            async waitVideoApiReadyAsync() {
                if (!this._video) try {
                    var _document$querySelect;
                    await delayUntil((() => document.querySelector("video") instanceof Element), 8e3)(), 
                    this._video = null !== (_document$querySelect = document.querySelector("video")) && void 0 !== _document$querySelect ? _document$querySelect : void 0;
                } catch (error) {
                    throw new Error("Failed to load video in time. Please refresh the page and try again.");
                }
            }
            async doAdCheck() {
                super.doAdCheck(), debug("Checking for ads"), this._currentlyWatchingAds ? debug("Already watching an ad") : this.checkForceAd() ? (debug("Should force an ad"), 
                await this.forceAd()) : debug("Shouldn't force ad");
            }
            async forceAd() {
                this._uiEventsHappening += 1;
                try {
                    debug("Trying to force ad"), await this.waitUpdatePaused(), this._isPaused && (debug("Triggering play"), 
                    await this.play()), this._currentlyWatchingAds ? debug("In an ad") : (await delayUntil((() => this._currentlyWatchingAds || !this.checkForceAd()), 3e3)(), 
                    this._currentlyWatchingAds ? debug("Forced an Ad to Play :)") : debug("Ad should be playing by now."));
                } finally {
                    this._uiEventsHappening -= 1;
                }
            }
            checkForceAd() {
                const videoDuration = this._getDuration(), currentPosition = this._getCurrentTime();
                if (videoDuration && currentPosition) {
                    document.querySelectorAll(".TimelineAdBreaks__adbreak").forEach(((val, key, parent) => {
                        const difference = parseFloat(val.style.left) / 100 * videoDuration * 1e3 - currentPosition;
                        if (difference >= -500 && difference <= 2500) return !0;
                    }));
                }
                return !1;
            }
            async waitVideoDoneLoadingAsync() {
                await delayUntil((() => this._getPlaybackState() == PlaybackState.PLAYING || this._getPlaybackState() == PlaybackState.PAUSED), 1e4)();
            }
            getStateAsync() {
                return new Promise(((resolve, reject) => {
                    const playbackState = this._getPlaybackState(), playbackPositionMilliseconds = this._getCurrentTime();
                    null !== playbackState && null != playbackPositionMilliseconds ? resolve({
                        playbackState,
                        playbackPositionMilliseconds
                    }) : reject();
                }));
            }
            getVideoDataAsync() {
                return new Promise(((resolve, reject) => {
                    const videoTitle = this._getVideoTitle(), videoDuration = this._getDuration(), videoId = this._getVideoId();
                    null !== videoTitle && null !== videoDuration && null !== videoId ? resolve({
                        videoTitle,
                        videoDuration,
                        videoId
                    }) : reject();
                }));
            }
            jumpToNextEpisode(nextEpisodeMessageData) {
                return new Promise((resolve => {
                    var _window$location$href;
                    this._uiEventsHappening += 1;
                    (null !== (_window$location$href = window.location.href.match(/^.*\/([a-z\-0-9]+)\??.*/)) && void 0 !== _window$location$href ? _window$location$href : [])[1] != nextEpisodeMessageData.videoId && (jQuery(".UpNextButton").length > 0 && jQuery(".UpNextButton").click(), 
                    jQuery(".end-card__metadata-area-play-button").length > 0 && (debug("trying to click"), 
                    jQuery(".end-card__metadata-area-play-button").click(), debug("trying to click done")), 
                    jQuery(".up-next").length > 0 && jQuery(".up-next").click(), jQuery(".WatchNext-still-hover-container").length > 0 ? jQuery(".WatchNext-still-hover-container").click() : jQuery(".button-nfplayerNextEpisode").length > 0 ? jQuery(".button-nfplayerNextEpisode").click() : jQuery(".nf-flat-button-text").length > 0 && jQuery(".nf-flat-button-text")[0].innerText.toLowerCase().includes("next episode") && jQuery(".nf-flat-button-text")[0].click()), 
                    this._uiEventsHappening -= 1, resolve();
                }));
            }
            async pause() {
                this._uiEventsHappening += 1, this._getPlaybackState() !== PlaybackState.PAUSED && jQuery(".PauseButton").length > 0 && jQuery(".PauseButton")[0].click();
                try {
                    await delayUntil((() => this._getPlaybackState() === PlaybackState.PAUSED), 1e3)();
                } finally {
                    this._uiEventsHappening -= 1;
                }
            }
            async play() {
                this._uiEventsHappening += 1, this._getPlaybackState() !== PlaybackState.PLAYING && jQuery(".PlayButton").length > 0 && jQuery(".PlayButton")[0].click();
                try {
                    await delayUntil((() => this._getPlaybackState() === PlaybackState.PLAYING), 2500)();
                } finally {
                    this._uiEventsHappening -= 1;
                }
            }
            async freeze(milliseconds) {
                this._uiEventsHappening += 1;
                try {
                    await this.pause(), await delay(milliseconds)(), await this.play();
                } finally {
                    this._uiEventsHappening -= 1;
                }
            }
            async setCurrentTime(time) {
                debug("Seek called with window post Message", !0), this._uiEventsHappening += 1, 
                window.postMessage({
                    type: "SEEK",
                    time
                }, "*");
                try {
                    await delay(250)(), await delayUntil((() => this._getPlaybackState() !== PlaybackState.LOADING), 1e4);
                } finally {
                    this._uiEventsHappening -= 1;
                }
            }
            getVideoElement() {
                return document.querySelector("video");
            }
            _getAdVideoElement() {
                return document.querySelectorAll("video")[1];
            }
            _getPlaybackState() {
                const video = this.getVideoElement();
                if (null === video) return PlaybackState.NOT_READY;
                const loadingScreenContainerJqueryResult = jQuery(".loading-screen-container");
                if (loadingScreenContainerJqueryResult.length > 0 && "flex" === loadingScreenContainerJqueryResult[0].style.display) return PlaybackState.LOADING;
                const adVideo = this._getAdVideoElement();
                return null !== adVideo && "" !== adVideo.src || jQuery(".AdUnitView__adBar__timer").length > 0 || !0 === this._currentlyWatchingAds ? PlaybackState.AD_PLAYING : video.paused ? PlaybackState.PAUSED : PlaybackState.PLAYING;
            }
            get currentlyWatchingAds() {
                return this._currentlyWatchingAds;
            }
            set currentlyWatchingAds(currentlyWatchingAds) {
                this._currentlyWatchingAds = currentlyWatchingAds;
            }
            _getDuration() {
                var _this$getVideoElement, _this$getVideoElement2;
                return null !== (_this$getVideoElement = null === (_this$getVideoElement2 = this.getVideoElement()) || void 0 === _this$getVideoElement2 ? void 0 : _this$getVideoElement2.duration) && void 0 !== _this$getVideoElement ? _this$getVideoElement : null;
            }
            _getCurrentTime() {
                const video = this.getVideoElement();
                if (video) return Math.floor(1e3 * video.currentTime);
            }
            _getVideoTitle() {
                return "";
            }
            _getVideoId() {
                var _window$location$href2;
                return (null !== (_window$location$href2 = window.location.href.match(/^.*\/([a-z\-0-9]+)\??.*/)) && void 0 !== _window$location$href2 ? _window$location$href2 : [])[1];
            }
            onNode(evt) {
                "IsPaused" == evt.detail.type && (this._isPaused = evt.detail.paused, this._isPausedUpdatedAt = evt.detail.updatedAt);
            }
            getStreamingServiceName() {
                return StreamingServiceName.HULU;
            }
            async waitUpdatePaused() {
                const currentTime = Date.now();
                window.postMessage({
                    type: "IsPaused"
                }, "*"), console.time("node");
                try {
                    await delayUntil((() => this._isPausedUpdatedAt >= currentTime), 500, 10)();
                } catch (error) {
                    var _video$paused;
                    const video = this.getVideoElement();
                    this._isPaused = null === (_video$paused = null == video ? void 0 : video.paused) || void 0 === _video$paused || _video$paused;
                }
                console.timeEnd("node");
            }
            async getUpdateSessionDataAsync() {
                var _this$_getCurrentTime;
                const currentTime = null !== (_this$_getCurrentTime = this._getCurrentTime()) && void 0 !== _this$_getCurrentTime ? _this$_getCurrentTime : 0, currentTimeUpdatedAt = Date.now();
                await this.waitUpdatePaused();
                return {
                    state: this._isPaused ? SessionState.PAUSED : SessionState.PLAYING,
                    lastKnownTime: currentTime,
                    lastKnownTimeUpdatedAt: currentTimeUpdatedAt
                };
            }
        }
        const closeImage = chrome.extension.getURL("img/x-circle.svg"), ownerOnlyNextEpisodeModal = {
            title: "Teleparty | Disconnected from party",
            content: "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
            buttonTitle: "Return to Party"
        }, idleWarningModal = {
            title: "Teleparty | Are you still there?",
            content: "You will be removed from the party in 60 seconds for inactivity. Move your mouse to continue watching."
        }, failedNextEpisodeModal = {
            title: "Teleparty | Disconnected from party",
            content: "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
            buttonTitle: "Return to Party"
        }, lostBackgroundConnectionModal = {
            title: "Teleparty | Disconnected from party",
            content: "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
            buttonTitle: "Return to Party"
        };
        function showButtonMessage(options, buttonUrl) {
            hideAlertMessages();
            const modalTemplate = buttonUrl ? function(options) {
                return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${options.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${closeImage}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${options.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${options.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            }(options) : function(options) {
                return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${options.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${closeImage}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${options.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            }(options);
            document.body.insertAdjacentHTML("afterbegin", modalTemplate), jQuery("#alert-x-btn").click((() => {
                hideAlertMessages();
            })), buttonUrl && jQuery("#alert-return-btn").click((() => {
                hideAlertMessages(), window.location.href = buttonUrl;
            }));
        }
        function hideAlertMessages() {
            const alertWrapper = document.querySelector("#alert-dialog-wrapper");
            alertWrapper && alertWrapper.remove();
        }
        const DEFAULT_TEARDOWN = {
            showAlert: !1
        }, IDLE_TEARDOWN = {
            showAlert: !0,
            alertModal: {
                title: "Teleparty | Disconnected from party",
                content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
                buttonTitle: "Return to Party"
            }
        };
        function Message_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class Message {
            constructor(sender, target, type) {
                Message_defineProperty(this, "sender", void 0), Message_defineProperty(this, "target", void 0), 
                Message_defineProperty(this, "type", void 0), this.sender = sender, this.target = target, 
                this.type = type;
            }
        }
        class BackgroundMessage extends Message {
            constructor(sender, target, type) {
                var obj, key, value;
                super(sender, target, type), value = void 0, (key = "type") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.type = type;
            }
        }
        let BackgroundMessageType;
        !function(BackgroundMessageType) {
            BackgroundMessageType.JOIN_SESSION = "joinSession", BackgroundMessageType.GET_VIDEO_DATA = "getVideoData", 
            BackgroundMessageType.LOAD_SESSION = "loadSession", BackgroundMessageType.NO_SESSION_DATA = "noSessionData", 
            BackgroundMessageType.TEARDOWN = "teardown", BackgroundMessageType.ON_VIDEO_UPDATE = "onVideoUpdate", 
            BackgroundMessageType.SOCKET_LOST_CONNECTION = "socketLostConnection", BackgroundMessageType.REBOOT = "socketReconnect", 
            BackgroundMessageType.LOG_EVENT = "logEvent", BackgroundMessageType.LOG_EXPERIMENT = "logExpirement";
        }(BackgroundMessageType || (BackgroundMessageType = {}));
        class TeardownMessage extends BackgroundMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, BackgroundMessageType.TEARDOWN), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        const EXTENSION_ID = chrome.runtime.id;
        const Messaging_MessagePasser = new class {
            addListener(listener) {
                chrome.runtime.onMessage.addListener(listener);
            }
            removeListener(listener) {
                chrome.runtime.onMessage.removeListener(listener);
            }
            sendMessageToTabAsync(message, tabId) {
                let timeout = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e4;
                return new Promise(((resolve, reject) => {
                    const sendTimeout = setTimeout((() => {
                        reject();
                    }), timeout);
                    try {
                        chrome.tabs.sendMessage(tabId, message, (response => {
                            chrome.runtime.lastError && debug(chrome.runtime.lastError.message + JSON.stringify(message)), 
                            clearTimeout(sendTimeout), resolve(response);
                        }));
                    } catch (error) {
                        clearTimeout(sendTimeout), reject(error);
                    }
                }));
            }
            sendMessageToExtension(message, timeout) {
                return new Promise(((resolve, reject) => {
                    let sendTimeout = null;
                    timeout && (sendTimeout = setTimeout((() => {
                        reject({
                            error: "Send Message Timeout"
                        });
                    }), timeout));
                    try {
                        chrome.runtime.sendMessage(EXTENSION_ID, message, (response => {
                            chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(message)), 
                            sendTimeout && clearTimeout(sendTimeout), resolve(response);
                        }));
                    } catch (error) {
                        sendTimeout && clearTimeout(sendTimeout), reject(error);
                    }
                }));
            }
        };
        class LogEventMessage extends BackgroundMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, BackgroundMessageType.LOG_EVENT), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        function ChatEventListener_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class ChatEventListener {
            constructor(chatApi) {
                ChatEventListener_defineProperty(this, "_chatApi", void 0), ChatEventListener_defineProperty(this, "onFocus", this.onWindowFocus.bind(this)), 
                ChatEventListener_defineProperty(this, "_idleWarningTimeout", void 0), ChatEventListener_defineProperty(this, "_idleKickTimeout", void 0), 
                ChatEventListener_defineProperty(this, "_onReset", this.resetIdleTimer.bind(this)), 
                ChatEventListener_defineProperty(this, "_onFullScreenChange", this._onFullScreen.bind(this)), 
                this._chatApi = chatApi;
            }
            onIdleWarning() {
                debug("Idle Warning called"), showButtonMessage(idleWarningModal), this._idleKickTimeout = setTimeout(this.onIdleTimeout.bind(this), 6e4);
            }
            onIdleTimeout() {
                debug("Idle kick called");
                const logIdleKickMessage = new LogEventMessage("Content_Script", "Service_Background", {
                    eventType: "idle-kick",
                    sessionId: this._chatApi.getSessionId()
                }), teardownMessage = new TeardownMessage("Content_Script", "Service_Background", IDLE_TEARDOWN);
                Messaging_MessagePasser.sendMessageToExtension(logIdleKickMessage), Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
            }
            resetIdleTimer() {
                this._idleWarningTimeout && clearTimeout(this._idleWarningTimeout), this._idleKickTimeout && (hideAlertMessages(), 
                clearTimeout(this._idleKickTimeout)), this._idleWarningTimeout = setTimeout(this.onIdleWarning.bind(this), 27e5);
            }
            setupIdleListeners() {
                this._idleWarningTimeout = setTimeout(this.onIdleWarning.bind(this), 27e5), window.onmousemove = e => {
                    e.isTrusted && this._onReset();
                }, window.onmousedown = () => this._onReset(), window.ontouchstart = () => this._onReset(), 
                window.onkeydown = () => this._onReset();
            }
            removeIdleListeners() {
                this._idleWarningTimeout && clearTimeout(this._idleWarningTimeout), this._idleKickTimeout && clearTimeout(this._idleKickTimeout), 
                window.onmousemove = null, window.onmousedown = null, window.ontouchstart = null, 
                window.onkeydown = null;
            }
            startListening() {
                debug("Listening for chat events"), this.setupIdleListeners(), this._initChatListeners();
            }
            stopListening() {
                this._removeChatListeners(), this.removeIdleListeners();
            }
            onWindowFocus() {
                this._chatApi.clearUnreadCount();
            }
            _initChatListeners() {
                jQuery(window).on("focus", this.onFocus), jQuery(".user-icon").on("click", this._chatApi.toggleLargeUserIconButton.bind(this._chatApi)), 
                jQuery("#user-icon").on("click", this._chatApi.toggleIconContainer.bind(this._chatApi)), 
                jQuery("#link-icon").on("click", this._chatApi.linkIconListener.bind(this._chatApi)), 
                jQuery(".image-button").on("click", this._chatApi.userIconSelectorListener.bind(this._chatApi)), 
                jQuery("#chat-input").on("keydown", this._chatApi.onChatKeyDown.bind(this._chatApi)), 
                jQuery("#nickname-edit").on("keydown", this._chatApi.onChatKeyDown.bind(this._chatApi)), 
                jQuery("#chat-input").on("keypress", this._chatApi.onChatKeyPress.bind(this._chatApi)), 
                jQuery("#saveChanges").on("click", this._chatApi.saveChangesListener.bind(this._chatApi)), 
                jQuery("#cancelNickname").on("click", this._chatApi.cancelNicknameListener.bind(this._chatApi)), 
                jQuery("#chat-input-container").on("click", this._chatApi.focus.bind(this._chatApi)), 
                jQuery("#chat-wrapper").on("mouseup", this._chatApi.onChatClicked.bind(this._chatApi)), 
                jQuery("#chat-wrapper").on("mousedown", this._chatApi.onChatClicked.bind(this._chatApi)), 
                jQuery("#chat-wrapper").on("keyup", this._chatApi.onChatKeyUp.bind(this._chatApi)), 
                document.addEventListener("fullscreenchange", this._onFullScreenChange), document.addEventListener("keydown", this.cancelEvent.bind(this), !0), 
                this._chatApi.initCustomListeners();
            }
            cancelEvent(e) {
                e.target !== jQuery("#chat-input")[0] && e.target !== jQuery("#nickname-edit")[0] || e.stopImmediatePropagation();
            }
            _onFullScreen() {
                this._chatApi.scrollToBottom();
            }
            _removeChatListeners() {
                jQuery(window).off("focus", this.onFocus), document.removeEventListener("fullscreenchange", this._onFullScreenChange), 
                jQuery(".user-icon").off(), jQuery("#user-icon").off(), jQuery("#link-icon").off(), 
                jQuery(".image-button").off(), jQuery("#chat-input").off(), jQuery("#saveChanges").off(), 
                jQuery("#cancelNickname").off(), jQuery("#chat-input-container").off(), jQuery("#chat-wrapper").off();
            }
        }
        class PresenceController {
            setupPresenceIndicator() {
                this._getPresenceIndicator().data("typing", !1), this._getPresenceIndicator().data("buffering", !1), 
                this._getPresenceIndicator().data("watchingAds", !1), this._setPresenceText();
            }
            _getPresenceIndicator() {
                return jQuery("#presence-indicator");
            }
            setTypingPresenceVisible(visible) {
                this._getPresenceIndicator().data("typing", visible), this._setPresenceText();
            }
            setBufferingPresenceVisible(visible) {
                this._getPresenceIndicator().data("buffering", visible), this._setPresenceText();
            }
            setWatchingAdsPresenceVisible(visible) {
                this._getPresenceIndicator().data("watchingAds", visible), this._setPresenceText();
            }
            getWatchingAdsVisible() {
                return this._getPresenceIndicator().data("watchingAds");
            }
            _setPresenceText() {
                const typing = this._getPresenceIndicator().data("typing"), buffering = this._getPresenceIndicator().data("buffering");
                this._getPresenceIndicator().data("watchingAds") ? this._getPresenceIndicator().text("People are watching ads...") : typing && buffering ? this._getPresenceIndicator().text("People are typing and buffering...") : typing ? this._getPresenceIndicator().text("People are typing...") : buffering ? this._getPresenceIndicator().text("People are buffering...") : this._getPresenceIndicator().text("");
            }
        }
        const oldIcons = [ "Batman.svg", "DeadPool.svg", "CptAmerica.svg", "Wolverine.svg", "IronMan.svg", "Goofy.svg", "Alien.svg", "Mulan.svg", "Snow-White.svg", "Poohbear.svg", "Sailormoon.svg", "Sailor Cat.svg", "Pizza.svg", "Cookie.svg", "Chocobar.svg", "hotdog.svg", "Hamburger.svg", "Popcorn.svg", "IceCream.svg", "ChickenLeg.svg" ], newIcons = [ "General/Alien.svg", "General/Batman.svg", "General/ChickenLeg.svg", "General/Chocobar.svg", "General/Cookie.svg", "General/CptAmerica.svg", "General/DeadPool.svg", "General/Goofy.svg", "General/Hamburger.svg", "General/hotdog.svg", "General/IceCream.svg", "General/IronMan.svg", "General/Mulan.svg", "General/Pizza.svg", "General/Poohbear.svg", "General/Popcorn.svg", "General/Sailor Cat.svg", "General/Sailormoon.svg", "General/Snow-White.svg", "General/Wolverine.svg", "Christmas/angel.svg", "Christmas/bell.svg", "Christmas/box.svg", "Christmas/cane.svg", "Christmas/flake.svg", "Christmas/gingerbread.svg", "Christmas/gingerbread_F.svg", "Christmas/gingerbread_M.svg", "Christmas/gloves_blue.svg", "Christmas/gloves_red.svg", "Christmas/hat.svg", "Christmas/ornament.svg", "Christmas/raindeer.svg", "Christmas/reef.svg", "Christmas/santa_F.svg", "Christmas/santa_M.svg", "Christmas/snowglobe.svg", "Christmas/snowman.svg", "Christmas/sock.svg", "Christmas/tree.svg", "Halloween/bats.svg", "Halloween/candy_corn.svg", "Halloween/cat_black.svg", "Halloween/cat_white.svg", "Halloween/coffin.svg", "Halloween/eye_ball.svg", "Halloween/face_angry.svg", "Halloween/face_evil.svg", "Halloween/face_silly.svg", "Halloween/face_smile.svg", "Halloween/frankenstein.svg", "Halloween/ghost_F.svg", "Halloween/ghost_M.svg", "Halloween/gravestone.svg", "Halloween/lollipop.svg", "Halloween/moon.svg", "Halloween/mummy.svg", "Halloween/potion.svg", "Halloween/pumpkin.svg", "Halloween/pumpkin_witch.svg", "Halloween/skull_brain.svg", "Halloween/skull_candy.svg", "Halloween/skull_girl.svg", "Halloween/witch_hat.svg", "Thanksgiving/acorn.svg", "Thanksgiving/bread.svg", "Thanksgiving/candles.svg", "Thanksgiving/corn.svg", "Thanksgiving/drinks.svg", "Thanksgiving/maple_leaf.svg", "Thanksgiving/plate_chicken.svg", "Thanksgiving/pumpkin.svg", "Thanksgiving/pumpkin_pie.svg", "Thanksgiving/slice_pie.svg", "Thanksgiving/sun_flower.svg", "Thanksgiving/turkey_face.svg" ], iconMap = {
            General: [ "Alien.svg", "Batman.svg", "ChickenLeg.svg", "Chocobar.svg", "Cookie.svg", "CptAmerica.svg", "DeadPool.svg", "Goofy.svg", "Hamburger.svg", "hotdog.svg", "IceCream.svg", "IronMan.svg", "Mulan.svg", "Pizza.svg", "Poohbear.svg", "Popcorn.svg", "Sailor Cat.svg", "Sailormoon.svg", "Snow-White.svg", "Wolverine.svg" ],
            Christmas: [ "angel.svg", "bell.svg", "box.svg", "cane.svg", "flake.svg", "gingerbread.svg", "gingerbread_F.svg", "gingerbread_M.svg", "gloves_blue.svg", "gloves_red.svg", "hat.svg", "ornament.svg", "raindeer.svg", "reef.svg", "santa_F.svg", "santa_M.svg", "snowglobe.svg", "snowman.svg", "sock.svg", "tree.svg" ],
            Halloween: [ "bats.svg", "candy_corn.svg", "cat_black.svg", "cat_white.svg", "coffin.svg", "eye_ball.svg", "face_angry.svg", "face_evil.svg", "face_silly.svg", "face_smile.svg", "frankenstein.svg", "ghost_F.svg", "ghost_M.svg", "gravestone.svg", "lollipop.svg", "moon.svg", "mummy.svg", "potion.svg", "pumpkin.svg", "pumpkin_witch.svg", "skull_brain.svg", "skull_candy.svg", "skull_girl.svg", "witch_hat.svg" ],
            Thanksgiving: [ "acorn.svg", "bread.svg", "candles.svg", "corn.svg", "drinks.svg", "maple_leaf.svg", "plate_chicken.svg", "pumpkin.svg", "pumpkin_pie.svg", "slice_pie.svg", "sun_flower.svg", "turkey_face.svg" ]
        };
        function escapeStr(str) {
            return str ? str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : str;
        }
        const enableIconsetFunctions = {
            General: function() {
                return !0;
            },
            Christmas: function() {
                return 11 === (new Date).getMonth();
            },
            Halloween: function() {
                const date = new Date;
                return 9 === date.getMonth() && date.getDate() >= 24;
            },
            Thanksgiving: function() {
                const date = new Date;
                return 10 === date.getMonth() && date.getDate() >= 18 && date.getDate() <= 28 || 9 === date.getMonth() && date.getDate() >= 8 && date.getDate() <= 14;
            }
        };
        function ChatMessageController_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class MessageController {
            constructor(chatApi) {
                ChatMessageController_defineProperty(this, "_messages", void 0), ChatMessageController_defineProperty(this, "_unreadCount", void 0), 
                ChatMessageController_defineProperty(this, "_pageTitle", void 0), ChatMessageController_defineProperty(this, "_messagesCount", void 0), 
                ChatMessageController_defineProperty(this, "_userIcons", void 0), ChatMessageController_defineProperty(this, "_userNicknames", void 0), 
                ChatMessageController_defineProperty(this, "_iconsInUse", void 0), ChatMessageController_defineProperty(this, "_nicknamesInUse", void 0), 
                ChatMessageController_defineProperty(this, "_userIconUrl", void 0), ChatMessageController_defineProperty(this, "_chatApi", void 0), 
                this._chatApi = chatApi, this._messages = [], this._unreadCount = 0, this._pageTitle = document.title, 
                this._messagesCount = 0, this._userIcons = new Map, this._userNicknames = new Map, 
                this._nicknamesInUse = [], this._iconsInUse = [], this._userIconUrl = "", debug("Message Controller");
            }
            getMessageElementWithNickname(userIconUrl, userNickname, message) {
                return jQuery(`\n            <div class="msg-container">\n                <div class="icon-name">\n                    <div class="icon">\n                        <img src="${escapeStr(userIconUrl)}">\n                    </div>\n                </div>\n                <div class="msg-txt message${message.isSystemMessage ? "-system" : "-txt"}">\n                    <h3>${userNickname}</h3>\n                    <p>${message.body}</p>\n                </div>\n            </div>\n          `);
            }
            getMessageElementWithoutNickname(userIconUrl, message) {
                return jQuery(`\n            <div class="msg">\n                <div class="icon">\n                    <img src="${escapeStr(userIconUrl)}"/>\n                </div>\n                <div class="message${message.isSystemMessage ? "-system" : "-txt"}">\n                    <p class="msg-nickname"></p>\n                    <p>${message.body}</p>\n                </div>\n            </div>\n        `);
            }
            _addMessageToHistory(messageElement, message, userIconUrl, userNickname) {
                messageElement.appendTo(jQuery("#chat-history")).data("permId", message.permId).data("userIcon", userIconUrl).data("userNickname", userNickname).data("message", message);
            }
            reloadMessages() {
                const oldMessages = JSON.parse(JSON.stringify(this._messages));
                for (const message of oldMessages) this.addMessage(message, !1);
                this._messages = oldMessages;
            }
            addMessage(message, checkIcons) {
                if (message.isSystemMessage && "left" === message.body && (console.log("trying to add left message"), 
                !message.userIcon && !this._userIcons.has(message.permId))) return;
                checkIcons && message.isSystemMessage && message.body.indexOf("updated their user icon") > -1 && (message.userIcon && this.setUserIcon(message.permId, message.userIcon), 
                message.userNickname && this.setUserNickname(message.permId, message.userNickname)), 
                this._messages.push(message);
                const userIcon = message.userIcon ? this.getUserIconURL(message.permId, message.userIcon) : this.getUserIconURL(message.permId), userNickname = message.userNickname ? this.getUserNickname(message.permId, message.userNickname) : "";
                message.body = escapeStr(message.body);
                const messageElement = "" === userNickname ? this.getMessageElementWithoutNickname(userIcon, message) : this.getMessageElementWithNickname(userIcon, userNickname, message);
                this._addMessageToHistory(messageElement, message, userIcon, userNickname), this.scrollToBottom(), 
                this._increaseMessageCount();
            }
            scrollToBottom() {
                jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
            }
            clearUnreadCount() {
                this._unreadCount > 0 && (this._unreadCount = 0, document.title = this._pageTitle);
            }
            _increaseMessageCount() {
                this._unreadCount += 1, this._messagesCount += 1, document.hasFocus() || (document.title = "(" + String(this._unreadCount) + ") " + this._pageTitle);
            }
            getUserIconURL(userId) {
                let userIcon = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (!this._userIcons.has(userId)) {
                    const parsedIconSrc = this._parseIconSrc(userIcon), iconURL = void 0 !== parsedIconSrc ? parsedIconSrc : this._getDefaultIconUrl();
                    this._userIcons.set(userId, iconURL), this._iconsInUse.push(iconURL);
                }
                return this._userIcons.get(userId);
            }
            _parseIconSrc(userIcon) {
                const newIcon = userIcon.includes("?newIconUrl=") ? userIcon.split("?newIconUrl=")[1] : userIcon, oldIcon = userIcon.includes("?newIconUrl=") ? userIcon.split("?newIconUrl=")[0] : userIcon;
                return newIcons.includes(newIcon) ? chrome.runtime.getURL("img/icons/" + userIcon) : oldIcons.includes(oldIcon) ? chrome.runtime.getURL("img/icons/General/" + userIcon) : void 0;
            }
            getUserNickname(userId) {
                let userNickname = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return this._userNicknames.has(userId) || (this._userNicknames.set(userId, userNickname), 
                this._nicknamesInUse.push(userNickname)), escapeStr(this._userNicknames.get(userId));
            }
            _getDefaultIconUrl() {
                let iconURL = chrome.runtime.getURL("img/icons/General/" + oldIcons[Math.floor(Math.random() * oldIcons.length)]);
                if (this._iconsInUse.length < iconMap.General.length) for (;this._iconsInUse.includes(iconURL); ) iconURL = chrome.runtime.getURL("img/icons/General/" + oldIcons[Math.floor(Math.random() * oldIcons.length)]);
                return iconURL;
            }
            _refreshMsgContainer(msgContainer) {
                const permId = msgContainer.data("permId");
                if (permId && msgContainer.data("userIcon") && this.getUserIconURL(permId) !== msgContainer.data("permId")) {
                    const userIcon = this.getUserIconURL(permId);
                    msgContainer.find("img").attr("src", userIcon), msgContainer.data("userIcon", userIcon);
                }
                if (permId && void 0 !== msgContainer.data("userNickname")) {
                    const userNickname = this.getUserNickname(permId);
                    if (userNickname !== msgContainer.data("userNickname") && void 0 !== userNickname) {
                        const message = msgContainer.data("message"), userIcon = this.getUserIconURL(permId), nicknameMessage = "" == userNickname ? this.getMessageElementWithoutNickname(msgContainer.data("userIcon"), message) : this.getMessageElementWithNickname(msgContainer.data("userIcon"), userNickname, message);
                        msgContainer.replaceWith(nicknameMessage), jQuery(nicknameMessage).data("permId", permId).data("userIcon", userIcon).data("userNickname", userNickname).data("message", message);
                    }
                }
            }
            setUserIconUrl(userIconUrl) {
                this._userIconUrl = userIconUrl;
            }
            renderSidebar() {
                jQuery("#user-icon img").attr("src", this._userIconUrl), jQuery(".user-icon img").attr("src", this._userIconUrl);
                const msgs = jQuery(".msg");
                for (let i = 0; i < msgs.length; i++) this._refreshMsgContainer(jQuery(msgs[i]));
                const msgContainers = jQuery(".msg-container");
                for (let i = 0; i < msgContainers.length; i++) this._refreshMsgContainer(jQuery(msgContainers[i]));
            }
            _parseIconUrlOrGetRandom(queryIconUrl) {
                let iconUrl = null;
                if (queryIconUrl) if (queryIconUrl.includes("?newIconUrl=")) {
                    const userIconParts = queryIconUrl.split("?newIconUrl="), parsedIcon = userIconParts[1], oldIcon = userIconParts[0];
                    newIcons.includes(parsedIcon) ? iconUrl = chrome.runtime.getURL(`img/icons/${parsedIcon}`) : oldIcons.includes(oldIcon) && (iconUrl = chrome.runtime.getURL(`img/icons/General/${oldIcon}`));
                } else newIcons.includes(queryIconUrl) ? iconUrl = chrome.runtime.getURL(`img/icons/${queryIconUrl}`) : oldIcons.includes(queryIconUrl) && (iconUrl = chrome.runtime.getURL(`img/icons/General/${queryIconUrl}`));
                if (null === iconUrl) {
                    let possibleIcons = iconMap.General.filter((icon => !this._iconsInUse.includes(icon)));
                    0 === possibleIcons.length && (possibleIcons = iconMap.General);
                    const randomIcon = possibleIcons[Math.floor(Math.random() * possibleIcons.length)];
                    iconUrl = chrome.runtime.getURL(`/img/icons/General/${randomIcon}`);
                }
                return iconUrl;
            }
            setUserIcon(userId, newUserIcon) {
                const iconUrl = this._parseIconUrlOrGetRandom(newUserIcon);
                this._userIcons.set(userId, iconUrl), this._iconsInUse.push(iconUrl), this.renderSidebar();
            }
            setUserNickname(userId, userNickname) {
                const escapedUserNickName = escapeStr(userNickname);
                this._userNicknames.set(userId, escapedUserNickName), this._nicknamesInUse.push(escapedUserNickName), 
                this.renderSidebar();
            }
            updateUserData(userId, userIcon, userNickname) {
                const iconUrl = this._parseIconUrlOrGetRandom(userIcon);
                this._userIcons.set(userId, iconUrl), this._iconsInUse.push(iconUrl), this._userNicknames.set(userId, userNickname), 
                this._nicknamesInUse.push(userNickname), this.renderSidebar();
            }
            addReviewMessage() {
                jQuery('\n          <div class="msg-container">\n          <div class="msg-txt message-system" style="width:100%">\n          <p>\n          Thanks for using Teleparty! <br> \n          If you enjoy the extension, please leave a positive review \n          <a id="reviewLink" href="https://chrome.google.com/webstore/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews" style="display:inline;color:red" target="none">here!</a>\n          </p>\n          </div>\n          </div>\n          ').appendTo(jQuery("#chat-history"));
                const logEventData = {
                    eventType: "review-shown-chrome",
                    sessionId: this._chatApi.getSessionId()
                }, logEventMessage = new LogEventMessage("Content_Script", "Service_Background", logEventData);
                Messaging_MessagePasser.sendMessageToExtension(logEventMessage), jQuery("#reviewLink").click((() => {
                    chrome.storage.local.set({
                        reviewClicked: !0
                    });
                    const logEventData = {
                        eventType: "review-clicked-chrome",
                        sessionId: this._chatApi.getSessionId()
                    }, logEventMessage = new LogEventMessage("Content_Script", "Service_Background", logEventData);
                    Messaging_MessagePasser.sendMessageToExtension(logEventMessage);
                }));
            }
        }
        var chat = __webpack_require__(301), chat_default = __webpack_require__.n(chat);
        const ChromeStorageWriter = new class {
            async setItemsAsync(items) {
                return new Promise(((resolve, reject) => {
                    chrome.storage.local.set(items, (() => {
                        chrome.runtime.lastError ? reject(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : resolve();
                    }));
                }));
            }
        };
        Object.freeze(ChromeStorageWriter);
        const ChromeStorage_ChromeStorageWriter = ChromeStorageWriter;
        function UserSettingsController_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class UserSettingsController {
            constructor(storageData) {
                var _storageData$userIcon, _storageData$userNick, _storageData$userId;
                UserSettingsController_defineProperty(this, "_userSettings", void 0), UserSettingsController_defineProperty(this, "_permId", void 0), 
                this._userSettings = {
                    userIcon: null !== (_storageData$userIcon = storageData.userIcon) && void 0 !== _storageData$userIcon ? _storageData$userIcon : "",
                    userNickname: null !== (_storageData$userNick = storageData.userNickname) && void 0 !== _storageData$userNick ? _storageData$userNick : ""
                }, this._permId = null !== (_storageData$userId = storageData.userId) && void 0 !== _storageData$userId ? _storageData$userId : "";
            }
            saveUserIcon(newUserIcon) {
                if ((newUserIcon = escapeStr(newUserIcon)).includes("/")) {
                    const iconName = newUserIcon.split("/")[1];
                    newUserIcon = oldIcons.includes(iconName) ? `${iconName}?newIconUrl=${newUserIcon}` : `${oldIcons[Math.floor(Math.random() * oldIcons.length)]}?newIconUrl=${newUserIcon}`;
                }
                this._userSettings.userIcon = newUserIcon, ChromeStorage_ChromeStorageWriter.setItemsAsync({
                    userIcon: newUserIcon
                }), debug("new user settings after set user icon: " + JSON.stringify(this._userSettings));
            }
            saveUserNickname(userNickname) {
                this._userSettings.userNickname = userNickname, ChromeStorage_ChromeStorageWriter.setItemsAsync({
                    userNickname
                }), debug("new user settings after set user nickname: " + JSON.stringify(this._userSettings));
            }
            get userSettings() {
                return this._userSettings;
            }
            get permId() {
                return this._permId;
            }
            get userIcon() {
                return this._userSettings.userIcon;
            }
            get userNickname() {
                return this._userSettings.userNickname;
            }
        }
        class ClientMessage extends Message {
            constructor(sender, target, type) {
                var obj, key, value;
                super(sender, target, type), value = void 0, (key = "_type") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this._type = type;
            }
        }
        let ClientMessageType;
        !function(ClientMessageType) {
            ClientMessageType.BROADCAST = "brodadcast", ClientMessageType.BROADCAST_NEXT_EPISODE = "broadcastNextEpisode", 
            ClientMessageType.SEND_MESSAGE = "sendMessage", ClientMessageType.CONTENT_SCRIPT_READY = "contentScriptReady", 
            ClientMessageType.CONTENT_SCRIPT_ERROR = "contentScriptError", ClientMessageType.TEARDOWN = "teardown", 
            ClientMessageType.GET_SESSION_DATA = "getSessionData", ClientMessageType.SET_TYPING = "setTyping", 
            ClientMessageType.SET_BUFFERING = "setBuffering", ClientMessageType.SET_WATCHING_ADS = "setWatchingAds", 
            ClientMessageType.BROADCAST_USER_SETTINGS = "brodadcastUserSettings";
        }(ClientMessageType || (ClientMessageType = {}));
        class SetTypingMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SET_TYPING), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class SendChatMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SEND_MESSAGE), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class BroadcastUserSettingsMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.BROADCAST_USER_SETTINGS), value = void 0, 
                (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        var lib = __webpack_require__(200);
        function AdvertisingApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        const AdvertisingApi = new class {
            constructor() {
                AdvertisingApi_defineProperty(this, "_kevelClient", void 0), AdvertisingApi_defineProperty(this, "AD_TYPE", 4171), 
                AdvertisingApi_defineProperty(this, "AD_COUNT", 20), AdvertisingApi_defineProperty(this, "AD_DIV", "chat-ad-image"), 
                this._kevelClient = new lib.Client({
                    networkId: 10816,
                    siteId: 1168689
                });
            }
            async loadAds(sessionId, permId) {
                const request = {
                    enableBotFiltering: !0,
                    placements: [ {
                        divName: this.AD_DIV,
                        count: 20,
                        adTypes: [ this.AD_TYPE ]
                    } ]
                };
                permId && (request.user = {
                    key: permId
                });
                const adData = [];
                try {
                    const decisions = (await this._kevelClient.decisions.get(request)).decisions;
                    if (decisions) {
                        decisions[this.AD_DIV].forEach((decision => {
                            if (decision) {
                                const decisionData = this.parseDecision(decision);
                                decisionData && adData.push(decisionData);
                            }
                        }));
                    }
                } catch (err) {
                    if (err.message && "Failed to fetch" === err.message) {
                        debug("Failed to load Ads");
                        const adFailEvent = new LogEventMessage("Content_Script", "Service_Background", {
                            eventType: "adLoadFail",
                            sessionId
                        });
                        Messaging_MessagePasser.sendMessageToExtension(adFailEvent);
                    } else {
                        debug("Ad Other Error");
                        const adErrorEvent = new LogEventMessage("Content_Script", "Service_Background", {
                            eventType: "adLoadError",
                            sessionId
                        });
                        Messaging_MessagePasser.sendMessageToExtension(adErrorEvent);
                    }
                    return [];
                }
                if (adData.length > 0) return adData;
                {
                    const adNoneEvent = new LogEventMessage("Content_Script", "Service_Background", {
                        eventType: "adLoadNone",
                        sessionId
                    });
                    return Messaging_MessagePasser.sendMessageToExtension(adNoneEvent), adData;
                }
            }
            parseDecision(decision) {
                try {
                    const clickUrl = decision.clickUrl, impressionUrl = decision.impressionUrl;
                    if (clickUrl && impressionUrl) {
                        const contentArray = decision.contents;
                        let imageUrl, CTAText;
                        if (contentArray && contentArray.length > 0) {
                            const content = contentArray[0];
                            if (content.data) {
                                const parsedImageUrl = content.data.imageUrl;
                                parsedImageUrl && (imageUrl = String(parsedImageUrl)), CTAText = content.data.customData.CTA;
                            }
                        }
                        if (imageUrl && CTAText) {
                            return {
                                clickUrl,
                                impressionUrl,
                                imageUrl,
                                CTA: CTAText
                            };
                        }
                    }
                } catch (err) {
                    console.error("Failed to Load Ad Data: " + decision), console.error(err);
                }
            }
        };
        Object.freeze(AdvertisingApi);
        const Advertising_AdvertisingApi = AdvertisingApi;
        function ChatApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        var css_alert = __webpack_require__(39), css_chat = __webpack_require__(644);
        function HuluChatApi_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class HuluChatApi extends class {
            constructor() {
                ChatApi_defineProperty(this, "_chatEventListener", void 0), ChatApi_defineProperty(this, "_chatPresenceController", void 0), 
                ChatApi_defineProperty(this, "_messageController", void 0), ChatApi_defineProperty(this, "_userSettingsController", void 0), 
                ChatApi_defineProperty(this, "_chatHtml", void 0), ChatApi_defineProperty(this, "_typingTimeout", void 0), 
                ChatApi_defineProperty(this, "_inSession", void 0), ChatApi_defineProperty(this, "_partyUrl", ""), 
                ChatApi_defineProperty(this, "_sessionId", ""), ChatApi_defineProperty(this, "_showingReviewMessage", void 0), 
                ChatApi_defineProperty(this, "_shouldChatBeVisible", !0), ChatApi_defineProperty(this, "_changeAdInterval", void 0), 
                ChatApi_defineProperty(this, "_adData", void 0), ChatApi_defineProperty(this, "_currentAdIndex", void 0), 
                ChatApi_defineProperty(this, "CHANGE_AD_TIME", 24e4), this._inSession = !1, this._chatEventListener = new ChatEventListener(this), 
                this._chatPresenceController = new PresenceController, this._messageController = new MessageController(this), 
                this._typingTimeout = void 0, this._showingReviewMessage = !1;
            }
            setChatVisible(visible) {
                this._shouldChatBeVisible = visible;
            }
            _initChat(storageData) {
                hideAlertMessages(), this._userSettingsController = new UserSettingsController(storageData);
                const currentUrl = this._messageController.getUserIconURL(this._userSettingsController.permId, this._userSettingsController.userIcon);
                this._messageController.setUserIconUrl(currentUrl), this._messageController.renderSidebar(), 
                this._isChatInjected() && this.removeChat(), this._setChatHtml(), this._loadAds(storageData.userId), 
                this._injectChat(), this.setChatVisible(!0), this.addIconSelector(), this._startEventListener(), 
                this._chatPresenceController.setupPresenceIndicator(), this._inSession = !0;
            }
            reloadChat() {
                this._isChatInjected() || (this._injectChat(), this.setChatVisible(this._shouldChatBeVisible), 
                this.addIconSelector(), this._stopEventListener(), this._startEventListener(), this._chatPresenceController.setupPresenceIndicator(), 
                this.reloadMesssages(), this.scrollToBottom()), this._resetCurrentAd();
            }
            sendTeardown(teardownData) {
                const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", teardownData);
                Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
            }
            _isChatInjected() {
                return jQuery("#chat-wrapper").length > 0;
            }
            clearUnreadCount() {
                this._messageController.clearUnreadCount();
            }
            addMessage(message) {
                let checkIcons = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this._messageController.addMessage(message, checkIcons);
            }
            reloadMesssages() {
                this._messageController.reloadMessages();
            }
            scrollToBottom() {
                this._messageController.scrollToBottom();
            }
            addReviewMessage() {
                this._messageController.addReviewMessage(), this._showingReviewMessage = !0;
            }
            get showingReveiwMessage() {
                return this._showingReviewMessage;
            }
            onBufferingMessage(message) {
                this._chatPresenceController.setBufferingPresenceVisible(message.usersBuffering.length > 0);
            }
            onTypingMessage(message) {
                this._chatPresenceController.setTypingPresenceVisible(message.usersTyping.length > 0);
            }
            onWatchingAdsMessage(message) {
                this._chatPresenceController.setWatchingAdsPresenceVisible(message.usersWatchingAds.length > 0);
            }
            getWatchingAds() {
                return this._chatPresenceController.getWatchingAdsVisible();
            }
            onUpdateSettingsMessage(message) {
                if (this._messageController.updateUserData(message.permId, message.userSettings.userIcon, message.userSettings.userNickname), 
                this._userSettingsController) {
                    const currentUrl = this._messageController.getUserIconURL(this._userSettingsController.permId, this._userSettingsController.userIcon);
                    this._messageController.setUserIconUrl(currentUrl), this._messageController.renderSidebar();
                }
            }
            _startEventListener() {
                this._chatEventListener.startListening();
            }
            _stopEventListener() {
                this._chatEventListener.stopListening(), this._changeAdInterval && clearTimeout(this._changeAdInterval);
            }
            teardown() {
                this._stopEventListener(), jQuery("[tpInjected]").remove(), this.setChatVisible(!1), 
                this.removeChat();
            }
            focus() {
                jQuery("#chat-input").trigger("focus");
            }
            _setChatHtml() {
                if (debug("Set Chat Html called"), this._chatHtml = chat_default(), this._chatHtml = this._chatHtml.replace(/{EXTENSION_LOGO}/g, escapeStr(chrome.runtime.getURL("img/tp_logo.svg"))), 
                void 0 === this._userSettingsController) throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
                this._chatHtml = this._chatHtml.replace(/{USER_NICKNAME}/g, this._userSettingsController.userNickname ? escapeStr(this._userSettingsController.userNickname) : "Add a nickname"), 
                this._chatHtml = this._chatHtml.replace(/{USER_ICON}/g, this._messageController.getUserIconURL(this._userSettingsController.permId, this._userSettingsController.userIcon)), 
                this._chatHtml = this._chatHtml.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/Link.svg"));
            }
            _loadAdHtml(data) {
                const chatContainer = jQuery("#chat-ad-holder"), adImage = jQuery("#chat-ad-image"), ctaButtonText = jQuery("#chat-ad-cta-text"), ctaButton = jQuery("#chat-ad-btn"), imageButton = jQuery("#chat-ad-image-holder"), img = new Image;
                img.src = data.imageUrl, img.onload = () => {
                    adImage.attr("src", img.src), chatContainer.show(), fetch(data.impressionUrl);
                }, img.onerror = () => {
                    console.log("Failed to load image");
                    const imageError = new LogEventMessage("Content_Script", "Service_Background", {
                        eventType: "imageLoadError",
                        sessionId: this._sessionId
                    });
                    Messaging_MessagePasser.sendMessageToExtension(imageError);
                }, ctaButtonText.text(data.CTA), ctaButton.attr("href", data.clickUrl), imageButton.attr("href", data.clickUrl);
            }
            _resetCurrentAd() {
                if (console.log("Resetting Ads"), this._adData && void 0 !== this._currentAdIndex && this._adData.length > 0) {
                    const currentAd = this._adData[this._currentAdIndex % this._adData.length];
                    this._loadAdHtml(currentAd);
                }
            }
            _setCurrentAd() {
                if ((!(this._currentAdIndex && this._currentAdIndex > 0) || document.hasFocus() && this._shouldChatBeVisible) && this._adData && this._adData.length > 0) {
                    var _this$_currentAdIndex;
                    this._currentAdIndex = (null !== (_this$_currentAdIndex = this._currentAdIndex) && void 0 !== _this$_currentAdIndex ? _this$_currentAdIndex : -1) + 1;
                    const currentAd = this._adData[this._currentAdIndex % this._adData.length];
                    this._loadAdHtml(currentAd);
                }
            }
            _loadAdInterval() {
                this._changeAdInterval && clearTimeout(this._changeAdInterval), this._setCurrentAd(), 
                this._changeAdInterval = setInterval(this._setCurrentAd.bind(this), this.CHANGE_AD_TIME);
            }
            async _loadAds(permId) {
                this._adData = await Advertising_AdvertisingApi.loadAds(this._sessionId, permId), 
                this._adData && this._adData.length > 0 && this._loadAdInterval();
            }
            toggleIconContainer() {
                var _this$_userSettingsCo, _this$_userSettingsCo2, _this$_userSettingsCo3, _this$_userSettingsCo4;
                jQuery("#chat-icon-container").data("active") ? (jQuery("#chat-icon-container").data("active", !1), 
                jQuery("#chat-icon-container").hide(), jQuery(".chat-settings-container").hide(), 
                jQuery("#chat-history-container").show(), jQuery("#chat-ad-holder").show(), jQuery("#chat-input-container").show(), 
                jQuery("#teleparty-blog-container").show(), jQuery("#presence-indicator").show(), 
                jQuery("#chat-header-container").removeClass("chat-header-container-active")) : (jQuery("#chat-icon-container").data("active", !0), 
                jQuery(".chat-settings-container").show(), jQuery("#chat-icon-container").hide(), 
                jQuery("#chat-link-container").hide(), jQuery("#chat-history-container").hide(), 
                jQuery("#chat-ad-holder").hide(), jQuery("#chat-input-container").hide(), jQuery("#teleparty-blog-container").hide(), 
                jQuery("#presence-indicator").hide(), jQuery("#nickname-edit").attr("placeholder", null !== (_this$_userSettingsCo = null === (_this$_userSettingsCo2 = this._userSettingsController) || void 0 === _this$_userSettingsCo2 ? void 0 : _this$_userSettingsCo2.userNickname) && void 0 !== _this$_userSettingsCo ? _this$_userSettingsCo : ""), 
                jQuery("#nickname-edit")[0].value = null !== (_this$_userSettingsCo3 = null === (_this$_userSettingsCo4 = this._userSettingsController) || void 0 === _this$_userSettingsCo4 ? void 0 : _this$_userSettingsCo4.userNickname) && void 0 !== _this$_userSettingsCo3 ? _this$_userSettingsCo3 : "");
            }
            toggleLargeUserIconButton() {
                jQuery("#chat-icon-container").data("active") && (jQuery("#chat-icon-container").show(), 
                jQuery(".chat-settings-container").hide(), jQuery("#chat-header-container").addClass("chat-header-container-active"));
            }
            linkIconListener() {
                navigator.clipboard.writeText(this.getPartyUrl());
            }
            setPartyUrl(url) {
                this._partyUrl = url;
            }
            setSessionId(sessionId) {
                this._sessionId = sessionId;
            }
            getSessionId() {
                return this._sessionId;
            }
            getPartyUrl() {
                return this._partyUrl;
            }
            userIconSelectorListener(event) {
                const icon = jQuery(event.currentTarget).data("icon");
                icon && (debug("userIconSelector button clicked: " + icon), this._userSettingsController && (this._userSettingsController.saveUserIcon(icon), 
                this._emitToSocket(this._getUpdateSettingsMessage(this._userSettingsController.userSettings)))), 
                this.toggleIconContainer();
            }
            removeChat() {
                this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
            }
            _emitToSocket(message, callback) {
                Messaging_MessagePasser.sendMessageToExtension(message).then(callback);
            }
            _getSendMessageClass(body) {
                return new SendChatMessage("Content_Script", "Service_Background", {
                    body
                });
            }
            _getTypingMessage(typing) {
                return new SetTypingMessage("Content_Script", "Service_Background", {
                    typing
                });
            }
            _getUpdateSettingsMessage(userSettings) {
                return new BroadcastUserSettingsMessage("Content_Script", "Service_Background", {
                    userSettings
                });
            }
            onChatKeyUp(event) {
                event.stopPropagation();
            }
            onChatKeyDown(event) {
                event.stopPropagation(), this._chatEventListener.resetIdleTimer();
            }
            initCustomListeners() {}
            onChatKeyPress(event) {
                if (event.stopPropagation(), 13 === event.which) {
                    const chatInput = jQuery("#chat-input"), body = chatInput.val().replace(/^\s+|\s+$/g, "");
                    body.length > 0 && (void 0 !== this._typingTimeout && (clearTimeout(this._typingTimeout), 
                    this._typingTimeout = void 0, this._emitToSocket(this._getTypingMessage(!1))), chatInput.prop("disabled", !0), 
                    this._emitToSocket(this._getSendMessageClass(body), (function() {
                        chatInput.val("").prop("disabled", !1).focus();
                    })));
                } else void 0 === this._typingTimeout ? this._emitToSocket(this._getTypingMessage(!0)) : clearTimeout(this._typingTimeout), 
                this._typingTimeout = setTimeout((() => {
                    this._typingTimeout = void 0, this._emitToSocket(this._getTypingMessage(!1));
                }), 500);
            }
            saveChangesListener() {
                var _this$_userSettingsCo5;
                const nicknameText = jQuery("#nickname-edit").val().slice(0, 25).replace(/^\s+|\s+$/g, "");
                debug("saveChanges button clicked: " + nicknameText), nicknameText !== (null === (_this$_userSettingsCo5 = this._userSettingsController) || void 0 === _this$_userSettingsCo5 ? void 0 : _this$_userSettingsCo5.userNickname) && this._userSettingsController && (this._userSettingsController.saveUserNickname(nicknameText), 
                this._emitToSocket(this._getUpdateSettingsMessage(this._userSettingsController.userSettings)), 
                jQuery("#nickname-edit").attr("placeholder", nicknameText), jQuery("#nickname-edit").text(nicknameText)), 
                this.toggleIconContainer();
            }
            cancelNicknameListener() {
                this.toggleIconContainer();
            }
            onChatClicked(event) {
                event.stopPropagation();
            }
            get inSession() {
                return this._inSession;
            }
            addIconSelector() {
                Object.keys(iconMap).forEach((categoryName => {
                    if (enableIconsetFunctions[categoryName]()) {
                        const icons = iconMap[categoryName], iconHolder = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
                        for (const icon of icons) this._addIconButton(`${categoryName}/${icon}`, iconHolder);
                        const categorySection = jQuery(`\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator">${categoryName}</p>\n                </div>\n            `);
                        iconHolder.appendTo(categorySection), categorySection.appendTo(jQuery("#icon-holder-template"));
                    }
                }), this);
            }
            _addIconButton(iconPath, iconHolder) {
                jQuery(`\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL("img/icons/" + iconPath)}'>\n            </a>\n        `).appendTo(iconHolder).data("icon", iconPath);
            }
        } {
            constructor() {
                super(), HuluChatApi_defineProperty(this, "_oldPageX", void 0), HuluChatApi_defineProperty(this, "_oldPageY", void 0), 
                HuluChatApi_defineProperty(this, "_customCss", void 0), this._oldPageX = 0, this._oldPageY = 0, 
                this._customCss = "\n            .fix-ad-width {\n            min-width: fit-content;\n            }\n            \n            .AdUnitView__adBar__timer {\n            min-width: fit-content;\n            }\n            \n            .huluFullScreenControls {\n            right: calc(288px + 38px) !important;\n            }\n        ";
            }
            _injectChat() {
                this._chatHtml && jQuery("#web-player-app").prepend(function(chatHtml) {
                    return `\n    <style>\n      ${css_alert}\n    </style>\n\n    <style tpInjected>\n      #chat-wrapper {\n        width: 288px !important;\n        height: 100% !important;\n        background: #1a1a1a;\n        position: fixed !important;\n        top: 0 !important;\n        left: auto !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        cursor: auto;\n        user-select: text;\n        -webkit-user-select: text;\n        z-index: 9999999999 !important;\n      }\n\n      .with-chat {\n        left: 0px !important;\n        // right: 288px !important;\n        width: calc(100% - 288px) !important;\n      }\n\n      ${arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""}\n    \n      ${css_chat}\n      \n    </style>\n\n    ${chatHtml}\n  `;
                }(this._chatHtml, this._customCss));
            }
            setChatVisible(visible) {
                super.setChatVisible(visible), visible ? (jQuery("#dash-player-container").addClass("with-chat"), 
                jQuery("#chat-wrapper").show(), document.hasFocus() || this.clearUnreadCount()) : (jQuery("#chat-wrapper").hide(), 
                jQuery("#dash-player-container").removeClass("with-chat")), visible ? (jQuery(".sizing-wrapper").addClass("with-chat"), 
                jQuery("#chat-wrapper").show(), document.hasFocus() || this.clearUnreadCount()) : (jQuery("#chat-wrapper").hide(), 
                jQuery(".sizing-wrapper").removeClass("with-chat"));
            }
            getChatVisible() {
                return jQuery("#dash-player-container").hasClass("with-chat");
            }
            removeChat() {
                super.removeChat(), jQuery("#dash-player-container").removeClass("with-chat");
            }
            onEnterFullScreen() {
                jQuery(".ViewModeControlBar").addClass("huluFullScreenControls"), jQuery(".ControlsContainer__panel").addClass("with-chat"), 
                jQuery("video").each((function() {
                    jQuery(this).addClass("with-chat"), jQuery(this).hasClass("ContentPlayer__item--stretched") && (jQuery(this).removeClass("ContentPlayer__item--stretched"), 
                    jQuery(this).data("removedStretch", !0), jQuery(this).addClass("ContentPlayer__item"));
                }));
            }
            onExitFullScreen() {
                jQuery(".ViewModeControlBar").removeClass("huluFullScreenControls"), jQuery(".ControlsContainer__panel").removeClass("with-chat"), 
                jQuery("video").each((function() {
                    jQuery(this).removeClass("with-chat"), jQuery(this).data("removedStretch") && (jQuery(this).addClass("ContentPlayer__item--stretched"), 
                    jQuery(this).removeData("removedStretch"), jQuery(this).removeClass("ContentPlayer__item"));
                }));
            }
            onWrapperMouseDown(e) {
                this._oldPageX = e.pageX, this._oldPageY = e.pageY;
            }
            onWrapperMouseClick(e) {
                (e.pageX - this._oldPageX) * (e.pageX - this._oldPageX) + (e.pageY - this._oldPageY) * (e.pageY - this._oldPageY) < 5 && jQuery("#chat-input").trigger("focus"), 
                e.stopPropagation();
            }
        }
        function VideoEventListener_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        function StreamingService_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        const Hulu = new class extends class {
            constructor(requiredPermissions, contentScripts, serverName, name, syncFromEnd) {
                StreamingService_defineProperty(this, "requiredPermissions", void 0), StreamingService_defineProperty(this, "contentScripts", void 0), 
                StreamingService_defineProperty(this, "serverName", void 0), StreamingService_defineProperty(this, "name", void 0), 
                StreamingService_defineProperty(this, "syncFromEnd", void 0), this.requiredPermissions = requiredPermissions, 
                this.serverName = serverName, this.name = name, this.contentScripts = contentScripts, 
                this.syncFromEnd = syncFromEnd;
            }
            urlWithSessionId(sessionId) {
                return `https://redirect.teleparty.com/join/${sessionId}`;
            }
        } {
            isValidUrl(url) {
                return isHuluParty(url);
            }
            getVideoId(url) {
                const match = url.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
                return match && match.length > 0 ? match[1] : void 0;
            }
        }([], [ "content_scripts/hulu/hulu_content_bundled.js" ], "hulu", StreamingServiceName.HULU, !1);
        Object.freeze(Hulu);
        const Services_Hulu = Hulu;
        function HuluVideoEventListener_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class HuluVideoEventListener extends class {
            constructor(videoApi) {
                VideoEventListener_defineProperty(this, "_videoApi", void 0), VideoEventListener_defineProperty(this, "_videoMessageForwarder", void 0), 
                this._videoApi = videoApi, console.log("Video Event Listener");
            }
            _onVideoUpdate() {
                var _this$_videoMessageFo;
                null === (_this$_videoMessageFo = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo || _this$_videoMessageFo.tryBroadcast(!1);
            }
            _onVideoUpdateWaitForChange() {
                var _this$_videoMessageFo2;
                null === (_this$_videoMessageFo2 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo2 || _this$_videoMessageFo2.tryBroadcast(!0);
            }
            _onVideoBuffering() {
                var _this$_videoMessageFo3;
                null === (_this$_videoMessageFo3 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo3 || _this$_videoMessageFo3.setBuffering(!0);
            }
            _onAdStart() {
                var _this$_videoMessageFo4;
                null === (_this$_videoMessageFo4 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo4 || _this$_videoMessageFo4.setWatchingAds(!0);
            }
            _onAdEnd() {
                var _this$_videoMessageFo5;
                null === (_this$_videoMessageFo5 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo5 || _this$_videoMessageFo5.setWatchingAds(!1);
            }
            _onVideoCanPlay() {
                var _this$_videoMessageFo6;
                null === (_this$_videoMessageFo6 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo6 || _this$_videoMessageFo6.setBuffering(!1);
            }
            _onNextEpisode(videoId) {
                var _this$_videoMessageFo7;
                null === (_this$_videoMessageFo7 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo7 || _this$_videoMessageFo7.sendNextEpisodeAsync(videoId);
            }
            _onTeardown(data) {
                var _this$_videoMessageFo8;
                null === (_this$_videoMessageFo8 = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo8 || _this$_videoMessageFo8.sendTeardown(data);
            }
            setMessageForwarder(videoMessageForwarder) {
                this._videoMessageForwarder = videoMessageForwarder;
            }
            shouldSync() {
                return !0;
            }
        } {
            getLoadingContainer() {
                return document.querySelector(".loading-screen-container");
            }
            constructor(videoApi, chatApi) {
                super(videoApi), HuluVideoEventListener_defineProperty(this, "_chatApi", void 0), 
                HuluVideoEventListener_defineProperty(this, "_videoApi", void 0), HuluVideoEventListener_defineProperty(this, "_adObserver", void 0), 
                HuluVideoEventListener_defineProperty(this, "_videoObserver", void 0), HuluVideoEventListener_defineProperty(this, "_adTimerObserver", void 0), 
                HuluVideoEventListener_defineProperty(this, "_loadingObserver", void 0), HuluVideoEventListener_defineProperty(this, "_onUpdateBind", this._onUpdate.bind(this)), 
                HuluVideoEventListener_defineProperty(this, "_onBufferBind", this._onUpdate.bind(this)), 
                HuluVideoEventListener_defineProperty(this, "_onReplace", this.replaceStateInteraction.bind(this)), 
                HuluVideoEventListener_defineProperty(this, "_onWrapperMouseDown", void 0), HuluVideoEventListener_defineProperty(this, "_onWrapperMouseClick", void 0), 
                HuluVideoEventListener_defineProperty(this, "_onNodeMessage", void 0), this._videoApi = videoApi, 
                this._chatApi = chatApi, this._onWrapperMouseDown = this._chatApi.onWrapperMouseDown.bind(this._chatApi), 
                this._onWrapperMouseClick = this._chatApi.onWrapperMouseClick.bind(this._chatApi), 
                this._onNodeMessage = this._videoApi.onNode.bind(this._videoApi), this._loadingObserver = new MutationObserver((mutationRecords => {
                    for (const mutation of mutationRecords) "class" === mutation.attributeName && "none" == mutation.target.style.display ? this._onVideoCanPlay() : this._onVideoBuffering();
                })), this._adObserver = new MutationObserver((mutationRecords => {
                    for (const mutation of mutationRecords) if ("childList" === mutation.type) {
                        debug("A child node has been added or removed.");
                        for (let i = 0; i < mutation.addedNodes.length; i++) {
                            const htmlNode = mutation.addedNodes[i];
                            htmlNode.className && htmlNode.className.includes("AdUnitView") && this._checkAdStart();
                        }
                        for (let i = 0; i < mutation.removedNodes.length; i++) {
                            const htmlNode = mutation.removedNodes[i];
                            debug("removed node: " + htmlNode.className), htmlNode.className && htmlNode.className.includes("AdUnitView") && this._checkAdFinished();
                        }
                    }
                })), this._videoObserver = new MutationObserver(this.onVideoChange.bind(this)), 
                this._adTimerObserver = new MutationObserver((() => {
                    var _document$querySelect, _document$querySelect2;
                    !document.querySelector(".AdUnitView__adBar__timer") || null !== (_document$querySelect = document.querySelector(".AdUnitView__adBar__timer")) && void 0 !== _document$querySelect && _document$querySelect.className.includes("fix-ad-width") || (null === (_document$querySelect2 = document.querySelector(".AdUnitView__adBar__timer")) || void 0 === _document$querySelect2 || _document$querySelect2.classList.add("fix-ad-width"), 
                    debug("trying to fix width of ad timer"));
                })), window.replaceScriptLoaded || (debug("injecting replace script"), injectScriptText('\n    if(!window.replaceScriptLoaded) {\n        window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n')), 
                window.injectScriptLoaded || function(scriptLocation) {
                    const s = document.createElement("script");
                    s.setAttribute("tpInjected", ""), s.src = scriptLocation, (document.head || document.documentElement).appendChild(s), 
                    s.remove();
                }(chrome.extension.getURL("content_scripts/hulu/hulu_injected_bundled.js")), this.initListeners();
            }
            reloadListeners() {
                this.stopListening(), this.startListening(), this.initListeners();
            }
            initListeners() {
                window.addEventListener("FromNode", this._onNodeMessage, !1);
            }
            startListening() {
                const obsConfig = {
                    childList: !0,
                    subtree: !1
                };
                this._adObserver.disconnect(), this._videoObserver.disconnect(), this._loadingObserver.disconnect();
                const dynamicAdWrapper = document.querySelector(".hulu-player-app");
                dynamicAdWrapper && this._adObserver.observe(dynamicAdWrapper, obsConfig);
                const videoWrapper = document.querySelector("#content-video-player");
                videoWrapper && this._videoObserver.observe(videoWrapper, {
                    attributes: !0
                });
                const loadingContainer = this.getLoadingContainer();
                loadingContainer && this._loadingObserver.observe(loadingContainer, {
                    attributes: !0
                }), window.addEventListener("message", this._onReplace, !1);
                const chatWrapper = jQuery("#chat-wrapper");
                chatWrapper.on("mousedown", this._onWrapperMouseDown), chatWrapper.on("click", this._onWrapperMouseClick);
                const video = this._getVideo();
                video && (video.addEventListener("play", this._onUpdateBind), video.addEventListener("pause", this._onUpdateBind), 
                video.addEventListener("seeking", this._onUpdateBind)), this._checkAdStart();
            }
            stopListening() {
                this._adObserver.disconnect(), this._videoObserver.disconnect(), this._loadingObserver.disconnect();
                const video = this._getVideo();
                video && (video.removeEventListener("play", this._onUpdateBind), video.removeEventListener("pause", this._onUpdateBind), 
                video.removeEventListener("seeking", this._onUpdateBind));
                const chatWrapper = jQuery("#chat-wrapper");
                chatWrapper.off("mousedown", this._onWrapperMouseDown), chatWrapper.off("click", this._onWrapperMouseClick), 
                window.removeEventListener("message", this._onReplace, !1), window.removeEventListener("FromNode", this._onNodeMessage, !1);
            }
            _onUpdate() {
                this._videoApi.currentlyWatchingAds || this._onVideoUpdate();
            }
            onVideoChange() {
                debug("On video change called."), this._chatApi.getChatVisible() && (document.fullscreen ? this._chatApi.onEnterFullScreen() : this._chatApi.onExitFullScreen());
            }
            _getVideo() {
                return document.querySelector("video");
            }
            async loadNewVideoAsync(videoId) {
                const start = performance.now();
                await new Promise(((resolve, reject) => {
                    const interval = setInterval((() => {
                        if (Services_Hulu.getVideoId(new URL(window.location.href)) === videoId) {
                            const videoElement = this._videoApi.getVideoElement();
                            if (null != videoElement && videoElement instanceof Element) return console.log(videoElement), 
                            clearInterval(interval), void resolve();
                        }
                        performance.now() - start >= 3e4 && (clearInterval(interval), reject(new Error("Could not load new video in time.")));
                    }), 100);
                })), await this._videoApi.waitNewVideoReadyAsync();
            }
            async _checkAdStart() {
                (await this._videoApi.getStateAsync()).playbackState === PlaybackState.AD_PLAYING && (debug("active ad class node added"), 
                debug("PEOPLE ARE WATCHING ADS"), this._onAdStart(), this._videoApi.currentlyWatchingAds = !0, 
                this._observeAdTimer());
            }
            shouldSync() {
                return !this._videoApi.currentlyWatchingAds;
            }
            _observeAdTimer() {
                delayUntil((() => null != document.querySelector(".AdUnitView__adBar__timer")), 1e3)().then((() => {
                    debug("trying to observe new ad Timer");
                    const dynamicAdTimerWrapper = document.querySelector(".AdUnitView__adBar__timer");
                    dynamicAdTimerWrapper && (debug("observing new ad Timer"), this._adTimerObserver.disconnect(), 
                    this._adTimerObserver.observe(dynamicAdTimerWrapper, {
                        characterData: !0,
                        characterDataOldValue: !0,
                        attributes: !1,
                        childList: !1,
                        subtree: !0
                    }));
                }));
            }
            _checkAdFinished() {
                delayUntil((() => !document.querySelector(".AdUnitView")), 2500)().then((() => {
                    var _this$_videoMessageFo;
                    debug("PEOPLE STOPPED WATCHING ADS"), this._videoApi.currentlyWatchingAds = !1, 
                    this._onAdEnd(), null === (_this$_videoMessageFo = this._videoMessageForwarder) || void 0 === _this$_videoMessageFo || _this$_videoMessageFo.forceSync();
                }));
            }
            replaceStateInteraction(event) {
                if (event.source == window) if ("FROM_PAGE_POP" !== event.data.type) {
                    if (event.data.type && "FROM_PAGE" == event.data.type) {
                        if (window.location.href.match(/^.*\/(watch)\/.*/)) {
                            var _this$_videoMessageFo2;
                            if (null !== (_this$_videoMessageFo2 = this._videoMessageForwarder) && void 0 !== _this$_videoMessageFo2 && _this$_videoMessageFo2.changingVideo) return;
                            const nextVideoId = Services_Hulu.getVideoId(new URL(window.location.href));
                            if (!nextVideoId) return debug("No video found. Tearing down"), void this._onTeardown(DEFAULT_TEARDOWN);
                            this._onNextEpisode(nextVideoId);
                        } else this._onTeardown(DEFAULT_TEARDOWN);
                    }
                } else this._onTeardown(DEFAULT_TEARDOWN);
            }
        }
        let PopupMessageType, ChatApiMessageType, VideoApiMessageType;
        !function(PopupMessageType) {
            PopupMessageType.CREATE_SESSION = "createSession", PopupMessageType.GET_INIT_DATA = "getInitData", 
            PopupMessageType.IS_CONTENT_SCRIPT_READY = "isContentScriptReady", PopupMessageType.SET_CHAT_VISIBLE = "setChatVisible", 
            PopupMessageType.DISCONNECT = "teardown", PopupMessageType.CLOSE_POPUP = "closePopup";
        }(PopupMessageType || (PopupMessageType = {}));
        class GetSessionDataMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.GET_SESSION_DATA), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        function CSMessageReceiver_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class CSMessageReceiver {
            constructor() {
                CSMessageReceiver_defineProperty(this, "_messageListeners", void 0), CSMessageReceiver_defineProperty(this, "_messageReceiver", this._onReceiveMesssage.bind(this)), 
                this._messageListeners = [], this._registerMessageListener();
            }
            addMessageListener(listener) {
                this._messageListeners.push(listener);
            }
            removeMessageListener(listener) {
                this._messageListeners = this._messageListeners.filter((value => {}));
            }
            _registerMessageListener() {
                Messaging_MessagePasser.addListener(this._messageReceiver);
            }
            teardown() {
                this._messageListeners = [], Messaging_MessagePasser.removeListener(this._messageReceiver);
            }
            _onReceiveMesssage(message, sender, sendResponse) {
                if (!this._shouldListenToMessage(message)) return !1;
                return !!this._doesListenerHandleMessage(message, sender, sendResponse) || (sendResponse({}), 
                !1);
            }
            _shouldListenToMessage(message) {
                return "Content_Script" === message.target && ("Service_Background" === message.sender || "Popup" === message.sender);
            }
            _teardown(teardownMessage, sender) {
                Messaging_MessagePasser.removeListener(this._onReceiveMesssage), this._messageListeners.forEach((listener => {
                    listener.onMessage(teardownMessage, sender, (() => null));
                })), this._messageListeners = [];
            }
            _doesListenerHandleMessage(message, sender, sendResponse) {
                let willSendResponse = !1;
                return this._messageListeners.forEach((listener => {
                    listener.onMessage(message, sender, sendResponse) && (willSendResponse = !0);
                })), willSendResponse;
            }
        }
        !function(ChatApiMessageType) {
            ChatApiMessageType.INIT_CHAT = "initChat", ChatApiMessageType.ON_MESSAGE = "onMessage", 
            ChatApiMessageType.ON_BUFFER = "onBuffer", ChatApiMessageType.ON_TYPING = "onTyping", 
            ChatApiMessageType.ON_WATCHING_ADS = "onWatchingAds", ChatApiMessageType.UPDATE_SETTINGS = "updateSettings";
        }(ChatApiMessageType || (ChatApiMessageType = {}));
        class ChatMessageForwarder {
            constructor(chatApi) {
                var obj, key, value;
                value = void 0, (key = "_chatApi") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this._chatApi = chatApi, debug("Chat forwarder");
            }
            onMessage(message, sender, sendResponse) {
                switch (message.type) {
                  case BackgroundMessageType.LOAD_SESSION:
                    {
                        const loadMessage = message;
                        return this._onLoadSession(loadMessage.data), !1;
                    }

                  case ChatApiMessageType.ON_MESSAGE:
                    {
                        const chatMessage = message;
                        return this._onMessage(chatMessage), !1;
                    }

                  case ChatApiMessageType.ON_BUFFER:
                    {
                        const bufferMessage = message;
                        return this._onBuffer(bufferMessage), !1;
                    }

                  case ChatApiMessageType.ON_TYPING:
                    {
                        const typingMessage = message;
                        return this._onTyping(typingMessage), !1;
                    }

                  case ChatApiMessageType.ON_WATCHING_ADS:
                    {
                        const watchingAdsMessage = message;
                        return this._onWatchingAds(watchingAdsMessage), !1;
                    }

                  case ChatApiMessageType.UPDATE_SETTINGS:
                    {
                        const updateSettingsMessage = message;
                        return this._onUpdateSettings(updateSettingsMessage), !1;
                    }

                  case PopupMessageType.SET_CHAT_VISIBLE:
                    {
                        const visibleMessage = message;
                        return this._setChatVisible(visibleMessage.data), sendResponse(), !1;
                    }

                  default:
                    return !1;
                }
            }
            teardown() {
                this._chatApi.teardown();
            }
            _setChatVisible(data) {
                this._chatApi.setChatVisible(data.visible);
            }
            _onLoadSession(data) {
                const sessionId = data.sessionCallbackData.sessionId, partyUrl = `https://redirect.teleparty.com/join/${sessionId}`;
                if (this._chatApi.setPartyUrl(partyUrl), this._chatApi.setSessionId(sessionId), 
                this._chatApi._initChat(data.storageData), data.showReviewMessage && this._chatApi.addReviewMessage(), 
                !data.isCreate) for (const message of data.sessionCallbackData.messages) this._chatApi.addMessage(message, !0);
            }
            _onMessage(message) {
                this._chatApi.addMessage(message.data);
            }
            _onBuffer(message) {
                this._chatApi.onBufferingMessage(message.data);
            }
            _onTyping(message) {
                this._chatApi.onTypingMessage(message.data);
            }
            _onWatchingAds(message) {
                this._chatApi.onWatchingAdsMessage(message.data);
            }
            _onUpdateSettings(message) {
                this._chatApi.onUpdateSettingsMessage(message.data);
            }
        }
        function TaskManager_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        !function(VideoApiMessageType) {
            VideoApiMessageType.UPDATE_SESSION = "updateSession", VideoApiMessageType.NEXT_EPISODE = "nextEpisode", 
            VideoApiMessageType.REBOOT_SESSION = "rebootSession", VideoApiMessageType.GET_SERVER_TIME = "getServerTime";
        }(VideoApiMessageType || (VideoApiMessageType = {}));
        const TaskManager_TaskManager = new class {
            constructor() {
                TaskManager_defineProperty(this, "_tasksInFlight", void 0), TaskManager_defineProperty(this, "_taskArray", void 0), 
                TaskManager_defineProperty(this, "_tasks", void 0), TaskManager_defineProperty(this, "_enabled", void 0), 
                TaskManager_defineProperty(this, "_pingInQueue", !1), this.resetTasks(), this._taskArray = [], 
                this._tasksInFlight = 0, this._tasks = Promise.resolve(), this._enabled = !0;
            }
            pushTask(action, name) {
                if (!this._enabled) return;
                const newTask = {
                    action,
                    name
                };
                0 === this._tasksInFlight && this.resetTasks(), this._tasksInFlight = this._taskArray.push(newTask), 
                this._tasks = this._tasks.then((() => {
                    if (this._enabled) return this._swallow(newTask)().then((() => {
                        this._taskArray.shift(), this._tasksInFlight -= 1;
                    }));
                }));
            }
            disable() {
                this._enabled = !1, this.resetTasks();
            }
            resetTasks() {
                this._tasks = Promise.resolve(), this._taskArray = [], this._tasksInFlight = 0;
            }
            _swallow(task) {
                return function() {
                    return task.action().catch((e => {}));
                };
            }
            get tasksInFlight() {
                return this._tasksInFlight;
            }
            hasTaskInQueue(name) {
                return this._taskArray.some((task => task.name === name));
            }
        };
        class BroadcastMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.BROADCAST), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class VideoApiMessage extends Message {
            constructor(sender, target, type) {
                var obj, key, value;
                super(sender, target, type), value = void 0, (key = "type") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.type = type;
            }
        }
        class GetServerTimeMessage extends VideoApiMessage {
            constructor(sender, target) {
                super(sender, target, VideoApiMessageType.GET_SERVER_TIME);
            }
        }
        class BroadcastNextEpisodeMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.BROADCAST_NEXT_EPISODE), value = void 0, 
                (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class SetBufferingMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SET_BUFFERING), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        class SetWatchingAdsMessage extends ClientMessage {
            constructor(sender, target, data) {
                var obj, key, value;
                super(sender, target, ClientMessageType.SET_WATCHING_ADS), value = void 0, (key = "data") in (obj = this) ? Object.defineProperty(obj, key, {
                    value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : obj[key] = value, this.data = data;
            }
        }
        function VideoMessageForwarder_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class VideoMessageForwarder {
            constructor(videoApi, videoEventListener) {
                VideoMessageForwarder_defineProperty(this, "_videoApi", void 0), VideoMessageForwarder_defineProperty(this, "_videoEventListener", void 0), 
                VideoMessageForwarder_defineProperty(this, "_sessionId", void 0), VideoMessageForwarder_defineProperty(this, "_serverState", void 0), 
                VideoMessageForwarder_defineProperty(this, "_lastKnownServerTime", void 0), VideoMessageForwarder_defineProperty(this, "_lastKnownServerTimeUpdatedAt", void 0), 
                VideoMessageForwarder_defineProperty(this, "_syncInterval", void 0), VideoMessageForwarder_defineProperty(this, "_pingInterval", void 0), 
                VideoMessageForwarder_defineProperty(this, "_videoId", void 0), VideoMessageForwarder_defineProperty(this, "_stremingServiceName", void 0), 
                VideoMessageForwarder_defineProperty(this, "_roundTripTimeRecent", []), VideoMessageForwarder_defineProperty(this, "_roundTripTimeMedian", 0), 
                VideoMessageForwarder_defineProperty(this, "_localTimeMinusServerTimeMedian", 0), 
                VideoMessageForwarder_defineProperty(this, "_localTimeMinusServerTimeRecent", []), 
                VideoMessageForwarder_defineProperty(this, "_changingVideo", void 0), VideoMessageForwarder_defineProperty(this, "_lastSentVideoId", void 0), 
                VideoMessageForwarder_defineProperty(this, "_videoChangeStartTime", void 0), VideoMessageForwarder_defineProperty(this, "_lastUpdateEventTime", void 0), 
                VideoMessageForwarder_defineProperty(this, "_watchingAds", !1), VideoMessageForwarder_defineProperty(this, "_hostOnly", !1), 
                this._videoApi = videoApi, this._videoEventListener = videoEventListener, this._videoEventListener.setMessageForwarder(this), 
                this._videoChangeStartTime = 0, this._changingVideo = !1, this._serverState = SessionState.PAUSED, 
                this._lastKnownServerTime = 0, this._lastKnownServerTimeUpdatedAt = 0, this._lastUpdateEventTime = 0, 
                this._stremingServiceName = this._videoApi.getStreamingServiceName(), debug("Video forwarder");
            }
            onMessage(message, sender, sendResponse) {
                switch (message.type) {
                  case BackgroundMessageType.GET_VIDEO_DATA:
                    return this._sendVideoDataAsync(sendResponse), !0;

                  case BackgroundMessageType.LOAD_SESSION:
                    {
                        const loadSessionMessage = message;
                        return this._loadSessionDataAsync(loadSessionMessage.data), !1;
                    }

                  case VideoApiMessageType.UPDATE_SESSION:
                    {
                        const updateSessionMessage = message;
                        return this._updateSessionData(updateSessionMessage.data), !1;
                    }

                  case VideoApiMessageType.NEXT_EPISODE:
                    {
                        const nextEpisodeMessage = message;
                        return this._onNextEpisodeAsync(nextEpisodeMessage.data), !1;
                    }

                  case VideoApiMessageType.REBOOT_SESSION:
                    {
                        const rebootMessage = message;
                        return this._doReboot(rebootMessage.data, sendResponse), !0;
                    }

                  case ChatApiMessageType.ON_WATCHING_ADS:
                    {
                        const watchingAdsMessage = message;
                        return this._onWatchingAds(watchingAdsMessage), !1;
                    }

                  default:
                    return !1;
                }
            }
            _onWatchingAds(message) {
                message.data.anyoneWatchingAds && !this._watchingAds && (TaskManager_TaskManager.pushTask(this._videoApi.doAdCheck.bind(this._videoApi)), 
                this.forceSync()), this._watchingAds = message.data.anyoneWatchingAds;
            }
            get videoId() {
                return this._videoId;
            }
            set videoId(value) {
                this._videoId = value;
            }
            sendTeardown(data) {
                const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", data);
                Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
            }
            teardown() {
                this._sessionId = void 0, this._syncInterval && clearInterval(this._syncInterval), 
                TaskManager_TaskManager.disable(), this._videoEventListener.stopListening();
            }
            _doReboot(rebootSessionData, sendResponse) {
                TaskManager_TaskManager.resetTasks(), this._videoId == rebootSessionData.videoId && this._updateSessionData(rebootSessionData), 
                sendResponse(this._videoId == rebootSessionData.videoId);
                const logReconnect = new LogEventMessage("Content_Script", "Service_Background", {
                    eventType: "reboot",
                    sessionId: this._sessionId
                });
                Messaging_MessagePasser.sendMessageToExtension(logReconnect);
            }
            tryBroadcast() {
                let waitForChange = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this._hostOnly ? this.forceSync() : 0 != this._videoApi.uiEventsHappening || this._changingVideo || !this._sessionId || TaskManager_TaskManager.hasTaskInQueue("BROADCAST") || TaskManager_TaskManager.pushTask((() => this._broadcastAsync(waitForChange)), "BROADCAST");
            }
            setBuffering(buffering) {
                if (this._sessionId) {
                    const setBufferingMessage = new SetBufferingMessage("Content_Script", "Service_Background", {
                        buffering
                    });
                    Messaging_MessagePasser.sendMessageToExtension(setBufferingMessage);
                }
            }
            setWatchingAds(watchingAds) {
                if (this._sessionId) {
                    const setWatchingAdsMessage = new SetWatchingAdsMessage("Content_Script", "Service_Background", {
                        watchingAds
                    });
                    Messaging_MessagePasser.sendMessageToExtension(setWatchingAdsMessage);
                }
            }
            async sendNextEpisodeAsync(nextEpisodeId) {
                if (this._sessionId && nextEpisodeId !== this._videoId && nextEpisodeId !== this._lastSentVideoId) {
                    this._lastSentVideoId = nextEpisodeId, this._changingVideo = !0;
                    const nextEpisodeMessage = new BroadcastNextEpisodeMessage("Content_Script", "Service_Background", {
                        nextEpisode: nextEpisodeId
                    }), response = await Messaging_MessagePasser.sendMessageToExtension(nextEpisodeMessage);
                    response && "Locked Session" === response.errorMessage && await this._waitTillEpisodeChangesAsync(nextEpisodeId);
                }
            }
            async _waitTillEpisodeChangesAsync(nextEpisodeId) {
                try {
                    await delayUntil((() => nextEpisodeId == this._videoId), 1e4)(), this._changingVideo = !1;
                } catch (error) {
                    const tearDownData = {
                        showAlert: !0,
                        alertModal: ownerOnlyNextEpisodeModal
                    };
                    this.sendTeardown(tearDownData);
                }
            }
            async _shouldSendBroadcast(data) {
                if (null == data.lastKnownTime || null == data.lastKnownTimeUpdatedAt || null == data.state) return !1;
                const dif = Math.abs(data.lastKnownTime - this._getCurrentServerTime());
                return !(data.state == this._serverState && dif < 1e3) && (dif >= 1e3 && this._stremingServiceName == StreamingServiceName.AMAZON && await delay(200)(), 
                !0);
            }
            async _getUpdateMessageForVideoStateAsync() {
                const updateSessionData = await this._videoApi.getUpdateSessionDataAsync();
                updateSessionData.lastKnownTimeUpdatedAt -= this._localTimeMinusServerTimeMedian;
                return new BroadcastMessage("Content_Script", "Service_Background", updateSessionData);
            }
            forceSync() {
                TaskManager_TaskManager.pushTask(this._sync.bind(this));
            }
            async _onNextEpisodeAsync(nextEpisodeMessageData) {
                this._videoChangeStartTime = Date.now(), TaskManager_TaskManager.pushTask((() => this._continueNextEpisodeAsync(nextEpisodeMessageData)));
            }
            async _continueNextEpisodeAsync(nextEpisodeMessageData) {
                try {
                    debug("Continue next episode called"), this._changingVideo = !0, await this._videoApi.jumpToNextEpisode(nextEpisodeMessageData), 
                    await this._videoEventListener.loadNewVideoAsync(nextEpisodeMessageData.videoId), 
                    debug("After load new video"), this._videoEventListener.reloadListeners(), this._lastUpdateEventTime < this._videoChangeStartTime && (debug("Sending broadcast after next episode"), 
                    TaskManager_TaskManager.pushTask(this._broadcastAsync.bind(this), "BROADCAST")), 
                    this._videoId = nextEpisodeMessageData.videoId, this._changingVideo = !1;
                } catch (error) {
                    const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", {
                        showAlert: !0,
                        alertModal: failedNextEpisodeModal
                    });
                    Messaging_MessagePasser.sendMessageToExtension(teardownMessage);
                }
            }
            _updateSessionData(data) {
                this._lastUpdateEventTime = Date.now(), TaskManager_TaskManager.pushTask(this._receiveSessionData(data).bind(this));
            }
            _receiveSessionData(data) {
                return this._serverState = data.state, this._lastKnownServerTime = data.lastKnownTime, 
                this._lastKnownServerTimeUpdatedAt = data.lastKnownTimeUpdatedAt, this._sync;
            }
            async _sendVideoDataAsync(sendResponse) {
                sendResponse(await this._videoApi.getVideoDataAsync());
            }
            async _waitForChange() {
                return new Promise((resolve => {
                    const start = performance.now(), checkForChange = async () => {
                        if (performance.now() - start >= 2500) resolve(!1); else {
                            const updateMessage = await this._getUpdateMessageForVideoStateAsync();
                            await this._shouldSendBroadcast(updateMessage.data) ? resolve(!0) : setTimeout((() => {
                                checkForChange();
                            }), 50);
                        }
                    };
                    checkForChange();
                }));
            }
            async _broadcastAsync() {
                let waitForChange = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (this._changingVideo) return;
                if (this._hostOnly) return void this.forceSync();
                const updateMessage = await this._getUpdateMessageForVideoStateAsync();
                if (await this._shouldSendBroadcast(updateMessage.data)) await this._sendBroadcastMessage(updateMessage); else if (waitForChange) {
                    if (await this._waitForChange()) {
                        const newUpdateMessage = await this._getUpdateMessageForVideoStateAsync();
                        await this._sendBroadcastMessage(newUpdateMessage);
                    }
                }
            }
            async _sendBroadcastMessage(updateMessage) {
                if (this._changingVideo) return;
                const oldState = this._serverState;
                if (updateMessage.data.bufferingState) {
                    updateMessage.data.state = SessionState.PAUSED, await Messaging_MessagePasser.sendMessageToExtension(updateMessage), 
                    await this._videoApi.waitVideoDoneLoadingAsync();
                    const newUpdateMessage = await this._getUpdateMessageForVideoStateAsync();
                    newUpdateMessage.data.bufferingState = !0, oldState == SessionState.PLAYING && (newUpdateMessage.data.state = SessionState.PLAYING), 
                    await Messaging_MessagePasser.sendMessageToExtension(newUpdateMessage);
                } else await Messaging_MessagePasser.sendMessageToExtension(updateMessage);
            }
            async _loadSessionDataAsync(loadSessionData) {
                const sessionData = loadSessionData.sessionCallbackData;
                this._sessionId = sessionData.sessionId, this._serverState = sessionData.state, 
                this._lastKnownServerTime = Number(sessionData.lastKnownTime), this._lastKnownServerTimeUpdatedAt = Number(sessionData.lastKnownTimeUpdatedAt), 
                this._videoId = sessionData.videoId, sessionData.ownerId && (this._hostOnly = !0), 
                loadSessionData.isCreate ? TaskManager_TaskManager.pushTask(this._broadcastAsync.bind(this), "BROADCAST") : this.forceSync(), 
                this._videoEventListener.startListening(), this._setupSyncInterval();
            }
            _ping() {
                return new Promise((resolve => {
                    const getServerTimeMessage = new GetServerTimeMessage("Content_Script", "Service_Background"), startTime = Date.now();
                    Messaging_MessagePasser.sendMessageToExtension(getServerTimeMessage).then((response => {
                        const now = Date.now();
                        if (response) {
                            const serverTime = response.serverTime;
                            serverTime && (shove(this._roundTripTimeRecent, now - startTime, 5), this._roundTripTimeMedian = median(this._roundTripTimeRecent), 
                            shove(this._localTimeMinusServerTimeRecent, now - Math.round(this._roundTripTimeMedian / 2) - serverTime, 5), 
                            this._localTimeMinusServerTimeMedian = median(this._localTimeMinusServerTimeRecent));
                        }
                    })).catch((error => {
                        debug(error);
                    })), resolve();
                }));
            }
            _setupSyncInterval() {
                this._syncInterval && clearInterval(this._syncInterval), this._syncInterval = setInterval((() => {
                    0 == TaskManager_TaskManager.tasksInFlight && TaskManager_TaskManager.pushTask(this._sync.bind(this));
                }), 5e3), this._pingInterval = setInterval((() => {
                    TaskManager_TaskManager.hasTaskInQueue("PING") || TaskManager_TaskManager.pushTask(this._ping.bind(this), "PING");
                }), 12500), this._ping();
            }
            _shouldCancelSync() {
                return !this._sessionId || this._videoApi.uiEventsHappening > 0 || this._changingVideo || !this._videoEventListener.shouldSync();
            }
            async _sync() {
                if (this._shouldCancelSync()) return;
                if (await this._videoApi.waitVideoDoneLoadingAsync(), this._shouldCancelSync()) return;
                const videoState = await this._videoApi.getStateAsync();
                this._serverState == SessionState.PAUSED ? await this._checkPaused(videoState) : this._serverState == SessionState.PLAYING && await this._checkPlaying(videoState);
            }
            async _checkPaused(videoState) {
                const {playbackState, playbackPositionMilliseconds} = videoState;
                playbackState !== PlaybackState.PAUSED && await this._videoApi.pause(), Math.abs(this._lastKnownServerTime - playbackPositionMilliseconds) > 2500 && await this._videoApi.setCurrentTime(this._lastKnownServerTime);
            }
            async _checkPlaying(videoState) {
                const {playbackState, playbackPositionMilliseconds} = videoState, serverTime = this._getCurrentServerTime();
                playbackState == PlaybackState.PAUSED && await this._videoApi.play(), Math.abs(serverTime - playbackPositionMilliseconds) > 2500 && (await this._videoApi.setCurrentTime(serverTime), 
                await this._videoApi.play());
            }
            _getServerTimeLapsed() {
                return this._serverState === SessionState.PLAYING ? Date.now() - (this._lastKnownServerTimeUpdatedAt + this._localTimeMinusServerTimeMedian) : 0;
            }
            _getCurrentServerTime() {
                return this._lastKnownServerTime + this._getServerTimeLapsed();
            }
            get changingVideo() {
                return this._changingVideo;
            }
            set changingVideo(changing) {
                this._changingVideo = changing;
            }
        }
        function ContentScript_defineProperty(obj, key, value) {
            return key in obj ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : obj[key] = value, obj;
        }
        class HuluContentScript extends class {
            constructor(chatApi, videoApi, videoEventListener) {
                ContentScript_defineProperty(this, "_hasBackgroundConnection", void 0), ContentScript_defineProperty(this, "_isContentScriptReady", void 0), 
                ContentScript_defineProperty(this, "_isContentScriptLoading", void 0), ContentScript_defineProperty(this, "_showingReviewMessage", void 0), 
                ContentScript_defineProperty(this, "_messageReceiver", void 0), ContentScript_defineProperty(this, "_chatApi", void 0), 
                ContentScript_defineProperty(this, "_videoApi", void 0), ContentScript_defineProperty(this, "_chatMessageForwarder", void 0), 
                ContentScript_defineProperty(this, "_videoEventListener", void 0), ContentScript_defineProperty(this, "_videoMessageForwarder", void 0), 
                this._chatApi = chatApi, this._videoApi = videoApi, this._videoEventListener = videoEventListener, 
                this._chatMessageForwarder = new ChatMessageForwarder(this._chatApi), this._videoMessageForwarder = new VideoMessageForwarder(this._videoApi, this._videoEventListener), 
                this._isContentScriptReady = !1, this._isContentScriptLoading = !1, this._showingReviewMessage = !1, 
                this._messageReceiver = new CSMessageReceiver, this._messageReceiver.addMessageListener(this._videoMessageForwarder), 
                this._messageReceiver.addMessageListener(this._chatMessageForwarder), this._messageReceiver.addMessageListener(this), 
                this._hasBackgroundConnection = !1, this._setupPingPort();
            }
            _setupPingPort() {
                const backgroundPort = chrome.runtime.connect();
                backgroundPort.onDisconnect.addListener((() => {
                    console.log("Lost background script. Teardown");
                    const teardownData = {
                        showAlert: this._chatApi.inSession,
                        alertModal: lostBackgroundConnectionModal
                    };
                    this._teardown(teardownData);
                })), backgroundPort.onMessage.addListener((() => {
                    debug("Got background script"), this._hasBackgroundConnection = !0;
                }));
            }
            onMessage(message, _sender, sendResponse) {
                if ("Content_Script" == message.target) {
                    if (message.type === PopupMessageType.IS_CONTENT_SCRIPT_READY) {
                        if (this._isContentScriptReady) {
                            sendResponse({
                                ready: !0
                            });
                        } else this._isContentScriptLoading || (this._isContentScriptLoading = !0, this._waitScriptReadyAsync().then(sendResponse));
                        return !0;
                    }
                    if (message.type === PopupMessageType.GET_INIT_DATA) {
                        return sendResponse(this._getInitDataResponse()), !0;
                    }
                    if (message.type === PopupMessageType.DISCONNECT && "Popup" == message.sender) {
                        const teardownMessage = new TeardownMessage("Content_Script", "Service_Background", DEFAULT_TEARDOWN);
                        Messaging_MessagePasser.sendMessageToExtension(teardownMessage), sendResponse();
                    } else if (message.type == BackgroundMessageType.TEARDOWN) {
                        const teardownMessage = message;
                        return this._teardown(teardownMessage.data), sendResponse(), !0;
                    }
                }
                return !1;
            }
            _teardown(data) {
                if (data.showAlert && data.alertModal) {
                    var _data$buttonUrl;
                    const buttonUrl = null !== (_data$buttonUrl = data.buttonUrl) && void 0 !== _data$buttonUrl ? _data$buttonUrl : this._chatApi.getPartyUrl();
                    showButtonMessage(data.alertModal, buttonUrl);
                }
                this._videoMessageForwarder.teardown(), this._chatMessageForwarder.teardown(), this._messageReceiver.teardown(), 
                window.telepartyLoaded = !1;
            }
            async waitBackgroundConnectionReadyAsync() {
                return delayUntil((() => this._hasBackgroundConnection), 5e3)();
            }
            async _waitScriptReadyAsync() {
                try {
                    return await this.waitBackgroundConnectionReadyAsync(), await this._waitContentScriptReadyAsync();
                } catch (error) {
                    return {
                        ready: !1,
                        error: {
                            message: "Failed to connect to Script. Please refresh the page and try again",
                            showButton: !1
                        }
                    };
                } finally {
                    this._isContentScriptLoading = !1;
                }
            }
            async _waitContentScriptReadyAsync() {
                let errorData;
                try {
                    await this._videoApi.waitVideoApiReadyAsync();
                    const response = await this._waitBackgroundResponseAsync();
                    response && response.error ? (debug("Error"), errorData = {
                        message: response.error,
                        showButton: !0
                    }, this._isContentScriptReady = !0) : (response && response.showReviewMessage && (this._showingReviewMessage = !0), 
                    this._isContentScriptReady = !0);
                } catch (error) {
                    errorData = {
                        message: error.message,
                        showButton: !1
                    };
                }
                return {
                    ready: this._isContentScriptReady,
                    error: errorData
                };
            }
            _getInitDataResponse() {
                return {
                    inSession: this._chatApi.inSession,
                    isChatVisible: this._chatApi.getChatVisible(),
                    partyUrl: this._chatApi.getPartyUrl(),
                    showReviewMessage: !1
                };
            }
            async _waitBackgroundResponseAsync() {
                const getSessionDataMessage = await this._getSessionDataRequestAsync();
                return Messaging_MessagePasser.sendMessageToExtension(getSessionDataMessage);
            }
            async _getSessionDataRequestAsync() {
                const sessionRequestData = {
                    videoId: (await this._videoApi.getVideoDataAsync()).videoId
                };
                return new GetSessionDataMessage("Content_Script", "Service_Background", sessionRequestData);
            }
        } {
            constructor() {
                const huluVideoApi = new HuluVideoApi, huluChatApi = new HuluChatApi;
                super(huluChatApi, huluVideoApi, new HuluVideoEventListener(huluVideoApi, huluChatApi)), 
                debug("Hulu Content Script");
            }
        }
        window.telepartyLoaded || (window.telepartyLoaded = !0, new HuluContentScript, debug("Initialized content script"));
    })();
})();