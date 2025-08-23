$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/PhD_Data_Assimilation.jpg',
            link: 'https://www.proquest.com/docview/3123919606?accountid=14677&sourcetype=Dissertations%20&%20Theses',
            title: 'Dissertation',
            description: "Assimilation of All-Sky GOES-16 Water Vapor Channels, Aeolus Satellite Winds, and Airborne Lidar Observations for Improved Numerical Simulations of Tropical Cyclones and Convections",
            categories: ['featured', 'satellite', 'lidar', 'tc', 'aew']
        },
        {
            image: 'assets/images/Master_Vorticity_Tracking.jpg',
            link: 'http://59.75.36.213/KCMS/detail/detail.aspx?filename=1018155575.nh&dbcode=CMFD&dbname=CMFD2018',
            title: 'Thesis',
            description: "Investigate Interdecadal Change of Tropical Cyclone Activity in the Western North Pacific with a Vorticity Tracking Technique",
            categories: ['tc']
        },
        {
            image: 'assets/images/MWR_GOES-R_BC.jpg',
            link: 'https://doi.org/10.1175/MWR-D-21-0333.1',
            title: 'All-Sky GOES-16 BC',
            description: "A Bias Correction Scheme with the Symmetric Cloud Proxy Variable and Its Influence on Assimilating All-Sky GOES-16 Brightness Temperatures",
            categories: ['featured', 'satellite', 'tc']
        },
        {
            image: 'assets/images/MWR_GOES-R_IOEC.jpg',
            link: 'https://doi.org/10.1175/MWR-D-24-0038.1',
            title: 'All-Sky GOES-16 IOEC',
            description: "Cloud-Depednet Features of Interchannel Observation-Error Correlations of All-Sky GOES-16 Brightness Temperatures",
            categories: ['featured', 'satellite', 'tc']
        },
        {
            image: 'assets/images/AMT_Aeolus.png',
            link: 'https://doi.org/10.5194/amt-16-2691-2023',
            title: 'DA of Aeolus HLOS Winds',
            description: "The Impacts of Assimilating Aeolus Horizontal Line-of-Sight Winds on Numerical Predictions of Hurricane Ida (2021) and a Mesoscale Convective System over the Atlantic Ocean",
            categories: ['featured', 'satellite', 'lidar', 'tc', 'aew']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description}</p>
                    </article>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}