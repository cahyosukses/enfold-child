jQuery(document).ready(function(event) {
	
	/* Add upsells calls on cart add-on*/
	
	jQuery(".sfn-cart-addons").addClass("upsells");
	
	jQuery(".sfn-cart-addons").siblings(".product-sorting").remove();
	
	//Read More and Less More : Case Study 
	jQuery("#casestudy_precision section:nth-child(3)").hide();
	jQuery("#casestudy_precision .avia-button-wrap a").click(function(){
		if(jQuery("#casestudy_precision section:nth-child(3)").is(":visible")){
			jQuery("#casestudy_precision section:nth-child(3)").slideUp(1500);
			jQuery(this).html("Read more");
		}else{
			jQuery("#casestudy_precision section:nth-child(3)").slideDown(1500);
			jQuery(this).html("Less");
		}
	});
	
	// Add to Cart / Change markup text and little tweeks
	jQuery(".cart .single_add_to_cart_button").html("Add to basket");
	jQuery(".cart .actions .button").attr("value","Update");
	jQuery(".wc-proceed-to-checkout .checkout-button").html("Check out");
	jQuery(".place-order #place_order").attr("value","Send request");
	jQuery(".woocommerce .woocommerce-thankyou-order-received").html("Thank you text will appear, including info stating they  will be contacted by a Dell rep within 48 hours. The info will also inform them that  will receive a confirmation email  including a summary of order details,  customer details and  shipping address.");
	
	/* Back to front page link gererate */
	var baseUrl = document.location.origin;
	jQuery(".woocommerce .woocommerce-thankyou-order-received").append("<a href='"+baseUrl+"' class='frontpagebtn'>Back to front page</a>");
	
	/* Code not work link generate */
	jQuery(".code-not-work").attr("href", baseUrl+ "/contact");
	
	/* Description Tab removed and only keep additional information tab */
	jQuery(".single-product-summary .woocommerce-tabs .additional_information_tab").addClass("active");
	jQuery(".single-product-summary .woocommerce-tabs .reviews_tab").addClass("active");
	jQuery(".single-product-summary .woocommerce-tabs #tab-additional_information").css("display","block");
	jQuery(".single-product-summary .woocommerce-tabs #tab-reviews").css("display","block");
	
	/* Cart Page : Update Button visibility manage if cart item >1 then update button display */
	var itemCount = jQuery(".cart .cart_item").length;
	if(itemCount==1){
		jQuery(".cart .actions .button").css("display","none");
	}
	
	/* Billing Text change to Delivery Address */
	jQuery(".woocommerce-account .address h3").html("Delivery address");
	
	
	/* Booking Confimation page customization as per client brief */
	jQuery(".woocommerce-order-received .woocommerce-thankyou-order-details").remove();
	jQuery(".woocommerce-order-received .woocommerce p:nth-child(3)").remove();
	jQuery(".woocommerce-order-received .order_details").remove();
	jQuery(".woocommerce-order-received .customer_details").remove();
	jQuery(".woocommerce-order-received .title").remove();
	jQuery(".woocommerce-order-received address").remove();
	jQuery(".woocommerce-order-received .woocommerce h2").remove();
		
	/* Add Play Button on video popup */	
	jQuery("#fullscreen_slider_0 .avia-slideshow-1").append('<a href="#" id="play-video" class="play-video">Play</a>');
	
	/* Append video-container class with video main wrapper */
	var ditectVideoClass = jQuery(".container_wrap_first .avia-video").length;
	if(ditectVideoClass>0){
		jQuery(".container_wrap_first").addClass("video-container");
	}
	
		
	/* Click to load video on popup and settings for iframe video loading and onmouseout click */
	/*jQuery('#play-video').click(function(e) {
		jQuery('.video-container').lightbox_me({
			centered: true, 
			onLoad: function() { 
				jQuery('.video-container').css("display","block");
					if(jQuery('.video-container').length>0){
						var influencerVideo = jQuery(".video-container iframe").attr("src");
						if(influencerVideo.search("feature=oembed")>0){
							var getVideoUrl = influencerVideo.split("?");
						}else{
							var getVideoUrl = influencerVideo.split("&");
						}						
						var videoUrl = getVideoUrl[0];
						jQuery(".video-container iframe").attr("src",videoUrl+"?autoplay=1&cc_load_policy=1");
					}
				}
				
			});
		e.preventDefault();
	});*/
	
	/* OPEN BOOKING CALENDAR POPUP + Trigger to specific Date Auto  */
	jQuery(".upsells .wc-bookings-booking-form-button").click(function(){
		jQuery(".upsells").append("<div class='overlay'></div>");
		var bookingCost = jQuery(this).siblings("#wc-bookings-booking-form").find(".wc-bookings-booking-cost strong").length;
		
		/* For real testing open POP Up box */
		//jQuery(this).siblings("#wc-bookings-booking-form").attr("style","display:block !important");

		// Close existing alert message.
		window.realAlert = window.alert;
		window.alert = function() {};
		
		if(bookingCost==0){  // of Check Booking Cost not available 
			var getDateValues = jQuery("tbody .cart_item:first-child .variation .variation-BookingDate p").text().split(" ");
			var getActualDate = getDateValues[1].split(",");	
			var getMonthName = getDateValues[0];  // Get the recent product booking date month name;
			var getYearName = getDateValues[2];   // Get the recent product booking date Year name;
			var calendarYearId = jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-title .ui-datepicker-year").text();
			
			// Minus product booked month id from booking calendar month id and store value to var calendarBookingMonthId;
			var calendarBookingYearId = getYearName-calendarYearId;
				
			if(calendarBookingYearId==0){  // If Current Year
			
				var getCalendarMonthName = jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-title .ui-datepicker-month").text();
			
				// Booking Calendar month id 
				if(getCalendarMonthName=="January"){
					var calendarMonthId = 1;
				}
				else if(getCalendarMonthName=="February"){
					var calendarMonthId = 2;
				}
				else if(getCalendarMonthName=="March"){
					var calendarMonthId = 3;
				}
				else if(getCalendarMonthName=="April"){
					var calendarMonthId = 4;
				}
				else if(getCalendarMonthName=="May"){
					var calendarMonthId = 5;
				}
				else if(getCalendarMonthName=="June"){
					var calendarMonthId = 6;
				}
				else if(getCalendarMonthName=="July"){
					var calendarMonthId = 7;
				}
				else if(getCalendarMonthName=="August"){
					var calendarMonthId = 8;
				}
				else if(getCalendarMonthName=="September"){
					var calendarMonthId = 9;
				}
				else if(getCalendarMonthName=="October"){
					var calendarMonthId = 10;
				}
				else if(getCalendarMonthName=="November"){
					var calendarMonthId = 11;
				}
				else if(getCalendarMonthName=="December"){
					var calendarMonthId = 12;
				}
	
				// Recent Product booked Month id
				if(getMonthName=="January"){
					var bookingMonthId = 1;
				}
				else if(getMonthName=="February"){
					var bookingMonthId = 2;
				}
				else if(getMonthName=="March"){
					var bookingMonthId = 3;
				}
				else if(getMonthName=="April"){
					var bookingMonthId = 4;
				}
				else if(getMonthName=="May"){
					var bookingMonthId = 5;
				}
				else if(getMonthName=="June"){
					var bookingMonthId = 6;
				}
				else if(getMonthName=="July"){
					var bookingMonthId = 7;
				}
				else if(getMonthName=="August"){
					var bookingMonthId = 8;
				}
				else if(getMonthName=="September"){
					var bookingMonthId = 9;
				}
				else if(getMonthName=="October"){
					var bookingMonthId = 10;
				}
				else if(getMonthName=="November"){
					var bookingMonthId = 11;
				}
				else if(getMonthName=="December"){
					var bookingMonthId = 12;
				}
				
				// Minus product booked month id from booking calendar month id and store value to var calendarBookingMonthId;
				var calendarBookingMonthId = bookingMonthId-calendarMonthId;
				
				if(calendarBookingMonthId==0){
				}
				else if(calendarBookingMonthId==1){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==2){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==3){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==4){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==5){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==6){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==7){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==8){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==9){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==10){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==11){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
			}
			else if(calendarBookingYearId==1){ // If Current Year is great than 1 (>1)
				
				var getCalendarMonthName = jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-title .ui-datepicker-month").text();
				
				// Booking Calendar month id 
				if(getCalendarMonthName=="January"){
					var calendarMonthId = 1;
				}
				else if(getCalendarMonthName=="February"){
					var calendarMonthId = 2;
				}
				else if(getCalendarMonthName=="March"){
					var calendarMonthId = 3;
				}
				else if(getCalendarMonthName=="April"){
					var calendarMonthId = 4;
				}
				else if(getCalendarMonthName=="May"){
					var calendarMonthId = 5;
				}
				else if(getCalendarMonthName=="June"){
					var calendarMonthId = 6;
				}
				else if(getCalendarMonthName=="July"){
					var calendarMonthId = 7;
				}
				else if(getCalendarMonthName=="August"){
					var calendarMonthId = 8;
				}
				else if(getCalendarMonthName=="September"){
					var calendarMonthId = 9;
				}
				else if(getCalendarMonthName=="October"){
					var calendarMonthId = 10;
				}
				else if(getCalendarMonthName=="November"){
					var calendarMonthId = 11;
				}
				else if(getCalendarMonthName=="December"){
					var calendarMonthId = 12;
				}
	
				// Recent Product booked Month id
				if(getMonthName=="January"){
					var bookingMonthId = 13;
				}
				else if(getMonthName=="February"){
					var bookingMonthId = 14;
				}
				else if(getMonthName=="March"){
					var bookingMonthId = 15;
				}
				else if(getMonthName=="April"){
					var bookingMonthId = 16;
				}
				else if(getMonthName=="May"){
					var bookingMonthId = 17;
				}
				else if(getMonthName=="June"){
					var bookingMonthId = 18;
				}
				else if(getMonthName=="July"){
					var bookingMonthId = 19;
				}
				else if(getMonthName=="August"){
					var bookingMonthId = 20;
				}
				else if(getMonthName=="September"){
					var bookingMonthId = 21;
				}
				else if(getMonthName=="October"){
					var bookingMonthId = 22;
				}
				else if(getMonthName=="November"){
					var bookingMonthId = 23;
				}
				else if(getMonthName=="December"){
					var bookingMonthId = 24;
				}
				
				// Minus product booked month id from booking calendar month id and store value to var calendarBookingMonthId;
				var calendarBookingMonthId = bookingMonthId-calendarMonthId;
				
				if(calendarBookingMonthId==0){
				}
				else if(calendarBookingMonthId==10){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==11){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==12){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==13){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==14){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==15){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==16){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==17){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==18){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==19){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
				else if(calendarBookingMonthId==20){
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
					jQuery(this).siblings("#wc-bookings-booking-form").find(".ui-datepicker-next").trigger("click");
				}
			}
			
		
			// NOW CLICK TO SPECIFIC DATE
			jQuery(this).siblings("#wc-bookings-booking-form").find("tr .bookable").each(function(){
				var calendarDay = jQuery(this).find("a").text();
				if(getActualDate[0]==calendarDay){
					jQuery(this).find("a").trigger("click");
				}
			});
			
			jQuery(this).addClass("button-ready");  // Add Class button-ready to activate next operations. 
		}
	});
	
	/* LATEST CODE: Add to Cart After ajax request completed successfully */
	jQuery(document).ajaxComplete(function() {
	  jQuery(".button-ready").trigger("click");
	});
	
	/* OLD CODE: Add to Cart After ajax request completed successfully */
	/*jQuery(document).ajaxComplete(function() {
	  jQuery(".upsells li").each(function(){
		  var disableLink = jQuery(this).find(".cart .disabled").length;
		  if(disableLink==0){  // when disabled class is missing from add to basket button then click to add to basket button for add to cart
			  jQuery(this).find(".wc-bookings-booking-form-button").trigger("click");
		  }
	  });
	});*/
	
	/* Close Booking calender window */
	/*jQuery(".closebookingwindow").bind("click", function(){
		jQuery(this).parent("#wc-bookings-booking-form").removeAttr("style");
		jQuery(this).parent("#wc-bookings-booking-form").attr("style","display:none");
		jQuery(".overlay").remove();	
	});*/
	
	/* Form Actions Removed */
	jQuery(".home .avia_ajax_form").addClass("personal_code_form");
	jQuery(".home .avia_ajax_form").removeClass("avia_ajax_form");
	
	
	/* Language Hover */
	
	jQuery(".avia_wpml_language_switch").hover(function(){
		jQuery(this).css("overflow","visible");
		jQuery(this).css("height","auto");
		jQuery(this).find("li").addClass("active-all");
	}).mouseleave(function(){
		jQuery(this).css("overflow","hidden");
		jQuery(this).css("height","17px");
		jQuery(this).find("li").removeClass("active-all");
	});
	
	
	/* Language Selection Active */
	var currentUrl = window.location.toString();
	var search_lan_da = currentUrl.search("lang=da");
	var search_lan_fr = currentUrl.search("lang=fr"); 	
	
	var searchLan = currentUrl.search("lang=");

	if(searchLan>1){
		var lang_keyword1 = currentUrl.split("lang=");
		var lang_keyword2 = lang_keyword1[1].split("&");
		
		jQuery(".avia_wpml_language_switch li").each(function(){
			var target_laguage = jQuery(this).find(".language_code").text();  // Get language keyword from language menu link
			if(lang_keyword2[0]==target_laguage){
				jQuery(this).addClass("active");
			}
		});
	}else{
		var lang_keyword2 = "en";
		jQuery(".avia_wpml_language_switch li").each(function(){
			var target_laguage = jQuery(this).find(".language_code").text();  // Get language keyword from language menu link
			if(lang_keyword2==target_laguage){
				jQuery(this).addClass("active");
			}
		});
	}
	
	
	/* Langauge visibility Manage */
	
	var searchPrecision = currentUrl.search("precision");
	var searchRugged = currentUrl.search("rugged");
	if(searchPrecision>1){
		var lanCode1 = "pl";
		var lanCode2 = "el";
		
		jQuery(".avia_wpml_language_switch li").each(function(){
			var target_laguage = jQuery(this).find(".language_code").text();  // Get language keyword from language menu link
			if(lanCode1==target_laguage){
				jQuery(this).addClass("pr-active");
			}
			if(lanCode2==target_laguage){
				jQuery(this).addClass("pr-active");
			}
		});
	}
	if(searchRugged>1){
		var lanCode1 = "sv";
		var lanCode2 = "it";
		var lanCode3 = "es";
		
		jQuery(".avia_wpml_language_switch li").each(function(){
			var target_laguage = jQuery(this).find(".language_code").text();  // Get language keyword from language menu link
			if(lanCode1==target_laguage){
				jQuery(this).addClass("pr-active");
			}
			if(lanCode2==target_laguage){
				jQuery(this).addClass("pr-active");
			}
			if(lanCode3==target_laguage){
				jQuery(this).addClass("pr-active");
			}
		});
	}
	
});



