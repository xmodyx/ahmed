function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


var projects = [
  {
    title: "MTA SA Game Server",
    description: `
    Managed and developed a dynamic Multi Theft Auto: San Andreas (MTA:SA) game server supporting 100-200 concurrent players. Leveraged LUA, SQL, XML, and HTML to create three unique game modes, fostering an engaging multi-gaming environment. Implemented effective server optimization strategies to ensure smooth gameplay during peak times and event days. Continuous enhancement of the gaming experience through regular updates and patches based on player feedback, establishing a responsive and evolving gaming environment. This project significantly improved my server management skills, proficiency in multiple programming languages, and strategies for player engagement.


    Full video of the Multi-Gamemode: 
    https://www.youtube.com/watch?v=z71jYn0exR4&t=102s
    `,
    images: ["./assets/project-1-1.png", "./assets/project-1-2.png", "./assets/project-1-3.png", "./assets/project-1-4.png"] // add more as needed
},

  {
      title: "Hackathon: AI Business Analyzer",
      description: `
      In a team-based Hackathon, we co-developed an innovative AI-powered business analyzer website. Users can enter their business name, select a category, upload their business dataset, and designate a target column. Our website then employs AI to execute an extensive analysis of the target column, generating detailed visualizations for a deeper understanding of the user's business data. Guided by these insights, the system offers bespoke suggestions for business performance enhancement. This project showcases our collaborative effort to leverage AI for practical business applications, as well as our collective skills in crafting user-centric interfaces and data visualization tools.
      `,
        images: ["./assets/project-2-1.png", "./assets/project-2-2.png", "./assets/project-2-3.png"] // add more as needed
      },
     {
      title: "Flood Detection using ANN Model",
      description: `
      This project involved the development and implementation of a comprehensive system for flood detection. The process began with an exploratory data analysis of a dataset consisting of 10 columns and 1452 rows, which was followed by data pre-processing to ensure the quality and relevance of the data.

      Feature selection was a critical step in the project, as it helped to identify the most significant variables that would influence the predictive models. The data was then balanced to prevent any bias in the model's predictions due to imbalanced data.
      
      The project utilized two primary models for flood detection - Artificial Neural Networks (ANN) and Support Vector Regression (SVR). The dataset was split into training and validation datasets to ensure the robustness of the models. The ANN and SVR models were trained using the training dataset, and their performance was evaluated using various metrics.
      
      A significant part of the project was dedicated to model tuning. The ANN and SVR models were fine-tuned to optimize their performance, and a bonus SVC model was also trained as part of the project. The models' performance was evaluated and adjusted as necessary to ensure the highest level of accuracy and reliability.
      
      The project demonstrated a successful application of machine learning techniques for flood detection, providing valuable insights and a robust model that can be used for future flood prediction and management.
        `,
        images: ["./assets/project-3-1.png", "./assets/project-3-2.png", "./assets/project-3-3.png","./assets/project-3-4.png", "./assets/project-3-5.png"] // add more as needed
      },
      {
        title: "University Entrance Examination",
        description: `
        As part of my Bachelor's degree, developed a Java-based application for streamlining University Entrance Examinations. The software demonstrates my understanding of object-oriented programming principles and showcases robust, scalable, and efficient code. Modules included a secure Login System, a multi-threaded Examination System, and an Analysis System for data-driven decision-making. The project also underscored my UI/UX design abilities, enhancing the user experience. This endeavor reinforced my independent working skills, time management, and ability to meet strict deadlines, providing invaluable experience for real-world software development.
        `,
        images: ["./assets/project-4-1.png", "./assets/project-4-2.png", "./assets/project-4-3.png", "./assets/project-4-4.png", "./assets/project-4-5.png", "./assets/project-4-6.png", "./assets/project-4-7.png"] // add more as needed
    },
    {
      title: "Fraud Detection using Different Models",
      description: `
      This project, completed as part of my degree program, involved a comprehensive application of data science principles to address a complex problem. The project was centered around the development of predictive models using a dataset that required extensive preprocessing and analysis.

One of the key challenges addressed in this project was the handling of imbalanced data. By applying advanced techniques SMOTE, I was able to effectively manage the imbalance in the dataset, ensuring that the developed models were robust and reliable.

The project required the application of various data preprocessing techniques, including data cleaning, exploratory analysis, feature extraction, and variable scaling. These steps were crucial in preparing the dataset for the subsequent modeling process.

In terms of model development, I utilized three different algorithms: Decision Tree Classifier, Random Forest Classifier, and K-Neighbors Classifier. The use of these diverse models allowed for a thorough comparison of their performance and the selection of the most effective model for the given problem.

The project demonstrated my ability to independently handle a complex data science project from start to finish, applying a range of techniques and methodologies to achieve the desired outcome. It stands as a testament to my practical skills in data science and my ability to apply theoretical knowledge to real-world problems.
      `,
      images: ["./assets/project-5-1.png", "./assets/project-5-2.png", "./assets/project-5-3.png", "./assets/project-5-4.png", "./assets/project-5-5.png", "./assets/project-5-6.png", "./assets/project-5-7.png", "./assets/project-5-8.png", "./assets/project-5-9.png"] // add more as needed
    },
    {
      title: "Collaborative Predictive Analysis of Heart Disease Using Machine Learning",
      description: `
      In this group project, we tackled the escalating issue of heart disease, a global health concern exacerbated by poor dietary habits and stress. Recognizing the limitations of conventional medical diagnoses, we leveraged machine learning techniques to predict and prevent heart disease more effectively.

Our team conducted an extensive study using real-world datasets to train our models. We meticulously examined and assessed the results of each variable, focusing on key research variables such as age and sex. We also considered additional variables like hypertension, glucose levels, saturated fat, diabetes, dyslipidemia, and thalassemia.

Our results demonstrated that Logistic Regression, in particular, achieved an accuracy rating of 86%, showcasing the potential of machine learning in the medical field. This project underscores the significant role of machine learning in tackling global health issues like heart disease. By improving prediction accuracy, we can better forecast cardiac illnesses, ultimately contributing to more effective resource allocation and treatment strategies.

Throughout the project, we encountered challenges such as the poor relationship between certain variables in our dataset. We overcame these by including more characteristics closely related to our desired features. This allowed us to better understand which characteristics would impact a patient's heart condition and develop more accurate models.
      `,
      images: ["./assets/project-6-1.png", "./assets/project-6-2.png", "./assets/project-6-3.png", "./assets/project-6-4.png", "./assets/project-6-5.png"] // add more as needed
    },
      // Other projects...
];


var modal = document.getElementById("myModal");
var imageModal = document.getElementById("imageModal");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1]; // <--- added this line

span.onclick = function() {
  modal.style.display = "none";
  reassignCloseModalHandler();
}

span2.onclick = function() { // <--- added this section
  imageModal.style.display = "none";
  reassignCloseModalHandler();
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showModal(button) {
  var projectIndex = button.getAttribute('data-project');
  var project = projects[projectIndex - 1];

  document.getElementById('project-title').innerText = project.title;
  document.getElementById('project-description').innerText = project.description;

  var imageContainer = document.getElementById('project-images');
  imageContainer.innerHTML = ''; // Clear existing images if any

  project.images.forEach(function(imageSrc) {
    var img = document.createElement('img');
    img.src = imageSrc;
    img.onclick = function() {
        openImageModal(imageSrc);
    }
    imageContainer.appendChild(img);
  });

  modal.style.display = "block";
}

function openImageModal(imageSrc) {
  document.getElementById('enlargedImage').src = imageSrc;
  imageModal.style.display = "block";
  
  window.onclick = function(event) {
    if (event.target == imageModal) {
        imageModal.style.display = "none";
        reassignCloseModalHandler();
    }
  }
}

function reassignCloseModalHandler() {
  window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}