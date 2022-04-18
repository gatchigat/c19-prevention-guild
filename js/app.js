//
// !VAR AND OBJECT DECLARATIONS
let webName = "C19 Prevention Guild";
let city = "Cabanatuan City";

// ?GROUP2 MEMBERS
const gatchi = {
  name: "Gary Gatchalian",
  profilePic: "./images/gatchiProfileV.jpg",
};

const salin = {
  name: "Michelle Salin",
  profilePic: "./images/salinProfileV8.jpg",
};

const sanPedro = {
  name: "Ashley San Pedro",
  profilePic: "./images/sanPedroProfileV2.jpg",
};

// #MGA SEEN ZONE PENDING KUNG KASALI
const cayari = {
  name: "Aaron Cayari",
  profilePic: "./images/cayariProfileV5.jpg",
};

const tomoro = {
  name: "Maricel Tomoro",
  profilePic: "./images/tomoroProfileV2.jpg",
};

// ?MADAM
const madam = {
  name: "Raquel Amparado",
  profilePic1: "./images/quelaProfile6.png",
  profilePic2: "./images/quelaProfileV3.png",
  profilePic3: "./images/quelaProfileV2.png",
};

// ?CIC
const cic = {
  full: "College of the Immaculate Conception",
  img1: "./images/cicImg1.webp",
  img2: "./images/cicImg2.webp",
};

// #NEWS TITLES/DATES/ARTICLE DESCRIPTIONS
const categories = { news: "News", info: "Info", blog: "blog", covid: "COVID-19", other: "Other" };

// ?ARTICLE1
const article1 = {
  title: "The latest on little kids' vaccines",
  imgSrc: "./images/news/news1.webp",
  datePub: "May 23, 2022 &middot; 6 min read",
  shortDesc:
    "we keep close watch on discussions surrounding the emergency approval of vaccines for kids aged at least 6 months",
  category: categories.news,
};

// ?ARTICLE2
const article2 = {
  title: "Life during lockdown",
  imgSrc: "./images/news/news2.jpg",
  datePub: "May 21, 2022 &middot; 3 min read",
  shortDesc:
    "The continuously increasing number of COVID-19 cases in the world The government implemented a total lockdown that lasted for several months.",
  category: categories.info,
};

// ?ARTICLE3
const article3 = {
  title: "Over 17K schools nominated for resumption of face-to-face classes —DepEd ",
  imgSrc: "./images/news/news3.jpg",
  datePub: "May 15, 2022 &middot; 2 min read",
  shortDesc:
    "The Department of Education (DepEd) on Monday reported that 17,479 public and private schools have been nominated to conduct face-to-face classes. ",
  category: categories.news,
};

// ?ARTICLE4
const article4 = {
  title: "The Effects of COVID19 Vaccines",
  imgSrc: "./images/news/news4.jpg",
  datePub: "April 25, 2022 &middot; 4 min read",
  shortDesc:
    "Immune protection in COVID-19 infection can be conceptualized as a spectrum wherein sterile immunity is at the end of positive spectrum.",
  category: categories.info,
};

// ?ARTICLE5
const article5 = {
  title: "DOH seeks FDA approval for 4th dose of vaccines for elderly, immunocompromised",
  imgSrc: "./images/news/news5.jpg",
  datePub: "April 12, 2022 &middot; 6 min read",
  shortDesc:
    "Health Undersecretary Maria Rosario Vergeire says administration of the fourth dose of the vaccines had already been approved by the country's Vaccine Expert Panel for the said vulnerable groups",
  category: categories.news,
};

// ?ARTICLE6
const article6 = {
  title: "What to know about the history of coronavirus",
  imgSrc: "./images/news/news6.jpg",
  datePub: "March 23, 2022 &middot; 10 min read",
  shortDesc: "Coronavirus disease &lpar;COVID-19&rpar; is an infectious disease caused by the SARS-CoV-2 virus.",
  category: categories.info,
};

// !FUNCTIONS
// #ON LOAD
// ?FOR ALL PAGES WEBSITE NAME, SCHOOL NAME, CITY
function title() {
  // -CONSOLE LOG FOR title()
  console.log("webName class = " + webName);
  console.log("cic class = " + cic.full);
  console.log("city class = " + city);
  document.getElementsByClassName("webName")[0].innerHTML = webName;
  document.getElementsByClassName("webName")[1].innerHTML = webName;
  document.getElementsByClassName("cic")[0].innerHTML = cic.full;
  document.getElementsByClassName("city")[0].innerHTML = city;
}

// ?ON LOAD NEWS INDEX
// @PAGE1
function newsPage1() {
  // -CONSOLE LOG FOR newsPage1()
  console.log("CONSOLE LOG FOR newsPage1()");
  console.log("ERROR in myBtn for non existence");
  console.log("RETRIEVE VALUES FROM app.js to news-index.html");
  console.log("item1 = ");
  item1 = JSON.stringify(article1);
  item1 = JSON.stringify(article1, null, 4);
  itemAuthor1 = JSON.stringify(gatchi);
  itemAuthor1 = JSON.stringify(gatchi, null, 4);
  console.log(item1);
  console.log(itemAuthor1);

  console.log("\nitem2 = ");
  item2 = JSON.stringify(article2);
  item2 = JSON.stringify(article2, null, 4);
  itemAuthor2 = JSON.stringify(salin);
  itemAuthor2 = JSON.stringify(salin, null, 4);
  console.log(item2);
  console.log(itemAuthor2);

  console.log("\nitem3 = ");
  item3 = JSON.stringify(article3);
  item3 = JSON.stringify(article3, null, 4);
  itemAuthor3 = JSON.stringify(salin);
  itemAuthor3 = JSON.stringify(salin, null, 4);
  console.log(item3);
  console.log(itemAuthor3);

  // $NEWS1
  document.getElementsByClassName("category")[0].innerHTML = article1.category;
  document.getElementsByClassName("news-title-1")[0].innerHTML = article1.title;
  document.getElementsByClassName("news-img-1")[0].src = article1.imgSrc;
  document.getElementsByClassName("news-date-1")[0].innerHTML = article1.datePub;
  document.getElementsByClassName("news-desc-1")[0].innerHTML = article1.shortDesc;
  document.getElementsByClassName("author-1")[0].innerHTML = gatchi.name;
  document.getElementsByClassName("author-profile-1")[0].src = gatchi.profilePic;
  document.getElementsByClassName("author-profile-1")[0].style.width = "40px";

  // $NEWS2
  document.getElementsByClassName("category")[1].innerHTML = article2.category;
  document.getElementsByClassName("news-title-2")[0].innerHTML = article2.title;
  document.getElementsByClassName("news-img-2")[0].src = article2.imgSrc;
  document.getElementsByClassName("news-date-2")[0].innerHTML = article2.datePub;
  document.getElementsByClassName("news-desc-2")[0].innerHTML = article2.shortDesc;
  document.getElementsByClassName("author-2")[0].innerHTML = salin.name;
  document.getElementsByClassName("author-profile-2")[0].src = salin.profilePic;
  document.getElementsByClassName("author-profile-2")[0].style.width = "40px";

  // $NEWS3
  document.getElementsByClassName("category")[2].innerHTML = article3.category;
  document.getElementsByClassName("news-title-3")[0].innerHTML = article3.title;
  document.getElementsByClassName("news-img-3")[0].src = article3.imgSrc;
  document.getElementsByClassName("news-date-3")[0].innerHTML = article3.datePub;
  document.getElementsByClassName("news-desc-3")[0].innerHTML = article3.shortDesc;
  document.getElementsByClassName("author-3")[0].innerHTML = gatchi.name;
  document.getElementsByClassName("author-profile-3")[0].src = gatchi.profilePic;
  document.getElementsByClassName("author-profile-3")[0].style.width = "40px";
}

// @PAGE2
function newsPage2() {
  // -CONSOLE LOG FOR newsPage2()
  console.log("CONSOLE LOG FOR newsPage2()");
  console.log("ERROR in myBtn for non existence");
  console.log("RETRIEVE VALUES FROM app.js to news-index2.html");
  console.log("item1 = ");
  item1 = JSON.stringify(article4);
  item1 = JSON.stringify(article4, null, 4);
  itemAuthor1 = JSON.stringify(salin);
  itemAuthor1 = JSON.stringify(salin, null, 4);
  console.log(item1);
  console.log(itemAuthor1);

  console.log("\nitem2 = ");
  item2 = JSON.stringify(article5);
  item2 = JSON.stringify(article5, null, 4);
  itemAuthor2 = JSON.stringify(gatchi);
  itemAuthor2 = JSON.stringify(gatchi, null, 4);
  console.log(item2);
  console.log(itemAuthor2);

  console.log("\nitem3 = ");
  item3 = JSON.stringify(article6);
  item3 = JSON.stringify(article6, null, 4);
  itemAuthor3 = JSON.stringify(salin);
  itemAuthor3 = JSON.stringify(salin, null, 4);
  console.log(item3);
  console.log(itemAuthor3);
  // $NEWS4
  document.getElementsByClassName("category")[0].innerHTML = article4.category;
  document.getElementsByClassName("news-title-4")[0].innerHTML = article4.title;
  document.getElementsByClassName("news-img-4")[0].src = article4.imgSrc;
  document.getElementsByClassName("news-date-4")[0].innerHTML = article4.datePub;
  document.getElementsByClassName("news-desc-4")[0].innerHTML = article4.shortDesc;
  document.getElementsByClassName("author-4")[0].innerHTML = salin.name;
  document.getElementsByClassName("author-profile-4")[0].src = salin.profilePic;
  document.getElementsByClassName("author-profile-4")[0].style.width = "40px";

  // $NEWS5
  document.getElementsByClassName("category")[1].innerHTML = article5.category;
  document.getElementsByClassName("news-title-5")[0].innerHTML = article5.title;
  document.getElementsByClassName("news-img-5")[0].src = article5.imgSrc;
  document.getElementsByClassName("news-date-5")[0].innerHTML = article5.datePub;
  document.getElementsByClassName("news-desc-5")[0].innerHTML = article5.shortDesc;
  document.getElementsByClassName("author-5")[0].innerHTML = gatchi.name;
  document.getElementsByClassName("author-profile-5")[0].src = gatchi.profilePic;
  document.getElementsByClassName("author-profile-5")[0].style.width = "40px";

  // $NEWS6
  document.getElementsByClassName("category")[2].innerHTML = article6.category;
  document.getElementsByClassName("news-title-6")[0].innerHTML = article6.title;
  document.getElementsByClassName("news-img-6")[0].src = article6.imgSrc;
  document.getElementsByClassName("news-date-6")[0].innerHTML = article6.datePub;
  document.getElementsByClassName("news-desc-6")[0].innerHTML = article6.shortDesc;
  document.getElementsByClassName("author-6")[0].innerHTML = salin.name;
  document.getElementsByClassName("author-profile-6")[0].src = salin.profilePic;
  document.getElementsByClassName("author-profile-6")[0].style.width = "40px";

  // document.getElementsByClassName("awit")[0].innerHTML = "Go Back";
  // document.getElementsByClassName("awit")[0].href = "news-index.html";
}

// ?ON LOAD PER ARTICLE
// $ARTICLE1
function newsLoad1() {
  // -CONSOLE LOG FOR newsLoad1()
  console.log("CONSOLE LOG FOR newsLoad1()");
  console.log("RETRIEVE VALUES FROM app.js to news1.html");
  console.log("item1 = ");
  item1 = JSON.stringify(article1);
  item1 = JSON.stringify(article1, null, 4);
  itemAuthor1 = JSON.stringify(gatchi);
  itemAuthor1 = JSON.stringify(gatchi, null, 4);
  console.log(item1);
  console.log(itemAuthor1);
  //-
  document.getElementsByClassName("news-title-1")[0].innerHTML = article1.title;
  document.getElementsByClassName("news-img-1")[0].src = article1.imgSrc;
  document.getElementsByClassName("news-date-1")[0].innerHTML = article1.datePub;
  document.getElementsByClassName("author-1")[0].innerHTML = gatchi.name;
  document.getElementsByClassName("author-profile-1")[0].src = gatchi.profilePic;
  document.getElementsByClassName("author-profile-1")[0].style.width = "40px";
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
}

// $ARTICLE2
function newsLoad2() {
  // -CONSOLE LOG FOR newsLoad2()
  console.log("CONSOLE LOG FOR newsLoad2()");
  console.log("RETRIEVE VALUES FROM app.js to news2.html");
  console.log("item1 = ");
  item1 = JSON.stringify(article2);
  item1 = JSON.stringify(article2, null, 4);
  itemAuthor1 = JSON.stringify(salin);
  itemAuthor1 = JSON.stringify(salin, null, 4);
  console.log(item1);
  console.log(itemAuthor1);
  //-
  document.getElementsByClassName("news-title-2")[0].innerHTML = article2.title;
  document.getElementsByClassName("news-img-2")[0].src = article2.imgSrc;
  document.getElementsByClassName("news-date-2")[0].innerHTML = article2.datePub;
  document.getElementsByClassName("author-2")[0].innerHTML = salin.name;
  document.getElementsByClassName("author-profile-2")[0].src = salin.profilePic;
  document.getElementsByClassName("author-profile-2")[0].style.width = "40px";
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
}
// $ARTICLE3
function newsLoad3() {
  // -CONSOLE LOG FOR newsLoad3()
  console.log("CONSOLE LOG FOR newsLoad3()");
  console.log("RETRIEVE VALUES FROM app.js to news3.html");
  console.log("item1 = ");
  item1 = JSON.stringify(article3);
  item1 = JSON.stringify(article3, null, 4);
  itemAuthor1 = JSON.stringify(salin);
  itemAuthor1 = JSON.stringify(salin, null, 4);
  console.log(item1);
  console.log(itemAuthor1);
  //-
  document.getElementsByClassName("news-title-3")[0].innerHTML = article3.title;
  document.getElementsByClassName("news-img-3")[0].src = article3.imgSrc;
  document.getElementsByClassName("news-date-3")[0].innerHTML = article3.datePub;
  document.getElementsByClassName("author-3")[0].innerHTML = gatchi.name;
  document.getElementsByClassName("author-profile-3")[0].src = gatchi.profilePic;
  document.getElementsByClassName("author-profile-3")[0].style.width = "40px";
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
}

// $ARTICLE4
function newsLoad4() {
  // -CONSOLE LOG FOR newsLoad4()
  console.log("CONSOLE LOG FOR newsLoad4()");
  console.log("RETRIEVE VALUES FROM app.js to news4.html");
  console.log("item1 = ");
  item1 = JSON.stringify(article4);
  item1 = JSON.stringify(article4, null, 4);
  itemAuthor1 = JSON.stringify(salin);
  itemAuthor1 = JSON.stringify(salin, null, 4);
  console.log(item1);
  console.log(itemAuthor1);
  //-
  document.getElementsByClassName("news-title-4")[0].innerHTML = article4.title;
  document.getElementsByClassName("news-img-4")[0].src = article4.imgSrc;
  document.getElementsByClassName("news-date-4")[0].innerHTML = article4.datePub;
  document.getElementsByClassName("author-4")[0].innerHTML = salin.name;
  document.getElementsByClassName("author-profile-4")[0].src = salin.profilePic;
  document.getElementsByClassName("author-profile-4")[0].style.width = "40px";
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
}

// $ARTICLE5
function newsLoad5() {
  // -CONSOLE LOG FOR newsLoad4()
  console.log("CONSOLE LOG FOR newsLoad5()");
  console.log("RETRIEVE VALUES FROM app.js to news5.html");
  console.log("item1 = ");
  item1 = JSON.stringify(article5);
  item1 = JSON.stringify(article5, null, 4);
  itemAuthor1 = JSON.stringify(gatchi);
  itemAuthor1 = JSON.stringify(gatchi, null, 4);
  console.log(item1);
  console.log(itemAuthor1);
  //-
  document.getElementsByClassName("news-title-5")[0].innerHTML = article5.title;
  document.getElementsByClassName("news-img-5")[0].src = article5.imgSrc;
  document.getElementsByClassName("news-date-5")[0].innerHTML = article5.datePub;
  document.getElementsByClassName("author-5")[0].innerHTML = gatchi.name;
  document.getElementsByClassName("author-profile-5")[0].src = gatchi.profilePic;
  document.getElementsByClassName("author-profile-5")[0].style.width = "40px";
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
}

// $ARTICLE6
function newsLoad6() {
  // -CONSOLE LOG FOR newsLoad4()
  console.log("CONSOLE LOG FOR newsLoad6()");
  console.log("RETRIEVE VALUES FROM app.js to news6.html");
  console.log("item1 = ");
  item1 = JSON.stringify(article6);
  item1 = JSON.stringify(article6, null, 4);
  itemAuthor1 = JSON.stringify(salin);
  itemAuthor1 = JSON.stringify(salin, null, 4);
  console.log(item1);
  console.log(itemAuthor1);
  //-
  document.getElementsByClassName("news-title-6")[0].innerHTML = article6.title;
  document.getElementsByClassName("news-img-6")[0].src = article6.imgSrc;
  document.getElementsByClassName("news-date-6")[0].innerHTML = article6.datePub;
  document.getElementsByClassName("author-6")[0].innerHTML = salin.name;
  document.getElementsByClassName("author-profile-6")[0].src = salin.profilePic;
  document.getElementsByClassName("author-profile-6")[0].style.width = "40px";
  // document.getElementsByClassName("news-img-1")[0].style.width = "80%";
}

// ON LOAD ABOUT PAGE
function aboutLoad() {
  // -CONSOLE LOG FOR newsLoad4()
  console.log("CONSOLE LOG FOR aboutLoad()");
  console.log("RETRIEVE VALUES FROM app.js and scripts.js to about.html");
  console.log("cic-img2 class = " + cic.img2);
  console.log("madam[0] class = " + madam.name);
  console.log("madam-profile-1[0] class = " + madam.profilePic2);
  console.log("madam-profile-1[1] class = " + madam.profilePic1);
  console.log("author-1 class = " + gatchi.name);
  console.log("author-profile-1 class = " + gatchi.profilePic);
  console.log("author-2 class = " + salin.name);
  console.log("author-profile-2class = " + salin.profilePic);
  console.log("author-3 class = " + sanPedro.name);
  console.log("author-profile-3 class = " + sanPedro.profilePic);
  //-
  // $SECTION2 SCHOOL
  document.getElementsByClassName("cic-img2")[0].href = cic.img2;
  document.getElementsByClassName("cic-img2")[1].src = cic.img2;
  $("#about-main-img1").attr("data-title", cic.full);

  // $SECTION3 INSTRUCTOR
  document.getElementsByClassName("madam")[0].innerHTML = madam.name;
  document.getElementsByClassName("madam-profile-1")[0].href = madam.profilePic2;
  document.getElementsByClassName("madam-profile-1")[1].src = madam.profilePic1;
  $("#about-main-img2").attr("data-title", madam.name);

  // $SECTION4 GROUP 2 MEMBERS
  document.getElementsByClassName("author-1")[0].innerHTML = gatchi.name;
  document.getElementsByClassName("author-profile-1")[0].href = gatchi.profilePic;
  $("#profile-lightbox-1").attr("data-title", gatchi.name);
  document.getElementsByClassName("author-profile-1")[1].src = gatchi.profilePic;

  document.getElementsByClassName("author-2")[0].innerHTML = salin.name;
  document.getElementsByClassName("author-profile-2")[0].href = salin.profilePic;
  document.getElementsByClassName("author-profile-2")[1].src = salin.profilePic;
  $("#profile-lightbox-2").attr("data-title", salin.name);

  document.getElementsByClassName("author-3")[0].innerHTML = sanPedro.name;
  document.getElementsByClassName("author-profile-3")[0].href = sanPedro.profilePic;
  $("#profile-lightbox-3").attr("data-title", sanPedro.name);
  document.getElementsByClassName("author-profile-3")[1].src = sanPedro.profilePic;
  document.getElementsByClassName("cic")[1].innerHTML = cic.full;
  //+
  //+
  //+
  //+
  //+
  //+
  //+
  //+
  // !MGA SEEN ZONE
  // !MGA SEEN ZONE
  document.getElementsByClassName("author-4")[0].innerHTML = cayari.name;
  document.getElementsByClassName("author-profile-4")[0].href = cayari.profilePic;
  $("#profile-lightbox-4").attr("data-title", cayari.name);
  document.getElementsByClassName("author-profile-4")[1].src = cayari.profilePic;

  document.getElementsByClassName("author-5")[0].innerHTML = tomoro.name;
  document.getElementsByClassName("author-profile-5")[0].href = tomoro.profilePic;
  $("#profile-lightbox-5").attr("data-title", tomoro.name);
  document.getElementsByClassName("author-profile-5")[1].src = tomoro.profilePic;

  // -ADDITIONAL CONSOLE LOG PARA SA MGA SEEN ZONE
  console.log("\nADDITIONAL CONSOLE LOG PARA SA MGA SEEN ZONE");
  console.log("author-4 class = " + cayari.name);
  console.log("author-profile-4 class = " + cayari.profilePic);
  console.log("author-5 class = " + tomoro.name);
  console.log("author-profile-5 class = " + tomoro.profilePic);

  // /*DISABLED OLD SIZING
  // document.getElementsByClassName("author-profile-1")[0].style.height = "225px";
  // document.getElementsByClassName("author-profile-1")[0].style.width = "555px";
  // document.getElementsByClassName("author-profile-3")[0].style.height = "225px";
  // document.getElementsByClassName("author-profile-2")[0].style.height = "225px";
  // document.getElementsByClassName("author-profile-4")[0].style.height = "225px";
  // document.getElementsByClassName("author-profile-5")[0].style.height = "225px";
}
//
//
//
//
// /*DISABLED OLD INDIVIDUAL VARS
// let gatchi = "Gary Gatchalian";
// let salin = "Michelle Salin";
// let cayari = "Aaron Cayari";
// let tomoro = "Maricel Tomoro";
// let sanPedro = "Ashley San Pedro";

// MEMBERS PROFILE PIC SRC
// let gatchiProfilePic = "./images/gatchiProfileV.jpg";
// let salinProfilePic = "./images/salinProfileV8.jpg";
// let tomoroProfilePic = "./images/tomoroProfileV2.jpg";
// let cayariProfilePic = "./images/cayariProfileV5.jpg";
// let sanPedroProfilePic = "./images/sanPedroProfileV2.jpg";

// CIC DIR
// let cic = "College of the Immaculate Conception";
// let cicImg2 =
//   "https://static.wixstatic.com/media/556956_a5747055909f406cbb12f6c1e718527b~mv2.png/v1/fill/w_1055,h_434,al_c,usm_0.66_1.00_0.01,enc_auto/556956_a5747055909f406cbb12f6c1e718527b~mv2.png";
//MADAM
// let madam = "Raquel Amparado";
// let madamProfilePic = "./images/quelaProfile6.png";
// let madamProfilePic2 = "./images/quelaProfileV3.png";

// let newsTitle1 = "The latest on little kids' vaccines";
// let newsImgSrc1 = "./images/news/news1.webp";
// let newsDate1 = "May 23, 2022 &middot; 6 min read";
// let newsDesc1 =
//   "we keep close watch on discussions surrounding the emergency approval of vaccines for kids aged at least 6 months";

// let newsTitle2 = "Life during lockdown";
// let newsImgSrc2 = "./images/news/news2.jpg";
// let newsDate2 = "May 21, 2022 &middot; 3 min read";
// let newsDesc2 =
//   "The continuously increasing number of COVID-19 cases in the world The government implemented a total lockdown that lasted for several months.";

// let newsTitle3 = "Over 17K schools nominated for resumption of face-to-face classes —DepEd ";
// let newsDate3 = "May 15, 2022 &middot; 2 min read";
// let newsImgSrc3 = "./images/news/news3.jpg";
// let newsDesc3 =
//   "The Department of Education (DepEd) on Monday reported that 17,479 public and private schools have been nominated to conduct face-to-face classes. ";

// let newsTitle4 = "The Effects of COVID19 Vaccines";
// let newsImgSrc4 = "./images/news/news4.jpg";
// let newsDate4 = "April 25, 2022 &middot; 4 min read";
// let newsDesc4 =
//   "Immune protection in COVID-19 infection can be conceptualized as a spectrum wherein sterile immunity is at the end of positive spectrum.";

// let newsTitle5 = "DOH seeks FDA approval for 4th dose of vaccines for elderly, immunocompromised";
// let newsImgSrc5 = "./images/news/news5.jpg";
// let newsDate5 = "April 12, 2022 &middot; 6 min read";
// let newsDesc5 =
//   "Health Undersecretary Maria Rosario Vergeire says administration of the fourth dose of the vaccines had already been approved by the country's Vaccine Expert Panel for the said vulnerable groups";

// let newsTitle6 = "What to know about the history of coronavirus";
// let newsImgSrc6 = "./images/news/news6.jpg";
// let newsDate6 = "March 23, 2022 &middot; 10 min read";
// let newsDesc6 = "Coronavirus disease &lpar;COVID-19&rpar; is an infectious disease caused by the SARS-CoV-2 virus.";
