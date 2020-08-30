// ****************    button back to top    ******************
jQuery(document).ready(function($){ 	
	if($(".btn-top").length > 0) {
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 350) {
				$(".btn-top").show()
			} else {
				$(".btn-top").hide()
			}
		});
		$(".btn-top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}		
});

// **********************    Navigation    ************************
window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar-bot");
    navbar.classList.toggle("sticky",window.scrollY > 0);
})

// Nav bot
function toggleMenu(){
    var navcenter = document.querySelector (".nav-center");
    navcenter.classList.toggle("togglenavcenter");
}

// **********************    Gallery    ************************
$(document).ready(function(){
    $(".filter-button").click( function() {        
        var value = $(this).attr('data-filter');                
        if(value == "all") {            
            $('.filter').show('1000');        
        }        
        else {            
            $(".filter").not('.'+value).hide('3000');            
            $('.filter').filter('.'+value).show('3000');                    
        }    
    });
});

function myFunction(imgs) {
    var divExpandImg = document.getElementById("divimg");
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    divExpandImg.parentElement.style.display = "block";
}


//****************   WoW js   ********************
new WOW().init();

// Check email and display success pop up 
function successFeedback() {
    var inputemail = document.getElementById('email-feedback').value;
    var inputfeedback = document.getElementById('text-feedback').value;
    var patternemail = /[a-z0-9_\.]{3,}@[a-z0-9]{2,}/ 
    var check_email = patternemail.exec(inputemail);
    if(check_email == null || inputfeedback == '' ) {
        swal("Cancelled", "Your input is wrong.", "error");}
    else {
        swal("Good job!", "Your feedback is sent!", "success");
    }
}

// Catering
function sweetAlert(imgUrl) {
    swal({
        html:
        `<div id="carouselView1" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#carouselView1" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselView1" data-slide-to="1"></li>
                    <li data-target="#carouselView1" data-slide-to="2"></li>
                    <li data-target="#carouselView1" data-slide-to="3"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="`+ imgUrl[0] +`" alt="image error">
                    </div>
                    <div class="carousel-item">
                        <img src="` + imgUrl[1] + `" alt="image error">
                    </div>
                    <div class="carousel-item">
                        <img src=" ` + imgUrl[2] + `" alt="image error">
                    </div>
                    <div class="carousel-item">
                        <img src="` + imgUrl[3] + `" alt="image error">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselView1" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a  class="carousel-control-next" href="#carouselView1" role="button" data-slide="next">
                    <span class="carousel-control-next-icon " aria-hidden="true"></span>
                    <span class="sr-only" >Next</span>
                </a>
            </div>`
            ,
            width: 900,
            padding: '3em',
            background: 'linear-gradient(to top, #dcf390, #4a4b49, #242422, #111110, #111110, #4a4b49, #d3f564)',
            backdrop: `
                rgba(0,0,0,0.7)
                center left
                no-repeat
            `,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Booking',
            cancelButtonText: 'Close'
        }).then((result) => {
              if (result.value) {
                swal({
                    title: 'Booking',
                    input: 'Multiple input',
                    html:
                        '<input id="swal-input1" class="swal2-input" placeholder="Enter your name">' +
                        '<input id="swal-input2" class="swal2-input" placeholder="Enter your phone">',
                    focusConfirm: false,
                    showCancelButton: true,
                    confirmButtonText: 'Confirm',
                    cancelButtonColor: '#d33',
                    preConfirm: () => {
                        return [
                            document.getElementById('swal-input1').value,
                            document.getElementById('swal-input2').value
                        ]
                    },
                    inputValidator: () => {
                        var  value = false;
                        if(document.getElementById('swal-input1').value == ''){
                            return !value && 'You need to enter your name!';
                        } else if(document.getElementById('swal-input2').value == ''){
                            return !value && 'You need to enter your phone!';
                        }
                        if(document.getElementById('swal-input1').value.length < 2){
                            return !value && 'The name must be 2 or more characters!';
                        } else if(document.getElementById('swal-input2').value.length < 10){
                            return !value && 'Phone number must be 10 digits!';
                        }
                    }
                }).then((result) => {
                    if(result){
                        swal({
                            type: 'success',
                            title: 'Successful',
                            html:`
                                <h4>Hi ` + result.value[0] + `</h4>
                                <h4>Your phone is: ` + result.value[1] + `</h4>
                                <h4 class="text-success">We will contact you as soon as possible</h4>
                            `,
                            confirmButtonText: 'Done!'
                        })
                    }
                })
              }
        })
}