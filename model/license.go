package model

import (
	"time"
)

type License struct {
	Id           int64     `json:"id"`
	ProductId    int64     `json:"productId" xorm:"index"`
	User         string    `json:"user"`
	Email        string    `json:"email"`
	Cellphone    string    `json:"cellphone"`
	Organization string    `json:"organization"`
	License      string    `json:"license"`
	ExpireAt     time.Time `json:"expireAt"`
	Updated      time.Time `json:"updated" xorm:"updated"`
	Created      time.Time `json:"created" xorm:"created"`
	Deleted      time.Time `json:"-" xorm:"deleted"`
}
