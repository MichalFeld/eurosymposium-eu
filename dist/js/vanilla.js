header = {};
header.images = [];
header.sentences = [];
overview = {};
keynoteSpeach = {};
releventTopics = {};

var numberCarousel = 0;
var numberCountry = 0;
var carouselInterval;
var countriesInterval;

// Main InitView Function
window.onload = function () {
    // Pass here all functions which should start at the beginning
    header.initHeaderView();
    releventTopics.initReleventTopicView();
};

// ------------------- HEADER -------------------
header.initHeaderView = function () {
    header.getSentenceContent();
    header.getCarouselContent();
};

header.setCarousel = function (img) {
    var mainImage = document.querySelector(
        ".welcome-wrapper__carousel-slider"
    );
    mainImage.src = img;
};

header.getCarouselContent = function () {
    var images = header.images;

    carouselInterval = setInterval(function () {
        image = images[numberCarousel];
        header.setCarousel(image);
        numberCarousel++;
        if (numberCarousel == images.length) {
            numberCarousel = 0;
        }
    }, 3500);
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, {
        enterDelay: "200"
    });
});

$(document).ready(function () {
    $(".image__flag-64x38").click(function () {
        clearInterval(countriesInterval);
        const flags = document.querySelectorAll(".image__flag-64x38");
        var clickedCountry = $(this).attr("class");
        for (i = 0; i < flags.length; i++) {
            var sentenceCountry = header.sentences[i].country;
            flags[i].addEventListener("click", function () {
                var previousFlagParent = document.querySelectorAll(".active");
                previousFlagParent[0].className = previousFlagParent[0].className.replace(" active", "");
                $(this).parent().addClass(" active");
            });
            if (clickedCountry.includes(sentenceCountry)) {
                document.querySelector(".welcome-wrapper__sentence-content-year").textContent = header.sentences[i].year;
                document.querySelector(".welcome-wrapper__sentence-content-text").textContent = header.sentences[i].sentence;
            };
        };
    });
});

header.setSentence = function (year, text) {
    var sentenceYear = document.querySelector(
        ".welcome-wrapper__sentence-content-year"
    );
    var sentenceText = document.querySelector(
        ".welcome-wrapper__sentence-content-text"
    );

    sentenceYear.textContent = year;
    sentenceText.textContent = text;
};

header.getSentenceContent = function () {
    var sentences = header.sentences;
    var arrYear;
    var arrText;
    var flags = document.querySelectorAll(".image__flag-64x38");


    countriesInterval = setInterval(function () {
        arrYear = sentences[numberCountry].year;
        arrText = sentences[numberCountry].sentence;
        header.setSentence(arrYear, arrText);
        var currentParent = document.querySelectorAll(".active");
        currentParent[0].className = currentParent[0].className.replace(" active", "");
        $(flags[numberCountry]).parent().addClass(" active");
        numberCountry++;
        if (numberCountry == sentences.length) {
            numberCountry = 0;
        }
    }, 3500);
};

// ------------------- OVERVIEW -------------------

// ------------------- RELEVANT TOPICS -------------------
releventTopics.initReleventTopicView = function () {
    var table = document.querySelector('[data-function="topics-wrapper"]');

    var topicArr = releventTopics.topicArr;
    var index = 0;


    while (index < topicArr.length) {
        var tr = document.createElement('tr');

        for (var i = 1; i < 4; i++) {
            var td = document.createElement('td');
            var cell = document.createTextNode(topicArr[index]);
            console.log(typeof cell.toString().valueOf());

            if (cell.toString().valueOf() === "undefined") {
                console.log('--------------------');
                td.appendChild("");
            } else {
                td.appendChild(cell);
            }

            td.appendChild(cell);
            tr.appendChild(td);
            index++;
        }


        table.appendChild(tr);
    }
};
// ------------------- ORGANIZERS -------------------

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});


// ------------------- VENUE -------------------

// document.addEventListener('DOMContentLoaded', function () {
//     console.log('addEventListener ready');
//     let options = {duration: 200, dist: 10, numVisible: 2, fullWidth: true, indicators: true};
//
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//     var instance = M.Carousel.getInstance(elem);
//
//     setInterval(function () {
//         instance.next();
//         console.log('setInterval ready');
//     }, 2000);
// });


// ------------------- CONTACT -------------------

// Initialize and add the map
// function initMap() {
//     var uluru = {lat: 54.44509067666397, lng: 18.553553223609924};
//     var map = new google.maps.Map(
//         document.querySelector('.contact__map'), {zoom: 16, center: uluru});
//     var marker = new google.maps.Marker({position: uluru, map: map});
// }


// Long arrays and HTML templates leave at the bottom of the file
header.images = ["assets/img/header_carousel/1.png",
    "assets/img/header_carousel/2.png",
    "assets/img/header_carousel/3.png",
    "assets/img/header_carousel/4.jpg",
    "assets/img/header_carousel/5.png"];

header.sentences = [{
    country: "poland",
    year: "51 LAT (1967-2018)",
    sentence: "GDAŃSKIEJ INFORMATYKI EKONOMICZNEJ"
},
{
    country: "england",
    year: "51 YEARS (1967-2018) OF",
    sentence: "BUSINESS INFORMATICS AT UNIVERSITY OF GDANSK"
},
{
    country: "bulgaria",
    year: "51 ГОДИНИ (1967-2018)",
    sentence: "НА БИЗНЕС ИНФОРМАТИКАВ УНИВЕРСИТЕТА НА ГДАНСК"
},
{
    country: "china",
    year: "格但斯克大学商务信息学五十周年(1967-2018)",
    sentence: ""
},
{
    country: "croatia",
    year: "51 GODINA (1967-2018)",
    sentence: "POSLOVNE INFORMATIKE NA SVEUČILIŠTU U GDANJSKU"
},
{
    country: "czech",
    year: "51 LET (1967-2018)",
    sentence: "BUSINESS INFORMATIKY NA UNIVERZITĚ V GDAŇSKU"
},
{
    country: "netherlands",
    year: "51 JAAR (1967-2018)",
    sentence: "BEDRIJFSINFORMATICA AAN DE UNIVERSITEIT VAN GDANSK"
},
{
    country: "finland",
    year: "51 VUOTTA (1967-2018)",
    sentence: "LIIKETOIMINTAINFORMATIIKKAA GDANSKIN YLIOPISTOSSA"
},
{
    country: "france",
    year: "51 ANS (1967-2018)",
    sentence: "DE L’INFORMATIQUE DE GESTION À L'UNIVERSITÉ DE GDANSK"
},
{
    country: "germany",
    year: "51 JAHRE (1967-2018)",
    sentence: "WIRTSCHAFTSINFORMATIK AN DER UNIVERSITÄT DANZIG"
},
{
    country: "israel",
    year: "יובל הזהב 51 שנים (1967 - 2018) של אינפורמטיקה עסקית באוניברסיטת גדנסק, פולין",
    sentence: ""
},
{
    country: "italy",
    year: "51 ANNI (1967-2018)",
    sentence: "DELL’INFORMATICA AZIENDALE ALL’UNIVERSITA’ DI DANZICA"
},
{
    country: "korea",
    year: "51주년 (1967 - 2018) 기념 학술대회",
    sentence: ""
},
{
    country: "lithuania",
    year: "51 METŲ (1967-2018)",
    sentence: "GDANSKO UNIVERSITETE"
},
{
    country: "norway",
    year: "51 JAHRE (1967-2018)",
    sentence: "WIRTSCHAFTSINFORMATIK AN DER UNIVERSITÄT GDANSK"
},
{
    country: "portugal",
    year: "51 ANOS (1967-2018)",
    sentence: "DA INFORMÁTICA DE GESTÃO NA UNIVERSIDADE DE GDANSK"
},
{
    country: "romania",
    year: "51 DE ANI (1967-2018)",
    sentence: "A SPECIALIZARII INFORMATICA ECONOMICA LA UNIVERSITATEA DIN GDANSK"
},
{
    country: "russia",
    year: "51 ЛЕТ (1967-2018)",
    sentence: "БИЗНЕС-ИНФОРМАТИКА УНИВЕРСИТЕТ ГДАНЬСКА, ПОЛЬША"
},
{
    country: "slovakia",
    year: "51 ROKOV (1967-2018)",
    sentence: "BUSINESS INFORMATIKY NA UNIVERZITE V GDANSKU"
},
{
    country: "slovenia",
    year: "51 LET (1967-2018)",
    sentence: "POSLOVNE INFORMATIKE NA UNIVERZI V GDANSKU"
},
{
    country: "spain",
    year: "51 AÑOS (1967-2018)",
    sentence: "DE INFORMÁTICA DE NEGOCIOS DE LA UNIVERSIDAD DE GDANSK"
},
{
    country: "sweden",
    year: "51 ÅR (1967-2018)",
    sentence: "AV INFORMATIK VID UNIVERSITET GDANSK"
},
{
    country: "turkey",
    year: "GDANSK ÜNİVERSİTESİ'NDE 51 YILLIK (1967 - 2018)",
    sentence: "İŞLETME ENFORMATİĞİ"
},
{
    country: "ukraine",
    year: "51 РОКІВ (1967-2018)",
    sentence: "БІЗНЕС-ІНФОРМАТИКА УНІВЕРСИТЕТ ГДАНСЬКА, ПОЛЬЩА"
}
];

releventTopics.topicArr = [
    "Agile Methods",
    "Big Data, Business Analytics",
    "Blockchain Technology and Applications",
    "Business Informatics",
    "Business Process Modeling",
    "Case Studies in SAND",
    "Cloud Computing",
    "Cognitive Issues in SAND",
    "Conceptual Modeling",
    "Crowdsourcing and Crowdfunding Models",
    "Design Theory",
    "Digital Services and Social Media",
    "Enterprise Architecture",
    "Enterprise Social Networks",
    "ERP and CRM Systems",
    "Ethical and Human Aspects of IS Development",
    "Ethnographic, Anthropological, Action and Entrepreneurial Research",
    "Evolution of IS Discipline",
    "Human-Computer Interaction",
    "Industry 4.0",
    "Information Systems Development: Methodologies, Methods, Techniques and Tools",
    "Internet of Things",
    "Machine Learning",
    "Model-Driven Architecture",
    "New Paradigms, Formalisms, Approaches, Frameworks and Challenges in IS & SAND",
    "Ontological Foundations and Intelligent Systems of SAND",
    "Open Source Software (OSS) Solutions",
    "Project Management",
    "Quality Assurance in Systems Development",
    "Requirements and Software Engineering",
    "Research Methodologies in SAND",
    "Role of SAND in Mobile and Internet Applications Development",
    "SAND Education: Curricula, E-learning, MOOCs and Teaching Cases",
    "SCRUM Approach",
    "Security and Privacy Issues in IS & SAND",
    "Service Oriented Systems Development",
    "Social Networking Services",
    "Socio-Technical Approaches to System Development, Psychological and Behavioural Descriptions",
    "Software Intensive Systems and Services",
    "Strategic Information Systems in Enterprises",
    "Supply Chain Management Aspects",
    "Systems Analysts and Designers Professions",
    "Teams and Teamwork in IS & SAND",
    "UML, SysML, BPMN",
    "User Experience (UX) Design",
    "Workflow Management"
];
