external_url 'http://git.testando.um/'
gitlab_rails['allowed_hosts'] = ['git.testando.um', '127.0.0.1', 'localhost']

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
gitlab_rails['internal_api_url'] = 'http://git.testando.um/'
web_server['external_users'] = ['www-data']