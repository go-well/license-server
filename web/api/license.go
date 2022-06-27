package api

import (
	"encoding/hex"
	"fmt"
	"github.com/super-l/machine-code/machine"
	"github.com/zgwit/go-license"
	"license-server/db"
	"license-server/model"
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

	var licence license.Licence
	licence.Product = product.Name
	licence.User = lic.User

	info := machine.GetMachineData()
	if product.UUID {
		licence.UUID = info.PlatformUUID
	}
	if product.MAC {
		licence.MAC = info.Mac
	}
	if product.SN {
		licence.SN = info.SerialNumber
	}
	if product.CPU {
		licence.CPUID = info.CpuId
	}
	licence.ExpireAt = lic.ExpireAt.Format("2006-01-02")

	key, _ := hex.DecodeString(product.PrivateKey)
	licence.Sign(key)

	lic.License = licence.Encode()

	return nil
}
