package api

import (
	"github.com/gin-gonic/gin"
	"license-server/db"
	"license-server/model"
)

func activeInfo(ctx *gin.Context) {
	var product model.Product
	has, err := db.Engine.Where("code=?", ctx.Param("code")).Get(&product)
	if err != nil {
		replyError(ctx, err)
		return
	}
	if !has {
		replyFail(ctx, "找不到产品")
		return
	}

	var terms []model.Term
	err = db.Engine.Where("product_id=?", product.Id).Find(&terms)
	if err != nil {
		replyError(ctx, err)
		return
	}

	replyOk(ctx, gin.H{
		"id":      product.Id,
		"product": product.Name,
		"terms":   terms,
	})
}
