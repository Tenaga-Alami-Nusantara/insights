// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Insights Settings", {
	refresh: function (frm) {
		//Set app_icon_preview max width
		$(frm.fields_dict.app_logo_preview.$img[0]).css("max-width", "10rem");
		$(frm.fields_dict.favicon_preview.$img[0]).css("max-width", "10rem");
	},
});
