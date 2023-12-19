
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://brief-bathroom-7c8.notion.site/In-Game-Workouts-for-Volleyball-b77523d182dd478d8f56ecafb4e7c90e?pvs=4',
            title: 'Volleyball',
        },
        {
            url: 'https://brief-bathroom-7c8.notion.site/How-to-Read-a-Book-454b808807874a65a6436154fa4412af?pvs=4',
            title: 'How to Read a Book?',
        },
        {
            url: 'https://brief-bathroom-7c8.notion.site/Build-a-Second-Brain-A-Proven-Method-to-Organize-Your-Digital-Life-and-Unlock-Your-Creative-Potent-b9c6e2db9a5b4adfb7ff9230d1567f70',
            title: 'Build a Second Brain',
        },
        {
            url: 'https://brief-bathroom-7c8.notion.site/Getting-Things-Done-The-Art-of-Stress-Free-Productivity-4383db140763483ba051297a59d31b86?pvs=4',
            title: 'Getting Things Done',
        },
        {
            url: 'https://brief-bathroom-7c8.notion.site/The-7-Habits-of-Highly-Effective-People-Powerful-Lessons-in-Personal-Change-aa920108518e48e3b23f6acd813a59f7?pvs=4',
            title: 'The 7 Habits of Highly Effective People',
        },        
        {
            url: 'https://brief-bathroom-7c8.notion.site/Think-Again-bef291f21d314ad7b5cbf9231752b52d?pvs=4',
            title: 'Think Again',
        },
        {
            url: 'https://brief-bathroom-7c8.notion.site/Baseball-Inside-the-Zone-33-Mental-Training-Workouts-for-Champions-b4539ece65804b0ea59466d13035347a?pvs=4',
            title: 'Baseball Inside the Zone',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}