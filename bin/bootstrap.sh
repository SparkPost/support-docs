#!/usr/bin/env bash
command_exists () {
  command -v "$1" >/dev/null 2>&1;
}

# ensure wp cli is installed
echo "------------------------------"
echo "Ensuring wp-cli is present"
if ! command_exists wp; then
  echo "Installing wp-cli"
  curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
  chmod +x wp-cli.phar
  mv wp-cli.phar /usr/local/bin/wp
fi
echo "wp-cli is installed"

# ensure jq is installed
echo
echo "------------------------------"
echo "Ensuring jq is present"
if ! command_exists jq; then
  echo "Installing jq"
  brew install jq
fi
echo "jq is installed"

# npm dependencies
echo
echo "------------------------------"
echo "Installing npm dependencies"
DIR=`pwd`
cd $DIR/bin && npm install
cd $DIR/export && npm install
echo "npm dependencies installed"

