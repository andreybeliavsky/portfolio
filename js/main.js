$(document).ready(function() {
	
	// pageScroll2id
	$("a[href*='#']").mPageScroll2id({
	});

	// mixitup
	var mixer = mixitup('#works');

	$('[data-fancybox="gallery"]').fancybox({
	loop: true
	});

	// jquery-validation
	$("#contact-form").validate({
		rules: {
			name: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true
			}
		},
		messages: {
			name: "Введите свое имя",
			email: {
				required: "Введите свой email",
				email: "Email должен быть в формате name@domain.com"
			},
			message: "Введите свое сообщение"
		},
		submitHandler: function(form) {
		  ajaxFormSubmit();
		}
	});

	function ajaxFormSubmit(){
		var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

		// Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string
			
			// Функция если все прошло успешно
			success: function(html){
				$("#contact-form").slideUp(800);
				$('#answer').html(html);
				$('#contact-form').trigger("reset");
			}
		});

		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	};
	$(window).bind('beforeunload',function(){
		$('#contact-form').trigger("reset");
		

});
	
});