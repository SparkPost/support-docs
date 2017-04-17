echo -e "Host *\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
rm deploy-key.enc
eval "$(ssh-agent -s)"
chmod 600 deploy-key
ssh-add deploy-key