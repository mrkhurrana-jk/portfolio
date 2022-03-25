import React from 'react'
import './Career.css'
import {CircleProgress} from 'react-gradient-progress'

const Career = () => {
    return (
        <div className='portfolio_career'>

            <div className='portfolio_career-heading'>
                <h1> Career </h1>
            </div>

            <div className='portfolio_career-content'>
                <div className='career-divison'>

                    <span className='subheadings'>
                        Education:
                    </span>

                    <div className='subheadings-content-1'>
                        School of Technology Management and Engineering, Navi Mumbai, SVKM’s NMIMS University &nbsp;&nbsp;
                        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>2019-2024</em> <br />
                        <span className='subcontent'>
                            Btech (Computer Science), MBA 👨🏻‍🎓
                        </span>
                    </div>

                </div>


                <div className='career_divison'>

                    <span className='subheadings'>
                        Achievements:
                    </span>
                    <span className="subheadings-content-2">
                        HackerRank <br />
                        <div className="subcontent-2">
                            Verified Skills ☑️ : Python (Basic) <br />
                            Gold badge 🥇: &nbsp; Python &emsp;&emsp;&emsp;&emsp; <br />
                            Silver badge 🥈: &nbsp; 10 days of JavaScript, &nbsp;Problem Solving <br />
                            Bronze badge 🥉: &nbsp; C, SQL, 30 days of code
                        </div>
                    </span>
                    <div className="subheadings-content-3">
                        Cisco Networking Academy <br />
                        <div className="subcontent-3">
                            2 Digital badges issued by Cisco :&nbsp;&nbsp;&nbsp; <strong>Introduction to
                                Cybersecurity,
                                &nbsp;Cybersecurity Essentials</strong>
                        </div>
                    </div>
                    <div className="subheadings-content-3">
                        Udemy<br />
                        <div className="subcontent-3">
                            Certifications:&nbsp;&nbsp;&nbsp;<strong>WordPress Website Development, </strong> &nbsp; <strong>
                                Pentesting and Securing Web Applications(Ethical Hacking)</strong>
                        </div>
                    </div>



                </div>

                <div className='career_divison skills'>

                    <span className='subheadings'>
                        Skills:
                    </span>

                    <span className="subheadings-content-4">
                        Computer Languages 💻
                        <br />
                        <div className="subcontent-2">
                            C, Python(3.x), HTML, CSS, JavaScript(ES6), PHP, R, Java, SQL
                        </div>
                    </span>


                    <br />
                    <div className="subheadings-content-3">
                        Tools & Technologies 🔗
                        <br />
                        <div className="subcontent-3">
                            ReactJS, Bootstrap, WordPress, Visual Studio Code, Git and GitHub, LaTeX
                        </div>
                    </div>

                    <br />

                    <div className="subheadings-content-3">
                        Core Skills 👨🏻‍💼
                        <br />
                        <div className="subcontent-3">
                            Project Management, Leadership, Critical observation, Logical thinking, Reliability, Adaptability
                        </div>
                    </div>


                </div>


                <div className='career_divison'>
                    <span className='subheadings'>
                        Proficiency:
                    </span>
                
                <div className='progressbars'>

                    <div className='progessbar'>
                        <CircleProgress percentage={60} strokeWidth={12} primaryColor={['#00ffFF', '#92d7f1']} />
                        <p>FrontEnd</p>
                    </div>
                    <div className='progessbar'>
                        <CircleProgress percentage={55} strokeWidth={12} primaryColor={['#82e49b', '#92d7f1']}/>
                        <p>Python</p>
                    </div>
                    <div className='progessbar'>
                        <CircleProgress percentage={40} strokeWidth={12} primaryColor={['#f18367', '#92d7f1']}/>
                        <p>JavaScript</p>
                    </div>
                    <div className='progessbar'>
                        <CircleProgress percentage={50} strokeWidth={12} primaryColor={['#82d9e4', '#92d7f1']}/>
                        <p>WordPress</p>
                    </div>

                </div>


                </div>
            </div >

        </div >
    )
}

export default Career
