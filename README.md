# stuart-take-home-task
- The automation task is given by stuart company for the QA interview process
- The task include both UI and API scripts

# In this project:
- The test framework is design for:  "https://dashboard.sandbox.stuart.com/new"
- Language:                           javascript
- Framework:                          cypress
- Design pattern:                     POM

# setup the project:
- npm install

- npm install cypress@6.0.1 --save-dev

- npm i -D cypress-wait-until

# open cypress dashborad:
- npx cypress open

# run all test:
- npx cypress run

# run specific test file:
- npx cypress run --spec ./cypress/integration/Tests/stuartTakeHomeTask.spec.js

# plugins: 
- npm i -D cypress-wait-until

# file structure:

├── cypress  
            ├── fixtures                    # holds optional JSON data 
            ├── integration                 # holds the actual test files
            ├── plugins                     # allow you to customize how tests are loaded
            ├── screenshots                 # holds the tests screenshots  
            ├── support                     # file runs before all tests and is a great place to write or load additional custom commands
            ├── videos                      # holds the tests records 
            ├── cypress.json                # cypress configuration file 
            ├── .gitignore                  # ignore the files to commit


