rm deploy-key.enc
eval "$(ssh-agent -s)"
chmod 600 deploy-key
ssh-add deploy-key