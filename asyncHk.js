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
     await  waitandClick(".monaco-editor.no-user-select.vs" ,page);
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




















