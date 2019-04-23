
        var units = "Widgets";

        var color_map = JSON.parse("{\"Aerospace Engineering\":\"#E26C5D\",\"African American Studies\":\"#B5BAF2\",\"American Literature & Culture\":\"#B5BAF2\",\"Anthropology\":\"#FFE589\",\"Applied Linguistics\":\"#B5BAF2\",\"Applied Mathematics\":\"#77b1d2\",\"Architectural Studies\":\"#dbd9d4\",\"Art\":\"#dbd9d4\",\"Art History\":\"#B5BAF2\",\"Asian American Studies\":\"#B5BAF2\",\"Asian Humanities\":\"#B5BAF2\",\"Asian Studies\":\"#B5BAF2\",\"Astrophysics\":\"#77b1d2\",\"Atmospheric And Oceanic Sciences\":\"#77b1d2\",\"Biochemistry\":\"#A2F2A3\",\"Bioengineering\":\"#E26C5D\",\"Biology\":\"#A2F2A3\",\"Business Economics\":\"#FFE589\",\"Chemical Engineering\":\"#E26C5D\",\"Chemistry\":\"#77b1d2\",\"Chemistry - Material Science\":\"#77b1d2\",\"Chicana & Chicano Studies\":\"#B5BAF2\",\"Chinese\":\"#B5BAF2\",\"Civil Engineering\":\"#E26C5D\",\"Classical Civilization\":\"#B5BAF2\",\"Cognitive Science\":\"#A2F2A3\",\"Communication Studies\":\"#FFE589\",\"Comparative Literature\":\"#B5BAF2\",\"Computer Science\":\"#E26C5D\",\"Computer Science & Engineering\":\"#E26C5D\",\"Dance\":\"#dbd9d4\",\"Design Media Arts\":\"#dbd9d4\",\"Ecology, Behavior & Evolution\":\"#A2F2A3\",\"Economics\":\"#FFE589\",\"Electrical Engineering\":\"#E26C5D\",\"English\":\"#B5BAF2\",\"Environmental Science\":\"#77b1d2\",\"Ethnomusicology\":\"#dbd9d4\",\"Film & Television\":\"#dbd9d4\",\"Financial Actuarial Mathematics\":\"#77b1d2\",\"French\":\"#B5BAF2\",\"Gender Studies\":\"#FFE589\",\"Geography\":\"#FFE589\",\"Geography/Environmental Studies\":\"#FFE589\",\"Geology\":\"#77b1d2\",\"Global Studies\":\"#FFE589\",\"History\":\"#FFE589\",\"Human Biology And Society\":\"#A2F2A3\",\"International Development Studies\":\"#FFE589\",\"Japanese\":\"#B5BAF2\",\"Jewish Studies\":\"#B5BAF2\",\"Korean\":\"#B5BAF2\",\"Latin-American Studies\":\"#B5BAF2\",\"Linguistics\":\"#B5BAF2\",\"Linguistics & Anthropology\":\"#B5BAF2\",\"Linguistics & Asian Lang. & Cultures\":\"#B5BAF2\",\"Linguistics & Computer Science\":\"#B5BAF2\",\"Linguistics & Psychology\":\"#B5BAF2\",\"Marine Biology\":\"#A2F2A3\",\"Materials Engineering\":\"#E26C5D\",\"Mathematics\":\"#77b1d2\",\"Mathematics - Applied Science\":\"#77b1d2\",\"Mathematics For Teaching\":\"#77b1d2\",\"Mathematics Of Computation\":\"#77b1d2\",\"Mathematics/Economics\":\"#77b1d2\",\"Mechanical Engineering\":\"#E26C5D\",\"MIMG\":\"#A2F2A3\",\"MCDB\":\"#A2F2A3\",\"Music\":\"#dbd9d4\",\"Musicology\":\"#dbd9d4\",\"Neuroscience\":\"#A2F2A3\",\"Nursing - Four Year Program\":\"#dbd9d4\",\"Philosophy\":\"#B5BAF2\",\"Physics\":\"#77b1d2\",\"Physiological Science\":\"#A2F2A3\",\"Political Science\":\"#FFE589\",\"Psychobiology\":\"#A2F2A3\",\"Psychology\":\"#FFE589\",\"Sociology\":\"#FFE589\",\"Spanish\":\"#B5BAF2\",\"Spanish And Community And Culture\":\"#B5BAF2\",\"Statistics\":\"#77b1d2\",\"Study Of Religion\":\"#B5BAF2\",\"Theater\":\"#dbd9d4\",\"Undeclared\":\"#dbd9d4\",\"World Arts & Culture\":\"#dbd9d4\"}")
        
        function mcolor(name){
                if(name in color_map) return(color_map[name])
                else {
                    return(color_map[name.substring(0, name.length-1)]);
                }
            }
        //



        var margin = {top: 50, right: 10, bottom: 10, left: 10},
            width =  1350 - margin.left - margin.right,
            height = 650 - margin.top - margin.bottom;
        //

        // append the svg canvas to the page
        var svg = d3.select("#chart").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", 
                "translate(" + margin.left + "," + margin.top + ")")
            .attr("id", "sankeyg");
        //

    function generateVis(dataset){
        

        // establish sankey object and calculate node 
        const sankey = d3.sankey()
            .nodeWidth(15)
            .nodePadding(12)
            .nodeAlign(d3.sankeyCenter)
            .extent([[250, 5], [width - 300, height - 5]])
            //.iterations(10);
        
        const {nodes, links} = sankey({
            nodes: dataset.nodes.map(d => Object.assign({}, d)),
            links: dataset.links.map(d => Object.assign({}, d))
        });



        //

        // add in rectangles for sankey nodes
        var node_rect = svg.append("g")
            .attr("stroke", "#000")
            .selectAll("rect")
            .data(nodes)
            .join("rect")
            .attr("x", d => d.x0)
            .attr("y", d => d.y0)
            .attr("height", d => d.y1 - d.y0)
            .attr("width", d => d.x1 - d.x0)
            .attr('fill', d => mcolor(d.name))
            .attr("fill-opacity", 0.9)
            .attr('class', d => "node-" + d.index);

        // add in links

        const defs = svg.append('defs');

        const link = svg.append("g")
            .attr("fill", "none")
            .attr("stroke-opacity", 0.5)
            .selectAll("g")
            .data(links)
            .join("g")
            .style("mix-blend-mode", "multiply");
 

        
        var link_index = 0;
        link.append("path")
            .attr("d", d3.sankeyLinkHorizontal())
            .attr("stroke-width", d => Math.max(1, d.width))
            .attr("stroke-opacity", 0.5)
            .on('mouseover', function() {
                d3.selectAll("path").style('stroke-opacity', 0.1)
                d3.select(this).style('stroke-opacity', 0.7);
            })
            .on('mouseout', function() {
                d3.selectAll("path").style('stroke-opacity', 0.5);
            })
            .attr("stroke", d => mcolor(d.target.name))
            .attr("class", function(d) {
                link_index = link_index + 1;
                return("node-" + link_index)})

        node_rect.on("mouseover", function(){
            rect_class = d3.select(this).attr("class");
            d3.selectAll("path").style('stroke-opacity', 0.1)
            d3.selectAll("." + rect_class).style('stroke-opacity', 0.7);
        })
            .on('mouseout', function(d){
            d3.selectAll("path").style('stroke-opacity', 0.5);
                });

        
        // add in major text
        svg.append("g")
            .selectAll("text")
            .data(nodes)
            .join("text")
            .attr("x", d => d.x1 < width / 2 ? d.x0 - 5 * (d.name.length) - 70: d.x1 + 8 )
            .attr("y", d => (d.y1 + d.y0) / 2)
            .attr("dy", "0.35em")
            .attr("text-anchor", d => d.x1 < width ? "start" : "end")
            .text(d => d.name + " (" + d.value + ")")
            .style("text-align", "justify")
            .style("font", d => "12px sans-serif");
        //



    // add text legend 

            svg.append("g")
            .selectAll(".text-legend")
            .data(["Admissions Major", "Graduation Major"])
            .join("text")
            .attr("x", (d,i) => {if(i == 0) return(230)
                                else return(980)})
            .attr("y", -7)
            .text(d => d)
            .style("color", "red")
            .style("font", d => "12px sans-serif")
            .style("font-weight", "bold");
            
        }

    
    
    d3.json('/datasets/change-major/major_datav2.json').then(function(d){
        var dataset = d;

        majors = []
        for(var key in d[0]){
            majors.push(key)
        }
        generateVis(d[0]["Aerospace Engineering"]);

        var menu = d3.select("#dropdown");
        menu.append("select")
        .selectAll("option")
        .data(majors)
        .enter()
        .append("option")
        .attr("value", function(d){
            return d;
        })
        .text(function(d){
            return d;
        });

        menu.on("change", function(){
            var selected_major = d3.select(this)
                .select("select")
                .property("value");

            var current = document.getElementById("sankeyg");
            while(current.firstChild) current.removeChild(current.firstChild);
            generateVis(d[0][selected_major]);
        })

        
    });






    // legend bottom
       
    var label_rects = d3.select("#label")
        .append("svg")
        .attr("width", width)
        .attr("height", 200);

        label_rects.selectAll(".label-rect")
        .data(["Life Sciences","Physical Sciences", "Social Sciences","Engineering", "Humanities", "Other"])
        .enter()
        .append("rect")
        .classed("label-rect", true)
        .attr("width", 20)
        .attr("height", 20)
        .attr("x", (d,i) =>  i * 150 + 260)
        .attr("y", 10)
        .attr("fill", function(d,i){
            if(d === "Life Sciences") return("#A2F2A3")
            else if(d === "Physical Sciences") return("#77b1d2")
            else if (d === "Social Sciences") return("#FFE589")
            else if (d === "Humanities") return("#B5BAF2")
            else if (d === "Engineering") return("#E26C5D")
            else return("#dbd9d4")
        });

        label_rects.selectAll(".label-text")
        .data(["Life Sciences","Physical Sciences", "Social Sciences","Engineering", "Humanities", "Other"])
        .enter()
        .append("text")
        .attr("class", "label-text")
        .attr("x", (d,i) => i * 150 + 290)
        .attr("y", 20)
        .attr("dy", "0.35em")
        .text(d => d)
        .style("font", d => "12px sans-serif");


        