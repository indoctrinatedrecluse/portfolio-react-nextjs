// tab 1 is UCLA, tab 2 is Christopher High School


// the function to change the card's contents based on which nav pill is active
function changeEducationInfo(tabNumber) {
    // get the card that contains the education info
    var educationInfo = document.getElementById("education_info");
    // if the active nav pill is the UCLA one, change the card's contents to the UCLA info
    if (tabNumber == 1) {
        educationInfo.innerHTML = '<div className="card-body"><h5 className="card-title">UCLA</h5><h6 className="card-subtitle mb-2 text-muted">Bachelor of Science in Psychology</h6><p className="card-text">I am currently a third year student at UCLA, pursuing a Bachelor of Science in Psychology. I am also pursuing a minor in Film, Television, and Digital Media.</p><a href="#" className="card-link">UCLA Psychology</a></div>';
    }
    // if the active nav pill is the Christopher High School one, change the card's contents to the CHS info
    else if (tabNumber == 2) {
        educationInfo.innerHTML = '<div className="card-body"><h5 className="card-title">Christopher High School</h5><h6 className="card-subtitle mb-2 text-muted">High School Diploma</h6><p className="card-text">I graduated from Christopher High School in 2018.</p><a href="#" className="card-link">CHS Website</a></div>';
    }
}

// the function to change the className of the clicked nav pill to active and remove the active className from the other nav pill
function changeActiveNavPill(tabNumber) {
    // get the nav pill that is active
    var activeNavPill = document.getElementsByClassName("nav-link active");
    // remove the active className from the active nav pill
    activeNavPill[0].className = "nav-link";
    // make an id string for the nav pill that was clicked
    var navPillId = "ed_t_" + tabNumber;
    // change the className of the clicked nav pill to active
    document.getElementById(navPillId).className = "nav-link active";
    // change the card's contents based on which nav pill is active
    changeEducationInfo(tabNumber);
}