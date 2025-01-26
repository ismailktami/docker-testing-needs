FROM cypress/included:13.3.3
RUN apt-get -y update
RUN apt-get install -y curl
RUN apt-get install -y ca-certificates
RUN apt-get install -y unzip
RUN apt-get install -y zip
RUN curl -L -o /tmp/cucumber-json-formatter "https://github.com/cucumber/json-formatter/releases/download/v19.0.0/cucumber-json-formatter-linux-amd64"
RUN mv /tmp/cucumber-json-formatter /usr/local/bin/cucumber-json-formatter
RUN chmod +x /usr/local/bin/cucumber-json-formatter
ENTRYPOINT ["sh", "-c", "tail -f /dev/null"]
