sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("bsh_notification.controller.CreateSalesOrder", {
		onInit : function(){
			
		    this.oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("bsh_notification", "/Product.json"));
			this.oTable = this.getView().byId("idProductsTable");
			this.getView().setModel(this.oModel);
		},
		onAllSalesOrder : function(){
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("OverViewSalesOrder");
		}

	});
});