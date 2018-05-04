/*

Vanilla Bootstrap

*/

// "global" variables

var arrUrls = [
  'localhost/thesispage/?textsize=-0.08&padding=-0.3&color=9400D3',
  'localhost/thesispage/?textsize=-0.08&padding=-0.3&color=4B0082',
  'localhost/thesispage/?textsize=-0.08&padding=-0.3&color=0000FF',
  'localhost/thesispage/?textsize=-0.08&padding=-0.3&color=00FF00',
  'localhost/thesispage/?textsize=-0.08&padding=-0.3&color=FFFF00',
  'localhost/thesispage/?textsize=-0.08&padding=-0.3&color=FF7F00',
  'localhost/thesispage/?textsize=-0.08&padding=-0.3&color=FF0000',
  'localhost/thesispage/?textsize=-0.08&padding=0&color=9400D3',
  'localhost/thesispage/?textsize=-0.08&padding=0&color=4B0082',
  'localhost/thesispage/?textsize=-0.08&padding=0&color=0000FF',
  'localhost/thesispage/?textsize=-0.08&padding=0&color=00FF00',
  'localhost/thesispage/?textsize=-0.08&padding=0&color=FFFF00',
  'localhost/thesispage/?textsize=-0.08&padding=0&color=FF7F00',
  'localhost/thesispage/?textsize=-0.08&padding=0&color=FF0000',
  'localhost/thesispage/?textsize=-0.08&padding=0.3&color=9400D3',
  'localhost/thesispage/?textsize=-0.08&padding=0.3&color=4B0082',
  'localhost/thesispage/?textsize=-0.08&padding=0.3&color=0000FF',
  'localhost/thesispage/?textsize=-0.08&padding=0.3&color=00FF00',
  'localhost/thesispage/?textsize=-0.08&padding=0.3&color=FFFF00',
  'localhost/thesispage/?textsize=-0.08&padding=0.3&color=FF7F00',
  'localhost/thesispage/?textsize=-0.08&padding=0.3&color=FF0000',
  'localhost/thesispage/?textsize=0&padding=-0.3&color=9400D3',
  'localhost/thesispage/?textsize=0&padding=-0.3&color=4B0082',
  'localhost/thesispage/?textsize=0&padding=-0.3&color=0000FF',
  'localhost/thesispage/?textsize=0&padding=-0.3&color=00FF00',
  'localhost/thesispage/?textsize=0&padding=-0.3&color=FFFF00',
  'localhost/thesispage/?textsize=0&padding=-0.3&color=FF7F00',
  'localhost/thesispage/?textsize=0&padding=-0.3&color=FF0000',
  'localhost/thesispage/?textsize=0&padding=0&color=9400D3',
  'localhost/thesispage/?textsize=0&padding=0&color=4B0082',
  'localhost/thesispage/?textsize=0&padding=0&color=0000FF',
  'localhost/thesispage/?textsize=0&padding=0&color=00FF00',
  'localhost/thesispage/?textsize=0&padding=0&color=FFFF00',
  'localhost/thesispage/?textsize=0&padding=0&color=FF7F00',
  'localhost/thesispage/?textsize=0&padding=0&color=FF0000',
  'localhost/thesispage/?textsize=0&padding=0.3&color=9400D3',
  'localhost/thesispage/?textsize=0&padding=0.3&color=4B0082',
  'localhost/thesispage/?textsize=0&padding=0.3&color=0000FF',
  'localhost/thesispage/?textsize=0&padding=0.3&color=00FF00',
  'localhost/thesispage/?textsize=0&padding=0.3&color=FFFF00',
  'localhost/thesispage/?textsize=0&padding=0.3&color=FF7F00',
  'localhost/thesispage/?textsize=0&padding=0.3&color=FF0000',
  'localhost/thesispage/?textsize=0.03&padding=-0.3&color=9400D3',
  'localhost/thesispage/?textsize=0.03&padding=-0.3&color=4B0082',
  'localhost/thesispage/?textsize=0.03&padding=-0.3&color=0000FF',
  'localhost/thesispage/?textsize=0.03&padding=-0.3&color=00FF00',
  'localhost/thesispage/?textsize=0.03&padding=-0.3&color=FFFF00',
  'localhost/thesispage/?textsize=0.03&padding=-0.3&color=FF7F00',
  'localhost/thesispage/?textsize=0.03&padding=-0.3&color=FF0000',
  'localhost/thesispage/?textsize=0.03&padding=0&color=9400D3',
  'localhost/thesispage/?textsize=0.03&padding=0&color=4B0082',
  'localhost/thesispage/?textsize=0.03&padding=0&color=0000FF',
  'localhost/thesispage/?textsize=0.03&padding=0&color=00FF00',
  'localhost/thesispage/?textsize=0.03&padding=0&color=FFFF00',
  'localhost/thesispage/?textsize=0.03&padding=0&color=FF7F00',
  'localhost/thesispage/?textsize=0.03&padding=0&color=FF0000',
  'localhost/thesispage/?textsize=0.03&padding=0.3&color=9400D3',
  'localhost/thesispage/?textsize=0.03&padding=0.3&color=4B0082',
  'localhost/thesispage/?textsize=0.03&padding=0.3&color=0000FF',
  'localhost/thesispage/?textsize=0.03&padding=0.3&color=00FF00',
  'localhost/thesispage/?textsize=0.03&padding=0.3&color=FFFF00',
  'localhost/thesispage/?textsize=0.03&padding=0.3&color=FF7F00',
  'localhost/thesispage/?textsize=0.03&padding=0.3&color=FF0000'
];

var getIndexData;
var urlToData;

$(function(){

  // variables
  

  // classes


  // functions
  getArrUrls = function(){
    return arrUrls;
  }

  urlToData = function urlToData(strUrl){

    var pojoRetData = {};

    if (strUrl){

      var arrUrlParts = strUrl.split("/");
      var strLastPart = arrUrlParts.pop();
      var arrArgs = strLastPart.split("&");

      for (var i in arrArgs){
        var strArg = arrArgs[i].replace("?", "");
        var arrKeyVal = strArg.split("=");

        var strKey = arrKeyVal[0];
        var strVal = arrKeyVal[1];

        pojoRetData[strKey] = strVal;
      }
    }

    return pojoRetData;
  }

  getIndexData = function getIndexData(intIndex){
    var strUrl = arrUrls[intIndex];
    var pojoData = urlToData(strUrl);
    return pojoData;
  }
  
})