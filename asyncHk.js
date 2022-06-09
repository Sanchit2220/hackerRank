// using async await 

const puppeteer = require("puppeteer");  /// require pupeeteer to use chrominium browser
  // page,tab
let loginlink = "https://www.hackerrank.com/auth/login" // loginlink of hackerrank
const codesobj =require("./codes"); // excess code for another file
let  email = "cakisep318@reamtv.com"; // email  adress of hackerrank
 const password1 = "12345678"; // password of hackerrank

  
    
  (async function(){
    try{
        let browseropen =   await puppeteer.launch({// lanch command is used lanch a browser but the google is headless that;s why  we are false a headless
            headless:false,
            defaultViewport : null, // full screen command
            args:["--start-maximized"] // maximixe a whole screen
           
           });
           let newTab =  await browseropen.newPage();
           await newTab.goto(loginlink);
           await newTab.type("input[id = 'input-1']", email,{delay : 50});
           await newTab.type("input[type ='password']",password1,{delay:50});
           await newTab.click('Button[data-analytics ="LoginPassword"]',{delay:50})
           await  waitandClick('.topic-card a[data-attr1="algorithms"]',newTab);
           await waitandClick('input[value="warmup"]', newTab); 
         let allChallenges =   await newTab.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay:50})   //The method runs document.querySelectorAll within the page. If no elements match the selector, the return value resolves to [].
            let questionwillbesoved =  await questionsolver(newTab,allChallenges[0],codesobj.answer[0]);
        }catch(error){

    }
  })()

   async function waitandClick(selector,cpage){// wait and click function use to without load previous page not acess another command because   upcoming page selector are not visible
     await cpage.waitForSelector(selector);
     let selectorisClicked = cpage.click(selector);
     return selectorisClicked;
  }
  
  async function questionsolver(page,question,answer){
   await question.click();
     await  waitandClick(".monaco-editor.no-user-select.vs",page);
   await waitandClick(".checkbox-input",page);
   await  waitandClick(".text-area.custominput",page);
   await page.type(".text-area.custominput",answer,{delay:10});
   await  page.keyboard.down("Control");
   await page.keyboard.press("A",{delay:50});
   await page.keyboard.press("X",{DELAY:50});
   await page.keyboard.up("Control",{delay:50});
    await   waitandClick(".monaco-editor.no-user-select.vs",page);
    await  page.keyboard.down("Control");
    await page.keyboard.press("A",{delay:50});
    await page.keyboard.press("V",{DELAY:50});
    await page.keyboard.up("Control",{delay:50});
    await page.click(".hr-monaco__run-code",{delay:100});
  }
































/* browseropen.then(function(browser){
  let pagebrowserarr = browser.newPage(); // new browser page open
  return pagebrowserarr;
}).then(function(newtab){ // merge to another command
  page = newtab;
  let hackeropenpromise = newtab.goto(loginlink); //  goto login page of hackerrank
  return hackeropenpromise;
}).then(function (){
 let  emailisentered =  page.type("input[id = 'input-1']", email,{delay : 50}); //selector of login id, and type email,delay is used to process is slow
 
return emailisentered;
}).then(function(){
  let passwordisentered = page.type("input[type ='password']",password1,{delay:50}); // password
  return passwordisentered;
}).then(function(){
  let clickonlogin = page.click('Button[data-analytics ="LoginPassword"]',{delay:50}); // click on login
  return clickonlogin;
}).then(function(){
  let clickAnAlgoPromise = waitandClick('.topic-card a[data-attr1="algorithms"]',page); // wait and click function use to without load previous page not acess another command because   upcoming page selector are not visible
  return clickAnAlgoPromise;
}).then(function(){
let clickonwrmUp = waitandClick('input[value="warmup"]',page); // tick on warmup option
return clickonwrmUp;
}).then(function(){
  let waitfor3second = page.waitFor(3000); // waitFor function is used to delay on 3000 is 3 second
  return waitfor3second;
}).then(function(){
  let allchallenges = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay:50}); // $$ used as a array and all question selector are here
  return allchallenges;
}).then(function(questionArr){
  console.log("question length",questionArr.length);
  let  questionwillbeSolved = questionSolver(page,questionArr[0],codesobj.answer[0]); // current page, question index , codesobj return array 0th index is passed
  return  questionwillbeSolved;
})

function waitandClick(selector,cpage){// wait and click function use to without load previous page not acess another command because   upcoming page selector are not visible
  return new Promise(function(resolve,reject){ // new promise have to option resolve and reject 
  let waitforpagepromise = cpage.waitForSelector(selector); // waitForSelector is a coomand it is used to wait for the selector is load and no then the selector is loadthen the do another work
  waitforpagepromise.then(function(){// when selector can bew Aceesed
      let clickmodel = cpage.click(selector); // click on a selector
      return clickmodel;
  }).then(function(){
 resolve();
  }).catch(function(err){ // catch error when anything is wrong
      reject();
  })
  })
}
function questionSolver(page,question,answers){ // question solver is a function they used to solbve a question
  return new Promise(function(resolve,reject){
   let clickonquestion = question.click(); // click on question question index is already passsed
      clickonquestion.then(function(){
          let UseEditortoCode = waitandClick(".monaco-editor.no-user-select.vs",page); // click on editor ,to write a code
          return UseEditortoCode;
      }).then(function(){
          return waitandClick(".checkbox-input",page); // click on custom text area
      }).then(function(){
          return waitandClick(".text-area.custominput",page); // 
      }).then(function(){
          return page.type(".text-area.custominput",answers,{delay:10}) // text a answer in a custom input area
      }).then(function(){
          let ctrlpressed = page.keyboard.down("Control"); // page.keyboard i  used click a any key and down function is used to hold a key tb tk jb tk hum unpresed na kre
          return ctrlpressed;
          
      }).then(function(){
          let selectAll = page.keyboard.press("A",{delay:50}); // click A
          return selectAll;
      }).then(function(){
          let Xispressed = page.keyboard.press("X",{delay:50})// clcik X
          return Xispressed;
      }).then(function(){
          let ctrlisunPressed = page.keyboard.up("Control"); // unpressed control
          return ctrlisunPressed;
      }).then(function(){
          let gotocodeEditor = waitandClick(".monaco-editor.no-user-select.vs",page); // click on main editor
          return gotocodeEditor;
      }).then(function(){
          let ctrlpressed = page.keyboard.down("Control"); // pressed control
          return ctrlpressed;
          
      }).then(function(){
          let selectAll = page.keyboard.press("A",{delay:50}); // select code
          return selectAll;
      }).then(function(){
          let vispressed = page.keyboard.press("V",{delay:50}) // pressed v
          return vispressed;
      }).then(function(){
          let ctrlisunPressed = page.keyboard.up("Control"); // unpressed conrol
          return ctrlisunPressed;
      }).then(function(){
          return page.click(".hr-monaco__run-code",{delay:100}) // click on run
      }).then(function(){ // promise 
          resolve();
      }).catch(function(err){ // if any err they catch
          reject();
      })
  })
} */
