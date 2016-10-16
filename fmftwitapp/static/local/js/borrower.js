google.load("visualization", "1", {packages:["table"]});
google.setOnLoadCallback(drawDevicesTable);

function drawDevicesTable(dataSet,table_div) {

		var cssClassNames = {
								'oddTableRow': 'myAwesomeClass',
							    'tableRow': 'myAwesomeClass',
							 };

				        var data = new google.visualization.DataTable();
				        data.addColumn('string', '<h3>Id pry key</h3>');
						data.addColumn('string', '<h3>First Name</h3>');
						data.addColumn('string', '<h3>Last Name</h3>');
						data.addColumn('string', '<h3>Wits Number</h3>');
						data.addColumn('string', '<h3>Tag ID</h3>');
						data.addColumn('string', '<h3>Device Type</h3>');
						data.addColumn('string', '<h3>Return Date</h3>');
						data.addColumn('string', '<h3>Checkout Date</h3>');
						data.addColumn('string', '<h3>Location Status</h3>');
						data.addRows(dataSet);


							var view = new google.visualization.DataView(data);
							view.setColumns([4, 5, 7, 6, 8]);

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

     };

		 function drawLateTable(dataSet,table_div) {

		 		var cssClassNames = {
		 								'oddTableRow': 'myAwesomeClass',
		 							    'tableRow': 'myAwesomeClass',
		 							 };


		        var data = new google.visualization.DataTable();
				data.addColumn('string', '<h3>Transation Number</h3>');
		        data.addColumn('string', '<h3>First Name</h3>');
		        data.addColumn('string', '<h3>Last Name</h3>');
		        data.addColumn('string', '<h3>Staff Number</h3>');
				data.addColumn('string', '<h3>Tag ID</h3>');
				data.addColumn('string', '<h3>Device Type</h3>');
		        data.addColumn('string', '<h3>Checkout Date</h3>');
				data.addColumn('string', '<h3>Return Date</h3>');
				data.addColumn('string', '<h3>Location Status</h3>');
	         	data.addRows(dataSet);


		         var view = new google.visualization.DataView(data);
		         view.setColumns([4, 5, 7, 6, 8]);

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




function drawHistoryTable(dataSet,table_div) {

							

							var cssClassNames = {
													'oddTableRow': 'myAwesomeClass',
												    'tableRow': 'myAwesomeClass',
												 };

							var data = new google.visualization.DataTable();
							data.addColumn('string', '<h3>Id pry key</h3>');
							data.addColumn('string', '<h3>First Name</h3>');
							data.addColumn('string', '<h3>Last Name</h3>');
							data.addColumn('string', '<h3>Wits Number</h3>');
							data.addColumn('string', '<h3>Tag ID</h3>');
							data.addColumn('string', '<h3>Device Type</h3>');
							data.addColumn('string', '<h3>Return Date</h3>');
							data.addColumn('string', '<h3>Checkout Date</h3>');
							data.addColumn('string', '<h3>Actual Return Date</h3>');
							// data.addColumn('string', '<h3>Location Status</h3>');
							data.addRows(dataSet);


							var view = new google.visualization.DataView(data);
							view.setColumns([4, 5, 7, 6, 8]);

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


function drawTermsTable(dataSet,table_div) {

		var cssClassNames = {
								'oddTableRow': 'myAwesomeClass',
							    'tableRow': 'myAwesomeClass',
							 };

		
        var data = new google.visualization.DataTable();
        data.addColumn('string', '<h3>Number</h3>');
        data.addColumn('string', '<h3>Terms and Conditions</h3>');

        data.addRows(dataSet);

        var view = new google.visualization.DataView(data);
        view.setColumns([0,1]);

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
