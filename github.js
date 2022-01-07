class GitHub {
    constructor() {
        this.client_id = "b2126e77fa52693064c8"; 
        this.client_secret = "61e38ef4d05bc2062d3612cf479364f3d83082b2";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}