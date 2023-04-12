const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Array to store user IDs
const userIds = []

// Route for registration form
app.get('/register', (req, res) => {
    res.send(`
    <form method="POST" action="/register">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br>
      <label for="contact">Contact No.:</label>
      <input type="text" id="contact" name="contact" required><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required><br>
      <label for="repeatPassword">Repeat Password:</label>
      <input type="password" id="repeatPassword" name="repeatPassword" required><br>
      <button type="submit">Register</button>
    </form>
  `)
})

// Route for handling registration form submission
app.post('/register', (req, res) => {
    const { name, email, contact, password, repeatPassword } = req.body

    // Check if password and repeat password match
    if (password !== repeatPassword) {
        return res.send('Error: Passwords do not match')
    }

    // Generate user ID based on first name
    const firstName = name.toLowerCase().split(' ')[0]
    let userNumber = 1

    // Check if user ID already exists, and increment userNumber if necessary
    while (userIds.includes(`${firstName}.${userNumber}`)) {
        userNumber++
    }

    // Add user ID to array
    const userId = `${firstName}.${userNumber}`
    userIds.push(userId)

    // Send welcome message with user ID
    res.send(`Welcome ${name}, your user ID is ${userId}`)
})

// Start server
app.listen(1500, () => {
    console.log('Server started on port 1500')
})
