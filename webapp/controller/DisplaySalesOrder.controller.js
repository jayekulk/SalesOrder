sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("bsh_notification.controller.DisplaySalesOrder", {

		onInit : function(){
			
		    this.oModel = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("bsh_notification", "/Product.json"));
			this.oTable = this.getView().byId("idProductsTable");
			this.getView().setModel(this.oModel);
		
		},
		getGroup: function (oContext){
			var sKey = oContext.getProperty("Category");
			return {
				key: sKey,
				title: sKey 
			};
		},
		getGroupHeader: function (oGroup){
			return new sap.m.GroupHeaderListItem({
				title: oGroup.title,
				upperCase: false
			});
		},
		onClickOfAdd : function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("CreateSales");
		},
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		}
		
		
	});

});