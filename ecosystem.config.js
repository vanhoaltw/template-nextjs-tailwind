module.exports = {
  apps: [
    {
      name: 'Broadlandmedia',
      script: '/root/.nvm/versions/node/v14.18.1/bin/yarn',
      args: 'start',
      instances: 1,
      exec_mode: 'cluster',
      autorestart: true,
      max_memory_restart: '500M',
    },
  ],
  deploy: {
    production: {
      user: 'root',
      host: '137.184.14.68',
      key: 'deploy.key',
      ref: 'origin/main',
      repo: 'git@github.com:moondevvn/broadlandmedia-next.git',
      ssh_options: ['StrictHostKeyChecking=no'],
      path: '/var/www/broadlandmedia',
      'post-deploy': 'pm2 restart ecosystem.config.js && pm2 save',
    },
  },
}
