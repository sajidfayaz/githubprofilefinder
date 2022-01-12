// Initialize/init GitHub class
const github = new GitHub;

// Init UI class

const ui = new UI;

// Search Input

const searchUser = document.querySelector("#search-user");

// Search input event listener
searchUser.addEventListener("keypress", (e) => {
    // Get the text being typed
    var key = e.which || e.keyCode || 0;
    const userText = e.target.value;

    //if(userText !== "") 
    if (key === 13){
        // Make HTTP call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === "Not Found") {
                    // Show alert
                    ui.showAlert("User not found", "alert alert-danger");

                } else {
                    // Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});
