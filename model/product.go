package model

import "time"

//Product 产品
type Product struct {
	Id         int64     `json:"id"`
	Code       string    `json:"code" xorm:"unique"`
	Name       string    `json:"name"`
	PublicKey  string    `json:"public_key"`
	PrivateKey string    `json:"private_key"`
	SN         bool      `json:"sn" xorm:"'sn'"`
	CPU        bool      `json:"cpu" xorm:"'cpu'"`
	MAC        bool      `json:"mac" xorm:"'mac'"`
	UUID       bool      `json:"uuid" xorm:"'uuid'"`
	Disabled   bool      `json:"disabled"`
	Updated    time.Time `json:"updated" xorm:"updated"`
	Created    time.Time `json:"created" xorm:"created"`
	Deleted    time.Time `json:"-" xorm:"deleted"`
}
