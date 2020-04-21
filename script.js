window.addEventListener("DOMContentLoaded", start);

const HTML = {};
let students = [];
let expell = [];
let arrHalf = [];
let arrPure = [];
let theSystemhasbeenHacked = false;

let fileIterator = 0;
const loadArray = [
  "https://petlatkea.dk/2020/hogwarts/students.json",
  "https://petlatkea.dk/2020/hogwarts/families.json"
];

//Prototype for all students
const Student = {
    firstname: "",
    lastname: "",
    middlename: "",
    photo: null,
    gender: "",
    house: "",
    blood: "",
    expell: false,
    squad: false,
    prefect: false
};

function start() {
    console.log("start");
    HTML.filterhouse = document.querySelector("select#housefilter");
    HTML.sortname = document.querySelectorAll("[data-action=sort]");
    HTML.searchinput = document.querySelector("#searchelms > input");

    HTML.displaystudents = document.querySelector(".totalstudents");
    HTML.displayexpelled = document.querySelector(".expelledstudents > .number");
    HTML.displaySlytherin = document.querySelector(".slytherin");
    HTML.displayHufflepuff = document.querySelector(".hufflepuff");
    HTML.displayRavenclaw = document.querySelector(".ravenclaw");
    HTML.displayGryffindor = document.querySelector(".gryffindor");
    HTML.hack = document.querySelector("article .title");

    HTML.thelist = document.querySelector("section#contentlist");
    HTML.blurbg = document.querySelector("article");
    HTML.theclone = document.querySelector("template");
    HTML.clickOnestudent = document.querySelectorAll(".seestudent");

    HTML.popup = document.querySelector(".popup");
    HTML.closepopup = document.querySelector(".close");

    //Click events for sorting and filtering
    HTML.filterhouse.addEventListener("change", filteringhouse);
    HTML.sortname.forEach(button => {
        button.addEventListener("click", sortingname);
    });

    //Search event for search
    HTML.searchinput.addEventListener("keyup", searching);

    //Activate hacking
    HTML.hack.addEventListener("click", hackTheSystem);
    loadBlood();
}

function clickedArrow() {
  const page1 = document.querySelector("#page1").getBoundingClientRect();
  const page2 = document.querySelector("#page2").getBoundingClientRect();
  const page3 = document.querySelector("#page3").getBoundingClientRect();
  const page4 = document.querySelector("#page4").getBoundingClientRect();
  if (this == document.querySelector("#arrow1")) {
    console.log("arrow1!");
    console.log(page4.y);
    console.log(page4.x);
    document.querySelector(".wrapper-vertical").scrollBy(page3.x, page3.y);
    document.querySelectorAll(".arrow").forEach((elm) => {
      elm.removeEventListener("click", clickedArrow);
    });
  }

  if (this == document.querySelector("#arrow2")) {
    console.log("arrow1!");
    console.log(page2.y);
    console.log(page2.x);
    document.querySelector(".wrapper-horizontal").scrollBy(page2.x, page2.y);
  }

  if (this == document.querySelector("#arrow3")) {
    console.log("arrow1!");
    console.log(page1.y);
    console.log(page1.x);
    document.querySelector(".wrapper-vertical").scrollBy(page4.x, page4.y);
  }

  if (this == document.querySelector("#arrow4")) {
    console.log("arrow1!");
    console.log(page1.y);
    console.log(page1.x);
    document.querySelector(".wrapper-horizontal").scrollBy(page1.x, page1.y);
  }
}
function scrollingHorizontal() {
  document.querySelectorAll(".arrow").forEach((elm) => {
    elm.removeEventListener("click", clickedArrow);
  });
  const frontpageHorizontal = document
    .querySelector("#frontpage")
    .getBoundingClientRect();
  const page1Horizontal = document
    .querySelector("#page1")
    .getBoundingClientRect();
  const page2Horizontal = document
    .querySelector("#page2")
    .getBoundingClientRect();

  if (inView(frontpageHorizontal)) {
    document.querySelectorAll(".arrow").forEach((elm) => {
      elm.addEventListener("click", clickedArrow);
    });

    console.log("in view!");
    document.querySelectorAll(".arrow").forEach((elm) => {
      elm.style.zIndex = "100";
    });
    document.querySelectorAll(".arrowline").forEach((elm) => {
      elm.style.stroke = "#333a4d";
    });
  }
  if (inView(page1Horizontal)) {
    console.log("in view!");
    document.querySelector("#arrow2").addEventListener("click", arrow2Click);
    function arrow2Click() {
      console.log("frontpage scroll");
      document
        .querySelector(".wrapper-horizontal")
        .scrollBy(frontpageHorizontal.x, frontpageHorizontal.y);
      document
        .querySelector("#arrow2")
        .removeEventListener("click", arrow2Click);
    }
    document.querySelectorAll(".arrow").forEach((elm) => {
      elm.style.zIndex = "-100";
    });
    document.querySelector("#arrow2").style.zIndex = "1000";
    document.querySelectorAll(".arrowline").forEach((elm) => {
      elm.style.stroke = "#333a4d";
    });
  }

  if (inView(page2Horizontal)) {
    console.log("page 2in view!");
    document.querySelector("#arrow4").addEventListener("click", arrow4Click);
    function arrow4Click() {
      console.log("frontpage scroll");
      document
        .querySelector(".wrapper-horizontal")
        .scrollBy(frontpageHorizontal.x, frontpageHorizontal.y);
      document
        .querySelector("#arrow4")
        .removeEventListener("click", arrow4Click);
    }
    document.querySelectorAll(".arrow").forEach((elm) => {
      elm.style.zIndex = "-100";
    });
    document.querySelector("#arrow4").style.zIndex = "8000";
    document.querySelectorAll(".arrowline").forEach((elm) => {
      elm.style.stroke = "#e2d7c4";
    });
  }
}
function scrollingVertical() {
  document.querySelectorAll(".arrow").forEach((elm) => {
    elm.removeEventListener("click", clickedArrow);
  });
  const frontpageVertical = document
    .querySelector("#frontpage")
    .getBoundingClientRect();
  const page3Vertical = document
    .querySelector("#page3")
    .getBoundingClientRect();
  const page4Vertical = document
    .querySelector("#page4")
    .getBoundingClientRect();

  if (inView(frontpageVertical)) {
    document.querySelectorAll(".arrow").forEach((elm) => {
      elm.addEventListener("click", clickedArrow);
    });

    console.log("in view!");
    document.querySelector(".wrapper-horizontal").style.overflowX = "scroll";
    document.querySelectorAll(".arrow").forEach((elm) => {
      elm.style.zIndex = "100";
    });
  }

  if (inView(page4Vertical)) {
    document.querySelector("#arrow1").addEventListener("click", arrow1Click);
    function arrow1Click() {
      console.log("frontpage scroll");
      document
        .querySelector(".wrapper-vertical")
        .scrollBy(frontpageVertical.x, frontpageVertical.y);
      document
        .querySelector("#arrow1")
        .removeEventListener("click", arrow1Click);
    }

    console.log("in view!");
    document.querySelector(".wrapper-horizontal").style.overflow = "hidden";
    document.querySelectorAll(".arrow").forEach((elm) => {
      elm.style.zIndex = "-100";
    });
    document.querySelector("#arrow1").style.zIndex = "1000";
  }

  if (inView(page3Vertical)) {
    document.querySelector("#arrow3").addEventListener("click", arrow3Click);
    function arrow3Click() {
      console.log("frontpage scroll");
      document
        .querySelector(".wrapper-vertical")
        .scrollBy(frontpageVertical.x, frontpageVertical.y);
      document
        .querySelector("#arrow3")
        .removeEventListener("click", arrow3Click);
    }
    console.log("in view!");
    document.querySelector(".wrapper-horizontal").style.overflow = "hidden";
    document.querySelectorAll(".arrow").forEach((elm) => {
      elm.style.zIndex = "-100";
    });
    document.querySelector("#arrow3").style.zIndex = "1000";
  }
}

    return student;

//SEARCH BY FIRST AND LAST NAMES
function searching(event) {
    console.log("search names");
    //Value from the search bar
    let keywords = event.target.value;
    const searchFirstname = event.target.dataset.firstname;
    const searchLastname = event.target.dataset.lastname;
    const searchHouse = event.target.dataset.house;

    if (searchFirstname === "firstname") {
        keywords = "firstname";
    } else if (searchLastname === "lastname") {
        keywords = "lastname";
    } else if (searchHouse === "house") {
        keywords = "house";
    }
    displayList(searchForStudents(keywords));
}

function searchForStudents(keywords) {
    console.log("searchForStudents");
    const searchresult = students.filter(searchFunction);
    keywords = keywords.toLowerCase();

    function searchFunction(student) {
        let firstnameLower = student.firstname.toLowerCase();
        let lastnameLower = student.lastname.toLowerCase();
        let houseLower = student.house.toLowerCase();

        if (firstnameLower.indexOf(keywords) > -1 || firstnameLower === keywords) {
            return true;
        } else if (lastnameLower.indexOf(keywords) > -1 || lastnameLower === keywords) {
            return true;
        } else if (houseLower.indexOf(keywords) > -1 || houseLower === keywords) {
            return true;
        } else {
            return false;
        }
    }
    return searchresult;
}
//FILTERING BY HOUSE
function filteringhouse(event) {
    //HUSK: atribute 'value' skal have den samme navn som info i listen
    const selectedHouse = event.target.value;
    //løsningen virkede ikke før fordi value = "slytherrin", men student.house = "Slytherin"
    if (selectedHouse === "*") {
        displayList(students);
    } else {
        displayList(filterByHouse(selectedHouse));
    }
}

function filterByHouse(selectedHouse) {
    const result = students.filter(filterFunction);

    function filterFunction(student) {
        if (student.house === selectedHouse) {
            return true;
        } else {
            return false;
        }
    }
    return result;
}

//SORTING BY NAME
function sortingname(event) {
    console.log("sorting name");
    const sortDir = event.target.dataset.sortDirection;
    const sortInfo = event.target.dataset.sort;

    //The switch mellem ascending og descending
    if (sortDir === "asc") {
        event.target.dataset.sortDirection = "dsc";
    } else if (sortDir === "dsc") {
        event.target.dataset.sortDirection = "asc";
    }

    displayList(sortByName(sortInfo, sortDir));
}

function sortByName(sortInfo, sortDir) {
    console.log("sortByName");
    let sortedlist;

    if (sortDir === "asc") {
        sortedlist = students.sort(compareAsc);
        console.log("sortAsc");
    } else if (sortDir === "dsc") {
        sortedlist = students.sort(compareDsc);
        console.log("sortDsc");
    }

    //Ascending (stigende)
    function compareAsc(a, b) {
        console.log("compareAsc");
        if (a[sortInfo] < b[sortInfo]) {
            return -1;
        } else {
            return 1;
        }
    }
    //Descending (faldende)
    function compareDsc(a, b) {
        console.log("compareDsc");
        if (a[sortInfo] > b[sortInfo]) {
            return -1;
        } else {
            return 1;
        }
    }
    return sortedlist;
}

function buildList() {
    const currentList = students;
    displayList(currentList);
}

function displayList(students) {
    // clear the list
    HTML.thelist.innerHTML = "";
    // build a new list
    students.forEach(displayStudent);
}

function displayStudent(student) {
    //Show the list's status
    const displaySlytherin = students.filter(student => student.house === "Slytherin");
    const displayHufflepuff = students.filter(student => student.house === "Hufflepuff");
    const displayRavenclaw = students.filter(student => student.house === "Ravenclaw");
    const displayGryffindor = students.filter(student => student.house === "Gryffindor");

    HTML.displaySlytherin.textContent = "Slytherin: " + displaySlytherin.length + " students";
    HTML.displayHufflepuff.textContent = "Hufflepuff: " + displayHufflepuff.length + " students";
    HTML.displayRavenclaw.textContent = "Ravenclaw: " + displayRavenclaw.length + " students";
    HTML.displayGryffindor.textContent = "Gryffindor: " + displayGryffindor.length + " students";

    HTML.displaystudents.textContent = "Current total: " + students.length + " students";

    // create clone
    const clone = HTML.theclone.content.cloneNode(true);

    // set clone data
    clone.querySelector(".studentphoto").src = "images/" + student.photo;
    clone.querySelector("[data-field=firstname]").textContent = student.firstname;
    clone.querySelector("[data-field=lastname]").textContent = student.lastname;
    clone.querySelector("[data-field=house]").textContent = student.house;

    if (theSystemhasbeenHacked) {
        hackTheSystem();
    }
    // append clone to list
    HTML.thelist.appendChild(clone);


    // click event for one student
    HTML.thelist.lastElementChild.addEventListener("click", () => {
        popUpOne(student);
    });
}

function popUpOne(student) {
    //Show popup box & blur background
    HTML.popup.style.display = "block";
    HTML.blurbg.style.filter = "blur(3px)";

    //show the theme according (dataset has the same value as json object)
    HTML.popup.dataset.theme = student.house;
    HTML.closepopup.addEventListener("click", closePopUp);

    //remove all click events when closing popup
    function closePopUp() {
        HTML.popup.style.display = "none";
        HTML.blurbg.style.filter = "none";

        document
            .querySelector("[data-action=expell]")
            .removeEventListener("click", clickExpell);
        document.querySelector("[data-field=expell]").textContent = "";
        document
            .querySelector("[data-field=squad]")
            .removeEventListener("click", clickSquad);

        document
            .querySelector("[data-field=prefect]")
            .removeEventListener("click", clickPrefect);
    }

    //show detailed info on popup
    document.querySelector("[data-field=firstname]").textContent =
        student.firstname;
    document.querySelector("[data-field=middlename]").textContent =
        student.middlename;
    document.querySelector("[data-field=lastname]").textContent =
        student.lastname;
    document.querySelector("[data-field=photo]").src = "images/" + student.photo;
    document.querySelector("[data-field=gender]").textContent =
        "Gender: " + student.gender;
    document.querySelector("[data-field=house]").textContent =
        "House: " + student.house;
    document.querySelector("[data-field=bloodstatus]").textContent =
        "Blood status: " + student.blood;

    //Display squad symbol
    if (student.squad === true) {
        document.querySelector("[data-field=squad]").style.filter = "none";
    } else {
        document.querySelector("[data-field=squad]").style.filter =
            "grayscale(100%)";
    }

    //Display prefect
    if (student.prefect === true) {
        document.querySelector("[data-field=prefect]").style.filter = "none";
    } else {
        document.querySelector("[data-field=prefect]").style.filter =
            "grayscale(100%)";
    }
    document.querySelector("[data-field=prefect]").dataset.prefect =
        student.prefect;

    //Toggle prefect symbol and squad
    document
        .querySelector("[data-field=squad]")
        .addEventListener("click", clickSquad);
    document
        .querySelector("[data-field=prefect]")
        .addEventListener("click", clickPrefect);

    function clickSquad() {
        console.log("clickSquad");
        if (theSystemhasbeenHacked) {
            setTimeout(() => toggleSquad(student), 1000);
        } else {
            toggleSquad(student);
        }
    }

    function clickPrefect() {
        console.log("clickPrefect");
        togglePrefect(student);
    }

    //Expelling a student
    document
        .querySelector("[data-action=expell]")
        .addEventListener("click", clickExpell);

    function clickExpell() {
        console.log("clickExpell");
        expellStudent(student);
    }

    if (theSystemhasbeenHacked) {
        student.blood = Math.floor(Math.random() * 30);
    }
}

function toggleSquad(student) {
    if (student.blood === "Pureblood" || student.house === "Slytherin") {
        if (student.squad === true) {
            student.squad = false;
            document.querySelector("[data-field=squad]").style.filter =
                "grayscale(100%)";
            document.querySelector(".squadnote").textContent = "";
        } else {
            student.squad = true;
            document.querySelector("[data-field=squad]").style.filter = "none";
        }
    }
}

function togglePrefect(thisStudent) {
    console.log("toggle prefect");
    //total prefects: check each house and each gender
    const theOtherPrefect = students.filter(student => student.prefect && student.house === thisStudent.house && student.gender === thisStudent.gender ? true : false);

    if (theOtherPrefect.length === 0 || thisStudent.prefect === true) {
        thisStudent.prefect = thisStudent.prefect ? false : true;
        document.querySelector("[data-field=prefect]").style.filter = "none";
    } else {
        alertChangePrefects(thisStudent, theOtherPrefect[0]);
    }
    displayList(students);
}

function alertChangePrefects(thisStudent, theOtherPrefect) {
    console.log("alertChangePrefects");
    document.querySelector("#onlytwostudents").classList.add("show");
    document.querySelector("#onlytwostudents .student1").textContent = `${theOtherPrefect.firstname} ${theOtherPrefect.lastname} (${theOtherPrefect.gender}), from ${theOtherPrefect.house}`;
    document.querySelector("#onlytwostudents .student2").textContent = `${thisStudent.firstname} ${thisStudent.lastname} (${thisStudent.gender}), from ${thisStudent.house}`;

    removeButtons(theOtherPrefect, thisStudent);
}

function removeButtons(theOtherPrefect, thisStudent) {
    console.log("removeButtons");
    document
        .querySelector("[data-action=remove1]")
        .addEventListener("click", remove1st);
    document
        .querySelector("[data-action=remove2]")
        .addEventListener("click", remove2nd);

    function remove1st() {
        console.log("remove the 1st student");
        theOtherPrefect[0].prefect = false;
        document.querySelector("#onlytwostudents").classList.remove("show");

        thisStudent.prefect = true;
        displayList(students);

        document
            .querySelector("[data-action=remove1]")
            .removeEventListener("click", remove1st);
        document
            .querySelector("[data-action=remove2]")
            .removeEventListener("click", remove2nd);
    }

    function remove2nd() {
        console.log("remove the 2nd student");
        theOtherPrefect[1].prefect = false;
        document.querySelector("#onlytwostudents").classList.remove("show");

        thisStudent.prefect = true;
        displayList(students);

        document
            .querySelector("[data-action=remove1]")
            .removeEventListener("click", remove1st);
        document
            .querySelector("[data-action=remove2]")
            .removeEventListener("click", remove2nd);
    }

    document.querySelector(".closebutton").addEventListener("click", () => {
        document.querySelector("#onlytwostudents").classList.remove("show");
        document
            .querySelector("[data-action=remove1]")
            .removeEventListener("click", remove1st);
        document
            .querySelector("[data-action=remove2]")
            .removeEventListener("click", remove2nd);
    });

}


function expellStudent(student) {
    console.log("expell this student");
    //expell = students.indexOf(student);
    // students.splice(expell, 1);
    expell = expell.concat(
        students.splice(students.indexOf(student), 1)
    );

    document.querySelector(
        "[data-field=expell]"
    ).textContent = `${student.firstname} ${student.lastname} has been expelled!`;
    HTML.displayexpelled.textContent = expell.length;

    buildList();
    displayList(students);
}

function arrowAnimation() {
  console.log("animation fired");
  gsap.to("#arrow1", {
    duration: 1,
    y: "10px",
    ease: "circ.out",
    repeat: -1,
    yoyo: true,
  });
  gsap.to("#arrow3", {
    duration: 1,
    y: "-10px",
    ease: "sine.out",
    repeat: -1,
    yoyo: true,
  });
  gsap.to("#arrow2", {
    duration: 1,
    x: "10px",
    ease: "sine.out",
    repeat: -1,
    yoyo: true,
  });
  gsap.to("#arrow4", {
    duration: 1,
    x: "-10px",
    ease: "sine.out",
    repeat: -1,
    yoyo: true,
  });
}
