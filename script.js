var settingsMenu = document.querySelector('.settings-menu');
var darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle() {
    settingsMenu.classList.toggle("settings-menu-height");
}

// Check the theme on page load
if (localStorage.getItem("theme") === "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}

darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.scrolly-section');
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        if (scrollPosition >= index * window.innerHeight && scrollPosition < (index + 1) * window.innerHeight) {
            section.style.opacity = 1;
        } else {
            section.style.opacity = 0.5;
        }
    });
});


            const API_KEY = 'c5bc119317899a12ba1c6ba2e2c00fc8';
            const BIBLE_ID = 'de4e12af7f28f599-02'; // Example Bible ID
            const VERSES = [
                'JER.29.11', 'PSA.23', '1COR.4.4-8', 'PHP.4.13', 'JHN.3.16',
                'ROM.8.28', 'ISA.41.10', 'PSA.46.1', 'GAL.5.22-23', 'HEB.11.1',
                '2TI.1.7', '1COR.10.13', 'PRO.22.6', 'ISA.40.31', 'JOS.1.9',
                'HEB.12.2', 'MAT.11.28', 'ROM.10.9-10', 'PHP.2.3-4', 'MAT.5.43-44'
            ];
    
            const verseIndex = Math.floor(Math.random() * VERSES.length);
            const verseID = VERSES[verseIndex];
    
            fetch(`https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/verses/${verseID}`, {
                headers: {
                    'api-key': API_KEY
                }
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('verse').innerText = data.data.content;
            })
            .catch(error => console.error('Error fetching verse:', error));
        
            (function() {
                $(document ).ready(function() {
                    getVerse();
                });
              
                $("button").click(function(){
                  getVerse();
                });
              
                var getVerse = function() {
                  $("#spinner").show();
                    $.ajax({
                      url: "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback", 
                      crossDomain: true,
                      dataType: 'jsonp',
                      success: function(result){
                         $("#newQuote")
                           .html('<strong>'+
                                 result[0].bookname+
                                 ' ' + result[0].chapter +
                                 ':' + result[0].verse +
                                 '</strong> ' +
                                 result[0].text);
                        $("#spinner").hide();
                      }
                    });
                }
              })();
              