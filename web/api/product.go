package api

import (
	"encoding/hex"
	"github.com/zgwit/go-license"
	"license-server/model"
)

func productBeforeCreate(data interface{}) error {
	product := data.(*model.Product)
	pub, pri, err := license.GenerateKeyPair()
	if err != nil {
		return err
	}

	product.PublicKey = hex.EncodeToString(pub)
	product.PrivateKey = hex.EncodeToString(pri)
	return nil
}
