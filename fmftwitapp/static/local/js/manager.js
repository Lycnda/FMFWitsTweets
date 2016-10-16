google.load("visualization", "1", {packages:["table"]});
google.setOnLoadCallback(drawTable);

function drawTable(dataSet,table_div) {

		var cssClassNames = {
								'oddTableRow': 'myAwesomeClass',
							    'tableRow': 'myAwesomeClass',
							 };

		for( i =0; i<dataSet.length;i++)
		{
			dataSet[i][0] = "<b>" + dataSet[i][0] + "</b>";
			dataSet[i][1] = "<b>" + dataSet[i][1] + "</b>";

		}
        var data = new google.visualization.DataTable();
				data.addColumn('string', '<h3>Tag ID</h3>');
				data.addColumn('string', '<h3>Serial Number</h3>');
				data.addColumn('string', '<h3>Device Type</h3>');

				data.addRows(dataSet);


				var view = new google.visualization.DataView(data);
				view.setColumns([0, 1, 2]);

        var table = new google.visualization.Table(document.getElementById(table_div));
		// var table = new google.visualization.Table(document.getElementById('table_div'));

        // table.draw(data, {height: '600px'});
        // table.draw(view, {height: Math.ceil(window.outerHeight/1.5), width: (window.outerWidth/2.2), allowHtml: true});
        table.draw(view, {height: Math.ceil($(window).height()/1.5), width: Math.ceil($(window).width()/1.2), allowHtml: true,'cssClassNames': cssClassNames});

        function selectHandler(e){

        	console.log(data.getValue(table.getSelection()[0]['row'], 3 ));
          // window.location = data.getValue(table.getSelection()[0]['row'], 3 );
          window.open(data.getValue(table.getSelection()[0]['row'], 3 ));
       }
	google.visualization.events.addListener(table, 'select', selectHandler);
        // console.log("in table");
        // console.log(window.outerHeight/2);
        // showRowNumber: true, page:'enable', pageSize:5,
     };

// function drawTypeTable(dataSet,table_div) {

// 	document.getElementById(table_div).innerHTML = 	'<div class="col-lg-3 col-md-6">' +
// 															'<div id="dropdown_div"></div>'+
// 													'</div>' + 
// 													'<div class="col-lg-3 col-md-6">' +
// 															'<div id="table_type"></div>' +
// 													'</div>';
													

// 	document.getElementById("dropdown_div").innerHTML = 'Device Type <br>' +
//                                       '<select id="device_type_drop" required>' +
//                                                 '<option value="Multimeter">Oscilloscope</option>' +
//                                                 '<option value="Frequency Generator">Function Generator</option>' +
//                                                 '<option value="Multimeter">Multimeter</option>' +
//                                                 '<option value="PowerSupply">Power Supply</option>' +
//                                                 '<option value="SolderingIron">Soldering Iron</option>' +
//                                                 '<option value="Transformer">Transformer</option>' +
//                                                 '<option value="CurrentProbe">Current Probe</option>' +
//                                                 '<option value="Desktop">Desktop</option>' +
//                                                 '<option value="Monitor">Monitor</option>' +
//                                                 '<option value="Keyboard">Keyboard</option>' +
//                                                 '<option value="Mouse">Mouse</option>' +
//                                                 '<option value="CD">Compact Disk</option>' +
//                                                 '<option value="Television">Television</option>' +
//                                          ' </select> <br> <br>';

//      device_dropdown_div = "device_type_drop";

//                     document.getElementById(device_dropdown_div).onclick = function () {
//                                           var x = document.getElementById(device_dropdown_div);
//                                           device_type_drop = x.options[x.selectedIndex].value;
                                          
//                                           var the_new_device_list = [];

// 						                    for( i = 0; i < dataSet.length; i++ )
// 						                    {
						                    		
// 						                    		var the_device_type = dataSet[i][2];
// 						                    		if ( the_device_type == device_type_drop )
// 						                    		{
// 						                    			the_new_device_list.push(dataSet[i]);
// 						                    		}
// 						                    }

// 						                    drawTypeTable(the_new_device_list,"map");


//                                         };


// 		var cssClassNames = {
// 								'oddTableRow': 'myAwesomeClass',
// 							    'tableRow': 'myAwesomeClass',
// 							 };

// 		for( i =0; i<dataSet.length;i++)
// 		{
// 			dataSet[i][0] = "<b>" + dataSet[i][0] + "</b>";
// 			dataSet[i][1] = "<b>" + dataSet[i][1] + "</b>";

// 		}
//         var data = new google.visualization.DataTable();
// 				data.addColumn('string', '<h3>Tag ID</h3>');
// 				data.addColumn('string', '<h3>Serial Number</h3>');
// 				data.addColumn('string', '<h3>Device Type</h3>');

// 				data.addRows(dataSet);


// 				var view = new google.visualization.DataView(data);
// 				view.setColumns([0, 1, 2]);

//         var table = new google.visualization.Table(document.getElementById("table_type"));
// 		// var table = new google.visualization.Table(document.getElementById('table_div'));

//         // table.draw(data, {height: '600px'});
//         // table.draw(view, {height: Math.ceil(window.outerHeight/1.5), width: (window.outerWidth/2.2), allowHtml: true});
//         table.draw(view, {height: Math.ceil($(window).height()/1.5), width: Math.ceil($(window).width()/1.2), allowHtml: true,'cssClassNames': cssClassNames});

//         function selectHandler(e){

//         	console.log(data.getValue(table.getSelection()[0]['row'], 3 ));
//           // window.location = data.getValue(table.getSelection()[0]['row'], 3 );
//           window.open(data.getValue(table.getSelection()[0]['row'], 3 ));
//        }
// 	google.visualization.events.addListener(table, 'select', selectHandler);
//         // console.log("in table");
//         // console.log(window.outerHeight/2);
//         // showRowNumber: true, page:'enable', pageSize:5,
//      };

function drawBorrowedTable(dataSet,table_div) {

		var cssClassNames = {
								'oddTableRow': 'myAwesomeClass',
							    'tableRow': 'myAwesomeClass',
							 };

		for( i =0; i<dataSet.length;i++)
		{
			dataSet[i][0] = "<b>" + dataSet[i][0] + "</b>";
			dataSet[i][1] = "<b>" + dataSet[i][1] + "</b>";

		}
       var data = new google.visualization.DataTable();
				data.addColumn('string', '<h3>Tag ID</h3>');
				data.addColumn('string', '<h3>Name</h3>');
				data.addColumn('string', '<h3>Borrow Date</h3>');
			data.addColumn('string', '<h3>Return Date</h3>');
				data.addColumn('string', '<h3>Late Status</h3>');
			data.addColumn('string', '<h3>Boundary Status</h3>');
				data.addRows(dataSet);


				var view = new google.visualization.DataView(data);
				view.setColumns([0, 1, 2, 3, 4, 5]);

       var table = new google.visualization.Table(document.getElementById(table_div));
		// var table = new google.visualization.Table(document.getElementById('table_div'));

       // table.draw(data, {height: '600px'});
       // table.draw(view, {height: Math.ceil(window.outerHeight/1.5), width: (window.outerWidth/2.2), allowHtml: true});
       table.draw(view, {height: Math.ceil($(window).height()/1.5), width: Math.ceil($(window).width()/1.2), allowHtml: true,'cssClassNames': cssClassNames});

       function selectHandler(e){

       	console.log(data.getValue(table.getSelection()[0]['row'], 3 ));
         // window.location = data.getValue(table.getSelection()[0]['row'], 3 );
         window.open(data.getValue(table.getSelection()[0]['row'], 3 ));
      }
	google.visualization.events.addListener(table, 'select', selectHandler);
       // console.log("in table");
       // console.log(window.outerHeight/2);
       // showRowNumber: true, page:'enable', pageSize:5,
    };


function drawBoundsTable(dataSet,table_div) {

	 var cssClassNames = {
							 'oddTableRow': 'myAwesomeClass',
								 'tableRow': 'myAwesomeClass',
							};

	 for( i =0; i<dataSet.length;i++)
	 {
		 dataSet[i][0] = "<b>" + dataSet[i][0] + "</b>";
		 dataSet[i][1] = "<b>" + dataSet[i][1] + "</b>";

	 }
				var data = new google.visualization.DataTable();
			 data.addColumn('string', '<h3>Tag ID</h3>');
			 data.addColumn('string', '<h3>Name</h3>');
			 data.addColumn('string', '<h3>Borrow Date</h3>');
			 data.addColumn('string', '<h3>Return Date</h3>');

			 data.addRows(dataSet);


			 var view = new google.visualization.DataView(data);
			 view.setColumns([0, 1, 2, 3]);

				var table = new google.visualization.Table(document.getElementById(table_div));
	 // var table = new google.visualization.Table(document.getElementById('table_div'));

				// table.draw(data, {height: '600px'});
				// table.draw(view, {height: Math.ceil(window.outerHeight/1.5), width: (window.outerWidth/2.2), allowHtml: true});
				table.draw(view, {height: Math.ceil($(window).height()/1.5), width: Math.ceil($(window).width()/1.2), allowHtml: true,'cssClassNames': cssClassNames});

				function selectHandler(e){

				 console.log(data.getValue(table.getSelection()[0]['row'], 3 ));
					// window.location = data.getValue(table.getSelection()[0]['row'], 3 );
					window.open(data.getValue(table.getSelection()[0]['row'], 3 ));
			 }
 google.visualization.events.addListener(table, 'select', selectHandler);
				// console.log("in table");
				// console.log(window.outerHeight/2);
				// showRowNumber: true, page:'enable', pageSize:5,
		 };


function devicesAvailable(devices_dataSet)
{		
					document.getElementById("map").innerHTML = "";
					drawTable(devices_dataSet,"map");
					document.getElementById("table_headings").innerHTML = "Devices Available";
					document.getElementById("borrowed_panel").innerHTML = "";
					document.getElementById("late_panel").innerHTML = "";
					document.getElementById("bounds_panel").innerHTML = "";
					document.getElementById("available_panel").innerHTML = "";
					document.getElementById("warning_button").innerHTML = "";
					// document.getElementById("targets_table_label").innerHTML = "<h3>"+ "<span style='color:#6600FF;'>Targets</span> on " + search_topic_str + ": Select Sentences for Classification"+"</h3>";
};

function borrowedDevices(devices_dataSet,device_id)
{
					drawBorrowedTable(devices_dataSet,device_id);

					document.getElementById("table_headings").innerHTML = "Devices Borrowed";
					document.getElementById("borrowed_panel").innerHTML = "";
					document.getElementById("late_panel").innerHTML = "";
					document.getElementById("bounds_panel").innerHTML = "";
					document.getElementById("available_panel").innerHTML = "";
					document.getElementById("warning_button").innerHTML = "";
					// document.getElementById("targets_table_label").innerHTML = "<h3>"+ "<span style='color:#6600FF;'>Targets</span> on " + search_topic_str + ": Select Sentences for Classification"+"</h3>";
};

function boundsDevices(devices_dataSet,device_id)
{
					drawBoundsTable(devices_dataSet,device_id);

					document.getElementById("table_headings").innerHTML = "Out of Bounds Devices";
					document.getElementById("borrowed_panel").innerHTML = "";
					document.getElementById("late_panel").innerHTML = "";
					document.getElementById("bounds_panel").innerHTML = "";
					document.getElementById("available_panel").innerHTML = "";

					document.getElementById("warning_button").innerHTML =
					'<div> <a href="https://mail.google.com/" class="btn btn-info" role="button">Send Warning Email</a></div>';

					// document.getElementById("targets_table_label").innerHTML = "<h3>"+ "<span style='color:#6600FF;'>Targets</span> on " + search_topic_str + ": Select Sentences for Classification"+"</h3>";
}

// function typeTable(list_of_devices,device_id)
// {
// 					// drawBoundsTable(devices_dataSet,device_id);

// 					document.getElementById("table_headings").innerHTML = "View Devices By Type";
// 					document.getElementById("borrowed_panel").innerHTML = "";
// 					document.getElementById("late_panel").innerHTML = "";
// 					document.getElementById("bounds_panel").innerHTML = "";
// 					document.getElementById("available_panel").innerHTML = "";
// 					document.getElementById("warning_button").innerHTML = "";

// 					document.getElementById(device_id).innerHTML = 	'<div class="col-lg-3 col-md-6">' +
// 															'<div id="dropdown_div"></div>'+
// 													'</div>' + 
// 													'<div class="col-lg-3 col-md-6">' +
// 															'<div id="table_type"></div>' +
// 													'</div>';

// 					document.getElementById("dropdown_div").innerHTML = 'Device Type <br>' +
//                                       '<select id="device_type_drop" required>' +
//                                                 '<option value="Multimeter">Oscilloscope</option>' +
//                                                 '<option value="Frequency Generator">Function Generator</option>' +
//                                                 '<option value="Multimeter">Multimeter</option>' +
//                                                 '<option value="PowerSupply">Power Supply</option>' +
//                                                 '<option value="SolderingIron">Soldering Iron</option>' +
//                                                 '<option value="Transformer">Transformer</option>' +
//                                                 '<option value="CurrentProbe">Current Probe</option>' +
//                                                 '<option value="Desktop">Desktop</option>' +
//                                                 '<option value="Monitor">Monitor</option>' +
//                                                 '<option value="Keyboard">Keyboard</option>' +
//                                                 '<option value="Mouse">Mouse</option>' +
//                                                 '<option value="CD">Compact Disk</option>' +
//                                                 '<option value="Television">Television</option>' +
//                                          ' </select> <br> <br>';

//                     device_dropdown_div = "device_type_drop";

//                     document.getElementById(device_dropdown_div).onclick = function () {
//                                           var x = document.getElementById(device_dropdown_div);
//                                           device_type_drop = x.options[x.selectedIndex].value;
//                                           console.log(device_type_drop);
                                          
//                                           var the_new_device_list = [];

// 						                    for( i = 0; i < list_of_devices.length; i++ )
// 						                    {
						                    		
// 						                    		var the_device_type = list_of_devices[i][2];
// 						                    		if ( the_device_type == device_type_drop )
// 						                    		{
// 						                    			the_new_device_list.push(list_of_devices[i]);
// 						                    		}
// 						                    }

// 						                    drawTypeTable(the_new_device_list,"map");


//                                         };


// }

function initMap() {
				         
				        var uluru = {lat: -26.191602, lng: 28.026961};

				        var myOptions = {
													zoom: 20,
				          							center: uluru
										};

				        var map = new google.maps.Map(document.getElementById("map"), myOptions);
				        var marker = new google.maps.Marker({
				          position: uluru,
				          map: map
				        });
 }

function mapDevices(devices_dataSet,borrowed_devices,bounds_devices)
{
	          placard_details = getPlacardValues(devices_dataSet,borrowed_devices,bounds_devices);

	          var num_available_devices = placard_details[0];
	          var num_borrowed_devices = placard_details[1]; 
	          var num_late_devices = placard_details[2]; 
	          var num_bounds_devices = placard_details[3];

	        document.getElementById("table_headings").innerHTML = "Map of Devices";
					document.getElementById("available_panel").innerHTML =
						'<div class="panel-heading">'+
                                '<div class="row">' +
                                    '<div class="col-xs-3">'  +
                                      '<i class="fa fa-credit-card" style="font-size:70px;color:white"></i>' +
                                    '</div>' +
                                    '<div class="col-xs-9 text-right">' +
                                        '<div class="huge" id="borrowed_placard">'+ num_available_devices + '</div>' +
                                        '<div>Devices Borrowed</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';

					document.getElementById("borrowed_panel").innerHTML =
						'<div class="panel-heading">' +
                                '<div class="row">' +
                                    '<div class="col-xs-3">' +
                                      '<i class="fa fa-credit-card" style="font-size:70px;color:white"></i>' +
                                    '</div>' +
                                    '<div class="col-xs-9 text-right">' +
                                        '<div class="huge" id="borrowed_placard">' + num_borrowed_devices + '</div>' +
                                        '<div>Devices Borrowed</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';

					document.getElementById("late_panel").innerHTML =
						'<div class="panel-heading">' +
                                '<div class="row">' +
                                  '<div class="col-xs-3">' +
                                    '<i class="fa fa-history" style="font-size:70px;color:white"></i>' +
                                  '</div>' +
                                    '<div class="col-xs-9 text-right">' +
                                        '<div class="huge" id="late_placard">'+ num_late_devices +'</div>' +
                                        '<div>Devices Late</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';

					document.getElementById("bounds_panel").innerHTML =

							'<div class="panel-heading">' +
                                '<div class="row">' +
                                    '<div class="col-xs-3">' +
                                      '<i class="fa fa-exclamation-triangle" style="font-size:70px;color:white"></i>' +
                                    '</div>' +
                                    '<div class="col-xs-9 text-right">' +
                                        '<div class="huge" id="bounds_placard">'+ num_bounds_devices +'</div>' +
                                        '<div>Devices out of Bounds</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>';
					// document.getElementById("map").innerHTML = initMap();
					initMap();
					// document.getElementById("map").innerHTML = "";
					document.getElementById("warning_button").innerHTML = "";

					// document.getElementById("morris-donut-chart").innerHTML = "";

					// document.getElementById("targets_table_label").innerHTML = "<h3>"+ "<span style='color:#6600FF;'>Targets</span> on " + search_topic_str + ": Select Sentences for Classification"+"</h3>";
}

function getPlacardValues(available_devices_dataSet,borrowed_devices,bounds_devices)
{
	var num_available_devices = available_devices_dataSet.length;
	var num_borrowed_devices = borrowed_devices.length;
	var num_late_devices = 0;
	for( k = 0; k < borrowed_devices.length; k++ )
	{
				                    		
		var late_status = borrowed_devices[k][4];
		if ( late_status == "Late" )
		{
			num_late_devices = num_late_devices + 1;
		}
	}
 
	var num_bounds_devices = bounds_devices.length;

	placard_details = [];
	placard_details.push(num_available_devices);
	placard_details.push(num_borrowed_devices);
	placard_details.push(num_late_devices);
	placard_details.push(num_bounds_devices);

	return placard_details;
}
