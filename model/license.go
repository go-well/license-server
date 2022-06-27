package model

import (
	"time"
)

type License struct {
	Id           int64     `json:"id"`
	ProductId    int64     `json:"product_id" xorm:"index"`
	TermId       int64     `json:"term_id"`
	UUID         string    `json:"uuid" xorm:"'uuid'"`
	SN           string    `json:"sn" xorm:"'sn'"`
	CPU          string    `json:"cpu" xorm:"'cpu'"`
	MAC          string    `json:"mac" xorm:"'mac'"`
	User         string    `json:"user"`
	Email        string    `json:"email"`
	Cellphone    string    `json:"cellphone"`
	Organization string    `json:"organization"`
	License      string    `json:"license"`
	ExpireAt     time.Time `json:"expire_at"`
	Updated      time.Time `json:"updated" xorm:"updated"`
	Created      time.Time `json:"created" xorm:"created"`
	Deleted      time.Time `json:"-" xorm:"deleted"`
}
