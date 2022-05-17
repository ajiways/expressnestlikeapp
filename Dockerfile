FROM node:16.14.0-alpine 

COPY /src /app/src
COPY /jobs /app/jobs
COPY /seeds /app/seeds
COPY ./wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh
COPY ./prisma.start.sh /app/prisma.start.sh
RUN chmod +x /app/prisma.start.sh
COPY /prisma /app/prisma
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

WORKDIR /app

RUN npm ci

ENV DATABASE_URL="mysql://root:example@db:3306/mis"
ENV APP_PORT=3000
ENV NODEMAILER_EMAIL="abner.schmitt7@ethereal.email"
ENV NODEMAILER_PASSWORD="YQSupEsvBzwvgdT753"


CMD [ "./prisma.start.sh" ]
