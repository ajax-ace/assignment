
<!DOCTYPE html>
<html>
<head>
	<title>Password Validation Example</title>
	<script>
		function validatePassword() {
			// Get form inputs
			var password = document.getElementById("password").value;
			var repeatPassword = document.getElementById("repeat-password").value;

			// Check if password and repeat password are the same
			if (password !== repeatPassword) {
				alert("Password and Repeat Password do not match");
				return false;
			}

			// Check password length and character requirements
			if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
				alert("Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.");
				return false;
			}

			// Validation passed
			alert("Validation passed!");
			return true;
		}
	</script>
</head>
<body>
	<form onsubmit="return validatePassword();">
		<label for="name">Name:</label>
		<input type="text" id="name" name="name"><br><br>

		<label for="password">Password:</label>
		<input type="password" id="password" name="password"><br><br>

		<label for="repeat-password">Repeat Password:</label>
		<input type="password" id="repeat-password" name="repeat-password"><br><br>

		<label for="email">Email:</label>
		<input type="email" id="email" name="email"><br><br>

		<label for="dob">Date of Birth:</label>
		<input type="date" id="dob" name="dob"><br><br>

		<input type="submit" value="Submit">
	</form>
</body>
</html>
