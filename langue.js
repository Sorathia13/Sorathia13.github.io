$('[lang="en"]').hide();

$('#to-ang').click(function() {
	if (sessionStorage.getItem('language') != "en"){
		localStorage.setItem('language', 'en');
		sessionStorage.setItem('language', 'en');
		$('[lang="fr"]').hide();
		$('[lang="en"]').toggle();
		localStorage.user = JSON.stringify({langue: localStorage.getItem('language')});
		document.getElementById('language2').className = "border-bottom";
		document.getElementById('language1').className = "";
		var fileName = location.href.split("/").slice(-1); 
		if (fileName == "index.html")
			location.reload();
	}
	});

	$('#to-french').click(function() {
	if (sessionStorage.getItem('language') != "fr"){
		localStorage.setItem('language', 'fr');
		sessionStorage.setItem('language', 'fr');
		$('[lang="en"]').hide();
		$('[lang="fr"]').toggle();
		localStorage.user = JSON.stringify({langue: localStorage.getItem('language')});
		document.getElementById('language1').className = "border-bottom";
		document.getElementById('language2').className = "";
		var fileName = location.href.split("/").slice(-1); 
		if (fileName == "index.html")
			location.reload();
	}});


	(function(){
		if(sessionStorage.getItem('language') == null){
			let user;
			if(JSON.parse(localStorage.user) == null){
				user = JSON.parse(localStorage.user);
				localStorage.user = JSON.stringify({langue: "fr"});
				
			}
			localStorage.setItem('language', user.langue);
			sessionStorage.setItem('language', user.langue);
			$('[lang="en"]').hide();
			$('[lang="fr"]').toggle();

		}
		else{
			if(sessionStorage.getItem('language') == "fr"){
				document.getElementById('language1').className = "border-bottom";
			}
			else{
				$('[lang="fr"]').hide();
				$('[lang="en"]').toggle();
				document.getElementById('language2').className = "border-bottom";
			}
		}
	})();