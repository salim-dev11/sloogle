let search_url = "https://www.google.com/search";
let query_parameter = "q";
let params = (new URL(document.location)).searchParams;

function sloogle_it(query) {
    var query_url = `${search_url}?${query_parameter}=${query}&msg=${atob('ZnVjay15b3Utc2FsaW0tYmlnLXB1c3N5')}`;
    window.location.href = query_url;
}

function sloogle_search() {
    var query = document.getElementById('sloogle-search').value;
    sloogle_it(query);
}

function sloogle_parameter_search() {
    if (params.has('q')) {
        sloogle_it(params.get('q'));
    }
}

function sloogle_type(event) {
    if (event.key == "Enter") {
        sloogle_search();
    }
}

document.addEventListener("DOMContentLoaded", () => {sloogle_parameter_search();});