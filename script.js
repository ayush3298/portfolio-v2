const testimonials = [
    [" nicole20style", "I'm very happy with this seller he resolved my issue rather quickly. Thanks will hire again", 5, "United States"],
    [" geethaguduru", "Hi, Ayush is really good person I m really satisfied with his work. And on time delivery He done good job I would recommend to others if any one looking for work he is best fit Thanks Ayush I like your work and communication", 5, "United States"],
    [" the_best_one", "Delivered the order very quickly and everything worked perfectly the first time itself.", 5, "Mauritius"],
    [" akssunku", "Very cooperative and was willing to explore multiple avenues to make the product work.", 4, "Canada"],
    [" bodhiking", "This has been an incredible experience for me, not only was the turn around 24 hours but Ayush overcame multiple speed bumps along the way!", 5, "United States"],
    [" zoyahk", "This seller provided me with the fastest delivery time I have ever seen! He did everything perfectly according to the specifications, and was willing to collaborate with me for as long as it took to help with any fixes and adjustments until it was exactly the way I wanted it. Very professional and courteous, 10/10 recommend amazing job", 5, "United States"],
    [" ritvikr8", "This was my first time using fiverr and kudos to him that he completed the project 5 days before the deadline. He’s committed to his work and always responded to my queries very quick & in a polite manner. I can see that he’s not doing this just for the money but also loves helping others.", 5, "India"],
    [" ohad92", "Excellent seller very professional and quick,did an amazing job!", 5, "Netherlands"],
    [" lizschonemann", "Excellent service. Have used before and will use again.", 5, "Canada"],
    [" ashenow", "Very quick, professional and good. Will be coming back for sure!", 5, "Germany"],
    [" haithummurshed", "Thanks ayush, it was good dealing with you . & i recommend his work.", 5, "United Arab Emirates"],
    [" alexandre74", "He is very fast, professional and do the job on time, I recommend absolutly for python and web scraping. Thank you bro", 5, "Switzerland"],
    [" anil0009", "Awesome seller, very quick and profesional,i will use his service again for sure and i will recomment him to all.", 5, "Switzerland"],
]
testimonials_served = []
testimonial_divs = document.querySelectorAll(".testimonials-card");
testimonial_divs.forEach(function (item, index) {
    let testimonial_index = Math.floor(Math.random() * testimonials.length);
    let testimonial = testimonials[testimonial_index]
    let testimonial_text = testimonial[1]
    if (testimonial_text.length >= 120){
        testimonial_text = testimonial_text.slice(0, 120) + '...'
    }
    item.innerHTML = "<div class=\"testimonials-card-icon-wrapper\">\n" +
        "                            </div>\n" +
        `                                <p class='testimonials-text'>${testimonial_text}</p>\n ` +

        "                            <div class=\"testimonials-card-title\">\n" +
        `                               <img class="country-flag" ` +
        `                   src="assets/flags/${testimonial[3]}.png" ` +
        `                                       alt="${testimonial[3]}.png"> | ${testimonial[0]} | <i style='color: #ffb33e' class="fas fa-star"></i> <span style='color: #ffb33e'>${testimonial[2]}<span` +
        "                            </div>"
});
