package config

//Database 参数
type Database struct {
	Type     string `yaml:"type" json:"type"`
	URL      string `yaml:"url" json:"url"`
	Debug    bool   `yaml:"debug" json:"debug,omitempty"`
	Sync     bool   `yaml:"sync" json:"sync,omitempty"`
	LogLevel int    `yaml:"log_level" json:"log_level"`
}

var DatabaseDefault = Database{
	Type:     "sqlite",
	URL:      "sqlite.db",
	Debug:    false,
	Sync:     true,
	LogLevel: 4,
}
