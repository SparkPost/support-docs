#!/usr/bin/env bash
set -e

echo -e "Host *\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
rm deploy-key.enc
chmod 600 deploy-key
mv deploy-key ~/.ssh/id_rsa
