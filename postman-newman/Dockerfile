#Romain Lauren
FROM node:16
# Installer les dépendances nécessaires
RUN npm install -g newman \
    newman-reporter-htmlextra \
    newman-reporter-junitfull \
    newman-reporter-junitxray \
    newman-reporter-junitxray-byfolder \
    && npm install @types/newman --save
