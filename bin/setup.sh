openssl aes-256-cbc -K $encrypted_e85ef5fe888e_key -iv $encrypted_e85ef5fe888e_iv
  -in deploy-key.enc -out deploy-key -d

rm deploy-key.enc
ssh-add deploy-key