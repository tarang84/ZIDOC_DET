(function() {
	"use strict";
	/*global sap, jQuery */

	/**
	 * @fileOverview Application component to display information on entities from the GWSAMPLE_BASIC
	 *   OData service.
	 * @version @version@
	 */
	jQuery.sap.declare("ZOVP.IDOC.ZIDOC_DET.Component");

	jQuery.sap.require("sap.ovp.app.Component");

	sap.ovp.app.Component.extend("ZOVP.IDOC.ZIDOC_DET.Component", {
		metadata: {
			manifest: "json"
		}
	});
}());