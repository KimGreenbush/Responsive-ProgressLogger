// Variable for menu
let menu = "close"

const showMainMenu =(e) => {

        console.log(e);
        if (menu === "close") {     
        document.getElementById("mainMenu").style.height = "95vh";
        document.getElementById("mainMenu").style.width = "50vh";
        document.getElementById("mainMenu").style.margin = "0px";
        document.getElementById("mainMenu").style.borderColor = "#136DC0";
        document.getElementById("mainMenu").style.borderRadius = "0";
        document.getElementById("mainMenu").style.transform = "smooth";
        document.getElementById("mainMenu").style.transition = ".5s";
        document.getElementById("mainMenu").style.padding = "30px";
        document.getElementById("mainMenu").style.boxShadow = "3px 0px 15px rgba(0, 0, 0, 0.301)";
        return (menu = "open");


    }else {      
        document.getElementById("mainMenu").style.height = "40px";
        document.getElementById("mainMenu").style.width = "40px";

        document.getElementById("mainMenu").style.marginTop = "20px";
        document.getElementById("mainMenu").style.marginBottom = "20px";
        document.getElementById("mainMenu").style.marginLeft = "10px";
        document.getElementById("mainMenu").style.marginRight = "10px";

        document.getElementById("mainMenu").style.borderColor = "white";
        document.getElementById("mainMenu").style.borderRadius = "40px";
        document.getElementById("mainMenu").style.transform = "smooth";
        document.getElementById("mainMenu").style.transition = ".5s";
        document.getElementById("mainMenu").style.padding = "10px";
        document.getElementById("mainMenu").style.boxShadow = "none";

        return (menu = "close");

    }

};


const PartialHandler = (e) =>{
    console.log(e.target.innerText)

    if(e.target.innerText === "Profile"){
        alert("Profile is under development. When it is ready, it will move to the top. Please check back :)");
        return
        document.getElementById("profilePartial").style.display = "grid"
        document.getElementById("dailyLogPartial").style.display = "none"
        document.getElementById("networkPartial").style.display = "none"
        document.getElementById("activityTrackerPartial").style.display = "none"
        document.getElementById("stickyNotesPartial").style.display = "none"
        document.getElementById("bookmarksPartial").style.display = "none"
        document.getElementById("todoListPartial").style.display = "none"
        document.getElementById("jobTrackerPartial").style.display = "none"
        document.getElementById("dailyRoutinePartial").style.display = "none"


    }

    if(e.target.innerText === "Daily Journal"){
        document.getElementById("profilePartial").style.display = "none"
        document.getElementById("dailyLogPartial").style.display = "grid"
        document.getElementById("networkPartial").style.display = "none"
        document.getElementById("activityTrackerPartial").style.display = "none"
        document.getElementById("stickyNotesPartial").style.display = "none"
        document.getElementById("bookmarksPartial").style.display = "none"
        document.getElementById("todoListPartial").style.display = "none"
        document.getElementById("dailyRoutinePartial").style.display = "none"
        showMainMenu()


    }

    if(e.target.innerText === "Social Network"){
        alert("Social Network is under development. When it is ready, it will move to the top. Please check back :)");
        return
        document.getElementById("profilePartial").style.display = "none"
        document.getElementById("dailyLogPartial").style.display = "none"
        document.getElementById("networkPartial").style.display = "grid"
        document.getElementById("activityTrackerPartial").style.display = "none"
        document.getElementById("stickyNotesPartial").style.display = "none"
        document.getElementById("bookmarksPartial").style.display = "none"
        document.getElementById("todoListPartial").style.display = "none"
        document.getElementById("jobTrackerPartial").style.display = "none"
        document.getElementById("dailyRoutinePartial").style.display = "none"
        showMainMenu()

    }

    if(e.target.innerText === "Activity Tracker"){
        alert("Activity Tracker is under development. When it is ready, it will move to the top. Please check back :)");
        return        
        document.getElementById("profilePartial").style.display = "none"
        document.getElementById("dailyLogPartial").style.display = "none"
        document.getElementById("networkPartial").style.display = "none"
        document.getElementById("activityTrackerPartial").style.display = "grid"
        document.getElementById("stickyNotesPartial").style.display = "none"
        document.getElementById("bookmarksPartial").style.display = "none"
        document.getElementById("todoListPartial").style.display = "none"
        document.getElementById("jobTrackerPartial").style.display = "none"
        document.getElementById("dailyRoutinePartial").style.display = "none"

    }

    if(e.target.innerText === "Stickynotes"){
        alert("Stickynotes is under development. When it is ready, it will move to the top. Please check back :)");
        return
        document.getElementById("profilePartial").style.display = "none"
        document.getElementById("dailyLogPartial").style.display = "none"
        document.getElementById("networkPartial").style.display = "none"
        document.getElementById("activityTrackerPartial").style.display = "none"
        document.getElementById("stickyNotesPartial").style.display = "grid"
        document.getElementById("bookmarksPartial").style.display = "none"
        document.getElementById("todoListPartial").style.display = "none"
        document.getElementById("jobTrackerPartial").style.display = "none"
        document.getElementById("dailyRoutinePartial").style.display = "none"

    }

    if(e.target.innerText === "Bookmarks"){
        alert("Bookmaker is under development. When it is ready, it will move to the top. Please check back :)");
        return
        document.getElementById("profilePartial").style.display = "none"
        document.getElementById("dailyLogPartial").style.display = "none"
        document.getElementById("networkPartial").style.display = "none"
        document.getElementById("activityTrackerPartial").style.display = "none"
        document.getElementById("stickyNotesPartial").style.display = "none"
        document.getElementById("bookmarksPartial").style.display = "grid"
        document.getElementById("todoListPartial").style.display = "none"
        document.getElementById("jobTrackerPartial").style.display = "none"
        document.getElementById("dailyRoutinePartial").style.display = "none"

    }

    if(e.target.innerText === "Todo-list"){
        alert("Todo List is under development. When it is ready, it will move to the top. Please check back :)");
        return
        document.getElementById("profilePartial").style.display = "none"
        document.getElementById("dailyLogPartial").style.display = "none"
        document.getElementById("networkPartial").style.display = "none"
        document.getElementById("activityTrackerPartial").style.display = "none"
        document.getElementById("stickyNotesPartial").style.display = "none"
        document.getElementById("bookmarksPartial").style.display = "none"
        document.getElementById("todoListPartial").style.display = "grid"
        document.getElementById("jobTrackerPartial").style.display = "none"
        document.getElementById("dailyRoutinePartial").style.display = "none"

    }

    if(e.target.innerText === "Job Tracker"){
        alert("Job Tracker is under development. When it is ready, it will move to the top. Please check back :)");
        return
        document.getElementById("profilePartial").style.display = "none"
        document.getElementById("dailyLogPartial").style.display = "none"
        document.getElementById("networkPartial").style.display = "none"
        document.getElementById("activityTrackerPartial").style.display = "none"
        document.getElementById("stickyNotesPartial").style.display = "none"
        document.getElementById("bookmarksPartial").style.display = "none"
        document.getElementById("todoListPartial").style.display = "none"
        document.getElementById("jobTrackerPartial").style.display = "grid"
        document.getElementById("dailyRoutinePartial").style.display = "none"

    }

    if(e.target.innerText === "Daily Routine"){
        alert("Daily Routine is under development. When it is ready, it will move to the top. Please check back :)");
        return
        document.getElementById("profilePartial").style.display = "none"
        document.getElementById("dailyLogPartial").style.display = "none"
        document.getElementById("networkPartial").style.display = "none"
        document.getElementById("activityTrackerPartial").style.display = "none"
        document.getElementById("stickyNotesPartial").style.display = "none"
        document.getElementById("bookmarksPartial").style.display = "none"
        document.getElementById("todoListPartial").style.display = "none"
        document.getElementById("jobTrackerPartial").style.display = "none"
        document.getElementById("dailyRoutinePartial").style.display = "grid"

    }


}


const RecommendationHandler = (e) => {
    
    if(e.target.innerText === "Get Started"){
        document.querySelector("#GetStartedPartial").style.marginLeft = "0%";
        document.getElementById("GetStartedPartial").style.transform = "smooth";
        document.getElementById("GetStartedPartial").style.transition = ".5s";
        document.querySelector("#mainMenu").style.marginLeft = "-1000px";
        document.getElementById("mainMenu").style.transform = "smooth";
        document.getElementById("mainMenu").style.transition = ".5s";
    };

    if( e.target.innerText === "Materials & Books"){       
        document.querySelector("#BooksMaterialsPartial").style.marginLeft = "0%";
        document.getElementById("BooksMaterialsPartial").style.transform = "smooth";
        document.getElementById("BooksMaterialsPartial").style.transition = ".5s";
        document.querySelector("#mainMenu").style.marginLeft = "-1000px";
        document.getElementById("mainMenu").style.transform = "smooth";
        document.getElementById("mainMenu").style.transition = ".5s"; 

    };
    
    if(e.target.innerText === "Grammarly"){
        document.querySelector("#GrammarlyPartial").style.marginLeft = "0%";
        document.getElementById("GrammarlyPartial").style.transform = "smooth";
        document.getElementById("GrammarlyPartial").style.transition = ".5s";
        document.querySelector("#mainMenu").style.marginLeft = "-1000px";
        document.getElementById("mainMenu").style.transform = "smooth";
        document.getElementById("mainMenu").style.transition = ".5s"; 
    };
    if(e.target.innerText === "Support & Help"){
        document.querySelector("#HepSupportPartial").style.marginLeft = "0%";
        document.getElementById("HepSupportPartial").style.transform = "smooth";
        document.getElementById("HepSupportPartial").style.transition = ".5s";
        document.querySelector("#mainMenu").style.marginLeft = "-1000px";
        document.getElementById("mainMenu").style.transform = "smooth";
        document.getElementById("mainMenu").style.transition = ".5s"; 
    };
    if(e.target.innerText === "Terms of Service"){
        document.querySelector("#TermsOfServicePartial").style.marginLeft = "0%";
        document.getElementById("TermsOfServicePartial").style.transform = "smooth";
        document.getElementById("TermsOfServicePartial").style.transition = ".5s";
        document.querySelector("#mainMenu").style.marginLeft = "-1000px";
        document.getElementById("mainMenu").style.transform = "smooth";
        document.getElementById("mainMenu").style.transition = ".5s"; 
    };
    if(e.target.innerText === "Privacy Policy"){
        document.querySelector("#PrivacyPolicyPartial").style.marginLeft = "0%";
        document.getElementById("PrivacyPolicyPartial").style.transform = "smooth";
        document.getElementById("PrivacyPolicyPartial").style.transition = ".5s";
        document.querySelector("#mainMenu").style.marginLeft = "-1000px";
        document.getElementById("mainMenu").style.transform = "smooth";
        document.getElementById("mainMenu").style.transition = ".5s"; 
    };

    if( e.target.innerText === "back"){
        document.querySelector("#mainMenu").style.marginLeft = "0px";
        document.getElementById("mainMenu").style.transform = "smooth";
        document.getElementById("mainMenu").style.transition = ".5s"; 
        
        // Hide Get Started
        document.querySelector("#GetStartedPartial").style.marginLeft = "-300%";
        document.getElementById("GetStartedPartial").style.transform = "smooth";
        document.getElementById("GetStartedPartial").style.transition = ".5s";
      
        // Hide Get Books and materials
        document.querySelector("#BooksMaterialsPartial").style.marginLeft = "-300%";
        document.getElementById("BooksMaterialsPartial").style.transform = "smooth";
        document.getElementById("BooksMaterialsPartial").style.transition = ".5s";

        // Hide Grammarly
        document.querySelector("#GrammarlyPartial").style.marginLeft = "-300%";
        document.getElementById("GrammarlyPartial").style.transform = "smooth";
        document.getElementById("GrammarlyPartial").style.transition = ".5s";

         // Hide help
         document.querySelector("#HepSupportPartial").style.marginLeft = "-300%";
         document.getElementById("HepSupportPartial").style.transform = "smooth";
         document.getElementById("HepSupportPartial").style.transition = ".5s";

        // Hide terms
        document.querySelector("#TermsOfServicePartial").style.marginLeft = "-300%";
        document.getElementById("TermsOfServicePartial").style.transform = "smooth";
        document.getElementById("TermsOfServicePartial").style.transition = ".5s";

        // Hide privay
        document.querySelector("#PrivacyPolicyPartial").style.marginLeft = "-300%";
        document.getElementById("PrivacyPolicyPartial").style.transform = "smooth";
        document.getElementById("PrivacyPolicyPartial").style.transition = ".5s";
    }
}

const CommentsHandler = (e) =>{

    document.querySelector("#PostComments").style.display = "grid";
}