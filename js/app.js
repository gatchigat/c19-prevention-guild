//
// VAR DECLARATIONS
let webName = "C19 Prevention Guild";
let cic = "College of the Immaculate Conception";
let city = "Cabanatuan City";
// MEMBERS
let gatchi = "Gary Gatchalian";
let salin = "Michelle Salin";
let cayari = "Aaron Cayari";
let tomoro = "Maricel Tomoro";
let sanPedro = "Ashley San Pedro";

// MEMBERS PROFILE PIC SRC
let gatchiProfilePic = "./images/gatchiProfileV.jpg";
let salinProfilePic = "./images/salinProfileV8.jpg";
let tomoroProfilePic = "./images/tomoroProfileV2.jpg";
let cayariProfilePic = "./images/cayariProfileV3.jpg";
let sanPedroProfilePic = "./images/sanPedroProfileV2.jpg";

//MADAM
let madamProfilePic = "./images/quelaProfile6.png";

// NEWS TITLES/DATES/ARTICLE DESCRIPTIONS
// ARTICLE1
let newsTitle1 = "The latest on little kids' vaccines";
let newsImgSrc1 = "./images/news/news1.webp";
let newsDate1 = "May 23, 2022 &middot; 6 min read";
let newsDesc1 =
  "we keep close watch on discussions surrounding the emergency approval of vaccines for kids aged at least 6 months";

// ARTICLE2
let newsTitle2 = "Life during lockdown";
let newsImgSrc2 = "./images/news/news2.jpg";
let newsDate2 = "May 21, 2022 &middot; 3 min read";
let newsDesc2 =
  "The continuously increasing number of COVID-19 cases in the world The government implemented a total lockdown that lasted for several months.";

// ARTICLE3
let newsTitle3 =
  "Over 17K schools nominated for resumption of face-to-face classes —DepEd ";
let newsDate3 = "May 15, 2022 &middot; 2 min read";
let newsImgSrc3 = "./images/news/news3.jpg";
let newsDesc3 =
  "The Department of Education (DepEd) on Monday reported that 17,479 public and private schools have been nominated to conduct face-to-face classes. ";

// ARTICLE4
let newsTitle4 = "The Effects of COVID19 Vaccines";
let newsImgSrc4 = "./images/news/news4.jpg";
let newsDate4 = "April 25, 2022 &middot; 4 min read";
let newsDesc4 =
  "Immune protection in COVID-19 infection can be conceptualized as a spectrum wherein sterile immunity is at the end of positive spectrum.";

// ARTICLE5
let newsTitle5 =
  "DOH seeks FDA approval for 4th dose of vaccines for elderly, immunocompromised";
let newsImgSrc5 = "./images/news/news5.jpg";
let newsDate5 = "April 12, 2022 &middot; 6 min read";
let newsDesc5 =
  "Health Undersecretary Maria Rosario Vergeire says administration of the fourth dose of the vaccines had already been approved by the country's Vaccine Expert Panel for the said vulnerable groups";

//ARTICLE6
let newsTitle6 = "What to know about the history of coronavirus";
let newsImgSrc6 = "./images/news/news6.jpg";
let newsDate6 = "March 23, 2022 &middot; 10 min read";
let newsDesc6 =
  "Coronavirus disease &lpar;COVID-19&rpar; is an infectious disease caused by the SARS-CoV-2 virus.";

// FUNCTIONS
// ON LOAD
function title() {
  document.getElementsByClassName("webName")[0].innerHTML = webName;
  document.getElementsByClassName("webName")[1].innerHTML = webName;
  document.getElementsByClassName("cic")[0].innerHTML = cic;
  document.getElementsByClassName("city")[0].innerHTML = city;
}

//ON LOAD NEWS INDEX
function newsPage1() {
  // NEWS1
  document.getElementsByClassName("news-title-1")[0].innerHTML = newsTitle1;
  document.getElementsByClassName("news-img-1")[0].src = newsImgSrc1;
  document.getElementsByClassName("author-1")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-1")[0].src = gatchiProfilePic;
  document.getElementsByClassName("author-profile-1")[0].style.width = "40px";
  document.getElementsByClassName("news-date-1")[0].innerHTML = newsDate1;
  document.getElementsByClassName("news-desc-1")[0].innerHTML = newsDesc1;
  // NEWS2
  document.getElementsByClassName("news-title-2")[0].innerHTML = newsTitle2;
  document.getElementsByClassName("news-img-2")[0].src = newsImgSrc2;
  document.getElementsByClassName("author-2")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-2")[0].src = salinProfilePic;
  document.getElementsByClassName("author-profile-2")[0].style.width = "40px";
  document.getElementsByClassName("news-date-2")[0].innerHTML = newsDate2;
  document.getElementsByClassName("news-desc-2")[0].innerHTML = newsDesc2;
  // NEWS3
  document.getElementsByClassName("news-title-3")[0].innerHTML = newsTitle3;
  document.getElementsByClassName("news-img-3")[0].src = newsImgSrc3;
  document.getElementsByClassName("author-3")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-3")[0].src = gatchiProfilePic;
  document.getElementsByClassName("author-profile-3")[0].style.width = "40px";
  document.getElementsByClassName("news-date-3")[0].innerHTML = newsDate3;
  document.getElementsByClassName("news-desc-3")[0].innerHTML = newsDesc3;
}

function newsPage2() {
  // NEWS4
  document.getElementsByClassName("news-title-4")[0].innerHTML = newsTitle4;
  document.getElementsByClassName("news-img-4")[0].src = newsImgSrc4;
  document.getElementsByClassName("author-4")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-4")[0].src = salinProfilePic;
  document.getElementsByClassName("author-profile-4")[0].style.width = "40px";
  document.getElementsByClassName("news-date-4")[0].innerHTML = newsDate4;
  document.getElementsByClassName("news-desc-4")[0].innerHTML = newsDesc4;
  // NEWS5
  document.getElementsByClassName("news-title-5")[0].innerHTML = newsTitle5;
  document.getElementsByClassName("news-img-5")[0].src = newsImgSrc5;
  document.getElementsByClassName("author-5")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-5")[0].src = gatchiProfilePic;
  document.getElementsByClassName("author-profile-5")[0].style.width = "40px";
  document.getElementsByClassName("news-date-5")[0].innerHTML = newsDate5;
  document.getElementsByClassName("news-desc-5")[0].innerHTML = newsDesc5;
  // NEWS6
  document.getElementsByClassName("news-title-6")[0].innerHTML = newsTitle6;
  document.getElementsByClassName("news-img-6")[0].src = newsImgSrc6;
  document.getElementsByClassName("author-6")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-6")[0].src = salinProfilePic;
  document.getElementsByClassName("author-profile-6")[0].style.width = "40px";
  document.getElementsByClassName("news-date-6")[0].innerHTML = newsDate6;
  document.getElementsByClassName("news-desc-6")[0].innerHTML = newsDesc6;

  // document.getElementsByClassName("awit")[0].innerHTML = "Go Back";
  // document.getElementsByClassName("awit")[0].href = "news-index.html";
}

// ON LOAD PER ARTICLE
function newsLoad1() {
  document.getElementsByClassName("news-title-1")[0].innerHTML = newsTitle1;
  document.getElementsByClassName("author-1")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-1")[0].src = gatchiProfilePic;
  document.getElementsByClassName("news-img-1")[0].src = newsImgSrc1;
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
  document.getElementsByClassName("author-profile-1")[0].style.width = "40px";
  document.getElementsByClassName("news-date-1")[0].innerHTML = newsDate1;
}
function newsLoad2() {
  document.getElementsByClassName("news-title-2")[0].innerHTML = newsTitle2;
  document.getElementsByClassName("author-2")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-2")[0].src = salinProfilePic;
  document.getElementsByClassName("news-img-2")[0].src = newsImgSrc2;
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
  document.getElementsByClassName("author-profile-2")[0].style.width = "40px";
  document.getElementsByClassName("news-date-2")[0].innerHTML = newsDate2;
}
function newsLoad3() {
  document.getElementsByClassName("news-title-3")[0].innerHTML = newsTitle3;
  document.getElementsByClassName("author-3")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-3")[0].src = gatchiProfilePic;
  document.getElementsByClassName("news-img-3")[0].src = newsImgSrc3;
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
  document.getElementsByClassName("author-profile-3")[0].style.width = "40px";
  document.getElementsByClassName("news-date-3")[0].innerHTML = newsDate3;
}
function newsLoad4() {
  document.getElementsByClassName("news-title-4")[0].innerHTML = newsTitle4;
  document.getElementsByClassName("author-4")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-4")[0].src = salinProfilePic;
  document.getElementsByClassName("news-img-4")[0].src = newsImgSrc4;
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
  document.getElementsByClassName("author-profile-4")[0].style.width = "40px";
  document.getElementsByClassName("news-date-4")[0].innerHTML = newsDate4;
}
function newsLoad5() {
  document.getElementsByClassName("news-title-5")[0].innerHTML = newsTitle5;
  document.getElementsByClassName("author-5")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-5")[0].src = gatchiProfilePic;
  document.getElementsByClassName("news-img-5")[0].src = newsImgSrc5;
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
  document.getElementsByClassName("author-profile-5")[0].style.width = "40px";
  document.getElementsByClassName("news-date-5")[0].innerHTML = newsDate5;
}
function newsLoad6() {
  document.getElementsByClassName("news-title-6")[0].innerHTML = newsTitle6;
  document.getElementsByClassName("author-6")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-6")[0].src = salinProfilePic;
  document.getElementsByClassName("news-img-6")[0].src = newsImgSrc6;
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
  document.getElementsByClassName("author-profile-6")[0].style.width = "40px";
  document.getElementsByClassName("news-date-6")[0].innerHTML = newsDate6;
}

// ON LOAD ABOUT PAGE
function aboutLoad() {
  document.getElementsByClassName("madam-profile-1")[0].src = madamProfilePic;
  document.getElementsByClassName("author-1")[0].innerHTML = gatchi;
  document.getElementsByClassName("author-profile-1")[0].src = gatchiProfilePic;

  document.getElementsByClassName("author-2")[0].innerHTML = salin;
  document.getElementsByClassName("author-profile-2")[0].src = salinProfilePic;

  document.getElementsByClassName("author-3")[0].innerHTML = sanPedro;
  document.getElementsByClassName("author-profile-3")[0].src =
    sanPedroProfilePic;
  // document.getElementsByClassName("author-profile-1")[0].style.height = "225px";
  // document.getElementsByClassName("author-profile-1")[0].style.width = "555px";
  // document.getElementsByClassName("author-profile-3")[0].style.height = "225px";
  // document.getElementsByClassName("author-profile-2")[0].style.height = "225px";
  document.getElementsByClassName("cic")[1].innerHTML = cic;

  // !MGA SEEN ZONE
  // document.getElementsByClassName("author-4")[0].innerHTML = cayari;
  // document.getElementsByClassName("author-profile-4")[0].src = cayariProfilePic;
  // document.getElementsByClassName("author-5")[0].innerHTML = tomoro;
  // document.getElementsByClassName("author-profile-5")[0].src = tomoroProfilePic;

  // document.getElementsByClassName("author-profile-4")[0].style.height = "225px";
  // document.getElementsByClassName("author-profile-5")[0].style.height = "225px";
}
