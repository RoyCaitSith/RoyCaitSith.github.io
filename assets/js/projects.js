$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/Master_Vorticity_Tracking.jpg',
            link: 'https://github.com/RoyCaitSith/Vorticity-tracking/blob/main/20180501%E5%86%AF%E5%9F%8E%E7%83%BD%E6%AF%95%E4%B8%9A%E8%AE%BA%E6%96%87%E5%88%9D%E7%A8%BFV2.0.pdf',
            title: 'Vorticity Tracking',
            github: 'https://github.com/RoyCaitSith/Vorticity-tracking.git',
            technologies: ['NCL', 'ERA5'],
            description: "Interdecadal Change of Tropical Cyclone Activity in the Western North Pacific (Unpublished)",
            categories: ['featured', 'tc']
        },
        {
            image: 'assets/images/MWR_GOES-R_BC.jpg',
            link: 'https://doi.org/10.1175/MWR-D-21-0333.1',
            title: 'All-Sky BC of GOES-16',
            github: 'https://github.com/RoyCaitSith/GOES-R-bias-correction.git',
            technologies: ['GSI', 'WRF', 'Python'],
            description: "A Bias Correction Scheme with the Symmetric Cloud Proxy Variable and Its Influence on Assimilating All-Sky GOES-16 Brightness Temperatures",
            categories: ['featured', 'tc', 'cpex', 'all-sky', 'infrared', 'goes']
        },
        {
            image: 'assets/images/AMT_Aeolus.png',
            link: 'https://doi.org/10.5194/amt-16-2691-2023',
            title: 'Assimilation of Aeolus',
            github: 'https://github.com/RoyCaitSith/Aeolus-L2B-assimilation.git',
            technologies: ['GSI', 'WRF', 'Python'],
            description: "The impacts of assimilating Aeolus horizontal line-of-sight winds on numerical predictions of Hurricane Ida (2021) and a mesoscale convective system over the Atlantic Ocean",
            categories: ['tc', 'cpex', 'aeolus']
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
        
                        <p class="paragraph-text-normal">${project.description} ${project.github ? `<a href="${project.github}">GITHUB</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}