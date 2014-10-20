<?php
  // Define database connection constants
  define('DB_DSN', 'mysql:host=localhost; dbname=site1');
  define('DB_USER', 'root');  
  define('DB_PASS', '');
  
  try {
		$DBH = new PDO(DB_DSN, DB_USER, DB_PASS);
		$DBH->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch(PDOException $e) {
		echo $e->getMessage();
		die ();
	}
	
	if (!empty($_POST['fio']) && !empty($_POST['email'])) {
		$fio = htmlspecialchars($_POST['fio']);
		$email  = htmlspecialchars($_POST['email']);
		$phone = htmlspecialchars($_POST['phone']);
		//Уберем лишние символы в номере телефона перед занесением в БД
		$massiv = str_split($phone);
		$symbols = array("+", "(", ")", "-", "_");
		$empty  = array("", "", "", "");
		$phone = implode(str_replace($symbols, $empty, $massiv));	
		$descr = htmlspecialchars($_POST['descr']);
		$ip = $_SERVER['REMOTE_ADDR'];		
		$sql = "INSERT INTO mod_feedback (fio, email, phone, descr, ip, dt) VALUES (:fio, :email, :phone, :descr, :ip, NOW())";
		$statement = $DBH->prepare($sql);
		// Sanitize e-mail address
		function spamcheck($field) {
			// Sanitize e-mail address
			$field=filter_var($field, FILTER_SANITIZE_EMAIL);
			// Validate e-mail address
			if(filter_var($field, FILTER_VALIDATE_EMAIL)) {
				return TRUE;
			 } else {
				return FALSE;
			 }
		}
		// Check if "from" email address is valid
		$mailcheck = spamcheck($_POST["email"]);
		if ($mailcheck==FALSE) {
			echo "Неправильно введен электронный адрес.";
		} 		
		//Проверяем валидность телефонного номера
		 else if (strlen($phone) > 1 && strlen($phone) < 12) {
			echo "Неправильно введен номер телефона.";
		}
		else {
			//Insert to database
			$statement->execute(array(
				':fio' => $fio,
				':email' => $email,
				':phone' => $phone,
				':descr' => $descr,
				':ip' => $ip
			));
			//Send mail
			$message = $fio . "\n" . $email . "\n" . $phone . "\n" . $descr;
			$message = wordwrap($message, 70, "\r\n");
			mail("vadblaxmith@gmail.com", "Заявка", $message, "From: $fio\n");
			echo "Ваше сообщение успешно отправлено.";

		}
	} else {
		echo "Пожалуйста, заполните обязательные поля ввода.";
	}	
?>