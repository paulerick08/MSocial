webpackJsonp([0],{

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_app__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tesseract_js__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tesseract_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_tesseract_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_abbyy_rtr__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_chooser__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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












var HomePage = /** @class */ (function () {
    function HomePage(abbyyRTR, navCtrl, appProvider, loadingCtrl, toast, camera, platfrom, alert, fileChooser, file, filePath, http) {
        var _this = this;
        this.abbyyRTR = abbyyRTR;
        this.navCtrl = navCtrl;
        this.appProvider = appProvider;
        this.loadingCtrl = loadingCtrl;
        this.toast = toast;
        this.camera = camera;
        this.platfrom = platfrom;
        this.alert = alert;
        this.fileChooser = fileChooser;
        this.file = file;
        this.filePath = filePath;
        this.http = http;
        this.currentPage = 'home';
        //uri = 'C://Users/ASUS/Documents/Repositories/MSocial/Assets/background2.json';
        this.uri = 'No image file selected';
        //uri = 'A very very very long uri that will serve as a placeholder in case a long uri is used.A very very very long uri that will serve as a placeholder in case a long uri is used.A very very very long uri that will serve as a placeholder in case a long uri is used.A very very very long uri that will serve as a placeholder in case a long uri is used.';
        this.page = 0;
        this.selectedPages = '';
        this.confirmNumber = undefined;
        this.roomNumber = undefined;
        this.lastName = undefined;
        this.value = undefined;
        this.amexValue1 = '';
        this.amexValue2 = '';
        this.amexValue3 = '';
        this.amexValue4 = '';
        this.dinersValue1 = '';
        this.dinersValue2 = '';
        this.dinersValue3 = '';
        this.dinersValue4 = '';
        this.checkInValue1 = '';
        this.checkInValue2 = '';
        this.checkInValue3 = '';
        this.checkInValue4 = '';
        this.checkInValue5 = '';
        this.checkOutValue1 = '';
        this.checkOutValue2 = '';
        this.checkOutValue3 = '';
        this.checkOutValue4 = '';
        this.checkOutValue5 = '';
        this.card = '';
        this.payment = '';
        this.relCode = '';
        this.emirateCode = '';
        this.resCounPhone = '';
        this.mobNumber = '';
        this.visit = '';
        this.config = '';
        this.config2 = '';
        this.config3 = '';
        this.bgImage = '../assets/imgs/AccorHotel/background1.png';
        this.newpath = '';
        this.pages = {
            //array of pages for check-in 
            checkIn: ['checkinOption', 'confirmNumber', 'verification', 'passport', 'scanComplete', 'terms', 'userDetails', 'dtcm', 'dtcm2', 'signature', 'incidentalAccount', 'incidental', 'signature2', 'incidentalProcess', 'paymentAccepted', 'checkInSuccess'],
            //array of pages for check-out
            checkOut: ['roomInfo', 'folio', 'cardAccount', 'cardDetails', 'checkoutSignature', 'paymentProcess', 'paymentAccepted2', 'checkOutSuccess']
        };
        this.signaturePadOptions = {
            'minWidth': 1,
            'canvasWidth': 250,
            'canvasHeight': 220
        };
        this.platfrom.ready().then(function () {
        });
        setInterval(function () {
            //code goes here that will be run every 5 seconds.    
            _this.getDate();
            _this.getTime();
        }, 500);
        var mrz = [
            'I<UTOD23145890<1233<<<<<<<<<<<',
            '7408122F1204159UTO<<<<<<<<<<<6',
            'ERIKSSON<<ANNA<MARIA<<<<<<<<<<'
        ];
        var parse = __webpack_require__(435).parse;
        console.log(parse(mrz));
    }
    HomePage.prototype.getTime = function () {
        this.time = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format('hh:mm A');
    };
    HomePage.prototype.getDate = function () {
        this.date = __WEBPACK_IMPORTED_MODULE_6_moment___default()().format('dddd DD MMMM');
    };
    HomePage.prototype.ionViewDidLoad = function () {
        // this.signaturePad is now available
        var signatureContainerWidth = document.querySelector('.signature .container');
        var canvas = document.querySelector('.signature .container canvas');
        this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
        this.signaturePad.clear(); //only clears the first signaturePad. 
    };
    HomePage.prototype.recognize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loader, recognition, face1, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('try');
                        loader = this.loadingCtrl.create({
                            content: 'Recognizing image please wait..',
                        });
                        loader.present();
                        recognition = new AWS.Rekognition();
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                var jpg = true;
                                var image;
                                try {
                                    image = atob(_this.selectedImage.split("data:image/jpeg;base64,")[1]);
                                }
                                catch (e) {
                                    jpg = false;
                                }
                                if (jpg == false) {
                                    try {
                                        image = atob(_this.selectedImage.split("data:image/png;base64,")[1]);
                                        console.log(image);
                                    }
                                    catch (e) {
                                        alert("Not an image file Recognition can process");
                                        return;
                                    }
                                }
                                var length = image.length;
                                var imageBytes = new ArrayBuffer(length);
                                var ua = new Uint8Array(imageBytes);
                                for (var i = 0; i < length; i++) {
                                    ua[i] = image.charCodeAt(i);
                                }
                                resolve(imageBytes);
                            })];
                    case 1:
                        face1 = _a.sent();
                        params = {
                            Image: {
                                Bytes: face1
                            }
                        };
                        recognition.detectText(params, function (err, data) {
                            if (err) {
                                console.log(err, err.stack);
                                loader.dismiss();
                                alert('Cannot recognize image please capture again');
                                _this.recognizeImage = undefined;
                            } // an error occurred
                            else {
                                console.log(data, 'recognized text');
                                _this.textRecognized = data.TextDetections.filter(function (data) { return data.Type === 'LINE'; });
                                console.log(_this.textRecognized, 'textRecognized');
                                loader.dismiss();
                            } // successful response
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.capture = function () {
        var _this = this;
        var options = {
            areaOfInterest: '0.9 0.2',
            orientation: 'landscape',
            licenseFileName: "AbbyyRtrSdk.license",
        };
        this.abbyyRTR.startTextCapture(options)
            .then(function (res) {
            console.log(res);
            _this.textRecognized = res;
            _this.page++;
            _this.currentPage = _this.pages[_this.selectedPages][_this.page];
        })
            .catch(function (error) { return console.error(error); });
    };
    HomePage.prototype.getPicture = function (sourceType) {
        var _this = this;
        this.camera.getPicture({
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            allowEdit: true,
            saveToPhotoAlbum: false,
            correctOrientation: true
        }).then(function (imageData) {
            _this.selectedImage = "data:image/jpeg;base64," + imageData;
            console.log(_this.selectedImage);
            _this.recognize();
            _this.recognizeImage();
        });
    };
    HomePage.prototype.recognizeImage = function () {
        var _this = this;
        console.log('recognize image');
        __WEBPACK_IMPORTED_MODULE_5_tesseract_js__["recognize"](this.selectedImage)
            .progress(function (message) {
            if (message.status === 'recognizing text') {
                console.log('recognizing image');
            }
        })
            .catch(function (err) { return console.error(err); })
            .then(function (result) {
            _this.imageText = result.text;
            console.log('result', result);
        })
            .finally(function (resultOrError) {
            console.log(resultOrError, 'err');
        });
    };
    HomePage.prototype.checkIn = function () {
        this.selectedPages = 'checkIn';
        this.currentPage = this.pages[this.selectedPages][this.page];
    };
    HomePage.prototype.checkOut = function () {
        this.selectedPages = 'checkOut';
        this.currentPage = this.pages[this.selectedPages][this.page];
    };
    HomePage.prototype.back = function () {
        if (this.page === 0) {
            this.currentPage = 'home';
            this.quit();
        }
        else if (this.currentPage === 'dtcm2' || this.currentPage === 'paymentAccepted' || this.currentPage === 'paymentAccepted2') {
            this.page--;
            this.page--;
            this.currentPage = this.pages[this.selectedPages][this.page];
        }
        else {
            this.page--;
            this.confirmNumber = undefined;
            this.signaturePad.clear();
            this.isTermCheked = false;
            this.signatureDataUrl = undefined;
            this.roomNumber = undefined;
            this.lastName = undefined;
            this.selectedImage = undefined;
            this.checkInValue1 = '';
            this.checkInValue2 = '';
            this.checkInValue3 = '';
            this.checkInValue4 = '';
            this.checkInValue5 = '';
            this.checkOutValue1 = '';
            this.checkOutValue2 = '';
            this.checkOutValue3 = '';
            this.checkOutValue4 = '';
            this.checkOutValue5 = '';
            this.amexValue1 = '';
            this.amexValue2 = '';
            this.amexValue3 = '';
            this.amexValue4 = '';
            this.dinersValue1 = '';
            this.dinersValue2 = '';
            this.dinersValue3 = '';
            this.payment = '';
            this.relCode = '';
            this.emirateCode = '';
            this.resCounPhone = '';
            this.mobNumber = '';
            this.visit = '';
            this.currentPage = this.pages[this.selectedPages][this.page];
        }
    };
    HomePage.prototype.cancelCheckin = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Cancel Check-In',
            message: 'Are you sure you want to cancel? Information will not be saved',
            enableBackdropDismiss: false,
            buttons: [{
                    text: 'Yes',
                    role: 'cancel',
                    handler: function () {
                        _this.quit();
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.cancelCheckout = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'Cancel Checkout',
            message: 'Are you sure you want to cancel?',
            enableBackdropDismiss: false,
            buttons: [{
                    text: 'Yes',
                    role: 'cancel',
                    handler: function () {
                        _this.quit();
                    }
                },
                {
                    text: 'No',
                    handler: function () {
                        console.log('No clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.quit = function () {
        this.page = 0;
        this.currentPage = 'home';
        this.confirmNumber = undefined;
        this.signaturePad.clear();
        this.isTermCheked = false;
        this.signatureDataUrl = undefined;
        this.roomNumber = undefined;
        this.lastName = undefined;
        this.selectedImage = undefined;
        this.checkInValue1 = '';
        this.checkInValue2 = '';
        this.checkInValue3 = '';
        this.checkInValue4 = '';
        this.checkInValue5 = '';
        this.checkOutValue1 = '';
        this.checkOutValue2 = '';
        this.checkOutValue3 = '';
        this.checkOutValue4 = '';
        this.checkOutValue5 = '';
        this.payment = '';
        this.relCode = '';
        this.emirateCode = '';
        this.resCounPhone = '';
        this.mobNumber = '';
        this.visit = '';
    };
    HomePage.prototype.next = function () {
        var _this = this;
        console.log(this.currentPage);
        if (this.currentPage === 'confirmNumber') {
            var loader_1 = this.loadingCtrl.create({
                content: 'Loading please wait..'
            });
            if (this.confirmNumber) {
                loader_1.present();
                setTimeout(function () {
                    var isFound = false;
                    if (_this.confirmNumber === '12345') {
                        _this.bookingDetails = {
                            firstName: 'FRANK',
                            lastName: 'LIU',
                            arrivalDate: 'MARCH 6, 2019',
                            departureDate: 'MARCH 10, 2019',
                            totalRoomNights: '4  Night',
                            type: 'Classic Room',
                            addOns: 'N/A',
                            gender: 'Male',
                            documentNo: '123',
                            birthPlace: 'China',
                            nationality: 'Chinese',
                            expiryDate: 'Sept 12, 2020',
                            issueDate: 'Sept 12, 2010',
                            countryCode: '+86'
                        };
                        isFound = true;
                    }
                    else if (_this.confirmNumber === '0987') {
                        _this.bookingDetails = {
                            firstName: 'CATRIONA ',
                            lastName: 'GRAY ',
                            arrivalDate: 'MARCH 6, 2019',
                            departureDate: 'MARCH 10, 2019',
                            totalRoomNights: '4  Night',
                            type: 'Classic Room',
                            addOns: 'N/A',
                            gender: 'Female',
                            documentNo: '456',
                            birthPlace: 'Philippines',
                            nationality: 'Filipino',
                            expiryDate: 'Aug 09, 2025',
                            issueDate: 'Aug 09, 2015',
                            countryCode: '+86'
                        };
                        isFound = true;
                    }
                    else {
                        _this.toast.create({
                            message: 'Confirmation number not found.',
                            duration: 2000
                        }).present();
                    }
                    loader_1.dismiss();
                    if (isFound) {
                        _this.page++;
                        _this.currentPage = _this.pages[_this.selectedPages][_this.page];
                        _this.confirmNumber = undefined;
                        console.log(_this.confirmNumber);
                    }
                }, 2000);
            }
            else {
                this.toast.create({
                    duration: 2000,
                    message: 'Please Check Your Confirmation Number'
                }).present();
            }
        }
        else if (this.currentPage === 'passport') {
            this.capture(); //start capture for passport
        }
        else if (this.currentPage === 'terms') {
            if (this.isTermCheked) {
                this.page++;
                this.currentPage = this.pages[this.selectedPages][this.page];
                this.isTermCheked = false;
            }
            else {
                this.toast.create({
                    message: 'Please Check Terms & Condition to proceed',
                    duration: 2000
                }).present();
            }
        }
        else if (this.currentPage === 'roomInfo') {
            if (this.roomNumber && this.lastName) {
                var loader_2 = this.loadingCtrl.create({
                    content: 'Loading please wait..'
                });
                loader_2.present();
                setTimeout(function () {
                    if (_this.roomNumber === '111' && _this.lastName.toLowerCase() === 'liu') {
                        _this.folioDetails = {
                            guest: 'Frank Liu',
                            roomNumber: '111',
                            confirmNumber: '12345'
                        };
                        _this.bookingDetails = {
                            firstName: 'FRANK',
                            lastName: 'LIU',
                            arrivalDate: 'MARCH 6, 2019',
                            departureDate: 'MARCH 10, 2019',
                            totalRoomNights: '4  Night',
                            type: 'Classic Room',
                            addOns: 'N/A',
                        };
                        loader_2.dismiss();
                        _this.page++;
                        _this.currentPage = _this.pages[_this.selectedPages][_this.page];
                    }
                    else if (_this.roomNumber === '222' && _this.lastName.toLowerCase() === 'gray') {
                        _this.folioDetails = {
                            guest: ' Catriona Gray',
                            roomNumber: '222',
                            confirmNumber: '0987'
                        };
                        _this.bookingDetails = {
                            firstName: 'CATRIONA ',
                            lastName: 'GRAY ',
                            arrivalDate: 'MARCH 6, 2019',
                            departureDate: 'MARCH 10, 2019',
                            totalRoomNights: '4  Night',
                            type: 'Classic Room',
                            addOns: 'N/A',
                        };
                        loader_2.dismiss();
                        _this.page++;
                        _this.currentPage = _this.pages[_this.selectedPages][_this.page];
                    }
                    else {
                        loader_2.dismiss();
                        _this.toast.create({
                            message: "No data found.",
                            duration: 2000
                        }).present();
                    }
                }, 2000);
            }
            else {
                var message = 'Please Enter Room Number and Last Name';
                if (!this.roomNumber && !this.lastName) {
                    message = 'Please Enter Room Number and Last Name';
                }
                else if (!this.lastName) {
                    message = 'Please Enter Last Name';
                }
                else {
                    message = 'Please Enter Room Number';
                }
                this.toast.create({
                    duration: 2000,
                    message: message
                }).present();
            }
        }
        else if (this.currentPage === 'signature' || this.currentPage === 'signature2' || this.currentPage === 'checkoutSignature') {
            if (this.signatureDataUrl) {
                this.signatureDataUrl = undefined;
                this.signaturePad.clear();
                if (this.currentPage === 'signature2') {
                    console.log("timeout");
                    this.page++;
                    this.signaturePad.clear();
                    this.currentPage = this.pages[this.selectedPages][this.page];
                    setTimeout(function () {
                        _this.page++;
                        _this.currentPage = _this.pages[_this.selectedPages][_this.page];
                    }, 2000);
                }
                else if (this.currentPage === 'checkoutSignature') {
                    console.log("timeout");
                    this.page++;
                    this.currentPage = this.pages[this.selectedPages][this.page];
                    this.signaturePad.clear();
                    setTimeout(function () {
                        _this.page++;
                        _this.currentPage = _this.pages[_this.selectedPages][_this.page];
                    }, 2000);
                }
                else {
                    console.log(this.payment);
                    if (this.payment === 'Cash') {
                        console.log;
                        this.page = 15;
                        this.currentPage = this.pages[this.selectedPages][this.page];
                    }
                    else {
                        this.page++;
                        this.currentPage = this.pages[this.selectedPages][this.page];
                        this.signaturePad.clear();
                    }
                }
            }
            else {
                this.toast.create({
                    duration: 2000,
                    message: 'Please sign to continue.'
                }).present();
            }
        }
        else if (this.currentPage === 'incidental') {
            if (this.checkInValue1.length == 4 && this.checkInValue2.length == 4 && this.checkInValue3.length == 4 && this.checkInValue4.length == 4 && this.checkInValue5.length == 3) {
                this.checkInValue1 = '';
                this.checkInValue2 = '';
                this.checkInValue3 = '';
                this.checkInValue4 = '';
                this.checkInValue5 = '';
                this.page++;
                this.currentPage = this.pages[this.selectedPages][this.page];
            }
            else if (this.amexValue1.length == 4 && this.amexValue2.length == 6 && this.amexValue3.length == 5 && this.amexValue4.length == 4) {
                this.amexValue1 = '';
                this.amexValue2 = '';
                this.amexValue3 = '';
                this.amexValue4 = '';
                this.page++;
                this.currentPage = this.pages[this.selectedPages][this.page];
            }
            else if (this.dinersValue1.length == 5 && this.dinersValue2.length == 4 && this.dinersValue3.length == 5 && this.dinersValue4.length == 3) {
                this.dinersValue1 = '';
                this.dinersValue2 = '';
                this.dinersValue3 = '';
                this.dinersValue4 = '';
                this.page++;
                this.currentPage = this.pages[this.selectedPages][this.page];
            }
            else {
                this.toast.create({
                    duration: 2000,
                    message: 'Please check your entered card details.'
                }).present();
            }
        }
        else if (this.currentPage === 'userDetails') {
            if (this.payment != '' && this.visit != '' && this.emirateCode != '' && this.mobNumber != '' && this.resCounPhone != '') {
                this.page++;
                this.currentPage = this.pages[this.selectedPages][this.page];
                setTimeout(function () {
                    _this.page++;
                    _this.currentPage = _this.pages[_this.selectedPages][_this.page];
                }, 2000);
            }
            else {
                this.toast.create({
                    duration: 2000,
                    message: 'Fields with asterisk(*) must not be empty. '
                }).present();
            }
        }
        else if (this.currentPage === 'cardDetails') {
            if (this.checkOutValue1.length == 4 && this.checkOutValue2.length == 4 && this.checkOutValue3.length == 4 && this.checkOutValue4.length == 4 && this.checkOutValue5.length == 3) {
                this.checkOutValue1 = '';
                this.checkOutValue2 = '';
                this.checkOutValue3 = '';
                this.checkOutValue4 = '';
                this.checkOutValue5 = '';
                this.page++;
                this.currentPage = this.pages[this.selectedPages][this.page];
            }
            else if (this.amexValue1.length == 4 && this.amexValue2.length == 6 && this.amexValue3.length == 5 && this.amexValue4.length == 4) {
                this.amexValue1 = '';
                this.amexValue2 = '';
                this.amexValue3 = '';
                this.amexValue4 = '';
                this.page++;
                this.currentPage = this.pages[this.selectedPages][this.page];
            }
            else if (this.dinersValue1.length == 5 && this.dinersValue2.length == 4 && this.dinersValue3.length == 5 && this.dinersValue4.length == 3) {
                this.dinersValue1 = '';
                this.dinersValue2 = '';
                this.dinersValue3 = '';
                this.dinersValue4 = '';
                this.page++;
                this.currentPage = this.pages[this.selectedPages][this.page];
            }
            else {
                this.toast.create({
                    duration: 2000,
                    message: 'Please enter your entered card details.'
                }).present();
            }
        }
        else {
            this.page++;
            this.currentPage = this.pages[this.selectedPages][this.page];
        }
    };
    HomePage.prototype.clear = function () {
        this.signaturePad.clear();
        this.signatureDataUrl = undefined;
    };
    HomePage.prototype.drawComplete = function () {
        // will be notified of szimek/signature_pad's onEnd event
        console.log(this.signaturePad.toDataURL());
        this.signatureDataUrl = this.signaturePad.toDataURL();
    };
    HomePage.prototype.drawStart = function () {
        // will be notified of szimek/signature_pad's onBegin event
        console.log('begin drawing');
    };
    HomePage.prototype.formatDate = function (date) {
        date = date || '';
        return date.substring(0, 10);
    };
    HomePage.prototype.formatRecognizeText = function (text) {
        return text.replace(/<|_|«|\*/g, '');
    };
    HomePage.prototype.formatExpiryDate = function (date) {
        var year = "20" + date.substring(0, 2);
        date = new Date(year, parseInt(date.substring(2, 4)) - 1, date.substring(4));
        return __WEBPACK_IMPORTED_MODULE_6_moment___default()(date.getTime()).format('MMMM DD, YYYY');
    };
    HomePage.prototype.onEnterCode = function (event) {
        this.checkOutValue1 = this.checkOutValue1.replace(/[^0-9]/g, '');
        this.checkOutValue2 = this.checkOutValue2.replace(/[^0-9]/g, '');
        this.checkOutValue3 = this.checkOutValue3.replace(/[^0-9]/g, '');
        this.checkOutValue4 = this.checkOutValue4.replace(/[^0-9]/g, '');
        this.checkOutValue5 = this.checkOutValue5.replace(/[^0-9]/g, '');
        this.checkInValue1 = this.checkInValue1.replace(/[^0-9]/g, '');
        this.checkInValue2 = this.checkInValue2.replace(/[^0-9]/g, '');
        this.checkInValue3 = this.checkInValue3.replace(/[^0-9]/g, '');
        this.checkInValue4 = this.checkInValue4.replace(/[^0-9]/g, '');
        this.checkInValue5 = this.checkInValue5.replace(/[^0-9]/g, '');
        event.target.value.length === 4 && event.target.nextElementSibling ? event.target.nextElementSibling.focus() : '';
        if (event.target.value.length === 0 && event.key == 'Backspace')
            event.target.previousElementSibling.focus();
    };
    HomePage.prototype.onAmexEnterCode1 = function (event) {
        console.log(event);
        console.log(this.amexValue1);
        this.amexValue1 = this.amexValue1.replace(/[^0-9]/g, '');
        console.log(this.amexValue1);
        console.log(this.amexValue1.length);
        if (this.amexValue1.length === 4) {
            event.target.nextElementSibling.focus();
            console.log(event.target.nextElementSibling.toString);
            console.log(true);
        }
    };
    HomePage.prototype.onAmexEnterCode2 = function (event) {
        console.log(event);
        console.log(this.amexValue2);
        this.amexValue2 = this.amexValue2.replace(/[^0-9]/g, '');
        console.log(this.amexValue2);
        console.log(this.amexValue2.length);
        if (this.amexValue2.length === 6) {
            event.target.nextElementSibling.focus();
            console.log(true);
        }
    };
    HomePage.prototype.onAmexEnterCode3 = function (event) {
        console.log(event);
        console.log(this.amexValue3);
        this.amexValue3 = this.amexValue3.replace(/[^0-9]/g, '');
        console.log(this.amexValue3);
        console.log(this.amexValue3.length);
        if (this.amexValue3.length === 5) {
            event.target.nextElementSibling.focus();
            console.log(true);
        }
    };
    HomePage.prototype.onAmexEnterCode4 = function (event) {
        console.log(event);
        console.log(this.amexValue4);
        this.amexValue4 = this.amexValue4.replace(/[^0-9]/g, '');
        console.log(this.amexValue4);
        console.log(this.amexValue4.length);
    };
    HomePage.prototype.onDinersEnterCode1 = function (event) {
        console.log(event);
        console.log(this.dinersValue1);
        this.dinersValue1 = this.dinersValue1.replace(/[^0-9]/g, '');
        console.log(this.dinersValue1);
        console.log(this.dinersValue1.length);
        if (this.dinersValue1.length === 5) {
            event.target.nextElementSibling.focus();
            console.log(true);
        }
    };
    HomePage.prototype.onDinersEnterCode2 = function (event) {
        console.log(event);
        console.log(this.dinersValue2);
        this.dinersValue2 = this.dinersValue2.replace(/[^0-9]/g, '');
        console.log(this.dinersValue2);
        console.log(this.dinersValue2.length);
        if (this.dinersValue2.length === 4) {
            event.target.nextElementSibling.focus();
            console.log(true);
        }
    };
    HomePage.prototype.onDinersEnterCode3 = function (event) {
        console.log(event);
        console.log(this.dinersValue3);
        this.dinersValue3 = this.dinersValue3.replace(/[^0-9]/g, '');
        console.log(this.dinersValue3);
        console.log(this.dinersValue3.length);
        if (this.dinersValue3.length === 5) {
            event.target.nextElementSibling.focus();
            console.log(true);
        }
    };
    HomePage.prototype.onDinersEnterCode4 = function (event) {
        console.log(event);
        console.log(this.dinersValue4);
        this.dinersValue4 = this.dinersValue4.replace(/[^0-9]/g, '');
        console.log(this.dinersValue4);
        console.log(this.dinersValue4.length);
    };
    HomePage.prototype.showAmex = function () {
        this.card = 'amex';
        this.next();
    };
    HomePage.prototype.showVisa = function () {
        this.card = 'visa';
        this.next();
    };
    HomePage.prototype.showMaster = function () {
        this.card = 'master';
        this.next();
    };
    HomePage.prototype.showJCB = function () {
        this.card = 'jcb';
        this.next();
    };
    HomePage.prototype.showDiners = function () {
        this.card = 'diners';
        this.next();
    };
    HomePage.prototype.settings = function () {
        this.currentPage = "settings";
    };
    HomePage.prototype.Browse = function () {
        var _this = this;
        console.log('called');
        this.fileChooser.open().then(function (file) {
            _this.filePath.resolveNativePath(file).then(function (resolvedFilePath) {
                _this.uri = resolvedFilePath;
            }).catch(function (err) {
                alert(JSON.stringify(err));
            });
        }).catch(function (err) {
            alert(JSON.stringify(err));
        });
    };
    HomePage.prototype.Load = function () {
        var _this = this;
        var path = this.uri.substring(0, this.uri.lastIndexOf('/'));
        var file = this.uri.substring(this.uri.lastIndexOf('/') + 1, this.uri.length);
        this.config = file;
        this.config2 = path + '/';
        this.config3 = this.file.externalDataDirectory;
        this.newpath = this.config3;
        this.file.copyFile(this.config2, file, this.config3, file).then(function (success) {
            console.log(success);
            //alert('checkFile success'+JSON.stringify(success));
            _this.file.readAsDataURL(_this.file.externalDataDirectory, file).then(function (dataurl) {
                _this.bgImage = dataurl;
                //alert(this.bgImage);
            }, function (error) {
                alert(error.message);
            });
        })
            .catch(function (err) {
            console.log(err);
            alert('checkFile fail' + JSON.stringify(err));
        });
    };
    HomePage.prototype.settingsBack = function () {
        this.uri = 'No image file selected';
        this.config = '';
        this.currentPage = "home";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], HomePage.prototype, "signaturePad", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ASUS\Documents\Repositories\DGTigers\Jumeirah\src\pages\home\home.html"*/'<!-- <ion-header>\n  <ion-navbar transparent>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n<div *ngIf="currentPage !== \'userDetails\' &&  currentPage !== \'folio\' &&  currentPage !== \'terms\'" style="    z-index: 1;\nheight: 100%;\nwidth: 47.8%;\nbackground-color: rgba(0, 0, 0, 0.18);\ntop: 0;\nright: 3%;\nposition: fixed;">\n\n</div>\n\n<ion-content class="bg-image" [ngStyle]="{\'background-image\': \'url(\'+bgImage+\')\'}" >\n  <ion-grid no-padding>\n    <ion-row class="custom" text-center>\n      <ion-col class="custom"> <!-- Left side of the app -->\n      	<div class="time"> <!-- Time, weather and date display -->\n            <h1 class="header">{{time}} 30°</h1> <img class="header" src="assets/imgs/AccorHotel/weather.png" alt="">\n          </div>\n          <hr class="header" align="left">\n          <h5>{{date}}</h5>  <!-- end of time, weather and date display -->\n          <div style="margin-top:170px;"text-center *ngIf="currentPage === \'passport\'"> <!-- passport instruction -->\n             \n              <hr margin-bottom>\n\n              <div class="container">\n                <ion-row>\n                <ion-col col-3 style="border-right: 1px solid white;">\n              	<img style="height:100px" src=\'assets/imgs/AccorHotel/pass.png\' alt="">\n              </ion-col>\n              <ion-col col-9>\n              	 <p style="color:white;text-align:left">Please scan the machine-readable zone (MRZ*) of your passport.</p>\n                <p style="color:white;text-align:left"><i>*combinations below passport information and photo.</i></p>\n              </ion-col>\n            </ion-row>\n              </div>\n          </div> <!-- end of passport instruction -->\n\n      </ion-col>\n      <ion-col class="gray-box"> <!-- right side of the app -->\n\n        <div class="gray-box-content">\n          <img *ngIf="currentPage !== \'terms\' && currentPage !== \'userDetails\' && currentPage !== \'folio\' " class="logo" src="assets/imgs/AccorHotel/logo.png" alt="" align="center"> <!-- default logo size -->\n          <img *ngIf="currentPage === \'terms\' || currentPage === \'userDetails\' || currentPage === \'folio\' " class="smallest-logo" src="assets/imgs/AccorHotel/logo.png" alt="" align="center"> <!-- smaller logo for center pages -->\n         \n          <div class="content-container"> \n             \n            <div *ngIf="currentPage === \'home\'" class="buttons"> <!-- home content -->\n              <ion-row text-center>\n                <ion-col>\n                  <button style="padding:5px 120px 5px 120px" (click)="checkIn()" ion-button large class="transparent">CHECK-IN</button>\n                </ion-col>\n              </ion-row>\n              <ion-row text-center>\n                <ion-col>\n                  <button style="padding:5px 120px 5px 120px" (click)="checkOut()" ion-button large class="transparent">CHECK-OUT</button>\n                </ion-col>\n              </ion-row>\n              <ion-row text-center>\n                <ion-col>\n                  <button style="padding:5px 120px 5px 120px" ion-button large class="transparent">INVOICE</button>\n                </ion-col>\n              </ion-row>\n               <ion-row text-center>\n                <ion-col>\n                  <button style="padding:5px 120px 5px 120px" (click)="settings()" ion-button large class="transparent">SETTINGS</button>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div *ngIf="currentPage === \'settings\'" class="buttons"> <!-- verification content -->\n              <h4 text-center>Configuration</h4>\n              <hr margin-bottom>\n              <p text-center style="color:white">Please browse for the image file and click the Load Button.</p>\n              <h6 text-left margin-top>File Path:</h6>\n              <p text-left style="color:white">{{uri}}</p>\n              <p text-left style="color:white">{{config}}</p>\n              <!-- <p text-left style="color:white">{{config2}}</p>\n              <p text-left style="color:white">{{config3}}</p> -->\n               <ion-row text-center>\n                <ion-col>\n                  <button style="padding:5px 120px 5px 120px" (click)="Browse()" ion-button large class="transparent">BROWSE</button>\n                </ion-col>\n              </ion-row>\n             \n              <ion-row text-center>\n                <ion-col>\n                  <button style="padding:5px 120px 5px 120px" (click)="Load()" [disabled]="uri===\'No image file selected\'" ion-button large class="transparent">Load</button>\n                </ion-col>\n              </ion-row>\n              \n              <ion-row text-center margin-bottom *ngIf="currentPage === \'settings\'">\n              <ion-col> <button  (click)="settingsBack()" ion-button  class="transparent">BACK</button> </ion-col>\n            </ion-row>\n            <ion-row> <!-- default size -->\n              <img class="small-logo" src="assets/imgs/AccorHotel/metasphere.png" alt="metasphere"> \n          </ion-row>\n            </div>\n\n            <div text-center class="checkinOption" *ngIf="currentPage === \'checkinOption\'"> <!-- check in options content -->\n                <h4>Choose Check-in Option</h4>\n                <hr margin-bottom>\n                  <ion-row text-center>\n                    <ion-col>\n                      <div class="animate-grow option" style="color:darkblue;padding:1.2vw">\n                          PASSPORT\n                      </div>\n                    </ion-col>\n                    <ion-col >\n                      <div class="animate-grow option" style="padding:1.2vw">\n                          QR CODE\n                      </div>\n                      </ion-col>\n                  </ion-row>\n                  <ion-row text-center>\n                      <ion-col>\n                        <div class="animate-grow option" style="color:darkblue;padding:1.2vw">\n                            ID CARD\n                        </div>\n                      </ion-col>\n                      <ion-col>\n                         <div (click)="next()" style="font-size: 15px; padding: 0.8vw" class="animate-grow option">\n                            CONFIRMATION NUMBER\n                         </div>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row text-center>\n                        <ion-col >\n                         <div class="animate-grow option" style="color:darkblue;padding:1.2vw">\n                            WALK-IN\n                         </div>\n                        </ion-col>\n                        <ion-col >\n                        <div style="font-size: 15px; padding: 0.5vw" class="animate-grow  option">\n                            LOGIN JUMEIRAH SIRIUS ACCOUNT\n                        </div>\n                        </ion-col>\n                      </ion-row>\n              </div>\n            <div text-center class="roomInfo" *ngIf="currentPage === \'confirmNumber\'"> <!-- input confirmation number content -->\n              <h4>Confirmation Number</h4>\n              <hr margin-bottom>\n               <div class="container" >\n                <ion-item margin-bottom style="margin-top: 50px;">\n                  <ion-input text-center [(ngModel)]="confirmNumber" type="number" placeholder="Confirmation Number"></ion-input>\n                </ion-item>\n               \n              </div>\n             <!--  <ion-item class="input-container">\n                <ion-input class="grey" text-center placeholder="Confirmation Number" [(ngModel)]="confirmNumber" type="number"></ion-input>\n              </ion-item>\n              <ion-item class="input-container">\n              	<ion-input class="grey" text-center placeholder="Room Number" [(ngModel)]="roomNumber" type="number"></ion-input>\n              </ion-item> -->\n\n            </div>\n\n\n\n          \n            <div text-center *ngIf="currentPage === \'verification\'" class="verification"> <!-- verification content -->\n              <h4>Verify Your Reservation​</h4>\n              <hr margin-bottom>\n\n              <div class="container">\n                <ion-row>\n               	<ion-col col-6 style="border-right: 1px white solid">\n                <p style="color:white" align="right">First Name:</p>\n                <p style="color:white" align="right">Last Name:</p>\n                <p style="color:white" align="right">Arrival Date:</p>\n                <p style="color:white" align="right">Departure Date:</p>\n                <p style="color:white" align="right">Total Room Night(s):</p>\n                <p style="color:white" align="right">Room Type:</p>\n                <p style="color:white" align="right">Room Number:</p>\n                <p style="color:white" align="right">Confirmation Number:</p>\n                <p style="color:white" align="right">Add-ons:</p>\n\n            </ion-col>\n            <ion-col col-6>\n                <p style="color:white" align="left"> <span margin-left>{{bookingDetails?.firstName}}</span></p>\n                <p style="color:white" align="left"> <span margin-left>{{bookingDetails?.lastName}}</span></p>\n                <p style="color:white" align="left"><span margin-left>{{bookingDetails?.arrivalDate}}</span></p>\n                <p style="color:white" align="left"> <span margin-left>{{bookingDetails?.departureDate}}</span></p>\n                <p style="color:white" align="left"><span margin-left>{{bookingDetails?.totalRoomNights}}</span></p>\n                <p style="color:white" align="left"> <span margin-left>{{bookingDetails?.type}}</span></p>\n                <p style="color:white" align="left"> <span margin-left>111</span></p>\n                <p style="color:white" align="left"> <span margin-left>12345</span></p>\n                <p style="color:white" align="left"><span margin-left>{{bookingDetails?.addOns}}</span></p>\n            </ion-col>\n        </ion-row>\n\n\n              </div>\n            </div>\n            <div text-center *ngIf="currentPage === \'passport\'" class="passport"> <!-- capture password details content -->\n              <h4 >Scan Passport MRZ</h4>\n              <hr margin-bottom>\n\n              <div class="container">\n                <img style="padding: 0px 25px 0px 25px" [src]="selectedImage ? selectedImage : \'assets/imgs/AccorHotel/passport.png\'" alt="">\n              </div>\n            </div>\n             <div text-center *ngIf="currentPage === \'scanComplete\'" class="checkInSuccess">\n              <h4>Scan Passport MRZ</h4>\n              <hr margin-bottom>\n\n              <div class="container">\n                <p style="color:white;margin-top:65px;"><i>Scanning complete!</i></p>\n              </div>\n          </div>\n\n              <div *ngIf="currentPage === \'userDetails\'" class="userDetails"> <!-- passport details display -->\n                <h4 text-center>Registration Card</h4>\n                <ion-row margin-bottom class="container" text-left>\n                  <ion-col col-3>\n                    <p no-margin>First Name: <span margin-left></span></p>\n                    <p no-margin>Last Name: <span margin-left></span></p>\n                    <p no-margin>Arabic Name: <span margin-left></span></p>\n                    <p no-margin>Arrival Date: <span margin-left></span></p>\n                    <p no-margin>Departure Date: <span margin-left></span></p>\n                    <p no-margin>Total Room Night(s): <span margin-left></span></p>\n                    <p no-margin>Room Type: <span margin-left></span></p>\n                    <p no-margin>Room Number: <span margin-left></span></p>\n                    <p no-margin>Add-ons: <span margin-left></span></p>\n                    <p no-margin>Number of Adults: <span margin-left></span></p>\n                    <p no-margin>Number of Children: <span margin-left></span></p>\n                    <p no-margin>TOTAL(Tax 7%): <span margin-left></span></p>\n                    <p no-margin>Payment Method: <span style=\'color:red;font-weight: bolder;\'>*</span></p>\n                    <p no-margin>Relationship Code: <span style=\'color:red;font-weight: bolder;\'>*</span></p>\n                    <p no-margin>Hearing Impaired: <span margin-left></span></p>\n                    <p no-margin>Mobility Impaired: <span margin-left></span></p>\n                   \n                  </ion-col>\n                  <ion-col col-3>\n                    <p no-margin>{{textRecognized?.textLines[0].text.split(\'«\')[1].replace(\'<\', \' \').replace(\'<\', \' \')}} <span margin-left></span> </p>\n                    <p no-margin>{{textRecognized?.textLines[0].text.split(\'«\')[0].substring(5)}} <span margin-left></span> </p>\n                    <p no-margin>N/A<span margin-left></span> </p>\n                    <p no-margin>{{bookingDetails?.arrivalDate}} <span margin-left></span></p>\n                    <p no-margin>{{bookingDetails?.departureDate}}<span margin-left></span></p>\n                    <p no-margin>{{bookingDetails?.totalRoomNights}}<span margin-left></span></p>\n                    <p no-margin>{{bookingDetails?.type}}<span margin-left></span></p>\n                    <p no-margin>111<span margin-left></span></p>\n                    <p no-margin>N/A<span margin-left></span></p>\n                    <p no-margin>2<span margin-left></span></p>\n                    <p no-margin>2<span margin-left></span></p>\n                    <p no-margin>$550.00 <span margin-left></span></p>\n                    <p no-margin><select style="width: 98px;" [(ngModel)]=\'payment\'>\n                                <option style="display: none;" value="">Please Select</option>\n                                <option value="Credit">Credit Card</option>\n                                <option value="Cash">Cash</option>\n                                </select></p>\n                    <p no-margin><select style="width: 98px;" [(ngModel)]=\'relCode\'>\n                                <option style="display: none;" value="">Please Select</option>\n                                <option value="Business Associate">Business Associate</option>\n                                <option value="Family Helper">Family Helper</option>\n                                <option value="Family Member">Family Member</option>\n                                <option value="Friend">Friend</option>\n                                <option value="Visitor">Visitor</option>\n                              </select></p>\n\n                    <p no-margin>\n                    	<span>\n                    		<input type="radio" name="himpaired" checked="true" value="no"> No \n                    		<input style="margin-left:5px" type="radio" name="himpaired" value="yes"> Yes\n                    	</span>\n                    </p>\n                    <p no-margin>\n                    	<span>\n                    		<input type="radio" name="mimpaired" checked="true"  value="no"> No \n                    		<input style="margin-left:5px" type="radio" name="mimpaired" value="yes"> Yes\n                    	</span>\n                    </p>\n                  </ion-col>\n\n                  <ion-col col-3>\n                    <p no-margin>Gender: <span margin-left></span></p>\n                    <p no-margin>Emirate Code: <span style=\'color:red;font-weight: bolder;\'>*</span></p>\n                    <p no-margin>Document No: <span margin-left></span></p>\n                    <p no-margin>Expiry Date: <span margin-left></span></p>\n                    <p no-margin>Country Code: <span margin-left></span></p>\n                    <p no-margin>Contact Number: <span margin-left></span></p>\n                    <p no-margin>Email Address: <span margin-left></span></p>\n                    <p no-margin>Resident Country Phone: <span style=\'color:red;font-weight: bolder;\'>*</span></p>\n                    <p no-margin>Mobile: <span style=\'color:red;font-weight: bolder;\'>*</span></p>\n                    <p no-margin>Visit Purpose: <span style=\'color:red;font-weight: bolder;\'>*</span></p>\n                    <p no-margin>Visually Impaired: <span margin-left></span></p>\n                    <p no-margin>Other Disabilities: <span margin-left></span></p>\n                  </ion-col>\n                <ion-col col-3>\n                    <p no-margin>{{textRecognized?.textLines[1].text.indexOf(\'F\')  > -1 ? \'Female\' : \'Male\'}} <span margin-left></span></p>\n                    <p no-margin> <select style=" width: 98px;" [(ngModel)]=\'emirateCode\'>\n                                <option style="display: none;" value="">Please Select</option>\n                                <option value="Dubai">Dubai</option>\n                                <option value="Abu Dhabi">Abu Dhabi</option>\n                                <option value="Sharjah">Sharjah</option>\n                                <option value="Ras Alkhaimah">Ras Alkhaimah</option>\n                                <option value="Ajman">Ajman</option>\n                                <option value="Al Ain">Al Ain</option>\n                                <option value="Umm Al Quwain">Umm Al Quwain</option>\n                                <option value="Western Areas">Western Areas</option>\n                              </select></p>\n                    <p no-margin>{{textRecognized?.textLines[1].text.substring(0,9)}} <span margin-left></span></p>\n                    <p no-margin><span margin-left></span></p>\n                    <p no-margin>{{textRecognized?.textLines[0].text.substring(2,5)}} <span margin-left></span></p>\n                    <p no-margin><input style="width:98px" type="number" value="" name="" id=""><span margin-left></span></p>\n                    <p no-margin><input style="width:98px" type="email" value="" name="" id=""><span margin-left></span></p>\n                    <p no-margin><input style="width:98px" type="number" [(ngModel)]=\'resCounPhone\'><span margin-left></span></p>\n                    <p no-margin><input style="width:98px" type="number" [(ngModel)]=\'mobNumber\'><span margin-left></span></p>\n                     <p no-margin><select style="width: 98px;" [(ngModel)]=\'visit\'>\n                                <option style="display: none;" value="">Please Select</option>\n                                <option value="Air/Ship crew">Air/Ship crew</option>\n                                <option value="Business/MICE and professional">Business/MICE and professional</option>\n                                <option value="Health treatment/reasons">Health treatment/reasons</option>\n                                <option value="Leisure, recreation and holidays">Leisure, recreation and holidays</option>\n                                <option value="Religion/pilgrimages">Religion/pilgrimages</option>\n                                <option value="Sports/participation">Sports/participation</option>\n                                <option value="Visiting friends and relatives">Visiting friends and relatives</option>\n                              </select></p>\n                    <p no-margin>\n                    \n                    		<input type="radio" name="vimpaired" checked="true" value="no"> No\n                    		<input style="margin-left:5px" type="radio" name="vimpaired" value="yes"> Yes\n                    	\n                    </p>\n                    <p no-margin>\n                    	\n                    		<input type="radio" name="oimpaired" checked="true" value="no"> No \n                    		<input style="margin-left:5px" type="radio" name="oimpaired" value="yes"> Yes\n                    	\n                    </p>\n\n                  </ion-col>\n\n\n                </ion-row>\n               <button class="transparent user" (click)="back()"  ion-button>BACK</button>\n              <button class="transparent user" (click)="next()"  ion-button >NEXT</button>\n              \n              </div>\n\n               <div *ngIf="currentPage === \'terms\'" class="userDetails"> <!-- terms and conditions content -->\n                <h4 text-center>Terms and Condition</h4>\n                <ion-row margin-bottom class="term-container" padding text-left>\n                  <h5>I understand that my condition on the registration card is authorization for use of the credit card on file for payment of my account for this and future stays. I agree that my liability for this bill is not waived, and agree to be held personally liable in the event that the indicated person, company, or other third party billed, fail to pay part of all of these charges.</h5>\n\n                  <h5 style="margin-top:30px;">I understand that hotel management is not responsible for money, jewels, or other valuables that have been misplaced, stolen, or left in guestrooms, meeting rooms, public areas, family and/or hotel vehicles. We are recommended deposition of valuable items at reception.</h5>\n                </ion-row>\n\n                <ion-row margin-vertical style="opacity:0.9">\n                <ion-col no-padding>\n                  <ion-item>\n                    <ion-label>I have read and accepted the Terms & Conditions of my accommodation.​</ion-label>\n                    <ion-checkbox [(ngModel)]="isTermCheked" color="dark" ></ion-checkbox>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n               <button class="transparent" (click)="back()" *ngIf="currentPage !== \'incidentalProcess\' && currentPage !== \'paymentProcess\' " ion-button>BACK</button>\n              <button class="transparent" (click)="next()" *ngIf="currentPage !== \'incidentalProcess\' && currentPage !== \'signature\' && currentPage !== \'checkinOption\' && currentPage !== \'passport\' " ion-button >NEXT</button>\n              \n              </div>\n            \n            <div *ngIf="currentPage === \'folio\'" class="folio"> <!-- checkout folio content -->\n                <ion-row margin-bottom class="container" text-left>\n                  <ion-col text-center>\n                      <div class="person">\n                        <img src="assets/imgs/AccorHotel/folio.png" alt="">\n                      </div>\n                  </ion-col>\n                  <ion-col>\n                    <h4>Folio</h4>\n                    <p no-margin>Room No: <span margin-left>{{folioDetails?.roomNumber}}</span></p>\n                    <p no-margin>Membership No: <span margin-left></span></p>\n                    <p no-margin>A/R Number: <span margin-left></span></p>\n                    <p no-margin>Group Code: <span margin-left></span></p>\n                    <p no-margin>Company Name: <span margin-left></span></p>\n                    <p no-margin>PO REF: <span margin-left></span></p>\n                  </ion-col>\n                  <ion-col>\n                    <h4>&nbsp;</h4>\n                    <p no-margin>Arrival: <span margin-left>{{bookingDetails?.arrivalDate}}​</span></p>\n                    <p no-margin>Departure: <span margin-left>{{bookingDetails?.departureDate}}​</span></p>\n                    <p no-margin>Page No: <span margin-left>1 of 1​</span></p>\n                    <p no-margin>Invoice No: <span margin-left>1234567​</span></p>\n                    <p no-margin>Confirmation No: <span margin-left>{{folioDetails?.confirmNumber}}</span></p>\n                    <p no-margin>Cashier No: <span margin-left>123</span></p>\n                  </ion-col>\n                </ion-row>\n                <ion-row class="table" margin-bottom text-center>\n                  <ion-col col-2>\n                   <div  class="field">\n                      <p style="padding:8px">Date</p>\n                   </div>\n                    <p align="left" padding-left>02-27-19</p>\n                    <p align="left" padding-left>03-01-19</p>\n                    <p align="left" padding-left>03-01-19</p>\n                    <p align="left" padding-left>03-01-19</p>\n                    <p>&nbsp;</p>\n                    <p>&nbsp;</p>\n                    <p>&nbsp;</p>\n\n                  </ion-col>\n                  <ion-col col-5>\n                    <div  class="field">\n                    <p style="padding:8px">Description</p>\n                    </div>\n                    <p align="left">Incidental Payment​</p>\n                    <p align="left">Allowance Room Charge​</p>\n                    <p align="left">Room Charge, VAT 6%</p>\n                    <p align="left">Allowance Room Revenue Svc​</p>\n                    <p>&nbsp;</p>\n                    <p style="font-weight: bold" align="right">TOTAL</p>\n                    <p style="font-weight: bold" align="right">BALANCE</p>\n                  </ion-col>\n                  <ion-col col-2>\n                  <div class="field">\n                      <p style="padding:8px">Charge(s)</p>\n                  </div>\n                  <p>&nbsp;</p>\n                  <p>2,567.53</p>\n                  <p>154.05</p>\n                  <p>256.75</p>\n                  <p>&nbsp;</p>\n                  <p>2,980.33</p>\n                  <p>0</p>\n\n\n                  </ion-col>\n                  <ion-col col-3>\n                    <div class="field">\n                    <p style="padding:8px">Credit($)</p>\n                    </div>\n                    <p>3,900.00</p>\n                    <p>&nbsp;</p>\n                    <p>&nbsp;</p>\n                    <p>&nbsp;</p>\n                    <p>&nbsp;</p>\n                    <p>3,900.00</p>\n                    <p>&nbsp;</p>\n\n\n\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col> <button float-left (click)="cancelCheckout()" ion-button clear color="light"><u>CANCEL</u></button> </ion-col>\n                    <ion-col>\n                      <button (click)="back()" ion-button color="grey" class="transparent">BACK</button>\n                      <button (click)="next()" ion-button color="grey" class="transparent">NEXT</button>\n                    </ion-col>\n                </ion-row>\n              </div>\n            \n          <div text-center *ngIf="currentPage === \'dtcm\'" class="dtcm"> <!-- upload DTCM verification content -->\n              <h4>DTCM Verification</h4>\n              <hr margin-bottom>\n\n              <div class="container">\n                <p style="color:white;margin-top: 30px">Uploading Guest Information for DTCM Verification.​</p>\n                <p style="color:white;margin-top: 30px"><em class="bold">Please Wait…​</em></p>\n              </div>\n          </div> \n          <div text-center *ngIf="currentPage === \'dtcm2\'" class="dtcm"> <!-- DTCM verification successful content -->\n              <h4>DTCM Verification</h4>\n              <hr margin-bottom>\n                \n              <div class="container">\n                  <p style="color:white;margin-top:40px">UPLOAD AND VERIFICATION SUCCESSFUL!​ ​​</p> \n                  <img src="assets/imgs/AccorHotel/cloud.png" alt="">\n                </div>\n          </div>\n          <div text-center [hidden]="currentPage !== \'signature\' && currentPage !== \'signature2\' && currentPage !== \'checkoutSignature\'" class="signature"> <!-- signature input content -->\n              <h4>Signature</h4>\n              <hr margin-bottom>\n\n              <div text-left class="container">\n                <p>Sign here: <button (click)="clear()" float-right ion-button  icon-only >\n                    <ion-icon color="dark" name="trash"></ion-icon>\n                  </button> </p>\n                <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>\n              </div>\n          </div>\n          <div text-center *ngIf="currentPage === \'paymentAccepted\'" class="checkInSuccess"> <!-- payment success content -->\n              <h4>Incidental Payment</h4>\n              <hr margin-bottom>\n\n              <div class="container">\n                <p style="color:white;margin-top:75px"><i>Payment Accepted!</i></p>\n              </div>\n          </div>\n          <div text-center *ngIf="currentPage === \'checkInSuccess\'" class="checkInSuccess"> <!-- check in success content -->\n              <h4>Check-in Successful!</h4>\n              <hr margin-bottom>\n\n              <div class="container">\n              	<p style="color:white;margin-top: 30px">Room 111 checked-in successfully!</p>\n                <p style="margin-top: 20px;color:white">Please get your room key card at the front desk.</p>\n              </div>\n          </div>\n          <div text-center *ngIf="currentPage === \'roomInfo\'" class="roomInfo"> <!-- input room information and last name content -->\n              <h4>Enter Room Information</h4>\n              <hr margin-bottom>\n\n              <div class="container" >\n                <ion-item margin-bottom style="margin-top: 25px;">\n                  <ion-input text-center [(ngModel)]="roomNumber" type="number" placeholder="Room Number"></ion-input>\n                </ion-item>\n                <ion-item >\n                    <ion-input text-center [(ngModel)]="lastName" type="text" placeholder="Last Name"></ion-input>\n                  </ion-item>\n              </div>\n          </div>\n          <div text-center *ngIf="currentPage === \'cardAccount\'" class="checkOutSuccess"> <!-- input card details content -->\n              <h4>Payment</h4>\n              <hr margin-bottom>\n\n              <ion-row text-center>\n                    <ion-col>\n                      <button block (click)="showAmex()">\n                          <img src="assets/imgs/AccorHotel/amex.png" style="width : 50% ; height : 50%" >\n                      </button>\n                    </ion-col>\n                    <ion-col >\n                       <button block (click)="showVisa()">\n                          <img src="assets/imgs/AccorHotel/visa.png" style="width : 50% ; height : 50%">\n                      </button>\n                      </ion-col>\n                  \n                  \n                      <ion-col>\n                         <button block (click)="showMaster()">\n                          <img src="assets/imgs/AccorHotel/master.png" style="width : 50% ; height : 50%">\n                      </button>\n                      </ion-col>\n               </ion-row>\n               <ion-row text-center (click)="showJCB()">\n                      <ion-col>\n                          <button block>\n                          <img src="assets/imgs/AccorHotel/jcb.png" style="width : 50% ; height : 50%">\n                      </button>\n                        </ion-col>\n                    \n                   \n                        <ion-col >\n                          <button block (click)="showDiners()">\n                          <img src="assets/imgs/AccorHotel/diners.png" style="width : 50% ; height : 50%">\n                      </button>\n                        </ion-col>\n                        <ion-col >\n                         \n                        </ion-col>\n               </ion-row>\n          </div>\n\n\n          <div text-center *ngIf="currentPage === \'cardDetails\'" class="checkOutSuccess"> <!-- input card details content -->\n              <h4>Payment</h4>\n              <hr margin-bottom>\n\n              <div *ngIf="card == \'amex\'" class="container">\n                <p style="color:white"><i>Please note that your pre-authorization upon check-in will be confirmed.</i></p>\n                <p align="center" style="margin-top:15px;color:white">Total Amount: $550.00</p>\n                 <p style="margin-top:30px;text-decoration: underline;color:white"><i>Please enter card details.</i></p>\n                 <input class="ccv" [(ngModel)]="amexValue1" type="tel" maxlength="4" (keyup)="onAmexEnterCode1($event)">\n                 <input class="long-ccv" [(ngModel)]="amexValue2" type="tel" maxlength="6" (keyup)="onAmexEnterCode2($event)">\n                 <input class="long-ccv" [(ngModel)]="amexValue3" type="tel" maxlength="5" (keyup)="onAmexEnterCode3($event)">\n                 <input class="ccv" [(ngModel)]="amexValue4" type="tel" maxlength="4" placeholder="CVV" (keyup)="onAmexEnterCode4($event)">\n               </div>\n\n              <div *ngIf="card == \'visa\'" class="container">\n                <p style="color:white"><i>Please note that your pre-authorization upon check-in will be confirmed.</i></p>\n                <p align="center" style="margin-top:15px;color:white">Total Amount: $550.00</p>\n                 <p style="margin-top:30px;text-decoration: underline;color:white"><i>Please enter card details.</i></p>\n                 <input class="ccv" [(ngModel)]="checkOutValue1" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue2" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue3" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue4" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue5" type="tel" maxlength="3" placeholder="CVV" (keyup)="onEnterCode($event)">\n               </div>\n\n              <div *ngIf="card == \'master\'" class="container">\n                <p style="color:white"><i>Please note that your pre-authorization upon check-in will be confirmed.</i></p>\n                <p align="center" style="margin-top:15px;color:white">Total Amount: $550.00</p>\n                 <p style="margin-top:30px;text-decoration: underline;color:white"><i>Please enter card details.</i></p>\n                 <input class="ccv" [(ngModel)]="checkOutValue1" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue2" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue3" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue4" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue5" type="tel" maxlength="3" placeholder="CVV" (keyup)="onEnterCode($event)">\n               </div>\n\n                <div *ngIf="card == \'jcb\'" class="container">\n                <p style="color:white"><i>Please note that your pre-authorization upon check-in will be confirmed.</i></p>\n                <p align="center" style="margin-top:15px;color:white">Total Amount: $550.00</p>\n                 <p style="margin-top:30px;text-decoration: underline;color:white"><i>Please enter card details.</i></p>\n                 <input class="ccv" [(ngModel)]="checkOutValue1" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue2" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue3" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue4" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkOutValue5" type="tel" maxlength="3" placeholder="CVV" (keyup)="onEnterCode($event)">\n               </div>\n\n                <div *ngIf="card == \'diners\'" class="container">\n                <p style="color:white"><i>Please note that your pre-authorization upon check-in will be confirmed.</i></p>\n                <p align="center" style="margin-top:15px;color:white">Total Amount: $550.00</p>\n                 <p style="margin-top:30px;text-decoration: underline;color:white"><i>Please enter card details.</i></p>\n                 <input class="long-ccv" [(ngModel)]="dinersValue1" type="tel" maxlength="5" (keyup)="onDinersEnterCode1($event)">\n                 <input class="ccv" [(ngModel)]="dinersValue2" type="tel" maxlength="4" (keyup)="onDinersEnterCode2($event)">\n                 <input class="long-ccv" [(ngModel)]="dinersValue3" type="tel" maxlength="5" (keyup)="onDinersEnterCode3($event)">\n                 <input class="ccv" [(ngModel)]="dinersValue4" type="tel" maxlength="3" placeholder="CVV" (keyup)="onDinersEnterCode4($event)">\n               </div>\n          </div>\n\n          <div text-center *ngIf="currentPage === \'incidentalAccount\'" class="checkOutSuccess"> <!-- input card details content -->\n              <h4>Payment</h4>\n              <hr margin-bottom>\n\n              <ion-row text-center>\n                    <ion-col>\n                      <button block (click)="showAmex()">\n                          <img src="assets/imgs/AccorHotel/amex.png" style="width : 50% ; height : 50%" >\n                      </button>\n                    </ion-col>\n                    <ion-col >\n                       <button block (click)="showVisa()">\n                          <img src="assets/imgs/AccorHotel/visa.png" style="width : 50% ; height : 50%">\n                      </button>\n                      </ion-col>\n                  \n                  \n                      <ion-col>\n                         <button block (click)="showMaster()">\n                          <img src="assets/imgs/AccorHotel/master.png" style="width : 50% ; height : 50%">\n                      </button>\n                      </ion-col>\n               </ion-row>\n               <ion-row text-center (click)="showJCB()">\n                      <ion-col>\n                          <button block>\n                          <img src="assets/imgs/AccorHotel/jcb.png" style="width : 50% ; height : 50%">\n                      </button>\n                        </ion-col>\n                    \n                   \n                        <ion-col >\n                          <button block (click)="showDiners()">\n                          <img src="assets/imgs/AccorHotel/diners.png" style="width : 50% ; height : 50%">\n                      </button>\n                        </ion-col>\n                        <ion-col >\n                         \n                        </ion-col>\n               </ion-row>\n          </div>\n\n          <div text-center *ngIf="currentPage === \'incidental\'" class="checkOutSuccess"> <!-- input card details for incidental content -->\n              <h4>Incidental Payment</h4>\n              <hr margin-bottom>\n\n              <div *ngIf="card == \'amex\'" class="container">\n                 <p style="color:white"><i>An incidental payment of $500.00 is required to guarantee your stay.</i></p>\n\n                 <p style="margin-top:30px;text-decoration: underline;color:white"><i>Please enter card details.</i></p>\n                 <input class="ccv" [(ngModel)]="amexValue1" type="tel" maxlength="4" (keyup)="onAmexEnterCode1($event)">\n                 <input class="long-ccv" [(ngModel)]="amexValue2" type="tel" maxlength="6" (keyup)="onAmexEnterCode2($event)">\n                 <input class="long-ccv" [(ngModel)]="amexValue3" type="tel" maxlength="5" (keyup)="onAmexEnterCode3($event)">\n                 <input class="ccv" [(ngModel)]="amexValue4" type="tel" maxlength="4" placeholder="CVV" (keyup)="onAmexEnterCode4($event)">\n               </div>\n\n              <div *ngIf="card == \'visa\'" class="container">\n                <p style="color:white"><i>An incidental payment of $500.00 is required to guarantee your stay.</i></p>\n\n                <p style="margin-top:30px;text-decoration: underline;color:white"><i>Please enter card details.</i></p>\n                 <input class="ccv" [(ngModel)]="checkInValue1" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue2" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue3" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue4" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue5" type="tel" maxlength="3" placeholder="CVV" (keyup)="onEnterCode($event)">\n               </div>\n\n              <div *ngIf="card == \'master\'" class="container">\n                 <p style="color:white"><i>An incidental payment of $500.00 is required to guarantee your stay.</i></p>\n\n                 <p style="margin-top:30px;text-decoration: underline;color:white"><i>Please enter card details.</i></p>\n                <input class="ccv" [(ngModel)]="checkInValue1" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue2" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue3" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue4" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue5" type="tel" maxlength="3" placeholder="CVV" (keyup)="onEnterCode($event)">\n               </div>\n\n                <div *ngIf="card == \'jcb\'" class="container">\n                 <p style="color:white"><i>An incidental payment of $500.00 is required to guarantee your stay.</i></p>\n\n                 <p style="margin-top:30px;text-decoration: underline;color:white"><i>Please enter card details.</i></p>\n                 <input class="ccv" [(ngModel)]="checkInValue1" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue2" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue3" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue4" type="tel" maxlength="4" (keyup)="onEnterCode($event)">\n                 <input class="ccv" [(ngModel)]="checkInValue5" type="tel" maxlength="3" placeholder="CVV" (keyup)="onEnterCode($event)">\n               </div>\n\n                <div *ngIf="card == \'diners\'" class="container">\n                 <p style="color:white"><i>An incidental payment of $500.00 is required to guarantee your stay.</i></p>\n\n                 <p style="margin-top:30px;text-decoration: underline;color:white"><i>Please enter card details.</i></p>\n                 <input class="long-ccv" [(ngModel)]="dinersValue1" type="tel" maxlength="5" (keyup)="onDinersEnterCode1($event)">\n                 <input class="ccv" [(ngModel)]="dinersValue2" type="tel" maxlength="4" (keyup)="onDinersEnterCode2($event)">\n                 <input class="long-ccv" [(ngModel)]="dinersValue3" type="tel" maxlength="5" (keyup)="onDinersEnterCode3($event)">\n                 <input class="ccv" [(ngModel)]="dinersValue4" type="tel" maxlength="3" placeholder="CVV" (keyup)="onDinersEnterCode4($event)">\n               </div>\n          </div>\n          <div text-center *ngIf="currentPage === \'incidentalProcess\'" class="checkOutSuccess"> <!-- incidental payment processing content -->\n              <h4>Incidental Payment</h4>\n              <hr margin-bottom>\n\n              <div class="container">\n                <p style="color:white;margin-top:30px"><i>Processing incidental payment...</i></p>\n                 <p style="color:white;margin-top:30px"><i>Please wait...</i></p>\n               </div>\n          </div>\n          <div text-center *ngIf="currentPage === \'paymentProcess\'" class="checkOutSuccess"> <!-- homepayment processing content -->\n              <h4>Payment</h4>\n              <hr margin-bottom>\n\n              <div class="container">\n                <p style="color:white;margin-top:45px"><i>Processing payment.</i></p>\n                 <p style="margin-top:15px;color:white"><i>Please wait...</i></p>\n               </div>\n          </div>\n           \n          <div text-center *ngIf="currentPage === \'paymentAccepted2\'" class="checkOutSuccess"> <!-- payment accepted content -->\n              <h4>Payment</h4>\n              <hr margin-bottom>\n\n              <div class="container">\n                <p style="color:white;margin-top:65px;"><i>Payment Accepted!</i></p>\n              </div>\n          </div>\n          <div text-center *ngIf="currentPage === \'checkOutSuccess\'" class="checkOutSuccess"> <!-- checkout success content -->\n              <h4>Check-out Successful!</h4>\n              <hr margin-bottom>\n\n              <div class="container">\n                <p style="color:white;margin-top: 50px"><i>Room {{folioDetails?.roomNumber}} successfully checked-out!</i></p>\n                 <p style="margin-top:30px;color:white"><i>Please return your key card at the front desk.</i></p>\n              </div>\n          </div>\n\n\n\n          </div>\n          <ion-row text-center margin-bottom *ngIf="currentPage == \'checkInSuccess\' || currentPage == \'checkOutSuccess\'">\n              <ion-col> <button  (click)="quit()" ion-button  class="transparent">EXIT</button> </ion-col>\n            </ion-row> <!-- button rows content -->\n\n             \n\n          <ion-row margin-bottom *ngIf="currentPage !== \'dtcm\' && currentPage !== \'home\' && currentPage !== \'userDetails\' && currentPage !== \'checkInSuccess\' && currentPage !== \'folio\'  && currentPage !== \'terms\' && currentPage !== \'checkOutSuccess\' && currentPage !== \'paymentProcess\' && currentPage !== \'settings\'" >\n\n            <ion-col col-4>\n\n             <button float-left (click)="cancelCheckout()" ion-button clear color="light" *ngIf="currentPage !== \'incidentalProcess\' && currentPage !== \'paymentProcess\' && currentPage !== \'checkinOption\' && currentPage !== \'confirmNumber\' && currentPage !== \'verification\' && currentPage !== \'passport\' && currentPage !== \'scanComplete\' && currentPage !== \'dtcm2\' && currentPage !== \'signature\' && currentPage !== \'incidentalAccount\' && currentPage !== \'incidental\' && currentPage !== \'signature2\' && currentPage !== \'paymentAccepted\' && currentPage !== \'paymentAccepted2\' && currentPage !== \'settings\'"><u>CANCEL</u></button> \n\n             <button float-left (click)="cancelCheckin()" ion-button clear color="light" *ngIf="currentPage !== \'incidentalProcess\' && currentPage !== \'paymentProcess\' && currentPage !== \'roomInfo\' && currentPage !== \'cardAccount\' && currentPage !== \'cardDetails\' && currentPage !== \'checkoutSignature\' && currentPage !== \'paymentAccepted2\' && currentPage !== \'paymentAccepted\' && currentPage !== \'incidentalAccount\' && currentPage !== \'settings\'"><u>CANCEL</u></button>\n\n\n            </ion-col>\n\n            <ion-col col-8>\n              <button class="transparent" (click)="back()" *ngIf="currentPage !== \'incidentalProcess\' && currentPage !== \'paymentProcess\' && currentPage !== \'settings\'" ion-button>BACK</button>\n              <button class="transparent" (click)="next()" *ngIf="currentPage !== \'incidentalProcess\' && currentPage !== \'paymentProcess\' && currentPage !== \'signature\' && currentPage !== \'checkinOption\' && currentPage !== \'passport\' && currentPage !== \'cardAccount\' && currentPage !== \'incidentalAccount\' && currentPage !== \'settings\' " ion-button >NEXT</button>\n              <button  class="transparent" (click)="next()" *ngIf="currentPage === \'signature\' || currentPage === \'userDetails\'" ion-button>Next</button>\n              <button  class="transparent" (click)="back()" *ngIf="currentPage === \'userDetails\'" ion-button>Back</button>      \n              <button  class="transparent" (click)="next()" *ngIf="currentPage === \'passport\'" ion-button >Capture</button>\n            </ion-col>\n\n          </ion-row> <!-- powered by metasphere logo -->\n          <div *ngIf="currentPage !==\'settings\'">\n          <ion-row *ngIf="currentPage !== \'terms\' && currentPage !== \'userDetails\' && currentPage !== \'folio\' && currentPage !== \'home\' "> <!-- default size -->\n              <img class="small-logo" src="assets/imgs/AccorHotel/metasphere.png" alt="metasphere"> \n          </ion-row>\n          <ion-row *ngIf="currentPage === \'terms\'  || currentPage === \'folio\' "> <!-- lower logo position -->\n              <img class="lower-logo" src="assets/imgs/AccorHotel/metasphere.png" alt="metasphere">\n          </ion-row>\n          <ion-row *ngIf="currentPage === \'home\'">\n              <img class="lowest-logo" src="assets/imgs/AccorHotel/metasphere.png" alt="metasphere"> <!-- lower logo position for home -->\n          </ion-row>\n          <ion-row *ngIf="currentPage === \'userDetails\'">\n              <img class="low-lowest-logo" src="assets/imgs/AccorHotel/metasphere.png" alt="metasphere"> <!-- lowest logo position for user details -->\n          </ion-row>\n      	  </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\ASUS\Documents\Repositories\DGTigers\Jumeirah\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_abbyy_rtr__["a" /* AbbyyRTR */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppProvider = /** @class */ (function () {
    function AppProvider(http) {
        this.http = http;
        console.log('Hello AppProvider Provider');
    }
    AppProvider.prototype.getConfirmationNumDetails = function (num) {
        return this.http.get("https://cors-anywhere.herokuapp.com/http://121.196.218.53:9098/customize/control/FetchBooking?Json={\"confirmationNumber\": {\"value\": \"" + num + "\",\"type\": \"INTERNAL\"}}&hotelCode=FSDH&chainCode=MF ");
    };
    AppProvider.prototype.getFolio = function (num) {
        return this.http.get("http://121.196.218.53:9098/customize/control/Invoice?Json={\"reservationRequest\": {\"hotelReference\": {\"value\": \"\",\"hotelCode\": \"FSDH\"},\"reservationID\": {\"uniqueID\": [{\"value\": \"" + num + "\",\"type\": \"EXTERNAL\",\"source\": \"RESV_NAME_ID\"}]}}}&hotelCode=FSDH&chainCode=MF ");
    };
    AppProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AppProvider);
    return AppProvider;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_abbyy_rtr__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_signaturepad__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_app_app__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_abbyy_rtr__["a" /* AbbyyRTR */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_app_app__["a" /* AppProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__["a" /* FilePath */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, keyBoard) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            setTimeout(function () {
                var currentDateTimestamp = new Date().getTime();
                var expirationTimestamp = 1560182400000;
                if (currentDateTimestamp < expirationTimestamp) {
                }
                else {
                    alert('License Expired');
                    platform.exitApp();
                }
            }, 500);
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            keyBoard.disableScroll(true);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\ASUS\Documents\Repositories\DGTigers\Jumeirah\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\ASUS\Documents\Repositories\DGTigers\Jumeirah\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 217,
	"./af.js": 217,
	"./ar": 218,
	"./ar-dz": 219,
	"./ar-dz.js": 219,
	"./ar-kw": 220,
	"./ar-kw.js": 220,
	"./ar-ly": 221,
	"./ar-ly.js": 221,
	"./ar-ma": 222,
	"./ar-ma.js": 222,
	"./ar-sa": 223,
	"./ar-sa.js": 223,
	"./ar-tn": 224,
	"./ar-tn.js": 224,
	"./ar.js": 218,
	"./az": 225,
	"./az.js": 225,
	"./be": 226,
	"./be.js": 226,
	"./bg": 227,
	"./bg.js": 227,
	"./bm": 228,
	"./bm.js": 228,
	"./bn": 229,
	"./bn.js": 229,
	"./bo": 230,
	"./bo.js": 230,
	"./br": 231,
	"./br.js": 231,
	"./bs": 232,
	"./bs.js": 232,
	"./ca": 233,
	"./ca.js": 233,
	"./cs": 234,
	"./cs.js": 234,
	"./cv": 235,
	"./cv.js": 235,
	"./cy": 236,
	"./cy.js": 236,
	"./da": 237,
	"./da.js": 237,
	"./de": 238,
	"./de-at": 239,
	"./de-at.js": 239,
	"./de-ch": 240,
	"./de-ch.js": 240,
	"./de.js": 238,
	"./dv": 241,
	"./dv.js": 241,
	"./el": 242,
	"./el.js": 242,
	"./en-SG": 243,
	"./en-SG.js": 243,
	"./en-au": 244,
	"./en-au.js": 244,
	"./en-ca": 245,
	"./en-ca.js": 245,
	"./en-gb": 246,
	"./en-gb.js": 246,
	"./en-ie": 247,
	"./en-ie.js": 247,
	"./en-il": 248,
	"./en-il.js": 248,
	"./en-nz": 249,
	"./en-nz.js": 249,
	"./eo": 250,
	"./eo.js": 250,
	"./es": 251,
	"./es-do": 252,
	"./es-do.js": 252,
	"./es-us": 253,
	"./es-us.js": 253,
	"./es.js": 251,
	"./et": 254,
	"./et.js": 254,
	"./eu": 255,
	"./eu.js": 255,
	"./fa": 256,
	"./fa.js": 256,
	"./fi": 257,
	"./fi.js": 257,
	"./fo": 258,
	"./fo.js": 258,
	"./fr": 259,
	"./fr-ca": 260,
	"./fr-ca.js": 260,
	"./fr-ch": 261,
	"./fr-ch.js": 261,
	"./fr.js": 259,
	"./fy": 262,
	"./fy.js": 262,
	"./ga": 263,
	"./ga.js": 263,
	"./gd": 264,
	"./gd.js": 264,
	"./gl": 265,
	"./gl.js": 265,
	"./gom-latn": 266,
	"./gom-latn.js": 266,
	"./gu": 267,
	"./gu.js": 267,
	"./he": 268,
	"./he.js": 268,
	"./hi": 269,
	"./hi.js": 269,
	"./hr": 270,
	"./hr.js": 270,
	"./hu": 271,
	"./hu.js": 271,
	"./hy-am": 272,
	"./hy-am.js": 272,
	"./id": 273,
	"./id.js": 273,
	"./is": 274,
	"./is.js": 274,
	"./it": 275,
	"./it-ch": 276,
	"./it-ch.js": 276,
	"./it.js": 275,
	"./ja": 277,
	"./ja.js": 277,
	"./jv": 278,
	"./jv.js": 278,
	"./ka": 279,
	"./ka.js": 279,
	"./kk": 280,
	"./kk.js": 280,
	"./km": 281,
	"./km.js": 281,
	"./kn": 282,
	"./kn.js": 282,
	"./ko": 283,
	"./ko.js": 283,
	"./ku": 284,
	"./ku.js": 284,
	"./ky": 285,
	"./ky.js": 285,
	"./lb": 286,
	"./lb.js": 286,
	"./lo": 287,
	"./lo.js": 287,
	"./lt": 288,
	"./lt.js": 288,
	"./lv": 289,
	"./lv.js": 289,
	"./me": 290,
	"./me.js": 290,
	"./mi": 291,
	"./mi.js": 291,
	"./mk": 292,
	"./mk.js": 292,
	"./ml": 293,
	"./ml.js": 293,
	"./mn": 294,
	"./mn.js": 294,
	"./mr": 295,
	"./mr.js": 295,
	"./ms": 296,
	"./ms-my": 297,
	"./ms-my.js": 297,
	"./ms.js": 296,
	"./mt": 298,
	"./mt.js": 298,
	"./my": 299,
	"./my.js": 299,
	"./nb": 300,
	"./nb.js": 300,
	"./ne": 301,
	"./ne.js": 301,
	"./nl": 302,
	"./nl-be": 303,
	"./nl-be.js": 303,
	"./nl.js": 302,
	"./nn": 304,
	"./nn.js": 304,
	"./pa-in": 305,
	"./pa-in.js": 305,
	"./pl": 306,
	"./pl.js": 306,
	"./pt": 307,
	"./pt-br": 308,
	"./pt-br.js": 308,
	"./pt.js": 307,
	"./ro": 309,
	"./ro.js": 309,
	"./ru": 310,
	"./ru.js": 310,
	"./sd": 311,
	"./sd.js": 311,
	"./se": 312,
	"./se.js": 312,
	"./si": 313,
	"./si.js": 313,
	"./sk": 314,
	"./sk.js": 314,
	"./sl": 315,
	"./sl.js": 315,
	"./sq": 316,
	"./sq.js": 316,
	"./sr": 317,
	"./sr-cyrl": 318,
	"./sr-cyrl.js": 318,
	"./sr.js": 317,
	"./ss": 319,
	"./ss.js": 319,
	"./sv": 320,
	"./sv.js": 320,
	"./sw": 321,
	"./sw.js": 321,
	"./ta": 322,
	"./ta.js": 322,
	"./te": 323,
	"./te.js": 323,
	"./tet": 324,
	"./tet.js": 324,
	"./tg": 325,
	"./tg.js": 325,
	"./th": 326,
	"./th.js": 326,
	"./tl-ph": 327,
	"./tl-ph.js": 327,
	"./tlh": 328,
	"./tlh.js": 328,
	"./tr": 329,
	"./tr.js": 329,
	"./tzl": 330,
	"./tzl.js": 330,
	"./tzm": 331,
	"./tzm-latn": 332,
	"./tzm-latn.js": 332,
	"./tzm.js": 331,
	"./ug-cn": 333,
	"./ug-cn.js": 333,
	"./uk": 334,
	"./uk.js": 334,
	"./ur": 335,
	"./ur.js": 335,
	"./uz": 336,
	"./uz-latn": 337,
	"./uz-latn.js": 337,
	"./uz.js": 336,
	"./vi": 338,
	"./vi.js": 338,
	"./x-pseudo": 339,
	"./x-pseudo.js": 339,
	"./yo": 340,
	"./yo.js": 340,
	"./zh-cn": 341,
	"./zh-cn.js": 341,
	"./zh-hk": 342,
	"./zh-hk.js": 342,
	"./zh-tw": 343,
	"./zh-tw.js": 343
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 434;

/***/ })

},[351]);
//# sourceMappingURL=main.js.map