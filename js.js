            

            function getMenuOpen() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }
            
            
            function first() {
            
            document.getElementById("second_hide").setAttribute("style", "opacity:1; transition: 1s; height: 100%;");
            
            document.getElementById("first").setAttribute("style", "display: none");
            
            document.getElementById("first_yelloy").setAttribute("style", "display: block");
            
            }
            
            function first_yelloy() {
            
            document.getElementById("second_hide").setAttribute("style", "display: none");
            
            document.getElementById("first_yelloy").setAttribute("style", "display: none");
            
            document.getElementById("first").setAttribute("style", "display: block");
            
            }
            
            let btn = document.querySelector(".hidden")
            btn.addEventListener('click', function() {
            	btn.style.display= "none"
            })
