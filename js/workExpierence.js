const workExperience = [
  {
    title: "Senior Software Engineer",
    period: "Nov 2024 - March 2024",
    company: "Eightydays.ai",
    description: "Optimized system performance for high workloads and developed client-requested features. Led development of an in-house Shopify affiliate management app. Managed development team and oversaw multiple projects including an internal admin dashboard, Shopify app, SARAL app features, and a social listening tool."
  },
  {
    title: "Backend Developer",
    period: "Dec 2023 - Sep 2024",
    company: "SARAL",
    description:
      "Optimized system performance for high workloads and developed client-requested features. Led development of an in-house Shopify affiliate management app. Managed development team and oversaw multiple projects including an internal admin dashboard, Shopify app, SARAL app features, and a social listening tool.",
  },
  {
    title: "Backend Developer",
    period: "July 2023 - Dec 2023",
    company: "Hurix Digital",
    description:
      "Optimized application code and integrated ElasticSearch for the Epicon OTT platform. Developed scripts for asset compression, migrated over 80 million users, and managed Redis-based content storage. Focused on scalability, data efficiency, and performance optimization.",
  },
  {
    title: "Fullstack Developer",
    period: "Aug 2021 - June 2023",
    company: "Smallcase",
    description:
      "Worked as backend dev with main responsibilities such as scoping, developing and fixing new/old features. Developed features such as unsubscribe user and view stocks only after payment which made the retention rate of users increase by 10%.",
  },
  {
    title: "Backend Developer",
    period: "Jan 2021 - Aug 2021",
    company: "OnPar Labs",
    description:
      "Working on the backend of projects undertaken by the company. Using the MERN stack.",
  },
  {
    title: "Web development consultant",
    period: "Dec 2020 - Present",
    company: "Captheon",
    description:
      "Helping the developers to make their web based product. Working with the MERN stack.",
  },
  {
    title: "Mobile Application Developer",
    period: "Jan 2020 - Mar 2020",
    company: "Manish Enterprises",
    description:
      "Working on an e-commerce mobile application that grocery shop owners will use to order products based on their needs.",
  },
  {
    title: "Angular Development Intern",
    period: "Dec 2019 - Jan 2020",
    company: "Saino First Pvt LTD.",
    description:
      "Recreated the software used by clients of the organization using Angular 4+.",
  },
  {
    title: "Freelance Developer",
    period: "Oct 2019",
    company: "Shrex Design",
    description:
      "Built a mailing system using PHP. Worked on form validation logic using Javascript. Worked on Landing page of the company.",
  },
  {
    title: "Android Development Intern",
    period: "Aug 2019 - Sep 2019",
    company: "CloudFabrica Technologies",
    description:
      "Integrated google and Facebook sign-in and sign-up in the mobile based application project I was tasked with. Worked on fixing the application flow for users.",
  },
  {
    title: "Backend Intern",
    period: "Dec 2018 - Mar 2019",
    company: "Hyfunn",
    description:
      "Built an email system using PHP and phpmailer that sends OTP when a user clicks on forget password link. Created the system for notifications based on user activity. Solved bugs in the backend PHP code.",
  },
];

function createTimelineBlock(job) {
  return `
            <div class="timeline-block">
                <div class="timeline-ico">
                    <i class="fa fa-briefcase"></i>
                </div>
                <div class="timeline-header">
                    <h3>${job.title}</h3>
                    <p>${job.period}</p>
                </div>
                <div class="timeline-content">
                    <h4>${job.company}</h4>
                    <p>${job.description}</p>
                </div>
            </div>
        `;
}

function renderTimeline() {
  const container = document.querySelector(".timeline-wrap");
  const timelineHTML = workExperience.map(createTimelineBlock).join("");
  container.innerHTML = timelineHTML;
}

document.addEventListener("DOMContentLoaded", renderTimeline);
