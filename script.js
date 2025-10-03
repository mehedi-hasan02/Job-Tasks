const jobs = [
    {
        id: 1,
        companyName: "Google",
        jobTitle: "Software Engineer",
        jobDescription: "Design scalable systems, write efficient code, and collaborate with global teams."
    },
    {
        id: 2,
        companyName: "Microsoft",
        jobTitle: "Frontend Developer",
        jobDescription: "Build responsive web applications with modern frameworks ensuring accessibility."
    },
    {
        id: 3,
        companyName: "Amazon",
        jobTitle: "Data Analyst",
        jobDescription: "Analyze datasets, create dashboards, and support data-driven decisions."
    },
    {
        id: 4,
        companyName: "Tesla",
        jobTitle: "AI/ML Engineer",
        jobDescription: "Develop machine learning models to improve autonomous driving systems."
    },
    {
        id: 5,
        companyName: "Meta",
        jobTitle: "Product Manager",
        jobDescription: "Define product vision, manage development roadmaps, and align with business goals."
    },
    {
        id: 6,
        companyName: "Apple",
        jobTitle: "UI/UX Designer",
        jobDescription: "Design intuitive user interfaces and improve user experience across platforms."
    },
    {
        id: 1,
        companyName: "Google",
        jobTitle: "Software Engineer",
        jobDescription: "Design scalable systems, write efficient code, and collaborate with global teams."
    },
    {
        id: 2,
        companyName: "Microsoft",
        jobTitle: "Frontend Developer",
        jobDescription: "Build responsive web applications with modern frameworks ensuring accessibility."
    },
    {
        id: 3,
        companyName: "Amazon",
        jobTitle: "Data Analyst",
        jobDescription: "Analyze datasets, create dashboards, and support data-driven decisions."
    },
    {
        id: 4,
        companyName: "Tesla",
        jobTitle: "AI/ML Engineer",
        jobDescription: "Develop machine learning models to improve autonomous driving systems."
    },
    {
        id: 5,
        companyName: "Meta",
        jobTitle: "Product Manager",
        jobDescription: "Define product vision, manage development roadmaps, and align with business goals."
    },
    {
        id: 6,
        companyName: "Apple",
        jobTitle: "UI/UX Designer",
        jobDescription: "Design intuitive user interfaces and improve user experience across platforms."
    }
];

let jobTitles = [];


const dailyQus = document.querySelector('.daily-qus');
if (dailyQus) {
    dailyQus.addEventListener('click', () => {
        window.location.href = 'blog.html';
    });
}

const back = document.querySelector('#back-btn');
if (back) {
    back.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}



let allTask = document.querySelector('.all-task')

let showJobs = () => {
    jobs.forEach(job => {
        const jobTaskData = document.createElement("div");
        jobTaskData.classList.add("job-task-data");

        // Company name
        const companyName = document.createElement("p");
        companyName.classList.add("company-name");
        companyName.textContent = `${job.companyName}`;

        // Job title
        const jobTitle = document.createElement("p");
        jobTitle.classList.add("job-title");
        jobTitle.textContent = `${job.jobTitle}`;

        // Job description div
        const jobDescriptionDiv = document.createElement("div");
        jobDescriptionDiv.classList.add("job-discription");

        const jobDescP = document.createElement("p");
        jobDescP.textContent = `${job.jobDescription}`;
        jobDescriptionDiv.appendChild(jobDescP);

        // Dot line
        const dotLine = document.createElement("div");
        dotLine.classList.add("dot-line");

        // Deadline div
        const deadlineDiv = document.createElement("div");
        deadlineDiv.classList.add("deadline-div");

        const deadlineP = document.createElement("p");
        deadlineP.classList.add("deadline");
        deadlineP.innerHTML = "Deadline <br> 2 Nov 2025";

        const completedBtn = document.createElement("button");
        completedBtn.classList.add("btn", "completed-btn");
        completedBtn.textContent = "Completed";

        // Append deadline children
        deadlineDiv.appendChild(deadlineP);
        deadlineDiv.appendChild(completedBtn);

        // Append all children to main container
        jobTaskData.appendChild(companyName);
        jobTaskData.appendChild(jobTitle);
        jobTaskData.appendChild(jobDescriptionDiv);
        jobTaskData.appendChild(dotLine);
        jobTaskData.appendChild(deadlineDiv);

        allTask.appendChild(jobTaskData);
    })
}

showJobs();


let completeBtn = document.querySelectorAll('.completed-btn');
let remJob = jobs.length;
let job = document.querySelector('#rem-job');
if (remJob < 10)
    job.innerText = `0${remJob}`;
else
    job.innerText = `${remJob}`;

let comJob = 0;

completeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.job-task-data');
        const jobTitle = card.querySelector('.job-title').textContent;
        jobTitles.push(jobTitle);
        btn.disabled = true;

        btn.style.backgroundColor = '#b7b9caff';
        btn.style.cursor = 'not-allowed';
        remJob--;
        comJob++;

        if (remJob < 10) {
            job.innerText = `0${remJob}`;

        } else {
            job.innerText = `${remJob}`;

        }

        if (comJob < 10) {
            let jobCom = document.querySelector('#job-complete');
            jobCom.innerText = `0${comJob}`;
        }
        else {
            let jobCom = document.querySelector('#job-complete');
            jobCom.innerText = `${comJob}`;
        }

        // console.log(jobTitles);
        showActivity();
    });
});

function getCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
    return time;
}

let taskComplete = document.querySelector('.complete-task');
let clearBtn = document.querySelector('.activity-btn');
let noHistory = document.querySelector('.activity-p');

let showActivity = () => {
    let n = jobTitles.length;
    if (n > 0) {
        noHistory.style.display = 'none';
        let p = document.createElement('p');
        p.innerText = `You have Complete The Task ${jobTitles[n - 1]} at ${getCurrentTime()}`;
        p.classList.add('complete-task-details');
        taskComplete.appendChild(p);
        clearBtn.disabled = false;
        clearBtn.style.backgroundColor = '#3752FD';
        clearBtn.style.cursor = 'pointer'
    }
    else {
        taskComplete.innerHTML = '';
        clearBtn.disabled = true;
        clearBtn.style.backgroundColor = '#b7b9caff';
        clearBtn.style.cursor = 'not-allowed'
    }

}

clearBtn.addEventListener('click', () => {
    jobTitles = [];
    showActivity();
})



