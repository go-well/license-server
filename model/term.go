package model

import "time"

type Term struct {
	Id          int64     `json:"id"`
	ProductId   int64     `json:"product_id" xorm:"index"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Year        int       `json:"year"`
	Month       int       `json:"month"`
	Day         int       `json:"day"`
	Price       int       `json:"price"` //fen
	Updated     time.Time `json:"updated" xorm:"updated"`
	Created     time.Time `json:"created" xorm:"created"`
	Deleted     time.Time `json:"-" xorm:"deleted"`
}
