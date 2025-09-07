# Server running guide

## Step 1:

Pull via Cloudways 

## Step 2
Stop the pm2 server using 'pm2 stop processId | name' or delete the process via pm2 delete prodeceId | process-name &
Remove node_modules & dist/ directory

## Step 3 
npm install && npm run build

## Step 4
Restart the process pm2 start processId | process-name or
pm2 start dist/index.js --name process-name

# Completed the step
