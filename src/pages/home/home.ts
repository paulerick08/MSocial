import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform, AlertController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { AppProvider } from '../../providers/app/app';
import { Camera, PictureSourceType } from '@ionic-native/camera';
import * as Tesseract from 'tesseract.js'
import moment from "moment";
import { AbbyyRTR, TextCaptureOptions } from '@ionic-native/abbyy-rtr';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { HttpClient } from '@angular/common/http';
import { FilePath } from '@ionic-native/file-path';

declare var AWS;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentPage = 'home';
  //uri = 'C://Users/ASUS/Documents/Repositories/MSocial/Assets/background2.json';
  uri = 'No image file selected';
  //uri = 'A very very very long uri that will serve as a placeholder in case a long uri is used.A very very very long uri that will serve as a placeholder in case a long uri is used.A very very very long uri that will serve as a placeholder in case a long uri is used.A very very very long uri that will serve as a placeholder in case a long uri is used.';
  page = 0
  selectedPages = '';
  bookingDetails;
  confirmNumber: String = undefined;
  roomNumber: String = undefined;
  lastName: String = undefined;
  selectedImage: string;
  imageText: string;
  isTermCheked: Boolean;
  signatureDataUrl;
  textRecognized;
  folioDetails;
  time;
  date;
  value:any = undefined;
  amexValue1:any = '';
  amexValue2:any = '';
  amexValue3:any = '';
  amexValue4:any = '';
  dinersValue1:any = '';
  dinersValue2:any = '';
  dinersValue3:any = '';
  dinersValue4:any = '';
  checkInValue1:any = '';
  checkInValue2:any = '';
  checkInValue3:any = '';
  checkInValue4:any = '';
  checkInValue5:any = '';
  checkOutValue1:any = '';
  checkOutValue2:any = '';
  checkOutValue3:any = '';
  checkOutValue4:any = '';
  checkOutValue5:any = '';
  card:any='';
  payment='';
  relCode='';
  emirateCode='';
  resCounPhone='';
  mobNumber='';
  visit='';
  config='';
  config2='';
  config3='';
  bgImage ='../assets/imgs/AccorHotel/13152495.jpg';
  newpath='';
  myDate = new Date().getTime();
  date2;

  pages = {
    //array of pages for check-in 'roomInfo',
    checkIn: ['checkinOption', 'confirmNumber', 'verification', 'passport', 'scanComplete', 'terms', 'userDetails', 'dtcm', 'dtcm2', 'signature', 'incidentalAccount', 'incidental', 'signature2', 'incidentalProcess', 'paymentAccepted', 'checkInSuccess'],
     //array of pages for check-out 
    checkOut: [ 'folio','cardAccount','cardDetails','checkoutSignature','paymentProcess','paymentAccepted2','checkOutSuccess']
  }
  otherPages = {
    passportCheck: ['ppStep1', 'ppStep2', 'ppStep3', 'ppStep4', 'ppStep5' ],
    qrCode: ['qrStep1', 'qrStep2', 'qrStep3', 'qrStep4', 'qrStep5', 'qrStep6' ],
    idCard: ['idStep1', 'idStep2', 'idStep3', 'idStep4', 'idStep5'],
    walkIn: ['walkStep1', 'walkStep2', 'walkStep3', 'walkStep4', 'walkStep5', 'walkStep6'],
    msocialAccnt: ['msocialStep1', 'msocialStep2', 'msocialStep3', 'msocialStep4', 'msocialStep5', 'msocialStep6', 'msocialStep7']
  }
  otherPagesStatus;
  otherPageNumber = 0;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  
  public signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 200
  };
 
  constructor(
    private abbyyRTR: AbbyyRTR, 
    public navCtrl: NavController, 
    public appProvider: AppProvider, 
    public loadingCtrl: LoadingController, 
    public toast: ToastController, 
    private camera: Camera, 
    public platfrom: Platform,
    public alert: AlertController,
    private fileChooser: FileChooser,
    private file: File,
    private filePath: FilePath,

    public http:HttpClient
    
    ) {
   this.platfrom.ready().then(
     () => {
     }
   )
   
   
    setInterval(()=>{ 
      //code goes here that will be run every 5 seconds.    
      this.getDateText();
      this.getTime();
    }, 500);

    let mrz = [
      'I<UTOD23145890<1233<<<<<<<<<<<',
      '7408122F1204159UTO<<<<<<<<<<<6',
      'ERIKSSON<<ANNA<MARIA<<<<<<<<<<'

    ];
  const parse = require('mrz').parse; 
  console.log( parse(mrz))
  this.getTime();
  this.getDate();
  }

  getTime(){  //get time data
   this.time = moment().format('hh:mm A') ;
  }
  getDate(){  //get date data
    this.date = moment().format('dddd DD MMMM') ;
  }
  getDateText() {  //get date data
    this.date2 = moment().format('DD/MM/YYYY');
  }

  ionViewDidLoad(){
    // this.signaturePad is now available
    const signatureContainerWidth: any = document.querySelector('.signature .container');
    // this.signaturePad.resizeCanvas();
    this.signaturePad.clear();
  }
  // ngAfterViewInit() {}

  canvasResize() {
    let canvas = document.querySelector('canvas');
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
  }



  async recognize() { //image recognition process
    console.log('try')
    const loader = this.loadingCtrl.create({
      content: 'Recognizing image please wait..',
    });
    loader.present();
    const recognition = new AWS.Rekognition();
    const face1 = await new Promise((resolve, reject) => {
      var jpg = true;
      var image;

      try {
        image = atob(this.selectedImage.split("data:image/jpeg;base64,")[1]);

     } catch (e) {
         jpg = false;
     }
     if (jpg == false) {
         try {
             image = atob(this.selectedImage.split("data:image/png;base64,")[1]);
             console.log(image);
         } catch (e) {
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
  });

  
  var params = {
    Image: { /* required */
        Bytes: face1
    }
    };

recognition.detectText(params, (err, data) => {
        if (err)  {
          console.log(err, err.stack);
          loader.dismiss();
          alert('Cannot recognize image please capture again');
          this.recognizeImage = undefined;
         } // an error occurred
        else    {
          console.log(data, 'recognized text'); 
          this.textRecognized = data.TextDetections.filter((data) => data.Type === 'LINE');
          console.log(this.textRecognized, 'textRecognized')
          loader.dismiss();
        }          // successful response
        });
  }

  capture() { //start capturing image
    const options = {
      areaOfInterest: '0.9 0.2',
      orientation: 'landscape',
      licenseFileName : "AbbyyRtrSdk.license",
    };
   this.abbyyRTR.startTextCapture(options)
.then((res: any) =>  {
  console.log(res);
  this.textRecognized = res;
  this.page++;
    this.currentPage = this.pages[this.selectedPages][this.page];
 
})
.catch((error: any) => console.error(error));
  }
  captureID() { //start capturing image
    const options = {
      areaOfInterest: '0.5 0.8',
      orientation: 'portrait',
      licenseFileName: "AbbyyRtrSdk.license",
    };
    this.abbyyRTR.startTextCapture(options)
      .then((res: any) => {
        console.log(res);
        this.textRecognized = res;
        this.page++;
        this.currentPage = this.pages[this.selectedPages][this.page];

      })
      .catch((error: any) => console.error(error));
  }
  capturePassport() { //start capturing image
    const options = {
      areaOfInterest: '0.8 0.8',
      orientation: 'landscape',
      licenseFileName: "AbbyyRtrSdk.license",
    };
    this.abbyyRTR.startTextCapture(options)
      .then((res: any) => {
        console.log(res);
        this.textRecognized = res;
        this.page++;
        this.currentPage = this.pages[this.selectedPages][this.page];

      })
      .catch((error: any) => console.error(error));
  }
  getPicture(sourceType: PictureSourceType) { //get picture data
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.selectedImage = `data:image/jpeg;base64,${imageData}`;
      console.log(this.selectedImage);
      this.recognize();
      this.recognizeImage();
    });
  }
 
  recognizeImage() { //getting data from image
    console.log('recognize image')
    Tesseract.recognize(this.selectedImage)
    .progress(message => {
      if (message.status === 'recognizing text') {
        console.log('recognizing image');
      }
    })
    .catch(err => console.error(err))
    .then(result => {
      this.imageText = result.text;
      console.log('result', result);
    })
    .finally(resultOrError => {
      console.log(resultOrError , 'err')
    });
  }
  
  checkIn() { //to check-in page
    this.selectedPages = 'checkIn'
    this.currentPage = this.pages[this.selectedPages][this.page];
    console.log(this.currentPage)
  }

  checkOut() { //to check-out page
    this.selectedPages = 'checkOut'
    this.currentPage = this.pages[this.selectedPages][this.page];
  }

  back(){ //back function, depending on current page, what it does changes
    if(this.page === 0) { //back to home content
      this.currentPage = 'home'; 
      this.quit();
    }  else if (this.currentPage === 'dtcm2' ||this.currentPage === 'paymentAccepted' || this.currentPage === 'paymentAccepted2'){ //returns two pages back as the pages before them are "processing" type of pages
      this.page--;
      this.page--;
      this.currentPage = this.pages[this.selectedPages][this.page];
     this.otherPageNumber--;
    }else{ //default back functionality, clears variable data
      this.page--;
      this.confirmNumber=undefined;
      this.signaturePad.clear();
      this.isTermCheked=false;
    this.signatureDataUrl = undefined;
    this.roomNumber = undefined;
    this.lastName = undefined;
    this.selectedImage = undefined;
    this.checkInValue1='';
    this.checkInValue2='';
    this.checkInValue3='';
    this.checkInValue4='';
    this.checkInValue5='';
    this.checkOutValue1='';
    this.checkOutValue2='';
    this.checkOutValue3='';
    this.checkOutValue4='';
    this.checkOutValue5='';  
    this.amexValue1 = '';
    this.amexValue2 = '';
    this.amexValue3 = '';
    this.amexValue4 = '';
    this.dinersValue1 = '';
    this.dinersValue2 = '';
    this.dinersValue3 = '';
    this.payment='';
  this.relCode='';
  this.emirateCode='';
  this.resCounPhone='';
  this.mobNumber='';
  this.visit='';
      this.currentPage = this.pages[this.selectedPages][this.page];

    }
    if(this.otherPagesStatus) {
      this.otherPageNumber--;
      if (this.otherPageNumber === 0) {
        this.otherPagesStatus = '';
        console.log(this.otherPageNumber)
        this.currentPage = this.pages[this.selectedPages][this.page];
      }
    }
  }

  cancelCheckin(){ //returns to home, clears data
    let alert = this.alert.create({
      title: 'Cancel Check-In',
      message: 'Are you sure you want to cancel? Information will not be saved',
      enableBackdropDismiss:false,
      buttons: [{
        text:'Yes',
        role:'cancel',
        handler:()=>{
          this.quit();
        }
      },
      {
        text:'No',
        handler:()=>{
          console.log('No clicked');
        }
      }
    ]
  });
  alert.present();
}

cancelCheckout(){ //returns to home, clears data
  let alert = this.alert.create({
    title: 'Cancel Checkout',
    message: 'Are you sure you want to cancel?',
    enableBackdropDismiss:false,
    buttons: [{
      text:'Yes',
      role:'cancel',
      handler:()=>{
        this.quit();
      }
    },
    {
      text:'No',
      handler:()=>{
        console.log('No clicked');
      }
    }
  ]
});
alert.present();
}

quit(){
    this.page = 0;
    this.otherPageNumber = 0;
  this.otherPagesStatus = '';
    this.currentPage = 'home';
    this.confirmNumber = undefined;
    this.signaturePad.clear();
    this.isTermCheked=false;

    this.signatureDataUrl = undefined;
    this.roomNumber = undefined;
    this.lastName = undefined;
    this.selectedImage = undefined;
    this.checkInValue1='';
    this.checkInValue2='';
    this.checkInValue3='';
    this.checkInValue4='';
    this.checkInValue5='';
    this.checkOutValue1='';
    this.checkOutValue2='';
    this.checkOutValue3='';
    this.checkOutValue4='';
    this.checkOutValue5='';  
    this.payment='';
  this.relCode='';
  this.emirateCode='';
  this.resCounPhone='';
  this.mobNumber='';
  this.visit='';
  }

  
  next(type) {//to next page
    console.log(type)
    console.log(this.currentPage);
    if(this.currentPage === 'confirmNumber') { 
      const loader = this.loadingCtrl.create({
        content: 'Loading please wait..'
      });
      if(this.confirmNumber) { //confirmation number verification
        loader.present();
        setTimeout(() => {
          let isFound: Boolean = false;

          if(this.confirmNumber === '12345') {
            this.bookingDetails = {
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
            isFound  = true;
           
          } else if(this.confirmNumber === '0987') {
            this.bookingDetails = {
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

            }
            isFound  = true;
            
          } else {
              this.toast.create({
                message: 'Confirmation number not found.',
                duration: 2000
              }).present();
          }

          loader.dismiss();
          if(isFound) {
            this.page++;
            this.currentPage = this.pages[this.selectedPages][this.page];
            this.confirmNumber = undefined;
            console.log(this.confirmNumber);
          }
      }, 2000);
        
      } else {
        //Validation Confirmation Number
        this.toast.create({
          duration: 2000,
          message: 'Please Check Your Confirmation Number'
        }).present();
      }
      
    } else if(this.currentPage === 'passport') {
      this.capture();//start capture for passport
    } else if(this.currentPage === 'terms'){ 
      if(this.isTermCheked) { //terms and condition verification
        this.page++;
        this.currentPage = this.pages[this.selectedPages][this.page];
        this.isTermCheked=false;
      } else {
        this.toast.create({
          message: 'Please Check Terms & Condition to proceed',
          duration: 2000
        }).present();
      }
    } else if(this.currentPage === 'roomInfo'){ 
      if(this.roomNumber && this.lastName) { //room number and last name verification
        const loader = this.loadingCtrl.create({
          content: 'Loading please wait..'
        });
        loader.present();

        setTimeout(() => {
          if(this.roomNumber === '111' && this.lastName.toLowerCase() === 'liu') {
            this.folioDetails = {
              guest: 'Frank Liu',
              roomNumber: '111',
              confirmNumber: '12345'
            }
       
              this.bookingDetails = {
                firstName: 'FRANK',
                lastName: 'LIU',
                arrivalDate: 'MARCH 6, 2019',
                departureDate: 'MARCH 10, 2019',
                totalRoomNights: '4  Night',
                type: 'Classic Room',
                addOns: 'N/A',
  
              }; 
             
            loader.dismiss();
            this.page++;
            this.currentPage = this.pages[this.selectedPages][this.page];
          } else if(this.roomNumber === '222' && this.lastName.toLowerCase() === 'gray') {
            this.folioDetails = {
              guest: ' Catriona Gray',
              roomNumber: '222',
              confirmNumber: '0987'
            }
            this.bookingDetails = {
              firstName: 'CATRIONA ',
              lastName: 'GRAY ',
              arrivalDate: 'MARCH 6, 2019',
              departureDate: 'MARCH 10, 2019',
              totalRoomNights: '4  Night',
              type: 'Classic Room',
              addOns: 'N/A',

            }; 
            loader.dismiss();
            this.page++;
            this.currentPage = this.pages[this.selectedPages][this.page];
          } else {
            loader.dismiss();
            this.toast.create({
              message: "No data found.",
              duration: 2000
            }).present();
          }
        }, 2000);
       
      } else {
        let message = 'Please Enter Room Number and Last Name';
        if(!this.roomNumber && !this.lastName){
          message = 'Please Enter Room Number and Last Name';
        } else if(!this.lastName){
          message = 'Please Enter Last Name';
        } else {
          message = 'Please Enter Room Number';
        }
        this.toast.create( {
          duration: 2000,
          message: message
        }).present();
      }
    } else if(this.currentPage === 'signature' || this.currentPage === 'signature2' || this.currentPage === 'checkoutSignature'){
      if(this.signatureDataUrl) { //signature verification
        this.signatureDataUrl = undefined;
        this.signaturePad.clear();

          if (this.currentPage === 'signature2'){
          console.log("timeout");
          this.page++;
          this.signaturePad.clear();
          this.currentPage = this.pages[this.selectedPages][this.page];
          setTimeout(() => {
            this.page++;
            this.currentPage = this.pages[this.selectedPages][this.page];
          }, 2000);
        }else if (this.currentPage === 'checkoutSignature'){
          console.log("timeout");
          this.page++;
          this.currentPage = this.pages[this.selectedPages][this.page];
          this.signaturePad.clear();
          setTimeout(() => {
            this.page++;
            this.currentPage = this.pages[this.selectedPages][this.page];
          }, 2000);
        }else{
          console.log(this.payment);
          if (this.payment==='Cash'){
            console.log
            this.page = 15;
            this.currentPage = this.pages[this.selectedPages][this.page];
          }else{
          this.page++;
          this.currentPage = this.pages[this.selectedPages][this.page];
          this.signaturePad.clear();}
        }
        
      } else {
        this.toast.create({
          duration: 2000,
          message: 'Please sign to continue.'
        }).present();
      }
    } else if (this.currentPage === 'incidental'){ //incidental payment input validation
      if (this.checkInValue1.length==4 && this.checkInValue2.length==4 && this.checkInValue3.length==4 && this.checkInValue4.length==4 && this.checkInValue5.length==3){
        this.checkInValue1 ='';
        this.checkInValue2 ='';
        this.checkInValue3 ='';
        this.checkInValue4 ='';
        this.checkInValue5 ='';
        this.page++;
        this.currentPage = this.pages[this.selectedPages][this.page];
          
      }else if (this.amexValue1.length==4 && this.amexValue2.length==6 && this.amexValue3.length==5 && this.amexValue4.length==4){
        this.amexValue1 ='';
        this.amexValue2 ='';
        this.amexValue3 ='';
        this.amexValue4 ='';
        this.page++;
        this.currentPage = this.pages[this.selectedPages][this.page];
        }else if (this.dinersValue1.length==5 &&this.dinersValue2.length==4&&this.dinersValue3.length==5&&this.dinersValue4.length==3){
          this.dinersValue1 ='';
          this.dinersValue2 ='';
          this.dinersValue3 ='';
          this.dinersValue4 ='';
          this.page++;
          this.currentPage = this.pages[this.selectedPages][this.page];
        }else{

          this.toast.create({
          duration: 2000,
          message: 'Please check your entered card details.'
        }).present();
      }
    } else if (this.currentPage === 'userDetails'){
        if (this.payment!=''&&this.visit!=''&&this.emirateCode!=''&&this.mobNumber!=''&&this.resCounPhone!=''){
          this.page++;
          this.currentPage = this.pages[this.selectedPages][this.page];
          setTimeout(() => {
            this.page++;
            this.currentPage = this.pages[this.selectedPages][this.page];
          }, 2000);
        }else{
          this.toast.create({
            duration: 2000,
            message: 'Fields with asterisk(*) must not be empty. '
          }).present();
        }
        
      
    }else if (this.currentPage === 'cardDetails'){ //card details input verification
      if (this.checkOutValue1.length==4 && this.checkOutValue2.length==4 && this.checkOutValue3.length==4 && this.checkOutValue4.length==4 && this.checkOutValue5.length==3 ){
        this.checkOutValue1 ='';
        this.checkOutValue2 ='';
        this.checkOutValue3 ='';
        this.checkOutValue4 ='';
        this.checkOutValue5 ='';  
        this.page++;
        this.currentPage = this.pages[this.selectedPages][this.page];
        
      }else if (this.amexValue1.length==4 && this.amexValue2.length==6 && this.amexValue3.length==5 && this.amexValue4.length==4){
        this.amexValue1 ='';
        this.amexValue2 ='';
        this.amexValue3 ='';
        this.amexValue4 ='';
        this.page++;
        this.currentPage = this.pages[this.selectedPages][this.page];
        }else if (this.dinersValue1.length==5 &&this.dinersValue2.length==4&&this.dinersValue3.length==5&&this.dinersValue4.length==3){
          this.dinersValue1 ='';
          this.dinersValue2 ='';
          this.dinersValue3 ='';
          this.dinersValue4 ='';
          this.page++;
          this.currentPage = this.pages[this.selectedPages][this.page];
        }else{

          this.toast.create({
          duration: 2000,
          message: 'Please enter your entered card details.'
        }).present();
      }
    }else{
      if (!type) {
        this.page++;
        this.currentPage = this.pages[this.selectedPages][this.page];
      } else {
        if (this.currentPage === 'idStep3' || this.currentPage === 'msocialStep5' || this.currentPage === 'ppStep3' || this.currentPage === 'qrStep4' ||  this.currentPage === 'walkStep4' ) {
          if (this.isTermCheked && this.signatureDataUrl) { //terms and condition verification
            this.currentPage = this.otherPages[type][this.otherPageNumber];
            this.otherPagesStatus = type;
            this.otherPageNumber++;
            console.log(this.currentPage)
            console.log(this.otherPageNumber);
            this.clear();
          } else {
            if (!this.isTermCheked) {
              this.toast.create({
                message: 'Please Check Terms & Condition to proceed',
                duration: 2000
              }).present();
            } else {
              this.toast.create({
                duration: 2000,
                message: 'Please sign to continue.'
              }).present();
            }
          }
        }
        else if (this.currentPage === 'idStep4' || this.currentPage === 'msocialStep6' || this.currentPage === 'ppStep4' || this.currentPage === 'qrStep5' || this.currentPage === 'walkStep5') {
          if (this.signatureDataUrl) {
            this.currentPage = this.otherPages[type][this.otherPageNumber];
            this.otherPagesStatus = type;
            this.otherPageNumber++;
            console.log(this.currentPage)
            console.log(this.otherPageNumber);
            this.clear();
          } else {
            this.toast.create({
              duration: 2000,
              message: 'Please sign to continue.'
            }).present();
          }
        }
        else {
          this.currentPage = this.otherPages[type][this.otherPageNumber];
          this.otherPagesStatus = type;
          this.otherPageNumber++;
          console.log(this.currentPage)
          console.log(this.otherPageNumber);
      }
      }
    }
    

   
  }
  clear(){ //clear signature pad content
    this.signaturePad.clear();
    this.signatureDataUrl = undefined;
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    this.signatureDataUrl = this.signaturePad.toDataURL();
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  formatDate(date: String) { //date format
    date = date || '';
    return date.substring(0,10);
  }
  formatRecognizeText(text) { //removing ununused characters
    return text.replace(/<|_|«|\*/g,'');
  }
  
  formatExpiryDate(date) { //expiry date format
    const year:any = `20${date.substring(0,2)}`;
    date = new Date (year, parseInt(date.substring(2,4))-1, date.substring(4))
    return  moment(date.getTime()).format('MMMM DD, YYYY') ;
  }

  onEnterCode(event){//to automatically go to next input in contents where card details and CVV needs to be inputted
    this.checkOutValue1 = this.checkOutValue1.replace(/[^0-9]/g,'');
    this.checkOutValue2 = this.checkOutValue2.replace(/[^0-9]/g,'');
    this.checkOutValue3 = this.checkOutValue3.replace(/[^0-9]/g,'');
    this.checkOutValue4 = this.checkOutValue4.replace(/[^0-9]/g,'');
    this.checkOutValue5 = this.checkOutValue5.replace(/[^0-9]/g,'');
    this.checkInValue1=this.checkInValue1.replace(/[^0-9]/g,'');
    this.checkInValue2=this.checkInValue2.replace(/[^0-9]/g,'');
    this.checkInValue3=this.checkInValue3.replace(/[^0-9]/g,'');
    this.checkInValue4=this.checkInValue4.replace(/[^0-9]/g,'');
    this.checkInValue5=this.checkInValue5.replace(/[^0-9]/g,'');  

    event.target.value.length ===4 && event.target.nextElementSibling ?  event.target.nextElementSibling.focus() : '';
    if(event.target.value.length ===0 && event.key == 'Backspace') event.target.previousElementSibling.focus();
  }

  onAmexEnterCode1(event){//to automatically go to next input in contents where card details and CVV needs to be inputted
    console.log(event);
    console.log(this.amexValue1);
    this.amexValue1 = this.amexValue1.replace(/[^0-9]/g,'');
    console.log(this.amexValue1);
    console.log(this.amexValue1.length);
    if (this.amexValue1.length===4){
      event.target.nextElementSibling.focus();
      console.log(event.target.nextElementSibling.toString);
      console.log(true);
    }
  }

  onAmexEnterCode2(event){//to automatically go to next input in contents where card details and CVV needs to be inputted
    console.log(event);
    console.log(this.amexValue2);
    this.amexValue2 = this.amexValue2.replace(/[^0-9]/g,'');
    console.log(this.amexValue2);
    console.log(this.amexValue2.length);
    if (this.amexValue2.length===6){
      event.target.nextElementSibling.focus();
      console.log(true);
    }
  }

  onAmexEnterCode3(event){//to automatically go to next input in contents where card details and CVV needs to be inputted
    console.log(event);
    console.log(this.amexValue3);
    this.amexValue3 = this.amexValue3.replace(/[^0-9]/g,'');
    console.log(this.amexValue3);
    console.log(this.amexValue3.length);
    if (this.amexValue3.length===5){
      event.target.nextElementSibling.focus();
      console.log(true);
    }
  }

  onAmexEnterCode4(event){//to automatically go to next input in contents where card details and CVV needs to be inputted
    console.log(event);
    console.log(this.amexValue4);
    this.amexValue4 = this.amexValue4.replace(/[^0-9]/g,'');
    console.log(this.amexValue4);
    console.log(this.amexValue4.length);
  }

  onDinersEnterCode1(event){//to automatically go to next input in contents where card details and CVV needs to be inputted
    console.log(event);
    console.log(this.dinersValue1);
    this.dinersValue1 = this.dinersValue1.replace(/[^0-9]/g,'');
    console.log(this.dinersValue1);
    console.log(this.dinersValue1.length);
    if (this.dinersValue1.length===5){
      event.target.nextElementSibling.focus();
      console.log(true);
    }
  }

  onDinersEnterCode2(event){//to automatically go to next input in contents where card details and CVV needs to be inputted
    console.log(event);
    console.log(this.dinersValue2);
    this.dinersValue2 = this.dinersValue2.replace(/[^0-9]/g,'');
    console.log(this.dinersValue2);
    console.log(this.dinersValue2.length);
    if (this.dinersValue2.length===4){
      event.target.nextElementSibling.focus();
      console.log(true);
    }
  }

  onDinersEnterCode3(event){//to automatically go to next input in contents where card details and CVV needs to be inputted
    console.log(event);
    console.log(this.dinersValue3);
    this.dinersValue3 = this.dinersValue3.replace(/[^0-9]/g,'');
    console.log(this.dinersValue3);
    console.log(this.dinersValue3.length);
    if (this.dinersValue3.length===5){
      event.target.nextElementSibling.focus();
      console.log(true);
    }
  }

  onDinersEnterCode4(event){//to automatically go to next input in contents where card details and CVV needs to be inputted
    console.log(event);
    console.log(this.dinersValue4);
    this.dinersValue4 = this.dinersValue4.replace(/[^0-9]/g,'');
    console.log(this.dinersValue4);
    console.log(this.dinersValue4.length);
  }

  showAmex(){
   this.card = 'amex';
   this.next(null);
  }

  showVisa(){
    this.card = 'visa';
    this.next(null);
  }

  showMaster(){
    this.card = 'master';
    this.next(null);
  }

  showJCB(){
    this.card = 'jcb';
    this.next(null);
  }

  showDiners(){
    this.card = 'diners';
    this.next(null);
  }

  settings(){
    this.currentPage = "settings";
  }

  Browse(){
    console.log('called');
    this.fileChooser.open().then(file => {
      this.filePath.resolveNativePath(file).then(resolvedFilePath => {
        this.uri = resolvedFilePath;      
      }).catch(err => {
        alert(JSON.stringify(err));
      });
  
    }).catch(err => {
      alert(JSON.stringify(err));
  });
  }


  Load(){
    let path = this.uri.substring(0, this.uri.lastIndexOf('/'));
    let file = this.uri.substring(this.uri.lastIndexOf('/')+1, this.uri.length);
    this.config = file;
    this.config2 = path+'/';
    this.config3 = this.file.externalDataDirectory;
    this.newpath = this.config3;
    this.file.copyFile(this.config2, file,this.config3,file).then(success=>{
      console.log(success);
      //alert('checkFile success'+JSON.stringify(success));
      this.file.readAsDataURL(this.file.externalDataDirectory, file).then(dataurl => {
        this.bgImage = dataurl;
      //alert(this.bgImage);
      },
    (error) =>{
      alert(error.message);
    });
      
    })
    .catch(err=>{
      console.log(err);
      alert('checkFile fail'+JSON.stringify(err));
    });      
  }

  settingsBack(){
    this.uri = 'No image file selected';
    this.config = '';
    this.currentPage = "home";
  }
}
