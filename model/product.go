package model

import "time"

//Product 产品
type Product struct {
	Id         int64     `json:"id"`
	Name       string    `json:"name" xorm:"unique"`
	PublicKey  string    `json:"publicKey"`
	PrivateKey string    `json:"privateKey"`
	SN         bool      `json:"sn"`
	CPU        bool      `json:"cpu"`
	MAC        bool      `json:"mac"`
	UUID       bool      `json:"uuid"`
	Disabled   bool      `json:"disabled"`
	Updated    time.Time `json:"updated" xorm:"updated"`
	Created    time.Time `json:"created" xorm:"created"`
	Deleted    time.Time `json:"-" xorm:"deleted"`
}
