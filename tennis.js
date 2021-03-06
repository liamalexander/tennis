//TRY TO DECLARE PLAYERS OUTSIDE THE FUNCTION TO GIVE IT GLOBAL SCOPE
window.onload = function() {
    const players = [{
      "id": 1,
      "name": "Federer",
      "firstName" : "Roger",
      "slams": 20,
      "nationality": "Swiss",
      "photo" : "https://pbs.twimg.com/profile_images/378800000606046005/3f05655ac9b76e73eb3e86f9d5d3b2cd.jpeg",
      "dob" : "08 / 08 / 81",
      "firstSlam": "Wimbledon 2003",
      "lastSlam": "Australian Open 2018",
      "titles": 103,
      "text": "Federer has won a men's record 20 Grand Slam singles titles.",
      "aus": 6,
      "fre": 1,
      "wim": 8,
      "uso": 5,
      "modalPhoto": "https://images.indianexpress.com/2020/04/federer-wimbledon-1200.jpg"
    },
    {
      "id": 2,
      "name": "Nadal",
      "firstName" : "Rafael",
      "slams": 20,
      "nationality": "Spanish",
      "photo" : "https://static.wixstatic.com/media/58baea_bdd0df59261642a8858efd670143ea12~mv2.jpg/v1/fill/w_128,h_128,al_c,q_80,usm_0.66_1.00_0.01/Nadal%20Forehand%20Blog.webp",
      "dob" : "03 / 06 / 86",
      "firstSlam": "French Open 2005",
      "lastSlam": "French Open 2020",
      "titles": 86,
      "text": "Nadal has won 13 French Open titles, more than any player at any Grand Slam event.",
      "aus": 1,
      "fre": 13,
      "wim": 2,
      "uso": 4,
      "modalPhoto": "https://www.tennisnow.com/images/2017/June/Nadaltrophy-6-11-17.aspx"
    },
    {
      "id": 3,
      "name": "Djokovic",
      "firstName" : "Novak",
      "slams": 20,
      "nationality": "Serbian",
      "photo" : "https://cdnmd.lavoz.com.ar/sites/default/files/styles/box_128/public/nota_periodistica/nole1_1602102173.jpg",
      "dob" : "22 / 05 / 87",
      "firstSlam": "Australian Open 2008",
      "lastSlam": "Wimbledon 2021",
      "titles": 81,
      "text": "Djokovic is the only male player to complete the non-calender year Grand Slam, winning all 4 Slams from Wimbledon 2015 - French Open 2016.",
      "aus": 9,
      "fre": 2,
      "wim": 6,
      "uso": 3,
      "modalPhoto": "https://www.tennisworldusa.org/imgb/87151/why-has-novak-djokovic-been-more-successful-at-the-aus-open-than-at-the-us-open.jpg"
    },
    {
      "id": 4,
      "name": "Sampras",
      "firstName" : "Pete",
      "slams": 14,
      "nationality": "American",
      "photo" : "https://static.wixstatic.com/media/58baea_6824fafaf67e49a28cf5de8645aeced6~mv2.jpg/v1/fill/w_128,h_128,al_c,q_80,usm_0.66_1.00_0.01/Sampras%20Volley.webp",
      "dob" : "12 / 08 / 71",
      "firstSlam": "US Open 1990",
      "lastSlam": "US Open 2002",
      "titles": 64,
      "text": "Sampras ended 6 consecutive years as the world number 1 player.",
      "aus": 2,
      "fre": 0,
      "wim": 7,
      "uso": 5,
      "modalPhoto": "https://a57.foxnews.com/a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/640/320/1862/1048/120810_sampras.jpg?ve=1&tl=1?ve=1&tl=1"
    },
    {
      "id": 5,
      "name": "Borg",
      "firstName" : "Bjorn",
      "slams": 11,
      "nationality": "Swedish",
      "photo" : "https://images.prismic.io/fft-rg-commun-news/d246f93953c7c10fdfe3b5bd195c2eb780b22f0d_1974-1981-annees-bjorn-borg-roland-garros.jpg?auto=compress,format",
      "dob" : "06 / 06 / 56",
      "firstSlam": "French Open 1974",
      "lastSlam": "French Open 1981",
      "titles": 66,
      "text": "Borg won 5 consecutive Wimbledon titles (1976 - 1980) and did the French Open - Wimbledon double 3 times.",
      "aus": 0,
      "fre": 6,
      "wim": 5,
      "uso": 0,
      "modalPhoto": "https://www.80scasualclassics.co.uk/blog/wp-content/uploads/2018/06/bjorn-borg-wimbledon-1980.jpeg"
    },
    {
      "id": 6,
      "name": "Connors",
      "firstName" : "Jimmy",
      "slams": 8,
      "nationality": "American",
      "photo" : "https://pbs.twimg.com/profile_images/313878886/chris-_20jimmy_20connors250x238_reasonably_small.jpg",
      "dob" : "02 / 09 / 52",
      "firstSlam": "Australian Open 1974",
      "lastSlam": "US Open 1983",
      "titles": 109,
      "text": "Connors won 3 of the 4 Slams in 1974 and won more singles titles than any other man in open era history.",
      "aus": 1,
      "fre": 0,
      "wim": 2,
      "uso": 5,
      "modalPhoto": "https://www.tennisworldusa.org/imgb/81419/flashback-us-open-jimmy-connors-destroys-ken-rosewall-for-first-us-open-crown.jpg"
    },
    {
      "id": 7,
      "name": "Lendl",
      "firstName" : "Ivan",
      "slams": 8,
      "nationality": "Czech / American",
      "photo" : "https://res.cloudinary.com/lptennis/image/upload/c_fill,h_96,q_auto,w_96/v1482781330/wkjjx0hd7jfqu5hz1epa.png",
      "dob" : "07 / 03 / 60",
      "firstSlam": "French Open 1984",
      "lastSlam": "Australian Open 1990",
      "titles": 94,
      "text": "Lendl reached 8 consecutive US Open finals in the 80's.",
      "aus": 2,
      "fre": 3,
      "wim": 0,
      "uso": 3,
      "modalPhoto": "https://i.pinimg.com/originals/9a/3f/33/9a3f3321da189edc1576c3531e1392e5.jpg"
    },
    {
      "id": 8,
      "name": "Agassi",
      "firstName" : "Andre",
      "slams": 8,
      "nationality": "American",
      "photo" : "https://laterradihayk.files.wordpress.com/2016/06/andre-agassi1.jpg?w=256&h=256&crop=1",
      "dob" : "29 / 04 / 70",
      "firstSlam": "Wimbledon 1992",
      "lastSlam": "Australian Open 2003",
      "titles": 60,
      "text": "Agassi was the first male player to win the Career Golden Slam, winning Olympic Gold in Atlanta 1996.",
      "aus": 4,
      "fre": 1,
      "wim": 1,
      "uso": 2,
      "modalPhoto": "https://i.pinimg.com/originals/fb/9f/b9/fb9fb9ec722b6165ef10e20a56c67ff3.jpg"
    },
    {
      "id": 9,
      "name": "McEnroe",
      "firstName" : "John",
      "slams": 7,
      "nationality": "American",
      "photo" : "https://media.gq.com/photos/5583173409f0bee564411591/master/pass/sports-2011-06-wimbeldon-rivalries-wimbeldon-bjorn-borg-john-mcenroe_96.jpg",
      "dob" : "16 / 02 / 59",
      "firstSlam": "US Open 1979",
      "lastSlam": "US Open 1984",
      "titles": 77,
      "text": "In 1984, McEnroe finished the year with a 82-3 season record, the highest win percentage for a man in 1 season in open era history.",
      "aus": 0,
      "fre": 0,
      "wim": 3,
      "uso": 4,
      "modalPhoto": "https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/277eeabd62b59bc9/e25fbebb4048/v/0cd448ddde44/p_0300_10_B3_015_o2.jpg"
    },
    {
      "id": 10,
      "name": "Wilander",
      "firstName" : "Mats",
      "slams": 7,
      "nationality": "Swedish",
      "photo" : "https://cdn.cnn.com/cnnnext/dam/assets/150428170726-mats-wilander-french-final-large-169.jpg",
      "dob" : "22 / 08 / 64",
      "firstSlam": "French Open 1982",
      "lastSlam": "US Open 1988",
      "titles": 33,
      "text": "Wilander won 3 of the 4 Slams in 1988, and is the only male player to win the Australian Open on grass and hard courts.",
      "aus": 3,
      "fre": 3,
      "wim": 0,
      "uso": 1,
      "modalPhoto": "https://pbs.twimg.com/media/EGN6OBgWwAUqP9B.jpg"
    },
    {
      "id": 11,
      "name": "S Williams",
      "firstName" : "Serena",
      "slams": 23,
      "nationality": "American",
      "photo" : "https://cdn.britannica.com/70/149370-050-F2F4BEE5/Serena-Williams-US-Open-2004.jpg",
      "dob" : "26 / 09 / 81",
      "firstSlam": "US Open 1999",
      "lastSlam": "Australian Open 2017",
      "titles": 73,
      "text": "Serena has won a record 7 Australian Open titles and has held all four grand slams consecutively twice in her career.",
      "aus": 7,
      "fre": 3,
      "wim": 7,
      "uso": 6,
      "modalPhoto": "https://www.tennisworldusa.org/imgb/69013/serena-williams-it-s-cool-to-have-meaningful-trophies-in-your-house.jpg"
    },
    {
      "id": 12,
      "name": "Graf",
      "firstName" : "Steffi",
      "slams": 22,
      "nationality": "German",
      "photo" : "https://www.larousse.fr/encyclopedie/data/vignettes/1003786-Steffi_Graf.jpg",
      "dob" : "14 / 06 / 69",
      "firstSlam": "French Open 1987",
      "lastSlam": "French Open 1999",
      "titles": 107,
      "text": "In 1988, Graf became the only player in history to win all four grand slam titles and the Olympic Gold medal (Seoul) in a season.",
      "aus": 4,
      "fre": 6,
      "wim": 7,
      "uso": 5,
      "modalPhoto": "https://d2me2qg8dfiw8u.cloudfront.net/content/uploads/2019/06/08124252/Steffi-Graf-with-French-Open-trophy-PA.jpg"
    },
    {
      "id": 13,
      "name": "Evert",
      "firstName" : "Chris",
      "slams": 18,
      "nationality": "American",
      "photo" : "https://photoresources.wtatennis.com/photo-resources/2020/03/28/44d0dbdc-5568-4eb1-8c43-914630cfd4a2/gettyimages-667510641-594x594.jpg?width=1200&height=630",
      "dob" : "21 / 12 / 54",
      "firstSlam": "French Open 1974",
      "lastSlam": "French Open 1986",
      "titles": 157,
      "text": "Evert won a women's record 7 French Open titles and won a Slam in 13 consecutive years.  She has the highest career winning percentage in history (89.97%).",
      "aus": 2,
      "fre": 7,
      "wim": 3,
      "uso": 6,
      "modalPhoto": "https://cdn0.scrvt.com/c2465e9022ba946df66d1244a69b1c75/e032833996e86f70/eedd85f5feb9/v/4ed66c5ce7fe/chris-evert-1981.jpg"
    },
    {
      "id": 14,
      "name": "Navratilova",
      "firstName" : "Martina",
      "slams": 18,
      "nationality": "Czech / American",
      "photo" : "https://www.tennisworldusa.org/imgb/52642/martina-navratilova-i-am-who-i-am.jpg",
      "dob" : "18 / 10 / 56",
      "firstSlam": "Wimbledon 1978",
      "lastSlam": "Wimbledon 1990",
      "titles": 167,
      "text": "Navratilova won a record 9 Wimbledon titles and in 1983 completed an all time best 86-1 season win-loss record (98.9%).",
      "aus": 3,
      "fre": 2,
      "wim": 9,
      "uso": 4,
      "modalPhoto": "https://www.abc.net.au/news/image/8680118-3x2-940x627.jpg"
    },
    {
      "id": 15,
      "name": "Court",
      "firstName" : "Margaret",
      "slams": 11,
      "nationality": "Australian",
      "photo" : "https://s31242.pcdn.co/wp-content/uploads/2019/06/GettyImages-3309293-1024x701.jpg",
      "dob" : "16 / 07 / 42",
      "firstSlam": "Australian Open 1969",
      "lastSlam": "US Open 1973",
      "titles": 92,
      "text": "In 1970, Court won the calender year Grand Slam by sweeping all four major tournaments.",
      "aus": 4,
      "fre": 3,
      "wim": 1,
      "uso": 3,
      "modalPhoto": "https://i.guim.co.uk/img/media/716acaf670e2c60fcad156d1017b19fa32e285a7/0_0_2167_2077/master/2167.jpg?width=700&quality=85&auto=format&fit=max&s=4470716f5d9add5c070022e478f5908a"
    },
    {
      "id": 16,
      "name": "Seles",
      "firstName" : "Monica",
      "slams": 9,
      "nationality": "Yugoslavian / American",
      "photo" : "https://d2me2qg8dfiw8u.cloudfront.net/content/uploads/2021/11/23175821/Monica-Seles-on-the-run.jpg",
      "dob" : "02 / 12 / 73",
      "firstSlam": "French Open 1990",
      "lastSlam": "Australian Open 1996",
      "titles": 53,
      "text": "Seles won 3 of the 4 Slams in both the 1991 and 1992 seasons.  She won a record 8 Grand Slams as a teeenager.",
      "aus": 4,
      "fre": 3,
      "wim": 0,
      "uso": 2,
      "modalPhoto": "https://photo-assets.usopen.org/images/pics/large/f_Seles-1991_50th.jpg"
    },
    {
      "id": 17,
      "name": "King",
      "firstName" : "Billie Jean",
      "slams": 8,
      "nationality": "American",
      "photo" : "https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_413,w_413,x_121,y_0/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1501718211/1378802776786.cached_yghpwm",
      "dob" : "22 / 11 / 43",
      "firstSlam": "Wimbledon 1968",
      "lastSlam": "Wimbledon 1975",
      "titles": 67,
      "text": "In 1972, King won 3 of the 4 Grand Slam titles.",
      "aus": 0,
      "fre": 1,
      "wim": 4,
      "uso": 3,
      "modalPhoto": "https://cdn.cnn.com/cnnnext/dam/assets/131119120925-billie-jean-king-wimbledon-1967-horizontal-large-gallery.jpg"
    },
    {
      "id": 18,
      "name": "Goolagong",
      "firstName" : "Evonne",
      "slams": 7,
      "nationality": "Australian",
      "photo" : "https://cdn.cnn.com/cnnnext/dam/assets/150128093940-evonne-goolagong-wimbledon-playing-super-169.jpg",
      "dob" : "31 / 07 / 51",
      "firstSlam": "French Open 1971",
      "lastSlam": "Wimbledon 1980",
      "titles": 86,
      "text": "Goolagong won 3 consecutive Australian Open titles and reached 6 consecutive finals.",
      "aus": 4,
      "fre": 1,
      "wim": 2,
      "uso": 0,
      "modalPhoto": "https://i.pinimg.com/originals/d8/00/8c/d8008c95f38911ff5d37c9ad89719917.jpg"
    },
    {
      "id": 19,
      "name": "V Williams",
      "firstName" : "Venus",
      "slams": 7,
      "nationality": "American",
      "photo" : "https://static.ffx.io/images/$zoom_0.1309317630758573%2C$multiply_0.254%2C$ratio_1%2C$width_378%2C$x_57%2C$y_0/t_crop_custom/q_86%2Cf_auto/cb6f74032d6703dbe16bff5ef2a332ad57f1e232",
      "dob" : "17 / 06 / 80",
      "firstSlam": "Wimbledon 2000",
      "lastSlam": "Wimbledon 2008",
      "titles": 49,
      "text": "Between Wimbledon 2000 and the US Open 2001, Venus won 4 of the 6 Grand Slams played and an Olympic Gold Medal (Sydney, 2000).",
      "aus": 0,
      "fre": 0,
      "wim": 5,
      "uso": 2,
      "modalPhoto": "https://s.abcnews.com/images/Entertainment/GTY__Venus_Williams_01_jrl_160624_16x9_992.jpg"
    },
    {
      "id": 20,
      "name": "Henin",
      "firstName" : "Justine",
      "slams": 7,
      "nationality": "Belgian",
      "photo" : "https://i.guim.co.uk/img/static/sys-images/Sport/Pix/pictures/2006/01/24/Heninsm.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=3cb3aec94aa780b82bb146b613cecb26",
      "dob" : "01 / 06 / 82",
      "firstSlam": "French Open 2003",
      "lastSlam": "US Open 2007",
      "titles": 43,
      "text": "Henin won 3 consecutive French Open titles between 2005 - 2007.",
      "aus": 1,
      "fre": 4,
      "wim": 0,
      "uso": 2,
      "modalPhoto": "https://images.prismic.io/fft-rg-commun-news/b64ebddeeef55aff8ec8f0750db3b652e60e508f_2003-2007-justine-henin-victoires-roland-garros.jpg?auto=compress,format"
    }
  ];

  // window.onload = function() {
  //   for (let i = 0; i < players.length; i++) {
  //     // console.log(players[i].name);
  //     players[i].addEventListener('click', function() {
  //       alert(player[i].name);
  //     })
  //   };
  // }


  const playerList = document.getElementById("playerList");

  function createPlayer(player) {
    const playerWrapper = document.createElement("div");
    playerWrapper.classList.add("modalBtn");
    playerWrapper.id = player.id;
    playerWrapper.addEventListener("click", function (e) {
      // alert(player.name);
      const modal = document.querySelector(".modal");
        // const modalHeader = document.querySelector(".modal-header");
        const modalBody = document.querySelector(".modal-body");

        modal.style.display = "grid";

        const modalHeader = document.createElement("h2");
        modalHeader.textContent = player.name;
        modalHeader.classList.add("modal-header");
        modalBody.appendChild(modalHeader);

        document.querySelectorAll("#name").innerHTML = player.name;

        const closeModalBtn = document.createElement("p");
        closeModalBtn.classList.add("modal-close-btn");
        closeModalBtn.textContent = "x";
        modalHeader.appendChild(closeModalBtn);
        //CREATE THE OTHER PAGES IN NAV AND LINK THEM, ALLY SAID USE HTML LINKS TO EACH
        //IN VIDEOS TRY TO USE ASYNC TO GET THEM INSTEAD?
        //TIDY DESIGN, ESPECIALLY MODAL HEADER HEIGHT
        //MAKE FOOTER STICKY
        //ADD TABLE TO THE MODAL AND MAKE THE DESIGN BETTER FOR THE DATA
        //CHANGE THE MODAL TO HTML STRUCTURE AND ADD ONE FUNCTION (ABOVE) TO INSERT THE DATA --
        //IT'S BETTER THIS WAY AS WE NEED LESS CODE AND NOT PUTTING TOO MUCH INTO HTML EITHER --
        //IT SHOULD BE A FEW MORE LINES ABOVE

        //CHANGE TENNIS TO PRJOECTS AND ADD PROJECTS FOLDER TO GIT INSTEAD OF DEMO
        //NODE SERVER

        const modalPic = document.createElement("img");
        modalPic.src = player.modalPhoto;
        modalPic.classList.add("modal-pic");
        modalBody.appendChild(modalPic);

        const modalDOB = document.createElement("p");
        modalDOB.textContent = `Born: ${player.dob}`;
        modalDOB.classList.add("modal-dob", "modal-data");
        modalBody.appendChild(modalDOB);

        const nation = document.createElement("p");
        nation.textContent = `Nationality: ${player.nationality}`;
        nation.classList.add("modal-nation", "modal-data");
        modalBody.appendChild(nation);

        const titles = document.createElement("p");
        titles.textContent = `Total Titles: ${player.titles}`;
        titles.classList.add("modal-titles", "modal-data");
        modalBody.appendChild(titles);

        const slams = document.createElement("p");
        slams.textContent = `Grand Slams: ${player.slams}`;
        slams.classList.add("modal-slams", "modal-data");
        modalBody.appendChild(slams);

        const first = document.createElement("p");
        first.textContent = `First Slam: ${player.firstSlam}`;
        first.classList.add("modal-first", "modal-data");
        modalBody.appendChild(first);

        const last = document.createElement("p");
        last.textContent = `Last Slam: ${player.lastSlam}`;
        last.classList.add("modal-last", "modal-data");
        modalBody.appendChild(last);

        const text = document.createElement("p");
        text.textContent = player.text;
        text.classList.add("modal-text", "modal-data");
        modalBody.appendChild(text);

        // closeModalBtn.addEventListener("click", function (e) {
        //     modal.style.display = "none";
        //     modalBody.textContent = "";
        // });

        const closeModal = function(e) {
          modal.style.display = "none";
          modalBody.textContent = "";
        };

        closeModalBtn.addEventListener("click", closeModal);
        modal.addEventListener("click", closeModal);
      
    }, false);

    // playerList.addEventListener("click", function (e) {
    //   if (e.target.closest("div").classList.contains("modalBtn")) {
    //     console.log(e.target.id);
    //   }
    // })

    // playerList.addEventListener("click", function (e) {
    //   if (e.target && e.target.classList.contains("modalBtn") && e.target.id == player.id) {
    //     console.log(player.name);
    //   }
    // })
    // document.querySelector("body").addEventListener("click", function (e) {
    //   if (e.target.classList.contains("modalBtn") && e.target.id == player.id) {
    //     console.log(player.name);
    //     const modal = document.querySelector(".modal");
    //     // const modalHeader = document.querySelector(".modal-header");
    //     const modalBody = document.querySelector(".modal-body");

    //     modal.style.display = "grid";

    //     const modalHeader = document.createElement("h2");
    //     modalHeader.textContent = player.name;
    //     modalHeader.classList.add("modal-header");
    //     modalBody.appendChild(modalHeader);

    //     const modalPic = document.createElement("img");
    //     modalPic.src = player.modalPhoto;
    //     modalPic.classList.add("modal-pic");
    //     modalBody.appendChild(modalPic);

    //     const modalDOB = document.createElement("p");
    //     modalDOB.textContent = `Born: ${player.dob}`;
    //     modalDOB.classList.add("modal-dob", "modal-data");
    //     modalBody.appendChild(modalDOB);

    //     const nation = document.createElement("p");
    //     nation.textContent = `Nationality: ${player.nationality}`;
    //     nation.classList.add("modal-nation", "modal-data");
    //     modalBody.appendChild(nation);

    //     const titles = document.createElement("p");
    //     titles.textContent = `Total Titles: ${player.titles}`;
    //     titles.classList.add("modal-titles", "modal-data");
    //     modalBody.appendChild(titles);

    //     const slams = document.createElement("p");
    //     slams.textContent = `Grand Slams: ${player.slams}`;
    //     slams.classList.add("modal-slams", "modal-data");
    //     modalBody.appendChild(slams);

    //     const first = document.createElement("p");
    //     first.textContent = `First Slam: ${player.firstSlam}`;
    //     first.classList.add("modal-first", "modal-data");
    //     modalBody.appendChild(first);

    //     const last = document.createElement("p");
    //     last.textContent = `Last Slam: ${player.lastSlam}`;
    //     last.classList.add("modal-last", "modal-data");
    //     modalBody.appendChild(last);

    //     const text = document.createElement("p");
    //     text.textContent = player.text;
    //     text.classList.add("modal-text", "modal-data");
    //     modalBody.appendChild(text);
    //   }
    // })
    
    //ADDED TODAY

    // const modalBtns = document.getElementsByClassName("modalBtn");
    // console.log(typeof(modalBtns));
    // const modalOpenBtns = Object.entries(playerWrapper);
    // console.log(typeof(modalOpenBtns));
    // console.log(playerList.childNodes);

    // [...modalBtns].forEach(function(btn) {
    //   btn.addEventListener("click", function (e) {
        // players.forEach(function (player) {
          // if (e.target.id = player.id) {
            // console.log(player.name);
          // }
        // })
        // if (e.target = playerWrapper) {
        //   console.log(typeof(playerWrapper));
    //     }
    //   })
    // })
    // for (let i = 0; i < modalBtns.length; i++) {
    //   modalBtns[i].addEventListener("click", function (e) {
    //     players.forEach(function (player) {
    //       if (e.target.id.value == player.id) {
    //         console.log(player.name);
    //       }
    //     })
    // })
    // }

    const nameTag = document.createElement("h2");
    nameTag.innerHTML = player.name;

    const nationalityTag = document.createElement("h4");
    nationalityTag.innerHTML = player.nationality;

    const slamsTag = document.createElement("p");
    slamsTag.innerHTML = "Grand Slams: " + player.slams;

    const playerImage = document.createElement("img");
    playerImage.src = player.photo;


    playerWrapper.appendChild(nameTag);
    playerWrapper.appendChild(nationalityTag);
    playerWrapper.appendChild(slamsTag);
    playerWrapper.appendChild(playerImage);

    return playerWrapper;
  }
  
  function displayPlayers() {
    for(const player of players) {
      const nameTag = createPlayer(player);
      playerList.appendChild(nameTag);
      // playerList.addEventListener("click", function (e) {
      //   players.forEach(function (player) {
      //     if (e.target == player.id) {
      //       console.log(player.name);
      //     }
      //   })
      // })
    }
  }

  function filteredPlayers(e) {
    playerList.innerHTML = "";

    const value = e.target.value.toLowerCase();
    // if not input - display players 
    if (value.length === 0) {
      displayPlayers();
    }

    if (value.length > 0) {
      for (const player of players) {
        const name = player.name.toLowerCase();
        const nation = player.nationality.toLowerCase();
        if (name.includes(value) || nation.includes(value)) {
          const nameTag = createPlayer(player);
          playerList.appendChild(nameTag);
        }
      }
    }
    
  }

  function addHandlers() {
    const searchInput = document.getElementById("searchBar");
    searchInput.addEventListener("keyup", filteredPlayers, false);
  }

  function init() {
    displayPlayers();
    addHandlers();
  }

  init();
}

// const modalBtns = document.querySelectorAll("modalBtn");
// for (let i = 0; i < modalBtns.length; i++) {
//   modalBtns[i].addEventListener("click", function () {
//     console.log("clicked");
// })
// }

    // NEW 
    // playerWrapper.classList.add(".modal-open");

    //test git

    //git test branch

    // playerWrapper.addEventListener("click", function() {
    //   // alert("modal working");
    //   function createModal(modal) {
    //     const modalWrapper = document.createElement("div");
    //     modalWrapper.classList.add("modal-wrapper");

    //     const modalHead = document.createElement("h3");
    //     modalHead.innerHTML = player.name;

    //     const closeBtns = document.createElement("span");
    //     closeBtns.innerHTML = "x";
    //     closeBtns.classList.add(".close-btns");

    //     const playerStats = document.createElement("p");
    //     playerStats.innerHTML = "Born: " + player.dob + "<br>" + "nationality: " + player.nationality + "<br>" + "First Slam: " + player.firstSlam + "<br>" + "Last Slam: " + player.lastSlam + "<br>" + "Total Slams: " + player.slams + "<br>" + "Total Titles: " + player.titles;
    //     playerStats.classList.add(".modal-stats");

    //     const playerText = document.createElement("p");
    //     playerText.innerHTML = player.text;
    //     playerText.classList.add(".modal-text");

    //     const modalTable = document.createElement("table");
    //     modalTable.innerHTML = "";
    //     modalTable.classList.add(".modal-table");

    //     const modalImage = document.createElement("img");
    //     modalImage.src = player.modalPhoto;
    //     modalImage.classList.add(".modal-img");
    // })
