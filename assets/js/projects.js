/**
 * Created by karthik on 10/29/16.
 */

$(document).ready(function () {

    d3.json("/assets/data/projects.json", function (data) {

        // Empty the div
        d3.select("#projectsList").empty();
        var projectsList = d3.select("#projectsList").style("float", "left");
        // projectsList.append("div").html("Karthik has worked on " + data.length + " funded research projects");

        // projects
        projectsContent = projectsList.append("div").attr("id", "projectsContent");

        data.forEach(function (project, i) {
            projectsContent.append("h3").text(project.title)
                .style("margin-bottom", "5px");
            showProject(projectsContent, project, i);
        });

    });

});

function showProject (projectsContent, project, i) {

    // projectsContent.append("div").style("float", "left").style("display", "block")
    //     .style("width", "100%")
    //     .style("class", "archive");

    var pro = projectsContent.append("div")
        .style("line-height", "1")
        .style("background", "white")
        .style("min-height", "150px")
        .style("display", "flux")
        .style("margin-bottom", "35px");

    pro.append("img").style("width", "200px")
        .style("display", "inline-block")
        // .style("border", "1.5px solid #222")
        .style("border", "1px solid #aaa")
        // .style("background-size", "cover")
        // .style("background-repeat", "no-repeat")
        .style("vertical-align", "top")
        .style("float", "left")
        .style("height", "150px")
        .style("margin-right", "10px")
        .attr("src", "/assets/images/" + project.name + ".png");

    var proInfo = pro.append("p")
        .style("background", "white")
        .style("margin", "0px");

    if ("comments" in project) {
        proInfo.append("span").html("" + project.comments + "<br/> ").style("background-color", "#f0e8ff").style("font-size", "14px");
    }

    // proInfo.append("span").html("Advised by: ").style("font-size", "14px");
    // project.advisors.forEach(function (advisor, j) {
    //     if (j != project.advisors.length - 1) {
    //         advisor = advisor + ", ";
    //     } else {
    //         advisor = advisor + "<br/>";
    //     }
    //     proInfo.append("span").html(advisor).style("font-size", "14px");
    // });

    proInfo.append("span").html("Publication venues: ")
        .style("font-size", "15px")
        .style("color", "#555");

    project.publications.forEach(function (publication, j) {
        if (j != project.publications.length - 1) {
            publication = publication + ", ";
        } else {
            publication = publication + "<br/>";
        }
        proInfo.append("span").html(publication)
            .style("font-size", "15px")
            .style("color", "#555");
    });

    proInfo.append("span").html(project.abstract+" ").style("font-size", "15px");
}

