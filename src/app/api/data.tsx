import { avatar, brand, innovation, onlinePresence, creativeMind, WebResultTag, startupPlan, faq, faqSection, achievements } from "../../types/menu";

export const avatarList: avatar[] = [
    {
        image: "/images/home/avatar_1.jpg",
        title: "Sarah Johnson"
    },
    {
        image: "/images/home/avatar_2.jpg",
        title: "Olivia Miller"
    },
    {
        image: "/images/home/avatar_3.jpg",
        title: "Sophia Roberts"
    },
    {
        image: "/images/home/avatar_4.jpg",
        title: "Isabella Clark"
    },
];

export const brandList: brand[] = [
    {
        image: "/images/home/brand/brand-icon-1.svg",
        darkImg: "/images/home/brand/brand-darkicon-1.svg",
        title: "Adobe"
    },
    {
        image: "/images/home/brand/brand-icon-2.svg",
        darkImg: "/images/home/brand/brand-darkicon-2.svg",
        title: "Figma"
    },
    {
        image: "/images/home/brand/brand-icon-3.svg",
        darkImg: "/images/home/brand/brand-darkicon-3.svg",
        title: "Shopify"
    },
    {
        image: "/images/home/brand/brand-icon-4.svg",
        darkImg: "/images/home/brand/brand-darkicon-4.svg",
        title: "Dribble"
    },
    {
        image: "/images/home/brand/brand-icon-5.svg",
        darkImg: "/images/home/brand/brand-darkicon-5.svg",
        title: "Webflow"
    }
];

export const innovationList: innovation[] = [
    {
        image: "ph:list-magnifying-glass",
        title: "Search Engine Optimization (SEO)",
        bg_color: "bg-purple",
        txt_color: "text-purple",
        description:
            "We align technical SEO, content, and authority signals so you rank for searches that actually drive revenue. Building qualified organic traffic you own, not rented click-by-click.",
        highlights: [
            "Rank higher on Google.",
            "Get organic traffic.",
            "Build long-term authority.",
        ],
    },
    {
        image: "ph:map-pin-area", 
        title: "Local SEO",
        bg_color: "bg-blue",
        txt_color: "text-blue",
        description:
            "We strengthen how you show up in local search and maps. So nearby buyers discover you first, see accurate information, and choose you with confidence.",
        features: ["Keyword Strategy", "GMB Optimization"],
    },
    {
        image: "ph:megaphone",
        title: "Google Ads & PPC",
        bg_color: "bg-orange",
        txt_color: "text-orange",
        description:
            "Strategic paid search and display that reaches high-intent audiences, controls spend, and scales the campaigns that reliably deliver leads and sales.",
        highlights: [
            "Instant visibility.",
            "Targeted traffic.",
            "High-quality leads.",
        ],
    },
    {
        image: "ph:chart-bar", 
        title: "Social Media Marketing",
        bg_color: "bg-green",
        txt_color: "text-green",
        description:
            "Content and campaigns tailored to your audience designed to grow recognition, earn trust, and keep your brand present where people already spend time!",
        highlights: [
            "Build trust.",
            "Create engagement.",
            "Grow your brand voice.",
        ],
        features: [
            "Instagram Marketing",
            "Facebook Campaigns",
            "Content Planning",
            "Paid Promotions",
        ],
    },
    {
        image: "ph:monitor", 
        title: "Website Design & Development",
        bg_color: "bg-pink",
        txt_color: "text-pink",
        description:
            "Fast, modern sites and landing experiences with clear story and UX—built to convert visitors and support your SEO, ads, and long-term growth.",
        features: [
            "Business Websites",
            "Landing Pages",
            "E-commerce Stores",
            "SEO-Optimized Design",
        ],
    },
    {
        image: "ph:paint-brush",  
        title: "Branding & Content Strategy",       
        bg_color: "bg-purple_blue",
        txt_color: "text-purple_blue",
        description:
            "Cohesive identity and messaging that set you apart. Paired with content that educates prospects, reinforces credibility, and fuels marketing and sales.",
        features: [
            "Logo & Visual Identity",
            "Brand Messaging",
            "Content Marketing",
        ],
    },
];

export const onlinePresenceList: onlinePresence[] = [
    {
        image: "/images/home/onlinePresence/online_img_1.jpg",
        title: "FlowBank",
        tag: ["UX Research", "Interface Design"],
        link: "https://www.wrappixel.com/"
    },
    {
        image: "/images/home/onlinePresence/online_img_2.jpg",
        title: "Academy.co",
        tag: ["Product Design", "Interaction Design"],
        link: "https://www.wrappixel.com/"
    },
    {
        image: "/images/home/onlinePresence/online_img_3.jpg",
        title: "Genome",
        tag: ["Brand identity design", "UX Research"],
        link: "https://www.wrappixel.com/"
    },
    {
        image: "/images/home/onlinePresence/online_img_4.jpg",
        title: "Hotto",
        tag: ["Visual Storytelling", "Web & Mobile Design"],
        link: "https://www.wrappixel.com/"
    },
];

export const creativeMindList: creativeMind[] = [
    {
        image: "/images/home/creative/creative_img_1.png",
        name: "Logan Dang",
        position: "WordPress Developer",
        twitterLink: "https://x.com/",
        linkedinLink: "https://in.linkedin.com/"
    },
    {
        image: "/images/home/creative/creative_img_2.png",
        name: "Ana Belić",
        position: "Social Media Specialist",
        twitterLink: "https://x.com/",
        linkedinLink: "https://in.linkedin.com/"
    },
    {
        image: "/images/home/creative/creative_img_3.png",
        name: "Brian Hanley",
        position: "Product Designer",
        twitterLink: "https://x.com/",
        linkedinLink: "https://in.linkedin.com/"
    },
    {
        image: "/images/home/creative/creative_img_4.png",
        name: "Darko Stanković",
        position: "UI Designer",
        twitterLink: "https://x.com/",
        linkedinLink: "https://in.linkedin.com/"
    }
];

export const WebResultTagList: WebResultTag[] = [
    {
        image: "/images/home/result/creativity.svg",
        name: "Creativity",
        bg_color: "bg-purple",
        txt_color: "text-purple",
    },
    {
        image: "/images/home/result/innovation.svg",
        name: "Innovation",
        bg_color: "bg-blue",
        txt_color: "text-blue"
    },
    {
        image: "/images/home/result/strategy.svg",
        name: "Strategy",
        bg_color: "bg-orange",
        txt_color: "text-orange"
    }
];

export const startupPlanList: startupPlan[] = [
    {
        plan_bg_color: "bg-paleYellow",
        text_color: 'text-dark_black',
        descp_color: 'dark_black',
        border_color: 'border-dark_black',
        plan_name: "Starter",
        plan_descp: "For companies who need design support. One request at a time",
        plan_price: "$2500",
        icon_img: "/images/home/startupPlan/white_tick.svg",
        plan_feature: ["Design Updates Every 2 Days", "Mid-level Designer", "SEO optimization", "Monthly analytics", "2x Calls Per Month", "License free assets"]
    },
    {
        plan_bg_color: "bg-purple_blue",
        text_color: 'text-white',
        descp_color: 'white',
        border_color: 'border-white',
        plan_name: "Pro",
        plan_descp: "2x the speed. Great for an MVP, Web App or complex problem",
        plan_price: "$3800",
        icon_img: "/images/home/startupPlan/black_tick.svg",
        plan_feature: ["Design Updates Daily", "Senior-level Designer", "AI Advisory Framework", "Full-service Creative Team", "4x Calls Per Month", "License free assets"]
    }
];

export const faqSections: faqSection[] = [
    {
        title: "Local SEO",
        items: [
            {
                faq_que: "What is Local SEO and why is it important for my business in Jaipur?",
                faq_ans:
                    "Local SEO helps your business appear in nearby search results when customers search for services like “marketing agency near me” or “SEO services in Jaipur.” It increases visibility, calls, and walk-ins from local customers.",
            },
            {
                faq_que: "How can Digital Start help my business rank on Google Maps?",
                faq_ans:
                    "We optimize your Google Business Profile, improve reviews, add keywords, and build local citations to boost your ranking in Google Maps and local search results.",
            },
            {
                faq_que: "How long does Local SEO take to show results?",
                faq_ans:
                    "Typically, you can start seeing improvements within 1–3 months, depending on competition and current profile optimization.",
            },
            {
                faq_que: "Do Google reviews really impact my ranking?",
                faq_ans:
                    "Yes. Positive reviews and regular engagement significantly improve your local ranking and build trust with potential customers.",
            },
        ],
    },
    {
        title: "Website SEO",
        items: [
            {
                faq_que: "Why does my business need a professional website?",
                faq_ans:
                    "A website builds credibility, helps customers find information easily, and improves your chances of ranking on Google for relevant keywords.",
            },
            {
                faq_que: "What SEO services does Digital Start offer?",
                faq_ans:
                    "We provide keyword research, on-page SEO, technical SEO, content optimization, backlink building, and complete website audits.",
            },
            {
                faq_que: "How long does it take to rank a website on Google?",
                faq_ans:
                    "SEO is a long-term strategy. Most websites start seeing results in 3–6 months, depending on competition and strategy.",
            },
        ],
    },
    {
        title: "Social media marketing (SMM)",
        items: [
            {
                faq_que: "How can social media marketing help my business grow?",
                faq_ans:
                    "Social media marketing increases brand awareness, engages your audience, generates leads, and drives traffic to your website through platforms like Instagram and Facebook.",
            },
            {
                faq_que: "Which social media platforms are best for my business?",
                faq_ans:
                    "It depends on your target audience. For most local businesses in Jaipur, Instagram, Facebook, and WhatsApp marketing work best.",
            },
            {
                faq_que: "Do you provide content creation and ad management?",
                faq_ans:
                    "Yes. Digital Start offers complete social media services including post design, reels, captions, ad campaigns, and performance tracking.",
            },
        ],
    },
];

export const achievementsList: achievements[] = [
    {
        icon: "/images/home/achievement/framer_award.svg",
        dark_icon: "/images/home/achievement/dark_framer_award.svg",
        sub_title: 'Framer Awards',
        title: 'Celebrated for cutting-edge interaction design and seamless user experiences.',
        year: '2024',
        url: 'https://www.framer.com/@wrap-pixel/'
    },
    {
        icon: "/images/home/achievement/dribble_award.svg",
        dark_icon: "/images/home/achievement/dribble_award.svg",
        sub_title: 'Dribbble Awards',
        title: 'Recognized for creative excellence and innovative design solutions',
        year: '2023',
        url: 'https://www.framer.com/@wrap-pixel/'
    },
    {
        icon: "/images/home/achievement/awward_award.svg",
        dark_icon: "/images/home/achievement/dark_awward_award.svg",
        sub_title: 'awwwards Awards',
        title: 'Honored with the Best Website Design for creativity, usability, and innovation.',
        year: '2022',
        url: 'https://www.framer.com/@wrap-pixel/'
    }
];
