package api

import (
	"encoding/hex"
	"fmt"
	"github.com/zgwit/go-license"
	"license-server/db"
	"license-server/model"
	"time"
)

func licenseBeforeCreate(data interface{}) error {
	lic := data.(*model.License)

	var product model.Product
	has, err := db.Engine.ID(lic.ProductId).Get(&product)
	if err != nil {
		return err
	}
	if !has {
		return fmt.Errorf("产品 %d 不存在", lic.ProductId)
	}

	var term model.Term
	has, err = db.Engine.ID(lic.TermId).Get(&term)
	if err != nil {
		return err
	}
	if !has {
		return fmt.Errorf("期限 %d 不存在", lic.TermId)
	}

	var licence license.Licence
	licence.Product = product.Name
	licence.User = lic.User

	if product.UUID {
		licence.UUID = lic.UUID
	}
	if product.MAC {
		licence.MAC = lic.MAC
	}
	if product.SN {
		licence.SN = lic.SN
	}
	if product.CPU {
		licence.CPUID = lic.CPU
	}

	now := time.Now()
	lic.ExpireAt = now.AddDate(term.Year, term.Month, term.Day)

	licence.ExpireAt = lic.ExpireAt.Format("2006-01-02")

	key, _ := hex.DecodeString(product.PrivateKey)
	licence.Sign(key)

	lic.License = licence.Encode()

	return nil
}
