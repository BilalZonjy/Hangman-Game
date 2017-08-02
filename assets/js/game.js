	$(document).ready(function() {

	document.addEventListener('keydown', function(event) {
	  var key_code = event.keyCode;

		if ((key_code >= 65 && key_code <= 90) || key_code == 8){
			if (starting_game_code == 0){
				starting_game_code = 1
				$("#lastDateBlinker").remove();
				$('.game-element').css('visibility', 'visible')
			};  

			if (word_finding_code == 0){
				var max = wordslist.length;
				var rand =  Math.floor(Math.random() * max);
				chosen_word = wordslist[rand].toUpperCase();
				word_lenght = chosen_word.length;
				chosen_word = chosen_word.split('');

				var pic_name = 'assets/images/Hangman-' + (0) + '.png';
				$('#picture').attr("src", pic_name);
				for (i in chosen_word){
					word_to_dysplay.push('-')

					};
				$('#current_word_box').text(word_to_dysplay.join(' '))
				$('#remaining_guesses_box').text(number_of_remening_guess)
				word_finding_code = 1

				}
			else{
				var letter_chossen = String.fromCharCode(key_code)
				if (chossen_letter_list.includes(letter_chossen)){
					alert('you already choosed ' + letter_chossen )
				}

				else{

					chossen_letter_list.push(letter_chossen);
					$('#chossen_letter_box').text(chossen_letter_list.join(' '));
					if (chosen_word.includes(letter_chossen)){
						for (i in chosen_word){
							if (chosen_word[i] == letter_chossen){
								word_to_dysplay[i] = letter_chossen;
								$('#current_word_box').text(word_to_dysplay.join(' '));
								console.log(chosen_word);
							};
						};
					
					if (word_to_dysplay.includes('-')){
					}else{
							number_of_win ++;
							$('#current_word_box').text(chosen_word.join(' '));
							$('#win_box').text(number_of_win);
							// reset the game 
							word_finding_code = 1;
							play_victory_sound();
							alert('you found it '+ chosen_word.join(''));
							restart_word_finding();


					};

					}
					else{
						if(number_of_remening_guess > 0) {
							number_of_remening_guess --;
							$('#remaining_guesses_box').text(number_of_remening_guess);
							var pic_name = 'assets/images/Hangman-' + (6-number_of_remening_guess) + '.png';
							$('#picture').attr("src", pic_name);
						}else{
							number_of_loss ++;
							play_loss_sound();
							$('#loss_box').text(number_of_loss);
							// reset the game 
							alert('word was: '+ chosen_word.join(''));							
							restart_word_finding();
							// alert('word was: '+ chosen_word.join(''));


						};
					};

				};

			};
		  };
	});


	function restart_word_finding(){
				var max = wordslist.length;
				var rand =  Math.floor(Math.random() * max);
				chosen_word = wordslist[rand].toUpperCase();
				word_lenght = chosen_word.length;
				chosen_word = chosen_word.split('');
				number_of_remening_guess = 6
				var pic_name = 'assets/images/Hangman-' + (0) + '.png';
				$('#picture').attr("src", pic_name);
				word_to_dysplay = []
				for (i in chosen_word){
					word_to_dysplay.push('-');
					};
				$('#current_word_box').text(word_to_dysplay.join(' '));
				$('#remaining_guesses_box').text(number_of_remening_guess);

				chossen_letter_list = [];
				$('#chossen_letter_box').text(chossen_letter_list.join(' '));

	};
	function play_victory_sound(){
	  var audioElement = document.createElement('audio');
	  audioElement.setAttribute('src', 'assets/sound/win.wav');
	  audioElement.play();
	  setTimeout(blinkLastDateSpan, 1000);
	  audioElement.remove();

	};

	function play_loss_sound(){
	  var audioElement = document.createElement('audio');
	  audioElement.setAttribute('src', 'assets/sound/lost.wav');
	  audioElement.play();
	  setTimeout(blinkLastDateSpan, 1000);
	  audioElement.remove();

	};

	});