const root = document.getElementById('root')

const app = document.createElement('div')
app.style.display = 'flex'
app.style.justifyContent = 'center'
app.style.alignItems = 'center'
app.style.height = '100vh'

const h1 = document.createElement('h1')
h1.innerText = 'This is a test app'

app.appendChild(h1)
root.appendChild(app)
