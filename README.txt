# quick start


### clone the repository
git clone https://github.com/MathildePaya/themagesshop.git
cd themagesshop

### install the necessary dependencies
pip install -r requirements.txt 

### run the server in one terminal
cd backend
py manage.py runserver

### run the frontend in another
cd frontend
npm install
npm start


# current state

Right now, you can log in with two different users (the fields and the barn should be different) :
- username : maddie , password : pass
- username : heyyou , password : word
Or create your own user ! 

You can buy, sell, cultivate and harvest your fields, but none of the logic (the harvest should go into your barn, you should only be able to cultivate a field if you have enough of the plant, etc.) is available.