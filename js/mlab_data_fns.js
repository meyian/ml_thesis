// ------------------------------ variables ------------------------------

var intNumTotalQuestions = 63;



// ------------------------------ functions ------------------------------

function getSampleRow(){
  var objRetRow = {"_id":{"$oid":"5a9986f8c2ef162fcf1324ec"},"idNumber":"danlarteygh@gmail.com","gender":"male","answers":{"1":"4","2":"4","3":"3","4":"3","5":"3","6":"3","7":"4","8":"4","9":"4","10":"4","11":"4","12":"4","13":"2","14":"3","15":"5","16":"4","17":"4","18":"3","19":"5","20":"4","21":"3","22":"4","23":"4"},"siteOrder":[29,33,27,41,62,37,16,8,12,43,35,40,25,54,20,6,9,44,21,14,10,47,2,39,22,59,18,32,1,38,61,46,53,49,42,15,11,3,13,58,24,52,23,51,28,30,26,4,31,60,7,17,19,45,56,57,50,48,0,5,34,36,55],"timestamp":1520011633};
  return objRetRow;
}

function getRelevantKeys(){
  var arrRetKeys = [
    "idNumber",
    "answers",
    "siteOrder",
    "timestamp"
  ];
}

function getLatestData(){

  var objRetData = {};

  for (var i in mlabData){
    var objRow = mlabData[i];
    var strEmail = objRow['idNumber']; 

    if (objRetData[strEmail]){
      var objOldRow = objRetData[strEmail];

      var intNewTimestamp = +objRow['timestamp'];
      var intOldTimestamp = +objOldRow['timestamp'];

      var intNumOldAnswers = Object.keys(objOldRow.answers).length;
      var intNumNewAnswers = Object.keys(objRow.answers).length;

      // console.log(`intNewTimestamp, intOldTimestamp = (${intNewTimestamp} , ${intOldTimestamp}`);

      if (intNewTimestamp > intOldTimestamp){
        // console.log("new");
        // console.log(`intNumNewAnswers, intNumOldAnswers = (${intNumNewAnswers} , ${intNumOldAnswers}`);

        objRetData[strEmail] = objRow;
      }
    }
    else{
      objRetData[strEmail] = objRow;
    }

  }

  return objRetData;
}

function getCompleteResults(){
  var objData = getLatestData();
  var objRetData = {};

  for (var strEmail in objData){
    var objRow = objData[strEmail];
    
    var intNumAnswers = Object.keys(objRow.answers).length;
    var intNumQuestions = objRow.siteOrder.length;

    // console.log(objRow);
    // console.log(`intNumAnswers, intNumQuestions = (${intNumAnswers} , ${intNumQuestions}`);

    if ((intNumAnswers == intNumQuestions) && (intNumAnswers == intNumTotalQuestions)){
      objRetData[strEmail] = objRow;
    }
  }

  return objRetData;
}

function getFunnyResults(){
  var objData = getLatestData();
  var objRetData = {};

  for (var strEmail in objData){
    var objRow = objData[strEmail];
    
    var intNumAnswers = Object.keys(objRow.answers).length;
    var intNumQuestions = objRow.siteOrder.length;

    // console.log(objRow);
    // console.log(`intNumAnswers, intNumQuestions = (${intNumAnswers} , ${intNumQuestions}`);

    if ((intNumAnswers > intNumQuestions) || (intNumQuestions > intNumQuestions)){
      objRetData[strEmail] = objRow;
    }
  }

  return objRetData;
}

// console.log(getFunnyResults());