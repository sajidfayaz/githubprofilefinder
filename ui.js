class UI {
    constructor() {
        this.profile = document.querySelector("#profile");
    }

    // Display profile in ui
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <div class="d-grid gap-2">
                            <a href="${user.html_url}" class="btn btn-primary mb-4" type="button" target="_blank">View Profile</a>
                        </div>
                    </div>

                    <div class="col-md-9">
                        <span class="badge bg-primary">Public Repos: ${user.public_repos}</span> 
                        <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span> 
                        <span class="badge bg-success">Followers: ${user.followers}</span> 
                        <span class="badge bg-info">Following: ${user.following}</span>
                        
                        <br> <br> 
                        <ul class="list-group">
                            <li class="list-group-item"> Company: ${user.company}</li>
                            <li class="list-group-item"> Website/Blog: ${user.blog}</li>
                            <li class="list-group-item"> Location: ${user.location}</li>
                            <li class="list-group-item"> Member Since: ${user.created_at}</li>
                            
                        </ul>
                    </div>  
                </div>
            </div>
            
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"> </div>
        `;
    }

    // Show alert function
    showAlert(message, className) {
        // clear existing alerts
        this.clearAlert();
        // create a div element
        const div = document.createElement("div");
        
        // add class
        div.className = className;

        // add text
        div.appendChild(document.createTextNode(message));

        // get parent and insert
        const container = document.querySelector(".searchContainer");

        // get search box
        const search = document.querySelector(".search");

        // insert alert
        container.insertBefore(div, search);

        // timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    // show user repos

    showRepos(repos) {
        let output = "";
        repos.forEach((repo) => {
            output += `
                <div class="card card-body mb-2"> 
                    <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank"> ${repo.name} </a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span> 
                        <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span> 
                        <span class="badge bg-success">Forks: ${repo.forks_count}</span> 
                    </div>

                    </div>
                </div>
            `;
        });

        // output repos
        document.querySelector("#repos").innerHTML = output;
    }

    // Clear Alert
    clearAlert() {
        const currentAlert = document.querySelector(".alert");
        if(currentAlert) {
            currentAlert.remove();
        }
    }

    // Clear Profile function
    clearProfile() {
        this.profile.innerHTML = "";
    }
}