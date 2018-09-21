var app = angular.module("TestApp", []);

app.controller("TestAppCtrl", function ($scope) {
	$scope.items = {
		ques1: {
			title: "Какой CSS атрибут сделает елемент на 50% прозрачным?",
			no1: {title: "filter:50%", answer: false},
			no2: {title: "transparency:0.5", answer: false},
			no3: {title: "transparency:50%", answer: false},
			no4: {title: "opacity:0.5", answer: true}
		},
		ques2: {
			title: "Выберите фрагмент кода, который сделает элемент видимым:",
			no1: {title: "e.style.visibility = 'true';", answer: false},
			no2: {title: "e.style.display = 'true';", answer: false},
			no3: {title: "e.hidden = false;", answer: false},
			no4: {title: "e.style.display = 'block';", answer: true}
		},
		ques3: {
			title: "Для определение стиля HTML документа используется:",
			no1: {title: "XML", answer: false},
			no2: {title: "XSLT", answer: false},
			no3: {title: "CSS", answer: true},
			no4: {title: "XHTML", answer: false}
		},
		ques4: {
			title: "С помощью какого CSS атрибута можно задать постоянно видимые полосы прокрутки?",
			no1: {title: "scrollbar:auto;", answer: false},
			no2: {title: "scrollbar:visible;", answer: false},
			no3: {title: "overflow:scroll;", answer: true},
			no4: {title: "overflow:vertical;", answer: false}
		},
		ques5: {
			title: "Какой фрагмент кода меняет шрифт элемента на Tahoma?",
			no1: {title: "e.style = 'font-family:Tahoma';", answer: false},
			no2: {title: "e.setStyle('font-family','Tahoma');", answer: false},
			no3: {title: "e.style.font_Family='Tahoma';", answer: false},
			no4: {title: "e.style.fontFamily='Tahoma';", answer: true}
		}
	};

	$scope.options = [ {display: "Вопрос 1", value: "ques1"},
					   {display: "Вопрос 2", value: "ques2"},
					   {display: "Вопрос 3", value: "ques3"},
					   {display: "Вопрос 4", value: "ques4"},
					   {display: "Вопрос 5", value: "ques5"} ];

	$scope.mode = $scope.options[0];

	$scope.processTest = "TestProcess.html";
	$scope.resultTest = "TestResult.html";
	$scope.url = $scope.processTest;

	$scope.showResult = function() {
		$scope.url = $scope.resultTest;
	}

	$scope.now = currentDate();
	
	function currentDate() {
		var now = new Date(),
			date = now.getDate(), 
			month = now.getMonth() + 1, 
			year = now.getFullYear();

		if(month < 10) {
			month = "0" + month;
		}

		return date+"-"+month+"-"+year;
	}

	$scope.userAnswers = {answer1: "false", answer2: "false", answer3: "false", answer4: "false", answer5: "false"};

	$scope.add = function(e) {
		var key = e.currentTarget.name;
		$scope.userAnswers[key] = e.currentTarget.value;
	}

	$scope.total = function() {
        var count = 0;
        
        angular.forEach($scope.userAnswers, function(val) {
        	if(val == "true")
            	count ++;
        });
        return count;
    };

    $scope.wrong = function() {
        var count = "";
        
        angular.forEach($scope.userAnswers, function(val, key) {
        	if(val == "false") {
        		// console.log(key);
        		var temp = key.charAt(key.length-1);
            	count = count + temp + ", ";
        	}
        });
        count = count.slice(0, -2)
        // console.log(count);
        if(count == "") count = "0"
        	
        return count;
    };
});