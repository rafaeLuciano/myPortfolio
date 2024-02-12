<script>

export default {

}

</script>


<template>
    <div class="main-container"> 
        <div class="top-container">
            <nav class="nav-links">
                <a href="#home">Home</a>
                <a href="#projects">Projetos</a>
            </nav>
    </div>
    <div id="home" class="home-section">
        <div class="text-container custom-text">
            <h1>Rafael Luciano</h1>
            <p>Desenvolvedor Front-End aprofundando seus conhecimentos em Vue.js e Sass</p>
    </div>
    <div class="profile-container">
        <img src="C:\Users\rafas\PROJETOS\myVuePortfolio\src\img\Profile.jpeg" alt="Rafael Luciano" class="profile-pic">
        <div class="social-icons">
        <a href="https://github.com/rafaeLuciano" target="_blank" class="social-icon">
        <img src="C:\Users\rafas\PROJETOS\myVuePortfolio\src\img\GitHub.jpg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/rafael-da-silva-luciano-6a0923226/" target="_blank" class="social-icon">
                <img src="C:\Users\rafas\PROJETOS\myVuePortfolio\src\img\Linkedin.jpg" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/rafaluciano_/" target="_blank" class="social-icon">
                <img src="C:\Users\rafas\PROJETOS\myVuePortfolio\src\img\Instagram.jpg" alt="Instagram" />
        </a>
        <a href="https://wa.me/5547988883216" target="_blank" class="social-icon">
                <img src="C:\Users\rafas\PROJETOS\myVuePortfolio\src\img\WhatsApp.jpg" alt="WhatsApp" />
    </a>
    </div>
    </div>
    </div>
    <div class="projects-section">
        <div class="timeline">
            <div class="line"></div>
                <div class="project left">
                    <div class="dot"></div>
                    <img src="C:\Users\rafas\PROJETOS\myVuePortfolio\src\img\Loading.gif" alt="AO Serviço">
                    <span>AO Serviço</span>
                </div>           
        <div class="project right">
            <div class="dot"></div>
            <img src="C:\Users\rafas\PROJETOS\myVuePortfolio\src\img\Loading.gif" alt="DSouto">
            <span>DSouto</span>
        </div>
        <div class="project left">
            <div class="dot"></div>
            <img src="C:\Users\rafas\PROJETOS\myVuePortfolio\src\img\Loading.gif" alt="Utsumazy">
            <span>Utsumazy</span>
        </div>
    </div>
</div>
</div>
</template>


<style scoped>

.top-container{
    background: linear-gradient(to bottom, #686868, #acacac);
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex; 
    justify-content: center;
    align-items: center; 

}

.nav-links a {
    color: rgb(0, 0, 0);
    font-family: Open Sans, Roboto, 'Helvetica Neue', sans-serif;
    font-weight: 700;
    margin: 0 48px; 
    text-decoration: none; 
}

.home-section {
    padding-top: 100px; 
    font-family: Open Sans, Roboto, 'Helvetica Neue', sans-serif;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.text-container h1 {
    color: rgb(0, 0, 0);
    font-family: Open Sans, Roboto, 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 30px;
    margin: 0 48px; 
    text-decoration: none; 
}

.text-container p {
    color: rgb(0, 0, 0);
    font-family: Open Sans, Roboto, 'Helvetica Neue', sans-serif;
    font-weight: 500;
    font-size: 15px;
    margin: 0 48px; 
    text-decoration: none; 
}

.profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.projects-section {
    padding-top: 100px; 
    font-family: Open Sans, Roboto, 'Helvetica Neue', sans-serif;
    font-weight: 500;
    color: rgb(0, 0, 0)

}

.profile-pic {
    border-radius: 50%; 
    width: 200px; 
    height: 200px;
}

.social-icons img {
    width: 30px; 
    height: 30px; 
    margin-right: 10px; 
}

.projects-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px; 
}

.timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%; 
}

.line {
    position: absolute;
    width: 2px;
    background-color: black;
    height: 100%;
    z-index: 0; 
}

.dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: black;
    position: relative; 
    z-index: 1; 
}
.project {
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    width: 100%; 
    margin: 40px 0; 
}

.project img {
    width: 150px; 
    height: auto; 
    margin: 0 20px; 
}

.project span {
    display: block;
    text-align: center; 
}

.project.right .dot {
    margin-right: calc(50% - 10px); 
}

.project.left .dot {
    margin-left: calc(50% - 10px);
}

.project.left {
    flex-direction: row; 
}

.project.right {
    flex-direction: row-reverse;
}
</style>


