#!/bin/sh

npx prisma migrate dev
-c /app/wait-for-it.sh db:3306 -t 30
npx prisma migrate dev
npx prisma db seed 
node ./src/index.js
