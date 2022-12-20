# Qwk_task
Login

## Clone the repo
```
git clone https://github.com/Hamsavardhan2411/Qwk_task.git
```
## Install Packages
```
cd frontend
npm install
cd ..
cd server 
npm install
```

## Create schema in PosgreSQL
Change your pgAdmin Passowrd in .env and then proceed
```
npx prisma db push
```
## Start the development server 
```
cd server
npm start
cd ..
cd frontend 
npm start
```
### Redirect to locahost:3000/signup for Sign Up Page and localhost:3000/login for Login page.
### For server, redirect to localhost:4000
