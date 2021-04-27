<template>
    <div class="bg-dark ">
        <div class=" text text-center text-align-center p-4 " data-aos="fade-down"
     data-aos-easing="linear"
     >
        <h1 class="text-white">MY PROJECTS</h1>
        <p class="text-white">THIS IS MY STORY</p>
    

        
        </div>
        <br>
        <br>
        <br>

        <!-- gggggggggggggggggggggggggggggggggggggg -->
          <!-- <div class="container ">
            <div class="row timeline_bar ">
                <div class="col-sm-6 a" data-aos="fade-up">
                    <div class="timeline_card">
                        <div class="card_header">
                            <div class="card_number">01</div>
                            <div class="card_title">
                                <h6>4 month ago</h6>
                    
                                <span class="badge badge-danger ">Software</span>
                                <h2>Lorem ipsum </h2>
                                
                                
                            </div>
                        </div>
                        <div class="card_body">
                            <p class="text-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consectetur impedit
                                possimus nobis temporibus laborum porro eos magnam ut optio.</p>
                            <img class="img-fluid" src="../assets/projects/ig.gif">
                            <span>Link:</span><a href=""> https://github.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-5" data-aos="fade-up">
                    <div class="timeline_card">
                        <div class="card_header">
                            <div class="card_number">02</div>
                            <div class="card_title">
                                  <h6>4 month ago</h6>
                    
                                <span class="badge badge-primary ">LIBRARY</span>
                                <h2>Lorem ipsum </h2>
                            </div>
                        </div>
                        <div class="card_body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consectetur impedit
                                possimus nobis temporibus laborum porro eos magnam ut optio.</p>
                           <img class="img-fluid" src="../assets/projects/edlib.jpg">
                            <span>Link:</span><a href=""> https://github.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6" data-aos="fade-up">
                    <div class="timeline_card">
                        <div class="card_header">
                            <div class="card_number">03</div>
                            <div class="card_title">
                                <h6>4 month ago</h6>
                    
                                <span class="badge badge-success ">VIDEO GAME</span>
                                <h2>Lorem ipsum </h2>
                            </div>
                        </div>
                        <div class="card_body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consectetur impedit
                                possimus nobis temporibus laborum porro eos magnam ut optio.</p>
                            <img class="img-fluid" src="../assets/projects/gyroball.jpg">
                             <span>Link:</span><a href=""> https://github.com</a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-5" data-aos="fade-up">
                    <div class="timeline_card">
                        <div class="card_header">
                            <div class="card_number">04</div>
                            <div class="card_title">
                                <h6>4 month ago</h6>
                    
                                <span class="badge badge-warning ">web site</span>
                                <h2>Lorem ipsum </h2>
                            </div>
                        </div>
                        <div class="card_body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consectetur impedit
                                possimus nobis temporibus laborum porro eos magnam ut optio.</p>
                          <img class="img-fluid" src="../assets/projects/boursoweb.jpg">
                           <span>Link:</span><a href=""> https://github.com</a>
                        </div>
                    </div>
                </div>
             
               
            </div>
        </div> -->
        <!-- ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg -->
         <vue-timeline-update
    :date="new Date('2016-11-22')"
    title="v2.1.0 - Hunter X Hunter"
    description="Today I am thrilled to announce the release of Vue.js 2.1.0."
    thumbnail="https://kinsta.com/fr/wp-content/uploads/sites/4/2020/04/outils-revue-code-1024x512.png"
    category="announcement"
    icon="code"
    color="turquoise"
  />

  <!-- Yet another update -->
  <vue-timeline-update
    :date="new Date('2016-09-30')"
    title="v2.0.0 - Ghost in the Shell"
    description="Today I am thrilled to announce the release of Vue.js 2.0.0"
    thumbnail="https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/c/9/f/c9f186c730_82925_googlelogo.jpg"
    category="announcement"
    icon="code"
    color="white"
    is-last
  />
    </div>
</template>



<script>
export default {
   name : "myproject"
}
</script>

<style scoped>



/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

body {
  display: block;
  width: 100%;
  /* background-color: #f7f7f7; */
  /* font-family: "Roboto"; */
}




/* .timeline {
  max-width: 1050px;
  width: 100%;
  margin: 50px auto;
}


.timeline_bar {
  position: relative;
}

.timeline_bar:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: #bdbdbd;
}

.timeline_card {
  width: 92%;
  position: relative;
  background-color: #fff;
}

.timeline_card .card_header {

  display: flex;
  align-items: center;
  background-color: #46b8e9;
  color: #fff;
  padding: 15px;
  position: relative;
}

.timeline_card .card_header:after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #bdbdbd;
  border-radius: 100%;
}

.timeline_card .card_header:before {
  content: "";
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
}

.timeline_card .card_header .card_number {
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  font-weight: 600;
  font-size: 30px;
 
  display: flex;
  
justify-content: center;
 
  align-items: center;
}

.timeline_card .card_header .card_title {
  text-transform: uppercase;
  padding-left: 20px;
}

.timeline_card .card_header .card_title h6 {
  font-size: 16px;
  margin: 0;
  padding: 0;
}

.timeline_card .card_header .card_title h2 {
  font-size: 25px;
  margin: 0;
  padding: 0;
}

.timeline_card .card_body {
  padding: 15px;
}

.timeline_card .card_body p {
  font-size: 14px;
  line-height: 1.5;
}

.col-sm-6:nth-child(even) .timeline_card {
  margin-left: auto;
  margin-top: 100px;
}

.col-sm-6:nth-child(even) .timeline_card .card_header:after {
  right: calc(108% + 7px);
}

.col-sm-6:nth-child(even) .timeline_card .card_header:before {
  left: -15px;
  top: 50%;
  border-right: 15px solid #46b8e9;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}

.col-sm-6:nth-child(odd) .timeline_card {
  margin-right: auto;
}

.col-sm-6:nth-child(odd) .timeline_card .card_header:after {
  left: calc(108% + 10px);
}

.col-sm-6:nth-child(odd) .timeline_card .card_header:before {
  left: 100%;
  top: 50%;
  border-left: 15px solid #46b8e9;
          transform: translateY(-50%);
}

.col-sm-6:nth-child(1) .timeline_card .card_header {
  background-color: #46b8e9;
}

.col-sm-6:nth-child(1) .timeline_card .card_header:before {
  border-right-color: #46b8e9;
}

.col-sm-6:nth-child(2) .timeline_card .card_header {
  background-color: #3ee9d1;
}

.col-sm-6:nth-child(2) .timeline_card .card_header:before {
  border-right-color: #3ee9d1;
}

.col-sm-6:nth-child(3) .timeline_card .card_header {
  background-color: #ce43eb;
}

.col-sm-6:nth-child(3) .timeline_card .card_header:before {
  border-left-color: #ce43eb;
}

.col-sm-6:nth-child(4) .timeline_card .card_header {
  background-color: #4d92eb;
}

.col-sm-6:nth-child(4) .timeline_card .card_header:before {
  border-right-color: #4d92eb;
}



@media (max-width: 700px) {
  .timeline_card {
    width: 100%;
    margin-bottom: 30px;
  }
  .timeline_bar:after {
    display: none;
  }
  .card_header:after {
    display: none;
  }
  .card_header:before {
    display: none;
  }
  .col-sm-6:nth-child(even) .timeline_card {
    margin-top: 0;
  }
}
# sourceMappingURL=style.css.map */


</style>