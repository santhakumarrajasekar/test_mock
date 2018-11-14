FROM amsnov01.internal.colt.net:5000/colt/node-tiny:latest
RUN mkdir /code
COPY . /code/

WORKDIR /code
CMD ["npm"
 "install"]
EXPOSE 8430

CMD ["node"
 "app.js"]
