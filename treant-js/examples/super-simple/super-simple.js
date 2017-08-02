
var simple_chart_config = {
	chart: {
		container: "#OrganiseChart-simple",	
		    
	},
	
	nodeStructure: {
		text: { name: "Parent node" },
		
		children: [
			{
				text: { name: "First child" }
			},
			{
				text: { name: "Second child" }
			},
			{
				text: { name: "Third child" }
			}
		]
	}
};

// // // // // // // // // // // // // // // // // // // // // // // // 

var config = {
	container: "#OrganiseChart-simple"
};

var parent_node = {
	text: { name: "Parent node" }
};

var first_child = {
	parent: parent_node,
	text: { name: "First child" }
};

var second_child = {
	parent: parent_node,
	text: { name: "Second child" }
};

var third_child = {
	parent: parent_node,
	 text: {
        name: "Simple node",
		title: "One of kind",
		desc: "A basic example",
		contact: { 
            val: "contact me",
            href: "http://twitter.com/",
            target: "_self"
		}
	 }
};

var simple_chart_config = [
	config, parent_node,
		first_child, second_child, third_child 
];
