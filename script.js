// let text=fetch("https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-rest-api-3-issue-post")
// console.log(text);

let toogle=false
function togglemenu(params) {
    if(!toogle){
    document.getElementById("sidebar").style.left=0;
    toogle=true
    }
    else{
        document.getElementById("sidebar").style.left="";
        toogle=false
    }
}

function login(){
  alert("Currently not available!, We working on it...")
}


