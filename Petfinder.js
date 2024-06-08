function browsePuppies() {
    alert('Browse Puppies button clicked!');
}

function learnMore() {
    alert('Learn More button clicked!');
}

function applyFilters() {
    const sort = document.getElementById('sort').value;
    const breed = document.getElementById('breed').value;
    const size = document.getElementById('size').value;
    const age = document.getElementById('age').value;

    alert(`Filters applied:\nSort: ${sort}\nBreed: ${breed}\nSize: ${size}\nAge: ${age}`);
}
