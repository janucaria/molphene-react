FROM ubuntu:18.04

LABEL maintainer="Januar Andaria <janucaria@gmail.com>"

WORKDIR /tmp

RUN apt-get update \
  && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
  && apt-get install -y  --no-install-recommends \
  git \
  pkg-config \
  wget \
  && wget -O- https://deb.nodesource.com/setup_14.x | bash - \
  && apt-get update \
  && apt-get install -y --no-install-recommends nodejs \
  && wget -O- https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update \
  && apt-get install -y --no-install-recommends yarn \
  && true

WORKDIR /app
