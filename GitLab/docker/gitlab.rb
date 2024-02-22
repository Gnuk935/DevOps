external_url 'https://git.tidointerior.com/'
gitlab_rails['allowed_hosts'] = ['git.tidointerior.com', '127.0.0.1', 'localhost']

gitlab_rails['initial_root_password'] = "Senh@D@sB0as"

gitlab_rails['rack_attack_git_basic_auth'] = {
  'enabled' => true,
  'ip_whitelist' => ["127.0.0.1"],
  'maxretry' => 5,
  'findtime' => 60,
  'bantime' => 3600
}

gitlab_rails['content_security_policy'] = {
    enabled: true,
    report_only: false
}

nginx['listen_port'] = 80
nginx['listen_https'] = false
puma['enable'] = false
gitlab_rails['internal_api_url'] = 'https://git.tidointerior.com/'
web_server['external_users'] = ['www-data']